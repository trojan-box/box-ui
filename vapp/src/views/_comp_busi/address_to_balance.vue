<template>
  <div>
    <div>
      {{ lg("total_Amount") }}： {{ total_amount | tofixed0 | qfw }}
      {{ total_symbol }}
    </div>

    <div>{{ lg("total_APY") }}： {{ apy | bfh }}</div>
  </div>
</template>

<script>
const rewardsPoolAbi = require("@/data/rewards_pool_abi.json");
// import Decimal from 'decimal.js'
export default {
  name: "addressToBalance",
  components: {},
  props: [
    // 入参为item（data/main_list 中的一个项目）
    "item",
  ],
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
  //mounted() {},
  //beforeDestroy() {},
  //update() {},
  //activited() {},
  //beforeRouteUpdate() {},
  //filters: {},
};
</script>

<style lang="scss" scoped>
</style>
