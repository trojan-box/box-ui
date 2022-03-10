<template>
  <div>
    <a-modal title="" :visible="extractShow" :footer="null" :closable="false"
             v-if="extractShow" :width="750">
      <div class="extractWrapper">
        <div class="extractTitle">
          {{lg("extract")}}
        </div>
        <div class="extractAccount">
          <div class="extractInputTitle">{{lg("my_rewards_account")}}</div>
          <a-input v-model="extractAddress"></a-input>
        </div>
        <div>
          <div class="extractInputTitle">{{lg("amount_of_withdrawn_rewards")}}</div>
          <div class="extractAmount">
            <a-input type="number" v-model="extractNum"></a-input>
            <div class="extractMaxBtn" @click="setExtractMax">{{lg("max")}}</div>
          </div>
        </div>
        <div class="extractFooter">
          <div class="extractMaxBtn extractFooterBtn" @click="widthDraw">{{lg("confirm")}}</div>
          <div class="extractMaxBtn extractFooterBtn" @click="extractCancel">{{lg("cancel")}}</div>
        </div>
      </div>
    </a-modal>

    <a-modal title="" :visible="shareCardShow" :footer="null" :closable="false" :maskClosable="true"
             :width="570" @cancel="shareCardCancel" v-if="shareCardShow">
      <div class="shareCard">
        <div class="shareCardCancel" @click="shareCardCancel">
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        <div class="shareCardTitle">
          {{lg("congratulations")}}
        </div>
        <div>
          <div>{{lg("you_have_earned")}}</div>
          <div class="aresNum">
            <img src="../../../assets/image/bag.png" alt="" width="50">
            {{extractNum}} ARES
          </div>
        </div>
        <div class="shareCardTips">{{lg("you_have_earned_tips")}}</div>
        <div class="shareButton">
          <div class="shareCardBtn" @click="shareTwitter"><a-icon type="twitter" style="color: #FFF; font-size:20px"/>
            Twitter
          </div>
        </div>

        <div class="submitWrapper">
          <div class="linkWrapper">
            <div>Link</div>
            <a-input placeholder="Your link here" v-model="shareLink"/>
          </div>
          <div class="submitBtn" @click="submitLink">Submit</div>
        </div>

        <div class="submitTip">
          <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
          Please confirm whether your sharing link is submitted before clicking ok. If you don't submit it, it will be regarded as giving up sharing!
        </div>

        <div class="shareBtn" @click="confirmShare">
          {{ lg("ok") }}
          <div class="shareTips">
            <span class="arrow"></span>
            <span>Your reward will be sent to your wallet address within one day.</span>
          </div>
        </div>
      </div>
    </a-modal>

    <a-modal title="" :visible="rewardsLess" :footer="null" :closable="false"
             v-if="rewardsLess" :width="750" :centered="true">
      <div class="rewardsLessWrapper">
        <div class="rewardsLessContent">
          Sorry, your rewards account is less than {{minWithdraw}} ARES.
        </div>
        <div class="extractMaxBtn extractFooterBtn lessBtn" @click="rewardsLess = false">{{lg("ok")}}</div>
      </div>
    </a-modal>
  </div>
</template>

<script>
import {MediaChannel, ShareType} from "../contant";

export default {
  name: "extract",
  props: {
    extractShow:{
      type: Boolean
    },
    maxGameBalance: {
      type: Number
    },
    totalWinAres: {
      type: Number
    },
    nickName: {
      type: String
    },
  },
  data() {
    return {
      shareCardShow: false,
      extractNum: 0,
      rewardsLess: false,
      shareLink: "",
      extractAddress: "",
      minWithdraw: 1000,
      gameBalance: this.maxGameBalance,
    }
  },
  mounted()
  {
    this.getDefaultAddress();
    this.getConfig();
  },
  methods: {
    async getDefaultAddress() {
      let v = this;
      const local_address = await v.action.getAddress();
      this.extractAddress = local_address;
    },
    getConfig() {
      fetch(`/api/v1/app/config`, {
        method: "GET",
        mode: "cors",
      }).then(async (res) => {
        const result = await res.json();
        this.minWithdraw = result.data.game.min_withdraw;
      });
    },
    setExtractMax() {
      this.extractNum = this.maxGameBalance;
    },
    widthDraw() {
      if (this.extractNum < this.minWithdraw) {
        this.rewardsLess = !this.rewardsLess;
        return;
      }
      const timestamp = parseInt(new Date().getTime() / 1000);
      let v = this;
      v.action.getAddress().then(address => {
        if (this.extractAddress !== address) {
          address = this.extractAddress;
        }
        address = v.myWeb3.utils.toChecksumAddress(address);
        fetch(`/api/v1/nonce?address=${address}`, {
          method: "GET",
          mode: "cors",
        }).then(async (res) =>
        {
          const nonceRes = await res.json();
          const WithdrawBonusApplySignMsg = `
trojan-box wants you to sign in with your Ethereum account:
${address}
for withdraw bonus apply
Nonce: ${nonceRes.data}
Timestamp: ${timestamp}
Bonus: ${this.extractNum}
`;
          const msg = v.myWeb3.utils.keccak256(WithdrawBonusApplySignMsg);
          v.myWeb3.eth.sign(msg, address).then(sign => {
            const signBytes = v.myWeb3.utils.hexToBytes(sign);
            signBytes[64] -= 27;
            sign = v.myWeb3.utils.bytesToHex(signBytes);
            const param = {
              address: address,
              bonus: parseInt(this.extractNum),
              nonce: nonceRes.data,
              signed_msg: sign,
              timestamp: timestamp.toString()
            }
            fetch("/api/v1/bonus/withdraw/apply", {
              method: "POST",
              mode: "cors",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(param),
            }).then(async (res) => {
              if (res.ok) {
                const result = await res.json();
                this.shareCardShow = !this.shareCardShow;
                this.$emit("update:extractShow", false);
                this.$emit('freshBonus');
              } else {
                return Promise.reject("extract error", res);
              }
            });
          });
        })
      })
    },
    extractCancel() {
      this.$emit("update:extractShow", false);
    },
    shareTwitter() {
      let nickname = this.nickName;
      if (nickname.length > 15) {
        nickname = this.hideMiddle(nickname, 5, 5);
      }
      const twUrl = 'https://www.youtube.com/watch?v=TV6-AKEwyfU';//要分享的链接
      const  twTitle = `I’m ${nickname},I have earned ${this.totalWinAres} ARES in The Trojan Box. If you are my friends, we can play The Trojan Box together!`
      window.open(
          `https://twitter.com/intent/tweet?text=${twTitle}&url=${twUrl}`,
          '_blank'
      );
    },
    shareCardCancel() {
      this.shareCardShow = !this.shareCardShow;
    },
    confirmShare() {
      this.shareCardShow = false;
    },
    submitLink() {
      const token = this.$store.state.trojanBox.token;

      const data = {
        link: this.shareLink,
        channel: MediaChannel.Twitter,
        share_type: ShareType.Withdrawn
      }
      fetch("/api/v1/share", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
        body: JSON.stringify(data),
      }).then(async (res) => {
        const result = await res.json();
        if (res.ok) {
          this.shareLink = "";
          this.shareCardShow = !this.shareCardShow;
        } else {
          console.log(result.message)
        }
      })
    },
    hideMiddle(str, frontLen, endLen) {
      let newStr = "";
      for (let i = 0; i < 2; i++) {
        newStr += "*";
      }
      return (
          str.substring(0, frontLen) + newStr + str.substring(str.length - endLen)
      );
    }
  }
}
</script>

<style scoped lang="scss">

.extractWrapper {
  /*width: 750px;*/
  /*height: 455px;*/
  color: #FFF;
  font-family: "Moriis roman",serif;
  background: #607FF6;
  border-radius: 33px;
  /*margin: 0 auto;*/
  /*padding: 50px 50px;*/
  /*margin-top: 20px;*/
}

.extractTitle {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
}

.extractAmount {
  display: flex;
}

.extractAccount .ant-input {
  height: 54px;
  background: #4B64C9;
  border-radius: 15px;
  border: none;
  margin-top: 10px;
  color: #FFF;
  font-size: 20px;
}

.extractAmount .ant-input {
  width: 80%;
  height: 53px;
  background: #4B64C9;
  border: 1px solid rgba(10, 19, 63, 0.49019607843137253);
  border-radius: 15px;
  color: #FFF;
  font-size: 20px;
}

.extractMaxBtn {
  width: 114px;
  height: 47px;
  line-height: 47px;
  background: #0025AC;
  box-shadow: 1px 5px 0 #001E8A;
  border-radius: 15px;
  text-align: center;
  margin-left: 10px;
  font-size: 25px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
}

.extractMaxBtn:before,
.rewardsExtractBtn:before,
.profileBtn:before {
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

.extractMaxBtn:hover,
.rewardsExtractBtn:hover, .profileBtn:hover {
  color: #fff;
  border-bottom: 4px solid darken(#2194E0, 10%);
}

.extractMaxBtn:hover:before,
.rewardsExtractBtn:hover:before,
.profileBtn:hover:before {
  transform: skewX(-45deg) translateX(13.5em);
  transition: all 0.5s ease-in-out;
}

.extractInputTitle {
  margin-top: 20px;
  font-size: 20px;
}

.extractFooter {
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
}

.extractFooterBtn {
  width: 200px;
}

.shareCard {
  background: #607FF6;
  border-radius: 33px;
  text-align: center;
  color: #FFF;
  position: relative;
  font-family: "Moriis roman",serif;
}

.shareCardCancel {
  position: absolute;
  right: 0;
  font-size: 18px;
  cursor: pointer;
}

.shareCardTitle {
  font-size: 35px;
  font-weight: bold;
  text-align: center;
}

.aresNum {
  width: 303px;
  height: 62px;
  line-height: 62px;
  background: #2A4BCC;
  border-radius: 31px;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  margin: 0 auto;
}

.shareCardTips {
  padding: 30px 0;
  font-family: Poppins,serif;
  font-size: 16px;
}

.shareButton {
  display: flex;
  justify-content: space-around;
}

.shareCardBtn {
  width: 168px;
  height: 49px;
  line-height: 49px;
  background: #0025AC;
  border-radius: 31px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  cursor: pointer;
}

.shareBtn {
  width: 144px;
  height: 53px;
  line-height: 53px;
  font-size: 25px;
  text-align: center;
  background: #0025AC;
  box-shadow: 1px 5px 0 #001E8A;
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 20px;
  cursor: pointer;
  position: relative;
  &:hover .shareTips {
    display: block;
  }
}

.linkWrapper {
  text-align: left;
  width: 70%;
  .ant-input {
    border: 2px solid rgba(10, 19, 63, 0.49);
    background: #4B64C9;
    color: #FFF;
    height: 48px;
    line-height: 48px;
    font-size: 18px;
  }
}

.submitWrapper {
  display: flex;
  justify-content: center;
  column-gap: 10px;
}

.submitBtn {
  width: 110px;
  height: 45px;
  line-height: 45px;
  background: #0025AC;
  box-shadow: 1px 5px 0 #001E8A;
  border-radius: 15px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  margin-top: 18px;
}

.submitTip {
  font-size: 14px;
  font-family: Poppins,serif;
  font-weight: 300;
  line-height: 18px;
  color: #0025AC;
  text-align: left;
  margin-top: 5px;
  padding: 0 20px;
}

.shareTips {
  display: none;
  position: absolute;
  bottom: -82px;
  width: 600px;
  right: -250px;
  color: #607FF6;
  font-family: Poppins,serif;
  font-size: 16px;
  background: #0A133F;
  border: 2px solid #607FF6;
  border-radius: 15px;
}


.arrow {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px;
  border-color: transparent transparent #0A133F transparent;
  position: absolute;
  left: 42%;
  top: -29px
}

.rewardsLessWrapper {
  font-family: "Moriis roman",serif;
  text-align: center;
  font-size: 25px;
  color: #FFF;
}

.lessBtn {
  width: 100px;
  margin: 10px auto;
}
</style>
