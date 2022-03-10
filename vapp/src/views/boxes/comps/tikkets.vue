<template>
  <div class="tikketsWrapper">
    <div class="tikketsTitle">
      {{lg("get_your_tickets_now")}}！
    </div>
    <div class="tikketCard">
      <div class="cardTitle">
        {{lg("get_your_tickets_now_title_prefix")}}
        {{miniBalance}}
        {{lg("get_your_tickets_now_title_suffix")}}
      </div>
      <div class="content">
        <div class="cardInputGroup">
          <div>{{lg("amount")}}</div>
          <a-input :value="balance" class="cardInput" :disabled="true"/>
        </div>
        <div class="buyAres">
          <div class="cardInputGroup">
            <div>{{lg("lack_of_amount")}}</div>
            <a-input :value="balance >= miniBalance ? 0 : miniBalance - balance"  class="cardInput amountBtn" :disabled="true"/>
          </div>
          <div class="buyAresBtn" @click="toUniswap">
            {{lg("buy")}} ARES
          </div>
        </div>
        <div class="cardFooter">
          <div type="primary" class="bottomBtn" @click="toWin">
            {{lg("win_now")}}!
          </div>
          <div class="bottomBtn" @click="goBack" >
            {{lg("cancel")}}
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      Copyright © 2021. Ares Protocol All rights reserved.
    </div>
    <a-modal title="" :visible="modalShow" :footer="null" :closable="false" v-if="modalShow">
      <div class="modalContent">
        <div>
          {{lg("tikkets_tips")}}
        </div>
        <div class="modalBtns">
          <div class="modalBtn bottomBtn" @click="toUniswap">{{lg("buy")}} ARES</div>
          <div class="modalBtn bottomBtn" @click="cancel()">{{lg("cancel")}}</div>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
import Decimal from "decimal.js";
import data_main_list from "@/data/main_list.js";
const tokenAbi = require("@/data/token_abi.json");
export default {
  name: "tikkets",
  data() {
    return {
      modalShow: false,
      balance: 0,
      miniBalance: 100000,
    }
  },
  mounted() {
    this.getBalance();
  },
  methods: {
    getConfig() {
      fetch(`/api/v1/app/config`, {
        method: "GET",
        mode: "cors",
      }).then(async (res) => {
        const result = await res.json();
        this.miniBalance = result.data.Game.MinBalance;
      });
    },
    async getBalance() {
      let v = this;
      const local_address = await v.action.getAddress();
      // const trc20_address = data_main_list[0].token_address;
      const decimals = data_main_list[0].token_decimals;
      const trc20_address = "0xf10B05f0aB4D2Be938135191bAD6eb790D722db6";
      let contract = new v.myWeb3.eth.Contract(tokenAbi, trc20_address);
      await contract.methods.balanceOf(local_address).call(function (error, result) {
        let balance = new Decimal(result).div(Math.pow(10, decimals)).toFixed();
        console.log("win balance", balance);
        v.balance = balance;
      });
    },
    toUniswap() {
      window.open("https://app.uniswap.org/#/swap?outputCurrency=0x358AA737e033F34df7c54306960a38d09AaBd523&use=V2")
    },
    goBack() {
      window.history.go(-1);
    },
    async toWin() {
      await this.getBalance();
      if (this.balance < 100000) {
        this.modalShow = true;
      } else {
        this.$router.push('/box/win');
      }
    },
    cancel() {
      this.modalShow = false;
    }
  },
}
</script>

<style scoped>
.tikketsWrapper {
  width: 100%;
  height: 100vh;
  color: #FFF;
  position: relative;
  background: url("../../../assets/image/box_bcg2.jpg");
  font-family: "Moriis roman",serif;
}

.tikketsTitle {
  width: 100%;
  text-align: center;
  padding-top: 100px;
  height: 53px;
  font-size: 30px;
  margin: 0 auto;
  font-weight: bold;
  color: #FFFFFF;
}

.tikketCard {
  width: 750px;
  height: 460px;
  margin: 80px auto;
  background: #607FF6;
  border-radius: 33px;
  padding: 50px 30px;
  text-align: center;
}


.cardTitle {
  height: 25px;
  font-size: 21px;
  font-weight: bold;
  line-height: 30px;
  color: #FFFFFF;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  opacity: 1;
}

.content {
  width: 87%;
}

.content .cardInputGroup {
  margin-top: 20px;
}

.cardInputGroup div {
  text-align: left;
  padding-left: 8px;
}

.cardInputGroup .ant-input {
  border: 2px solid rgba(10, 19, 63, 0.49);
  background: #4B64C9;
  color: #FFF;
  height: 45px;
  line-height: 45px;
  font-size: 18px;
}

.cardInput {
  width: 100%;
  height: 50px;
  font-family: "Poppins",serif;
}

.buyAres {
  display: flex;
  align-items: flex-end;
  column-gap: 20px;
  justify-content: space-between;
}

.amountBtn {
  min-width: 400px;
}

.buyAresBtn {
  width: 125px;
  background: #0025AC;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  font-size: 22px;
}

.cardFooter {
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
}

.bottomBtn {
  width: 209px;
  height: 53px;
  font-size: 22px;
  line-height: 53px;
  cursor: pointer;
  background: #0025AC;
  box-shadow: 1px 5px 0 #001E8A;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
}

.modalContent {
  color: #FFF;
  font-family: "Moriis roman",serif;
}

.modalBtns {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.modalBtn {
  text-align: center;
  font-family: "Moriis roman",serif;
}




.buyAresBtn:before,
.bottomBtn:before {
  content: "";
  background-color: rgba(255,255,255,0.5);
  height: 100%;
  width: 3em;
  display: block;
  position: absolute;
  top: 0;
  left: -100px;
  transform: skewX(-45deg) translateX(0);
  transition: none;
}

.buyAresBtn:hover,
.bottomBtn:hover {
  color: #fff;
  border-bottom: 4px solid darken(#2194E0, 10%);
}

.buyAresBtn:hover:before,
.bottomBtn:hover:before {
  transform: skewX(-45deg) translateX(350px);
  transition: all 0.5s ease-in-out;
}




.footer {
  background: #0E174F;
  text-align: center;
  font-family: Poppins,serif;
  font-size: 13px;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
}

@media screen and (max-width: 750px) {
  .tikketCard {
    width: 96%;
  }

  .tikketsTitle {
    font-size: 35px;
  }

  .content {
    width: 100%;
    padding: 0;
    margin-top: 55px;
  }

  .buyAres {
    column-gap: 7px;
  }

  .amountBtn {
    min-width: 200px;
  }

  .bottomBtn {
    width: 120px;
  }
}
</style>
