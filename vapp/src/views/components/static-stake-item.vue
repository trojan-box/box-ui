<template>
  <div class="item" ref="getwidth">
    <!-- <div class="title">
      {{ lg("web_logan") }}
    </div> -->

    <div class="item-card ui-card py-4 px-4 mb-5">
      <span class="topright-label-text" v-if="item.ui_topright_label_text">
        {{ item.ui_topright_label_text }}
      </span>
      <span class="token-name">{{ item.token }}</span>

      <div class="lockDay mt-3">{{ lockDays }}</div>

      <span class="mt-3">
        {{ lg("total_Amount") }}: {{ total_amount | tofixed0 | qfw }}
        {{ total_symbol }}
      </span>
      <div class="time mt-2">
        <a-icon type="clock-circle" />&nbsp; {{ lg("startTime") }} &nbsp; {{updateTime}}
      </div>
      <div class="mt-3">
        <span class="apy mt-3">{{ lg("total_APY") }}</span>
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
          :to="`/static-stake/${item.id}`"
        >
          {{ lg("open") }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
const aresStakeABI = require("@/data/ares-dq-abi.json");
import { BigNumber } from "ethers";

export default {
  name: "static-stake-item",
  props: ["item"],
  components: {},
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
      lockDays: "-",
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
      this.update();
    },
    price_tron_usd(val) {
      if (val) {
        this.update();
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
    async update() {
      let v = this;
      let rewardContract = new this.myWeb3.eth.Contract(
        aresStakeABI,
        v.item.reward_address
      );

      const time = await rewardContract.methods.startTime().call();
      this.updateTime = new Date(time * 1000).toLocaleDateString();
      try {
        // const a = await rewardContract.methods.getAPY().call()
        // this.apy = `${a}%`
      } catch (e) {
        console.log("get apy failed", e);
      }

      try {
        // const a = await rewardContract.methods.getLockDays().call()
        // this.lockDays = `${BigNumber.from(a).div(24 * 3600)}D`
      } catch (e) {
        console.log("getLockDays failed", e);
      }

      try {
        const a = await rewardContract.methods.totalSupply().call();
        this.total_amount = BigNumber.from(a).div(
          BigNumber.from((1e18).toString())
        );
      } catch (e) {
        console.log("get totalSupply failed", e);
      }
    },
    clientWidth() {
      return new Promise((resolve) => {
        this.$nextTick(() => {
          let target = this.$refs.getwidth.clientWidth;
          resolve(target);
        });
      });
    },
  },
  created() {
    this.update();
  },
  mounted() {
    this.lockDays = this.item.id.split("Ares-")[1];
    switch (this.lockDays) {
      case "60D":
        this.apy = `35%`;
        break;
      case "120D":
        this.apy = `40%`;
        break;
      case "180D":
        this.apy = `45%`;
        break;
    }
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

.time {
  text-align: center;
  line-height: 3;
  color: #1295F0;
  font-size: 13px;
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
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
