<template>
  <div class="stake-page">
    <div class="boxed px-4 mt-5">
      <router-link class="navigator" to="/"
        >❮&nbsp;{{ lg("back") }}</router-link
      >

      <h2>My Profile</h2>

      <div class="tabBar">
        <span>My Wallet</span>
      </div>

      <!-- 信息栏 -->
      <stakeInfo
        ref="stake_info"
        v-if="token_data.id == 'Ares'"
        :token_data="token_data"
        :token_balance_info="token_balance_info"
      />
      <!-- 4个按钮 -->
      <div
        v-if="!status_show_stake_pad && !status_show_unstake_pad"
        class="mt-4 ui-card px-4 py-3"
      >
        <div class="btn-set">
          <span
            @click="toggleStakePad()"
            class="btn btn-round btn-lg btn-primary"
          >
            {{ lg("stake_tokens") }}
          </span>

          <span
            @click="toggleUnstakePad()"
            class="btn btn-round btn-lg btn-outline-primary"
          >
            {{ lg("unstake_tokens") }}
          </span>

          <span
            @click="actionClaim()"
            class="btn btn-round btn-lg btn-outline-primary"
          >
            {{ lg("claim_rewards") }}
          </span>

          <span
            @click="actionExit()"
            class="btn btn-round btn-lg btn-outline-primary"
          >
            {{ lg("exit_claim_and_unstake") }}
          </span>
        </div>
      </div>

      <!-- Stake 操作面板 -->
      <div v-if="status_show_stake_pad" class="mt-4 ui-card stake-card px-4 py-3">
        <h4>
          {{ lg("stake_tokens") }}
        </h4>

        <div class="input-group my-3">
          <input
            v-model="input_num_stake"
            type="text"
            class="form-control form-control-lg stake-input"
          />
          <div class="input-group-append">
            <span class="input-group-text">
              <span
                class="btn btn-outline-primary btn-sm"
                @click="
                  input_num_stake = Math.floor(
                    Number(token_balance_info.num_balance)
                  ).toString()
                "
              >
                Max
              </span>
            </span>
          </div>
          <div class="input-group-append">
            <span class="input-group-text">{{ token_data.token_symbol }}</span>
          </div>
        </div>
        <div class="btn-set">
            <span
                @click="toggleStakePad()"
                class="btn btn-lg btn-outline-primary"
            >
              {{ lg("cancel") }}
            </span>
          <span
              v-if="allowance == false && token_data.token_address != ''"
              @click="actionApprove()"
              class="btn btn-lg btn-primary"
          >
              {{ approveHash ? lg("approveing") : lg("approve") }}
            </span>
          <span v-else @click="actionStake()" class="btn btn-lg btn-primary">
              {{ lg("stake") }}
            </span>
        </div>
      </div>

      <!-- Unstake 操作面板 -->
      <div v-if="status_show_unstake_pad" class="mt-4 ui-card stake-card px-4 py-3">
        <h4>
          {{ lg("unstake_tokens") }}
        </h4>

        <div class="input-group my-3">
          <input
            v-model="input_num_unstake"
            type="text"
            class="form-control form-control-lg stake-input"
          />
          <div class="input-group-append">
            <span class="input-group-text">
              <span
                class="btn btn-outline-primary btn-sm"
                @click="
                  input_num_unstake = token_balance_info.num_staked.toString()
                "
              >
                Max
              </span>
            </span>
          </div>
          <div class="input-group-append">
            <span class="input-group-text">{{ token_data.token_symbol }}</span>
          </div>
        </div>

        <div class="btn-set">
            <span
                @click="toggleUnstakePad()"
                class="btn btn-lg btn-outline-primary"
            >
              {{ lg("cancel") }}
            </span>

          <span @click="actionUnstake()" class="btn btn-lg btn-primary">
              {{ lg("unstake") }}
            </span>
        </div>
      </div>
    </div>

    <frameFooter />

    <div class="loading" v-show="loading == true">
      <img src="/static/img//loading.gif" />
    </div>
  </div>
</template>

<script>
import frameFooter from "@/views/_comp_frame/footer.vue";
import stakeInfo from "./stake_info.vue";
import data_main_list from "@/data/main_list.js";
import Decimal from "decimal.js";

const tokenAbi = require("@/data/token_abi.json");
const rewardsPoolAbi = require("@/data/rewards_pool_abi.json");

export default {
  name: "stakePage",
  components: {
    frameFooter,
    stakeInfo,
  },
  props: [],
  data() {
    return {
      loading: false,
      status_show_stake_pad: false,
      input_num_stake: "",
      input_num_stake_true: "",
      status_show_unstake_pad: false,
      input_num_unstake: "",

      token_balance_info: {
        num_balance: "",
        num_staked: "",
        num_reward: "",
      },
      allowance: false,
      approveHash: "",
      timer: "",
    };
  },
  computed: {
    token_data() {
      let v = this;
      let temp = null;
      for (let item of data_main_list) {
        if (item.id.toLowerCase() === v.$route.params.id.toLowerCase()) {
          temp = item;
        }
      }
      return JSON.parse(JSON.stringify(temp));
    },
  },
  watch: {},
  methods: {
    toggleStakePad() {
      let v = this;
      v.input_num_stake = "";
      v.status_show_stake_pad = !v.status_show_stake_pad;
    },

    toggleUnstakePad() {
      let v = this;
      v.input_num_unstake = "";
      v.status_show_unstake_pad = !v.status_show_unstake_pad;
    },

    // stake
    async actionStake() {
      let v = this;
      let num = v.input_num_stake;

      let reward_address = v.token_data.reward_address;

      // let token_address = v.token_data.token_address

      // let addresses = await window.ethereum.enable()
      // let addresses = await v.myWeb3.eth.accounts;
      // var local_address = addresses[0]
      var local_address = await v.action.getAddress();

      v.loading = true;
      if (v.token_data.id === "Ares") {
        //调用合约执行
        let reward_contract = new v.myWeb3.eth.Contract(
          rewardsPoolAbi,
          reward_address
        );
        let stakeNum = new Decimal(num)
          .mul(Math.pow(10, v.token_data.token_decimals))
          .toFixed();
        console.log("stakeNum", stakeNum);
        const reward_stakeData = reward_contract.methods
          .stake(stakeNum)
          .encodeABI();
        console.log("reward_stakeData", reward_stakeData);

        const rewardReceipt = await v.myWeb3.eth.sendTransaction(
          {
            from: local_address,
            to: reward_address,
            value: 0,
            data: reward_stakeData,
          },
          function (error, result) {
            if (
              error &&
              error.message.includes("User denied transaction signature")
            ) {
              console.log("User Rejections: ", error);
              v.loading = false;
            }
          }
        );
        v.status_show_stake_pad = false;
        console.log("rewardReceipt", rewardReceipt);
        this.refreshStakeInfo();
      }
      v.loading = false;
    },
    // unstake
    async actionUnstake() {
      let v = this;
      let num = v.input_num_unstake;

      let reward_address = v.token_data.reward_address;

      var local_address = await v.action.getAddress();

      v.loading = true;
      if (v.token_data.id === "Ares") {
        //调用合约执行
        let reward_contract = new v.myWeb3.eth.Contract(
          rewardsPoolAbi,
          reward_address
        );
        let stakeNum = new Decimal(num)
          .mul(Math.pow(10, v.token_data.token_decimals))
          .toFixed();
        console.log("stakeNum", stakeNum);
        const reward_stakeData = reward_contract.methods
          .withdraw(stakeNum)
          .encodeABI();
        console.log("reward_stakeData", reward_stakeData);

        const rewardReceipt = await v.myWeb3.eth.sendTransaction(
          {
            from: local_address,
            to: reward_address,
            value: 0,
            data: reward_stakeData,
          },
          function (error, result) {
            if (
              error &&
              error.message.includes("User denied transaction signature")
            ) {
              console.log("User Rejections: ", error);
              v.loading = false;
            }
          }
        );
        v.status_show_unstake_pad = false;
        console.log("rewardReceipt", rewardReceipt);
        this.refreshStakeInfo();
      }
      v.loading = false;
    },

    // actionClaim
    async actionClaim() {
      let v = this;

      let reward_address = v.token_data.reward_address;

      // let addresses = await window.ethereum.enable()
      // let addresses = await v.myWeb3.eth.accounts;
      // var local_address = addresses[0]
      var local_address = await v.action.getAddress();
      v.loading = true;
      if (v.token_data.id === "Ares") {
        //调用合约执行
        let reward_contract = new v.myWeb3.eth.Contract(
          rewardsPoolAbi,
          reward_address
        );
        const reward_stakeData = reward_contract.methods
          .getReward()
          .encodeABI();
        console.log("reward_stakeData", reward_stakeData);

        const rewardReceipt = await v.myWeb3.eth.sendTransaction(
          {
            from: local_address,
            to: reward_address,
            value: 0,
            data: reward_stakeData,
          },
          function (error, result) {
            if (
              error &&
              error.message.includes("User denied transaction signature")
            ) {
              console.log("User Rejections: ", error);
              v.loading = false;
            }
          }
        );
        console.log("rewardReceipt", rewardReceipt);
        this.refreshStakeInfo();
      }
      v.loading = false;
    },

    // actionExit
    async actionExit() {
      let v = this;

      let reward_address = v.token_data.reward_address;

      // let addresses = await window.ethereum.enable()
      // let addresses = await v.myWeb3.eth.accounts;
      // var local_address = addresses[0]
      var local_address = await v.action.getAddress();
      v.loading = true;
      if (v.token_data.id === "Ares") {
        //调用合约执行
        let reward_contract = new v.myWeb3.eth.Contract(
          rewardsPoolAbi,
          reward_address
        );
        const reward_stakeData = reward_contract.methods.exit().encodeABI();
        console.log("reward_stakeData", reward_stakeData);

        const rewardReceipt = await v.myWeb3.eth.sendTransaction(
          {
            from: local_address,
            to: reward_address,
            value: 0,
            data: reward_stakeData,
          },
          function (error, result) {
            if (
              error &&
              error.message.includes("User denied transaction signature")
            ) {
              console.log("User Rejections: ", error);
              v.loading = false;
            }
          }
        );
        console.log("rewardReceipt", rewardReceipt);
        this.refreshStakeInfo();
      }
      v.loading = false;
      // let tronweb = window.tronWeb
      //
      // tronweb.contract().at(reward_address).then(function (rewardContract) {
      //
      //     rewardContract.exit().send().then(function (res) {
      //         console.log('exit')
      //         console.log(res)
      //     })
      // })
    },

    async actionApprove() {
      let v = this;
      let reward_address = v.token_data.reward_address;
      let token_address = v.token_data.token_address;
      var local_address = await v.action.getAddress();

      v.loading = true;
      if (v.token_data.id === "Ares") {
        //approve
        let contract = new v.myWeb3.eth.Contract(tokenAbi, token_address);
        const approveData = contract.methods
          .approve(reward_address, "10000000000000000000000000")
          .encodeABI();
        console.log("approvedata", approveData);
        v.myWeb3.eth
          .sendTransaction({
            from: local_address,
            to: token_address,
            value: 0,
            data: approveData,
          })
          .on("transactionHash", function (hash) {
            //hash
            console.log(`hash: ` + hash);
            v.loading = true;
            //v.$toast(v.lg('please_wait'))
            v.approveHash = hash;
            v.timer = setInterval(v.checkApproved, 1000);
            //server order
          })
          .on("receipt", function (receipt) {
            //receipt
            console.log(receipt);
            v.loading = false;
          })
          .on("error", function (receipt) {
            //receipt
            console.log(receipt);
            v.loading = false;
          });
      }
    },

    async checkApproved() {
      console.log(`check approving`);
      let v = this;
      if (v.token_data.token_address === "") {
        console.log(`check approving return`);
        return false;
      }
      // let addresses = await window.ethereum.enable()
      // let addresses = await v.myWeb3.eth.accounts;
      // var local_address = addresses[0]
      var local_address = await v.action.getAddress();
      console.log(`check approving:`, local_address);
      console.log(`v.token_data:`, v.token_data);
      console.log(`v.myWeb3:`, v.myWeb3);

      let contract = new v.myWeb3.eth.Contract(
        tokenAbi,
        v.token_data.token_address
      );
      contract.methods
        .allowance(local_address, v.token_data.reward_address)
        .call(function (error, result) {
          if (result != 0) {
            v.allowance = true;
            //清空检测事件
            v.approveHash = "";
            clearInterval(v.timer);
          }
        });
    },

    async refreshStakeInfo() {
      console.log(`refresh datas`);
      this.$refs.stake_info.getAllData();
    },
  },
  created() {
    let v = this;
    if (v.myWeb3 === undefined) {
      this.$router.push("/");
    }
    //授权操作
    this.checkApproved();
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
.stake-page {
  .boxed {
    h2 {
      font-size: 1.5em;
      font-weight: bold;
      line-height: 2;
      width: 100%;
      text-align: center;
    }

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

  .btn-set {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;

    .btn {
      min-width: 48%;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  // 样式覆盖
  .input-group {
    input {
      border-right: none !important;
    }

    .input-group-text {
      background-color: transparent !important;
      font-size: 18px;
      color: #fff;

      &:last-child {
        border-left: none !important;
      }
    }
  }
}

@media (max-width: 789px) {
  .stake-page {
    // 上提页面
    .boxed {
      margin-top: 30px !important;
    }

    .btn-set {
      .btn {
        width: 100%;
      }
    }
  }
}
.loading {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.1;
  img {
    margin-top: 300px;
  }
}
</style>
