<template>
  <div class="ui-card">
    <div class="num-box d-flex justify-content-between flex-wrap">
      <div class="num-item my-2">
        <h4 class="text-muted">{{ lg("your_balance") }}</h4>
        <div class="d-flex align-items-center">
          <h4 class="mr-2 mb-1">
            {{ num_balance | tofixed6 | parsefloat }}
          </h4>
          <span>
            {{ token_data.token_symbol }}
          </span>
        </div>
      </div>
      <div class="num-item my-2">
        <h4 class="text-muted">{{ lg("currently_staked") }}</h4>
        <div class="d-flex align-items-center">
          <h4 class="mr-2 mb-1">
            {{ num_staked | tofixed6 | parsefloat }}
          </h4>
          <span>
            {{ token_data.token_symbol }}
          </span>
        </div>
      </div>
      <div class="num-item my-2">
        <h4 class="text-muted">{{ lg("rewards_available") }}</h4>
        <div class="d-flex align-items-center">
          <h4 class="mr-2 mb-1">
            {{ num_reward | tofixed6 | parsefloat }}
          </h4>
          <span>
            {{ token_data.token_earn }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "@/bus.js";
const tokenAbi = require("@/data/token_abi.json");
const rewardsPoolAbi = require("@/data/ares-dq-abi.json");
import Decimal from "decimal.js";
export default {
  name: "stake-info",
  components: {},
  props: ["token_data", "token_balance_info"],
  data() {
    return {
      num_balance: "-",
      num_staked: "-",
      num_reward: "-",
    };
  },
  computed: {},
  watch: {
    num_balance(val) {
      this.token_balance_info.num_balance = val;
    },
    num_staked(val) {
      this.token_balance_info.num_staked = val;
    },
    num_reward(val) {
      this.token_balance_info.num_reward = val;
    },
  },
  methods: {
    async getBalance() {
      let v = this;
      // let addresses = await window.ethereum.enable()
      // let addresses = await v.myWeb3.eth.accounts;
      // var local_address = addresses[0]
      var local_address = await v.action.getAddress();
      var trc20_address = v.token_data.token_address;
      var decimals = v.token_data.token_decimals;

      let contract = new v.myWeb3.eth.Contract(tokenAbi, trc20_address);
      contract.methods.balanceOf(local_address).call(function (error, result) {
        let balance = new Decimal(result).div(Math.pow(10, decimals)).toFixed();
        console.log("balance result", balance);
        v.num_balance = balance;
      });

      // var t = v.tronWebRead
      // t.transactionBuilder.triggerConstantContract(t.address.toHex(trc20_address), "balanceOf(address)", {},parameter,t.address.toHex(local_address)).then(function(a){
      //     var result = a.constant_result
      //     var balance =  t.toDecimal('0x'+ result)
      //     balance = balance / Math.pow(10,decimals)
      //     v.num_balance = balance
      // });
    },

    async getStaked() {
      let v = this;
      // let addresses = await window.ethereum.enable()
      // let addresses = await v.myWeb3.eth.accounts;
      // var local_address = addresses[0]
      var local_address = await v.action.getAddress();
      var reward_address = v.token_data.reward_address;
      var decimals = v.token_data.reward_decimals;

      let contract = new v.myWeb3.eth.Contract(rewardsPoolAbi, reward_address);
      contract.methods.balanceOf(local_address).call(function (error, result) {
        let balance = new Decimal(result).div(Math.pow(10, decimals)).toFixed();
        v.num_staked = balance;
        v.$emit("updateStakeNum", balance);
      });

      // v.tronWebRead.contract().at(reward_address).then(function(rewardContract){
      //
      //     rewardContract.balanceOf(local_address).call().then(function(balance){
      //
      //         balance = balance / Math.pow(10,decimals)
      //         v.num_staked = balance
      //     })
      // })
    },

    async getReward() {
      let v = this;
      // let addresses = await window.ethereum.enable()
      // let addresses = await v.myWeb3.eth.accounts;
      // let local_address = addresses[0]
      var local_address = await v.action.getAddress();
      let reward_address = v.token_data.reward_address;
      let decimals = v.token_data.reward_decimals;
      let contract = new v.myWeb3.eth.Contract(rewardsPoolAbi, reward_address);
      contract.methods
        .getUserUnWithdraw(local_address)
        .call(function (error, result) {
          let balance = new Decimal(result)
            .div(Math.pow(10, decimals))
            .toFixed();
          v.num_reward = balance;
        });

      // v.tronWebRead.contract().at(reward_address).then(function(rewardContract){
      //
      //     rewardContract.earned(local_address).call().then(function(balance){
      //
      //         balance = balance / Math.pow(10,decimals)
      //         v.num_reward = balance
      //     })
      // })
    },

    // 统一请求
    getAllData() {
      console.log("stake_info: getAllData()");
      this.getBalance();
      this.getStaked();
      this.getReward();
    },
  },
  created() {
    // 延迟0.5秒请求数据
    setTimeout(() => {
      this.getAllData();
    }, 500);

    // 挂载自身
    bus.stakeinfovue = this;
  },
  //mounted() {},
  beforeDestroy() {
    // 取消挂载
    bus.stakeinfovue = null;
  },
  //update() {},
  //activited() {},
  //beforeRouteUpdate() {},
  //filters: {},
};
</script>

<style lang="scss" scoped>
.num-box {
  width: 100%;
}

@media (max-width: 789px) {
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
