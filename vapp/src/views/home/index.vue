<template>
  <div>
    <div class="divider">&nbsp;</div>

    <div class="overview">
      <div class="overviewLayout">
        <div class="tabBar">
          <span>{{ lg("overview") }}</span>
        </div>

        <div class="ui-card">
          <div class="cardLayout">
            <div>
              <div class="key">{{ lg("total_deposit") }} </div>
              <div class="value">
                {{ this.totalDeposit | tofixed0 | qfw }}&nbsp;Ares
              </div>
            </div>

            <div>
              <div class="key">{{ lg("current_d") }}</div>
              <div class="value">
                {{ this.currentDeposit | tofixed0 | qfw }}&nbsp;Ares
              </div>
            </div>

            <div>
              <div class="key">{{ lg("regular_deposit") }}</div>
              <div class="value">
                {{ this.regularDeposit | tofixed0 | qfw }}&nbsp;Ares
              </div>
            </div>

            <div class="price">
              <img src="/static/img/ares_coin.png" width="64px" />
              &nbsp;&nbsp;
              <div>
                <div class="key">{{ lg("ares_price") }}</div>
                <div class="value">
                  {{ this.aresPrice.toFixed(4) }}&nbsp;USDT
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2>{{ lg("web_logan") }}</h2>
    <center class="menu">
      <div
        @click="statusOnHq()"
        class="optionDiv expect font"
        :class="{ active: $store.state.index_page_stauts.page_stauts === 'hq' }"
      >
        {{ lg("current_deposit") }}
      </div>

      <div
        @click="statusOnDq()"
        class="optionDiv regular font"
        :class="{ active: $store.state.index_page_stauts.page_stauts === 'dq' }"
      >
        {{ lg("time_deposit") }}
      </div>
    </center>

    <div v-show="$store.state.index_page_stauts.page_stauts === 'hq'">
      <div class="flex-center">
        <dynamic-stake-item :item="main_list[0]" />
      </div>
    </div>

    <div v-show="$store.state.index_page_stauts.page_stauts === 'dq'">
      <div
        class="static-items pt-3 justify-content-center align-items-center"
        :class="{ 'static-items-odd': staticItems.length % 2 === 1 }"
        :style="{ 'margin-top': 'calc(30px - 1em)' }"
      >
        <static-stake-item
          class="mx-3"
          v-for="item in staticItems"
          :key="item.stakeInterval"
          :item="item"
          ref="staticItem"
        />
      </div>
    </div>
    <div class="to-medium">
      How you can Staking
      <a href="https://aresprotocollab.medium.com/trojan-staking-will-launch-at-6-am-utc-13th-may-8c137fd28aa2"
         target="_blank">Medium</a>
    </div>
    <frameFooter />
  </div>
</template>

<script>
import frameFooter from "@/views/_comp_frame/footer.vue";
// import blockReports from './block_reports.vue'
import dynamicStakeItem from "@/views/components/dynamic-stake-item.vue";
import staticStakeItem from "@/views/components/static-stake-item.vue";
import data_main_list from "@/data/main_list.js";
import staticItems from "@/data/static-items.js";
import bus from "../../bus";
import Decimal from "decimal.js";

const rewardsCurrentAbi = require("@/data/rewards_pool_abi.json");
const rewardsPoolAbi = require("@/data/ares-dq-abi.json");

const API = "https://api.aresprotocol.io/api/getAresAll";

export default {
  name: "homePage",
  components: {
    dynamicStakeItem,
    staticStakeItem,
    frameFooter,
    // blockReports,
  },
  props: [],
  data() {
    return {
      main_list: data_main_list,
      staticItems,
      lockup_num_list: {},
      lockup_num_sum: "-",
      price_list: {
        jfi_on_tron: "-",
        jfi_on_usd: "-",
      },
      status: "hq", // 弃用
      styleObject: {},
      totalDeposit: new Decimal(0),
      currentDeposit: new Decimal(0),
      regularDeposit: new Decimal(0),
      aresPrice: 0,
    };
  },
  computed: {
    account_default_address() {
      return this.$store.state.account.default_address;
    },
  },
  watch: {
    status() {
      // eslint-disable-next-line no-debugger
      let bisection = "50";
      if (this.status === "dq" && this.staticItems.length % 2 === 1) {
        bisection = this.$refs.staticItem[this.staticItems.length - 1];
        bisection.clientWidth().then((width) => {
          this.styleObject["tabWidth"] = `-${width / 2}px`;
          this.$forceUpdate();
        });
      }
    },
    //检测到获取了地址
    account_default_address() {
      if (this.account_default_address !== "") {
        this.run();
      }
    },
  },
  methods: {
    getContract(contractAddress,fix) {
      if (fix) {
        return new this.myWeb3.eth.Contract(rewardsPoolAbi, contractAddress);
      } else {
        return new this.myWeb3.eth.Contract(rewardsCurrentAbi, contractAddress);
      }
    },
    calcLockupNumSum() {
      let v = this;
      let sum = 0;
      for (let key in v.lockup_num_list) {
        let val = v.lockup_num_list[key];
        sum += val;
      }
      v.lockup_num_sum = sum || "-";
    },
    statusOnHq() {
      this.status = "hq";
      this.$cookies.set("cookie_page_status", "hq");
      bus.appvue.$store.commit("setPageStatus", "hq");
    },
    statusOnDq() {
      this.status = "dq";
      this.$cookies.set("cookie_page_status", "dq");
      bus.appvue.$store.commit("setPageStatus", "dq");
    },
    async run() {
      if (this.$store.state.account.default_address === "")
      {
        return;
      }

      const apiResult = await (await fetch(API)).json();
      if (apiResult && apiResult.data.price) {
        this.aresPrice = apiResult.data.price;
      }

      const decimal = Math.pow(10, 18);

      let theContract = this.getContract(this.main_list[0].reward_address,false);
      this.currentDeposit = new Decimal(
          await theContract.methods.totalSupply().call()
      ).div(decimal);
      this.totalDeposit = this.totalDeposit.plus(this.currentDeposit);

      theContract = this.getContract(this.staticItems[0].reward_address,true);
      let result = new Decimal(
          await theContract.methods.totalSupply().call()
      ).div(decimal);
      this.totalDeposit = this.totalDeposit.plus(result);
      this.regularDeposit = this.regularDeposit.plus(result);

      theContract = this.getContract(this.staticItems[1].reward_address,true);
      result = new Decimal(
          await theContract.methods.totalSupply().call()
      ).div(decimal);
      this.totalDeposit = this.totalDeposit.plus(result);
      this.regularDeposit = this.regularDeposit.plus(result);

      theContract = this.getContract(this.staticItems[2].reward_address,true);
      result = new Decimal(
          await theContract.methods.totalSupply().call()
      ).div(decimal);
      this.totalDeposit = this.totalDeposit.plus(result);
      this.regularDeposit = this.regularDeposit.plus(result);

    },
  },
  created() {
    // console.log(this.staticItems.length % 2 === 1, this.styleObject);
    this.run();
    this.status =
      this.status =
      this.$store.state.index_page_stauts.page_stauts =
        "dq" == this.$cookies.get("cookie_page_status") ? "dq" : "hq";
  },
  //beforeDestroy() {},
  //update() {},
  //activited() {},
  //beforeRouteUpdate() {},
  //filters: {},
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 22px;
  text-align: center;
  margin-bottom: 1rem;
  line-height: 3;
  color: #12161c;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}

.time {
  text-align: center;
  line-height: 3;
  color: #1295F0;
  font-family: "Montserrat", sans-serif;
}

.to-medium {
  text-align: center;
  line-height: 3;
  color: #1D1F75;
  a {
    color: #1295F0 !important;
  }
  a:hover {
    cursor: pointer;
  }
}

.overview {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2em;

  .overviewLayout {
    width: 1180px;

    .tabBar {
      width: 100%;
      padding-left: 2em;
      z-index: 1;

      span {
        border-bottom: 6px solid #1295f0;
        padding-bottom: 1em;
      }
    }
  }
}

.cardLayout {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .price {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .key {
    font-size: 1em;
    font-weight: 400;
  }

  .value {
    font-size: 1.3em;
    font-weight: bold;
  }
}

.num-box {
  width: 100%;
}

.menu {
  margin-top: 37px;
  text-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .optionDiv {
    font-size: 18px;
    color: #1295f0;
    width: 241px;
    height: 48px;
    border: 1px solid #1295f0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &.active {
      color: white;
      border-color: #1295f0;
      background: #1295f0;
    }
  }
  .expect {
    border-radius: 29px 0px 0px 29px;
  }
  .regular {
    border-radius: 0px 29px 29px 0px;
  }
}
.font {
  width: 56px;
  height: 33px;
  font-size: 24px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #33bce9;
  line-height: 33px;
}
.active {
  width: 75px;
  height: 40px;
  font-size: 28px;
  color: #ffffff;
  line-height: 40px;
  border-bottom: 4px solid #33bce9;
}
/*@import "@/assets/css/_var.scss";*/
.divider {
  margin-top: 3em;
  width: 100%;
  height: 0px;
  background-color: #576682;
}
.flex-center {
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: 30px;
}

.static-items {
  display: flex;
  width: 100%;

  & div:nth-child(2n + 1) {
    justify-self: end;
  }
  & div:nth-child(2n) {
    justify-self: start;
  }
}
.static-items-odd {
  & div:last-of-type {
    margin-right: var(--tabWidth, "0") !important;
  }
}

@media (max-width: 576px) {
  .static-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .static-items-odd {
    & div:last-of-type {
      margin-right: 1rem !important;
    }
  }

  .overview {
    .overviewLayout {
      width: 90%;

      .tabBar {
        width: 100%;
      }
    }
  }

  .cardLayout {
    flex-direction: column;

    .price {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      & > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }

      img {
        width: 16px;
      }
    }

    & > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin: 0.25em 0;
      padding: 0;
    }

    .key {
      font-size: 0.8em;
      font-weight: 400;
    }

    .value {
      font-size: 1em;
      font-weight: bold;
    }
  }

  .menu {
    margin-top: 1em;
    font-size: 16px;
    width: 80%;

    .optionDiv {
      &.active {
        color: #12161c;
        border-color: #1295f0;
        background: #1295f0;
      }
    }
    .expect {
      border-radius: 29px 0px 0px 29px;
      font-size: 0.6em;
      width: 50%;
      height: 3em;
    }
    .regular {
      border-radius: 0px 29px 29px 0px;
      font-size: 0.6em;
      width: 50%;
      height: 3em;
    }
  }

  .num-box {
    .num-item {
      width: 100%;
      & ~ .num-item {
        border-top: 1px dashed #eee;
        padding-top: 15px;
      }
    }
  }
}
</style>
