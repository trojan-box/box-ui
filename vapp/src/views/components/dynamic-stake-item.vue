<template>
  <div class="item">
    <!-- <div class="title">
      {{ lg("web_logan") }}
    </div> -->

    <div class="item-card ui-card py-4 px-4 mb-5">
      <span class="topright-label-text" v-if="item.ui_topright_label_text">
        {{ item.ui_topright_label_text }}
      </span>
      <span class="token-name">{{ item.token }}</span>
      <span class="mt-3">
        {{ lg("total_Amount") }}: {{ total_amount | tofixed0 | qfw }}
        {{ total_symbol }}
      </span>

      <div class="time mt-2">
        <a-icon type="clock-circle" />&nbsp; {{ lg("startTime") }} &nbsp; {{updateTime}}
      </div>
      <div class="mt-3">
        <span class="apy mt-2">{{ lg("total_APY") }}</span>
        <span class="label">{{ apy | bfh }}</span>
      </div>

      <!-- <span class="ui-token-pair-logo mx-auto my-1">
        <img :src="item.token_icon" />
        <img :src="item.token_earn_icon" />
      </span>
      <span class="my-1"> {{ lg("deposit") }} {{ item.token_symbol }} </span>
      <span class="my-1"> {{ lg("earn") }} {{ item.token_earn }} </span> -->
      <div
        class="
          optionBlocks
          ui-token-pair-logo
          mx-auto
          mt-5
          justify-content-center
          align-items-center
        "
      >
        <div
          class="optionBlock d-flex justify-content-center align-items-center"
        >
          <img class="logo" :src="item.token_icon" />
          <div class="title">{{ lg("deposit") }} {{ item.token_symbol }}</div>
        </div>

        <div
          class="optionBlock d-flex justify-content-center align-items-center"
        >
          <img class="logo" :src="item.token_earn_icon" />
          <div class="title">{{ lg("earn") }} {{ item.token_earn }}</div>
        </div>
      </div>

      <div class="mt-3">
        <span class="text-muted"> {{ lg("contract_address") }}: </span>
        <a
          :href="`${$store.state.sitecfg.url_network_address_view}${item.reward_address}`"
          target="_blank"
        >
          {{ item.reward_address | shortAddress }}
        </a>
      </div>
      <div class="mt-4">
        <router-link
          class="btn btn-outline-primary btn-round px-5"
          :to="`/stake/${item.id}`"
        >
          {{ lg("open") }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// 这是一个活期质押程序
const rewardsPoolAbi = require("@/data/rewards_pool_abi.json");

export default {
  name: "dynamic-stake-item",
  props: ["item"],
  data() {
    return {
      // a: the 1st token
      a_balance: "",
      a_name: "",
      // b: the 2ed token
      b_balance: "",
      b_name: "",

      // apy: 例： 0.12
      apy: "-",
      total_symbol: "",
      total_amount: 0,
      total_amount_true: 0,
      reward_rate: 0,

      jfi_price_trx: "",
      jfi_price_usd: "",
      updateTime: "",
    };
  },
  computed: {
    account_default_address() {
      return this.$store.state.account.default_address;
    },
    price_tron_usd() {
      return this.$store.state.token_price.tron_on_usd;
    },
    config() {
      let v = this;
      let json = Object.assign({}, v.cfg || {});
      return json;
    },
  },
  watch: {
    //检测到获取了地址
    account_default_address() {
      this.run();
    },
    price_tron_usd(val) {
      if (val) {
        this.run();
      }
    },
  },
  methods: {
    // 锁仓：对父组件[加和]赋值
    calcLockupSum(keyid, num) {
      let v = this;
      v.$parent.lockup_num_list[keyid] = num;
      v.$parent.calcLockupNumSum();
    },
    async getRewardRate() {
      let v = this;
      let reward_address = v.item.reward_address;
      if (v.item.id === "Ares") {
        return new Promise(function (resolve, reject) {
          let rewardContract = new v.myWeb3.eth.Contract(
            rewardsPoolAbi,
            reward_address
          );
          rewardContract.methods
            .rewardRate()
            .call()
            .then(function (rate) {
              v.reward_rate = rate / Math.pow(10, 18);
              console.log("rewardRate=", v.reward_rate);
            });
          resolve();
        });
      } else if (v.item.id === "ETH-ARES LP") {
        return new Promise(function (resolve, reject) {
          let rewardContract = new v.myWeb3.eth.Contract(
            rewardsPoolAbi,
            reward_address
          );
          rewardContract.methods
            .rewardRate()
            .call()
            .then(function (rate) {
              v.reward_rate = rate / Math.pow(10, 18);
              console.log("rewardRate=", v.reward_rate);
            });
          resolve();
        });
      }
    },
    async run() {
      let v = this;
      let reward_address = v.item.reward_address;
      if (v.item.id === "Ares") {
        //获取池子锁仓总量
        let rewardContract = new v.myWeb3.eth.Contract(
          rewardsPoolAbi,
          reward_address
        );

        const time = await rewardContract.methods.periodFinish().call();
        this.updateTime = new Date(( time - 3600*24*30) * 1000).toLocaleDateString();

        rewardContract.methods
          .rewardRate()
          .call()
          .then(function (rate) {
            v.reward_rate = rate / Math.pow(10, 18);
            console.log("rewardRate=", v.reward_rate);
            rewardContract.methods
              .totalSupply()
              .call()
              .then(function (balance) {
                let totalSupply = balance / Math.pow(10, 18);
                v.total_amount = totalSupply;
                v.total_symbol = "Ares";
                v.a_balance = totalSupply;
                //池子总价值
                v.b_balance = totalSupply * v.price_tron_usd;
                // 锁仓：对父组件[加和]赋值
                v.calcLockupSum(v.item.id, v.b_balance);
                //let apy = (100 / v.total_amount).toFixed(2)
                let apy = (
                  (60 * 60 * 24 * 365 * v.reward_rate) /
                  v.total_amount
                ).toFixed(2);
                v.apy = apy;
                console.log("apy=", v.apy);
              });
          });
      }

      v.a_name = v.item.id;
    },
  },
  created() {
    //this.getRewardRate()
    this.run();
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin-bottom: 1rem;
  line-height: 32px;
  font-size: 22px;
  color: #12161c;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}

.item-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border: 1px solid #c4c8cb;
  box-shadow: 5px 15px 15px rgba(29, 31, 117, 0.16);
  border-radius: 14px;
  font-family: "Montserrat", sans-serif;
}

.token-name {
  font-size: 18px;
  font-weight: 600;
  color: #132024;
  line-height: 25px;
}

.lockDay {
  font-weight: bold;
  font-size: 25px;
}

.apy {
  color: #12161c;
}

.label {
  background: #e7ebed;
  border-radius: 34px;
  padding: 0.25em 1em;
  color: #12161c;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  margin-left: 0.5em;
}

.optionBlocks {
  width: 100%;

  .optionBlock {
    width: 9em;
    background: rgba($color: #e5e9eb, $alpha: 0.89);
    border-radius: 9px;
    padding: 1em;
    margin: 0 0.5em;
    flex-direction: column;
    height: 5em;

    .logo {
      width: 57px;
      height: 57px;
      position: relative;
      top: -1em;
    }

    .title {
      position: relative;
      top: -1em;
      font-size: 1em;
      font-weight: normal;
    }
  }
}

.time {
  text-align: center;
  line-height: 3;
  color: #1295F0;
  font-size: 13px;
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
}

@media (max-width: 576px) {
  .item {
    font-size: 12px;
    width: 100%;
  }

  .title {
    line-height: 2;
    font-size: 1em;
  }

  .item-card {
    flex-direction: column;
    align-items: center;
    width: 90%;
    font-size: 1em;
  }
}
</style>
