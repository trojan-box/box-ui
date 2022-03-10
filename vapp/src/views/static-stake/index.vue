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
        v-if="token_data.token == 'Ares'"
        @updateStakeNum="updateStakeNum"
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
            :class="{ 'btn-disabled': this.button_status_unstake === false }"
          >
            <span v-if="this.button_status_unstake === true">
              {{ lg("unstake_tokens") }}
            </span>
            <span v-else>{{ lg("unstake_tokens_not_expired") }} </span>
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
            :class="{ 'btn-disabled': this.button_status_exit === false }"
          >
            <span v-if="this.button_status_exit === true">
              {{ lg("exit_claim_and_unstake") }}
            </span>
            <span v-else> {{ lg("exit_claim_and_unstake_not_expired") }}</span>
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
                    token_balance_info.num_balance
                  ).toString()
                "
              >
                Max
              </span>
            </span>
            <span class="btn token-symbol">{{ token_data.token_symbol }}</span>
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
                @click="input_num_unstake = token_balance_info.num_staked"
              >
                Max
              </span>
            </span>
          </div>
          <div class="input-group-append">
            <span class="btn token-symbol">{{ token_data.token_symbol }}</span>
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
import data_main_list from "@/data/static-items";
import Decimal from "decimal.js";
import { fixed } from "@/utils/decimal";

const tokenAbi = require("@/data/token_abi.json");
const rewardsPoolAbi = require("@/data/ares-dq-abi.json");

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
      button_status_exit: true, // 退出按钮的显示状态
      button_status_unstake: true, // 质押取回按钮显示的状态
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
    async updateStakeNum(num_stake) {
      let v = this;
      // v.token_balance_info.num_staked = num_stake
      // console.log("updateStakeNum", num_stake)
      if (num_stake > 0) {
        // check state button status
        // 检查退出按钮的状态
        let reward_address = v.token_data.reward_address;
        //调用合约执行
        let reward_contract = new v.myWeb3.eth.Contract(
          rewardsPoolAbi,
          reward_address
        );

        var local_address = await v.action.getAddress();
        console.log("##############");
        console.log(local_address);

        // Call chain info:
        // reward_contract.methods.usersAward(local_address).call(function (error, result) {
        //   console.log("Local address info::", result , new Date().getTime())
        // });

        // Pre-call execution, check for errors
        reward_contract.methods
          .exit()
          .call({ from: local_address }, function (error, result) {
            console.log("LINDEBUG::RESULT1::", result);
            console.log("LINDEBUG::ERR1::", error);
            console.log(
              "LINDEBUG::staked 1::",
              v.token_balance_info.num_staked
            );
            if (undefined != error) {
              v.button_status_exit = false;
            }
          });

        // Pre-call execution, check for errors
        reward_contract.methods
          .withdraw(1)
          .call({ from: local_address }, function (error, result) {
            console.log("LINDEBUG::RESULT2::", result);
            console.log("LINDEBUG::ERR2::", error);
            console.log(
              "LINDEBUG::staked 2::",
              v.token_balance_info.num_staked
            );
            if (undefined != error) {
              v.button_status_unstake = false;
            }
          });
      }
    },
    // stake
    async actionStake() {
      let v = this;
      let num = v.input_num_stake;
      if (0 >= num) {
        // If the value range of stakeNum is illegal.
        return;
      }

      let reward_address = v.token_data.reward_address;
      var local_address = await v.action.getAddress();

      v.loading = true;
      if (
        v.token_data.id === "Ares-60D" ||
        v.token_data.id === "Ares-120D" ||
        v.token_data.id === "Ares-180D"
      ) {
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
      if (0 >= num) {
        // If the value range of stakeNum is illegal.
        return;
      }

      let reward_address = v.token_data.reward_address;

      var local_address = await v.action.getAddress();

      v.loading = true;
      if (
        v.token_data.id === "Ares-60D" ||
        v.token_data.id === "Ares-120D" ||
        v.token_data.id === "Ares-180D"
      ) {
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
      if (
        v.token_data.id === "Ares-60D" ||
        v.token_data.id === "Ares-120D" ||
        v.token_data.id === "Ares-180D"
      ) {
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
      if (
        v.token_data.id === "Ares-60D" ||
        v.token_data.id === "Ares-120D" ||
        v.token_data.id === "Ares-180D"
      ) {
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
      if (
        v.token_data.id === "Ares-60D" ||
        v.token_data.id === "Ares-120D" ||
        v.token_data.id === "Ares-180D"
      ) {
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
      console.log(`LINDEBUG:: checkApproved RUN`);
      let v = this;
      if (v.token_data.token_address === "") {
        console.log(`check approving return`);
        return false;
      }
      // let addresses = await window.ethereum.enable()
      // let addresses = await v.myWeb3.eth.accounts;
      // var local_address = addresses[0]
      var local_address = await v.action.getAddress();
      console.log(`LINDEBUG:: 我的钱包地址`, local_address);
      console.log(`LINDEBUG:: `, v.token_data);
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

    async maxStake() {
      let v = this;
      var local_address = await v.action.getAddress();
      let contract = new v.myWeb3.eth.Contract(
        tokenAbi,
        v.token_data.token_address
      );

      let a;
      if (this.allowance) {
        a = await contract.methods
          .allowance(local_address, v.token_data.reward_address)
          .call();
      } else {
        a = await contract.methods.balanceOf(local_address).call();
      }
      this.input_num_stake = fixed(a, 0);
    },
  },
  created() {
    console.log(
      ' staitc-stake/index - created  path: "/static-stake/:stakeAddr/:rewardAddr/:tokenAddr" '
    );
    let v = this;
    if (v.myWeb3 === undefined) {
      this.$router.push("/");
    }
    this.checkApproved();
  },
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
