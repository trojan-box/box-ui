<template>
  <div>
    <div class="bridgeLayout">
      <div class="content">
        <router-link class="navigator" to="/">❮&nbsp;Back</router-link>

        <h2>Bridge ARES from ETH to BSC</h2>

        <div class="panel">
          <div class="title">
            <span>Asset&nbsp;</span>
            <img src="/static/pic/token_icon/ares.png" width="43px" />
          </div>

          <div class="path">
            <div>
              <div class="head">from</div>

              <div class="title">
                <div class="logo">
                  <img src="/static/pic/eth.png" height="36px" />
                </div>

                <span>Ethereum<br />Network</span>
              </div>
            </div>

            <span>→</span>

            <div>
              <div class="head">to</div>

              <div class="title">
                <div class="logo">
                  <img src="/static/pic/bsc.png" height="36px" />
                </div>

                <span>Binance Smart<br />Chain Network</span>
              </div>
            </div>
          </div>

          <div class="inputsPanel">
            <div class="head">You ARES balance ETH Network</div>
            <div class="howMany" style="background-color: #c6e8ff">
              {{ this.balance }}
            </div>
          </div>

          <div class="inputsPanel">
            <div class="head">Amount ETH Network</div>

            <div class="inputs">
              <input ref="amount" type="number" @input="handleInputValue" />

              <button class="maxButton" @click="handleMax">Max</button>
            </div>
          </div>

          <div class="inputsPanel">
            <div class="twoColumns">
              <div class="theFirstOf2Columns">
                <div class="head">Estimated Amount BSC Mainnet</div>
                <div class="howMany">{{ inputValue }}</div>
              </div>

              <div class="theSecondOf2Columns">
                <div class="head">Bridge Fee</div>
                <div class="howMany">{{ fee }}</div>
              </div>
            </div>

            <div class="description" v-if="this.isNotEnoughToken">
              Insufficient token amount on BSC.
            </div>
          </div>

          <div class="inputsPanel">
            <div class="head">Your BSC Address</div>
            <div class="address">{{ address }}</div>
            <div class="description">
              When you get the ARES on this Address，please go to iliad to
              participate in staking.
            </div>
          </div>

          <div class="buttonPanel">
            <button class="dark" v-if="!this.myWeb3">Connect Wallet</button>

            <button
              class="dark"
              @click="handleSubmit"
              :disabled="this.inputValue <= 0 || this.isNotEnoughToken"
            >
              Confirm
            </button>

            <router-link class="navigatorButton" to="/">
              <div class="light">Cancel</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <frameFooter />

    <modal name="alertSuccess" height="auto">
      <alert-modal
        :content="this.alertContentKey"
        type="success"
        :buttons="this.alertButtons"
        :onClose="this.closeAlert"
      />
    </modal>
  </div>
</template>

<script>
import frameFooter from "@/views/_comp_frame/footer.vue";
import Decimal from "decimal.js";
import axios from "axios";
import AlertModal from "../_comp_frame/alertModal.vue";

const tokenAbi = require("@/data/token_abi.json");
const tokenAddress = "0x358AA737e033F34df7c54306960a38d09AaBd523";
const bridge = "0xbcaf727812a103a7350554b814afa940b9f8b87d";
const crossBscAPI = "https://trojan.aresprotocol.io/api/bridge/crossBsc";
const getBscBalanceAPI =
  "https://trojan.aresprotocol.io/api/bridge/getBscBalance";
const getBscFeeAPI = "https://trojan.aresprotocol.io/api/bridge/getBscFee";
let theContract = null;

export default {
  name: "bridge",
  components: {
    frameFooter,
    AlertModal,
  },
  props: [],
  data() {
    return {
      address: " ",
      balance: 0,
      inputValue: 0,
      pool: 0,
      isNotEnoughToken: false,
      alertContentKey: "",
      fee: 0,
      alertButtons: [],
    };
  },
  watch: {},
  methods: {
    closeAlert() {
      this.$modal.hide("alertSuccess");
    },
    getContract: function () {
      if (!theContract) {
        theContract = new this.myWeb3.eth.Contract(tokenAbi, tokenAddress);
      }

      return theContract;
    },
    handleMax: function () {
      const value = Number(this.balance) - this.fee;
      let check = value < this.balance;
      console.log("value",value,"check",check);
      if (!isNaN(value) && check && value >= 0) {
        this.inputValue = value;
        this.$refs.amount.value = value;
        this.ComputeIsNotEnoughToken();
      }
    },
    handleInputValue: function () {
      const value = Number(this.$refs.amount.value) - this.fee;
      let check = value < this.balance;
      if (!isNaN(value) && check && value >= 0) {
        this.inputValue = value;
        this.ComputeIsNotEnoughToken();
      }
    },
    handleSubmit: function () {
      const value = new Decimal(this.inputValue+this.fee)
        .mul(Math.pow(10, 18))
        .toFixed();
      console.log("value", value, " this.inputValue ", this.inputValue);
      this.getContract()
        .methods.transfer(bridge, value)
        .send({ from: this.address })
        .on("transactionHash", function (hash) {
          this.alertContentKey = "transactionSent";
          this.$modal.show("alertSuccess");
        })
        .on("confirmation", function (confirmationNumber, receipt) {
          // ...
        })
        .on("receipt", async function (receipt) {
          if (receipt) {
            var params = new URLSearchParams();
            params.append("tx_hash", receipt.transactionHash);
            axios
              .post(crossBscAPI, params, {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
              })
              .then((result) => {
                if (!result.error) {
                  this.alertContentKey = "successfullyMigratedToBSC";
                  this.$modal.show("alertSuccess");
                }
              });
          }
        })
        .on("error", function (error, receipt) {
          // ...
        });
    },
    async getPool() {
      const result = await (await fetch(getBscBalanceAPI)).json();
      if (result && !result.error) {
        this.pool = new Decimal(result.data.balance).toFixed();
      }
    },
    async getFee() {
      const result = await (await fetch(getBscFeeAPI)).json();
      if (result && !result.error) {
        this.fee = Number(result.data.fee);
      }
    },
    ComputeIsNotEnoughToken() {
      this.isNotEnoughToken =
        this.inputValue >
        new Decimal(this.pool).div(Math.pow(10, 18)).toNumber();
    },
  },
  created() {
    this.getPool();
    this.getFee();
  },
  async mounted() {
    if (this.myWeb3) {
      this.address = await this.action.getAddress();

      this.getContract()
        .methods.balanceOf(this.address)
        .call((error, result) => {
          if (!error) {
            this.balance = new Decimal(result).div(Math.pow(10, 18)).toNumber();
            console.log("getContract ", this.balance);
          }
        });
    }
  },
  //beforeDestroy() {},
  //update() {},
  //activited() {},
  //beforeRouteUpdate() {},
  //filters: {},
};
</script>

<style lang="scss" scoped>
.bridgeLayout {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5em;

  .content {
    width: 80%;
    max-width: 1380px;
    font-size: 16px;
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .navigator {
      width: 100%;
      text-align: left;
    }

    h2 {
      font-size: 1.5em;
      font-weight: bold;
      line-height: 2;
    }

    .panel {
      background: #ffffff;
      border: 1px solid #c4c8cb;
      box-shadow: 5px 15px 15px rgba(29, 31, 117, 0.16);
      border-radius: 14px;
      padding: 2em 10em 3em 10em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .title {
        background: #e7ebed;
        border-radius: 9px;
        padding: 1em 3em;
        width: fit-content;
      }

      .path {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-top: 1.5em;

        .title {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1em 2.5em;
          line-height: 1;
          margin: 0 0.5em;

          .logo {
            width: 43px;
            height: 43px;
            background-color: white;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 0.5em;
          }
        }
      }

      .inputsPanel {
        margin-top: 1.5em;
        width: 100%;
        padding: 0 0.5em;

        .twoColumns {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          widows: 100%;

          .theFirstOf2Columns {
            width: 65%;
          }

          .theSecondOf2Columns {
            width: 32%;
          }
        }

        .head {
          margin-left: 1em;
        }

        .inputs {
          position: relative;

          input {
            width: 100%;
            border: 1px solid #969696;
            box-shadow: 0px 3px 3px rgba(0, 6, 166, 0.12);
            border-radius: 49px;
            padding: 0.5em 1em;
            -webkit-appearance: none;
            -moz-appearance: textfield;
          }

          .maxButton {
            background: #1295f0;
            border-radius: 100px;
            color: white;
            height: 100%;
            padding: 0.5em 2em;
            position: absolute;
            right: 0;
            top: 0;
          }
        }
      }

      .buttonPanel {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1.5em;

        button {
          margin: 0 0.5em;
          outline: none;
          padding: 0.5em 2em;
          box-sizing: border-box;

          &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        }

        .dark {
          background: #1295f0;
          border-radius: 34px;
          color: white;
        }

        .navigatorButton {
          text-decoration: none;

          .light {
            border: 2px solid #1295f0;
            border-radius: 34px;
            color: #1295f0;
            background-color: white;
            margin: 0 0.5em;
            outline: none;
            padding: 0.5em 2em;
            box-sizing: border-box;
            width: fit-content;
            cursor: pointer;
          }
        }
      }
    }
  }

  .head {
    margin-left: 1.5em;
    text-transform: capitalize;
    margin-bottom: 0.5em;
  }

  .howMany {
    background: #fff2d1;
    border-radius: 49px;
    padding: 0.5em 1em;
  }

  .address {
    background: #e7ebed;
    box-shadow: 0px 3px 3px rgba(0, 6, 166, 0.12);
    border-radius: 49px;
    padding: 0.5em 1em;
  }

  .description {
    font-size: 0.8em;
    font-weight: 400;
    color: #00b85c;
    opacity: 0.94;
    padding: 0.5em 1em;
  }
}

@media (max-width: 576px) {
  .bridgeLayout {
    font-size: 16px;

    .content {
      width: 100%;
      padding: 0 1em;
      max-width: none;

      .navigator {
        width: 100%;
        text-align: left;
      }

      h2 {
        margin-top: 2em;
        font-size: 1em;
        line-height: 2;
      }

      .panel {
        padding: 1em;
        width: 100%;

        .title {
          //
        }

        .inputsPanel {
          .twoColumns {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .theFirstOf2Columns {
              width: 100%;
            }

            .theSecondOf2Columns {
              width: 100%;
              margin-top: 1em;
            }
          }
        }

        .path {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: flex-start;
          margin-top: 1.5em;

          .title {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1em 1em;
            line-height: 1;
            margin: 0 0.5em;
            font-size: 0.6em;

            .logo {
              width: 43px;
              height: 43px;
              background-color: white;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 0.5em;
            }
          }
        }
      }
    }

    .address {
      padding: 1em 1em;
      font-size: 0.65em;
    }

    .description {
      text-align: center;
    }
  }
}
</style>
