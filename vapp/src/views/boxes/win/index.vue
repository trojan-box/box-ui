<template>
  <div class="winnerWrapper">
    <div class="bg-animation">
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div id='stars4'></div>
    </div>
    <div class="winnerHeader">
      <div class="winnerHeaderLeft">
        <div class="backBtn" @click="goBack">
          <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
        </div>
        <div class="prizePot">
          <div class="prizePotImg">
            <img src="../../../assets/image/coin.png" alt="coin" width="50">
          </div>
          <div>
            <div>Prize Pot</div>
            <div class="prizeNum">{{prize}}</div>
          </div>
        </div>

        <div class="prizePot bound" @click="changeShowCard('myRewards')">
          <div class="">
            <img src="../../../assets/image/bag.png" alt="coin" width="50">
          </div>
          <div>
            <div>{{gameAccountBalance}} ARES</div>
          </div>
        </div>
      </div>
      <div class="winnerBottomL1">
        <img src="../../../assets/image/box_bcg_l1.png" alt="">
      </div>

      <div class="winnerAccount">
        <div class="winnerTitle">{{ title === '' ? "" : lg(title) + "!"}}</div>
        <div class="winnerAccountInfos">
          <div class="winnerCountdown" @click="changeTitle('win_now')">
            <img src="../../../assets/image/countdown.png" alt="trojan" width="40">
            {{formatTime(countDownTime)}} 60{{lg("min")}}
          </div>
          <div class="winnerAward" @click="getWinHistory(0)">
            <img src="../../../assets/image/Book.png" alt="trojan" width="35">
          </div>
          <div class="winnerMedium" @click="toMedium">
            <img src="../../../assets/image/medium.png" alt="trojan" width="40">
          </div>
          <div class="winnerAccountInfo" @click="changeTitle('my_profile')">
            <img src="../../../assets/image/account.png" alt="trojan" width="30" v-if="selectGodUrl === ''">
            <div v-if="selectGodUrl !== '' && nickName !== ''">
              <img :src="selectGodUrl" alt="" width="35">
              <span class="nickName">
                {{nickName.length > 10 ? hideMiddle(nickName, 4, 4) : nickName}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="winnerTips" v-show="broadcasts.length > 0 && broadcastShow && title === 'win_now'">
      <div class="tipsLogo">
        <img src="../../../assets/image/broadcast.png" alt="" width="40">
      </div>
      <div class="marqueeBox">
        <div class="marqueeWrapper" ref="marqueeWrapper">
          <div class="marqueeItem" ref="marqueeItem" >
            <div class="marqueeText" v-for="(item, index) in broadcasts" :key="index">{{item}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="winnerContentCards" v-if="title === 'win_now'">
      <div class="winnerContentCard">
        <div class="winnerContentCardStatus">{{lg("completed")}}</div>
        <div class="winnerCardDesc">
          {{lg("completed_tips_prefix")}}
          {{lastWinMoney}}
          {{lg("completed_tips_subfix")}}
        </div>
        <div class="winnerCardFooter">
          <div class="winnerCardFooterImg">
            <img :src="gods[lastSelectGodIndex].trs_url" alt="" height="200">
          </div>
        </div>
      </div>

      <div class="winnerContentCard" @click="toPlayGame()">
        <div class="winnerContentCardStatus winnerBtnNow">{{lg("now")}}</div>
        <div class="winnerCardDesc">{{lg("win_now_tips")}}</div>
        <div class="winnerCardFooter">
          <div class="winnerCardFooterImg" style="cursor: pointer">
            <img src="/static/img/gods_trs/staff.png" alt="" width="200">
            <div class="maskCountdown" v-if="countDownTime > 0">
              {{formatTime(countDownTime)}} 60{{lg("min")}}
            </div>
          </div>
        </div>
      </div>

      <div class="winnerContentCard">
        <div class="winnerContentCardStatus winnerBtnLater">{{lg("later")}}</div>
        <div class="winnerCardDesc">{{lg("later_tips")}}</div>
        <div class="winnerCardFooter">
          <div class="winnerCardFooterImg">
            <img src="/static/img/gods_trs/Ares.png" alt="" width="200">
          </div>
        </div>
      </div>
    </div>

    <div class="winnerProfileWrapper"  v-if="showCard === 'myProfile'">
      <div class="profileUserName">
        <div class="profileTitle">{{lg("user_name")}}</div>
        <a-input v-model="nickName"></a-input>
      </div>
      <div class="profileAvatar">
        <div class="profileTitle">
          {{lg("select_avatar")}}
        </div>
        <div class="profileAvatars">
          <div class="profileAvatarInfo" v-for="(item, index) in gods" :key="index">
            <img :src="item.url" alt="" width="50" @click="setSelectGod(item.name, index)">
            <div class="profileAvatarSelect" v-if="item.name === selectGod"><a-icon type="check" /></div>
          </div>
        </div>
      </div>
      <div class="profileAddress">
        <div class="profileTitle">
          {{lg("you_address")}}
        </div>
        <a-input :value="this.$store.state.account.default_address"></a-input>
      </div>
      <div class="profileBtn" @click="updateUserProfile()">
        {{lg("ok")}}
      </div>
    </div>

    <div class="myRewardsWrapper" v-if="showCard === 'myRewards'">
      <div class="myRewardsTitle">{{lg("my_rewards_account")}}</div>
      <div class="myRewardsSwitchBtn">
        <div :class="['myRewardsBtn', selectedRewards === 'today' ? 'myRewardsBtnSelected' : 'todayBtn']"
             @click="switchRewardsType('today')">
          {{lg("today")}}
        </div>
        <div :class="['myRewardsBtn', selectedRewards === 'total' ? 'myRewardsTotalSelected' : 'romanBtn']"
             @click="switchRewardsType('total')">
          {{lg("total")}}
        </div>
      </div>
      <div class="myRewardsContent">
        <div class="myRewardsContentAvatar">
          <img :src="selectGodUrl" alt="">
        </div>
        <div class="myRewardsContentName">{{nickName.length > 15 ? hideMiddle(nickName, 8, 4) : ""}}</div>
        <div class="myRewardsContentAres">{{lg("win")}} {{selectedRewards === 'today' ? todayWinAres : totalWinAres}} ARES</div>
        <div class="recordBtns">
          <div class="winRecord" @click="getMyWinHistory(0)">
            <img src="../../../assets/image/award.png" alt="" width="20">
            Winning Records
          </div>

          <div class="winRecord" @click="getMyWithdraw(0)">
            <img src="../../../assets/image/bag.png" alt="" width="20">
            Extract Records
          </div>
        </div>
      </div>

      <div class="rewardsExtractBtn" @click="showExtract">
        Extract
      </div>
    </div>

    <extract v-bind:extractShow.sync="extractShow"  :nickName="nickName"
             :maxGameBalance="gameAccountBalance" :totalWinAres="totalWinAres"></extract>

    <a-modal :visible="showWinHistory" :footer="null"  :maskClosable="true" v-if="showWinHistory"
             :width="1050" @cancel="winHistoryCancel" class="winHistoryWrapper" :closable="false">
      <div class="modalTitle">Win History</div>
      <div class="myWinTable winTable">
        <a-table :columns="winHistoryColumns" :data-source="winHistoryData" size="middle" :pagination="winHistoryPagination"
                 :row-key="record => record.id" :scroll="{ x: screenWidth < 450 ? 800 : 0 }"/>
      </div>
      <div>
        <div class="winTableBtn" @click="winHistoryCancel">{{lg("ok")}}</div>
      </div>
    </a-modal>

    <a-modal :visible="showMyWinHistory" :footer="null"  :maskClosable="true"
             :destroyOnClose="true" v-if="showMyWinHistory" :closable="false"
             :width="1050" class="winHistoryWrapper">
      <div class="modalTitle">Latest Records</div>
      <div class="myWinTable">
        <a-table :columns="MyWinColumns" :data-source="myWinHistoryData" size="middle"
                 :pagination="myWinHistoryPagination"
                 :row-key="record => record.create_time + record.address"
                 :scroll="{ x: screenWidth < 450 ? 800 : 0 }">
          <template slot="GodAvatar" slot-scope="text">
            <div class="tableGodAvatar">
              <div class="godAvatar">
                <img :src="gods[text].url" alt="">
              </div>
              <span>{{lg(gods[text].name)}}</span>
            </div>
          </template>
        </a-table>
      </div>
      <div>
        <div class="winTableBtn" @click="myWinHistoryCancel">{{lg("ok")}}</div>
      </div>
    </a-modal>

    <a-modal :visible="showWithdrawHistory" :footer="null"  :maskClosable="true"
             :destroyOnClose="true" v-if="showWithdrawHistory" :closable="false"
             :width="1050" class="winHistoryWrapper">
      <div class="modalTitle">Extract Records</div>
      <div class="myWinTable">
        <a-table :columns="withdrawColumns" :data-source="myWithdraw" size="middle"
                 :pagination="withdrawPagination"
                 :row-key="record => record.apply_time "
                 :scroll="{ x: screenWidth < 450 ? 800 : 0 }">
          <template slot="status" slot-scope="text">
            <span v-if="text === 0">unProcess</span>
            <span v-if="text === 1">processing</span>
            <i class="fa fa-clock-o" aria-hidden="true" v-if="text === 2"></i>
          </template>
        </a-table>
      </div>
      <div>
        <div class="winTableBtn" @click="withdrawCancel">{{lg("ok")}}</div>
      </div>
    </a-modal>
  </div>
</template>

<script>
import bus from "../../../bus";
import extract from "../comps/extract"

export default {
  name: "win",
  components: {extract},
  data() {
    return {
      title: "win_now",
      selectGod: "",
      selectGodIndex: 1,
      nickName: "",
      showCard: "",
      selectedRewards: "today",
      screenWidth: 0,
      extractShow: false,
      selectGodUrl: "",
      todayWinAres: 0,
      totalWinAres: 0,
      gameAccountBalance: 0,
      broadcasts: [],
      extractAccount: "",
      lastWinMoney: 0,
      lastSelectGodIndex: 0,
      lastPlayGameTime: 0,
      countDownInterval: null,
      countDownTime: 0,
      timerMarquee: null,
      showWinHistory: false,
      winHistoryColumns: [
        {
          dataIndex: 'id',
          className: "tableHide"
        },
        {
          title: 'User',
          dataIndex: 'nick_name',
          align: 'left'
        },
        {
          title: 'Rewards',
          dataIndex: 'bonus',
          align: 'center'
        },
        {
          title: 'BSC',
          dataIndex: 'address',
          align: 'center'
        },
      ],
      winHistoryData: [],
      winHistoryPagination: {
        pageSize: 10,
        showSizeChanger: false,
        total: 0,
        onChange: (pageIndex) => {
          this.getWinHistory(pageIndex - 1);
        },
      },
      showMyWinHistory: false,
      MyWinColumns: [
        {
          title: 'Time',
          dataIndex: 'create_time',
          align: 'left',
        },
        {
          title: 'Rewards',
          dataIndex: 'bonus',
          align: 'left'
        },
        {
          title: 'God',
          dataIndex: 'chosen_index',
          align: 'left',
          scopedSlots: { customRender: 'GodAvatar' },
        },
      ],
      myWinHistoryData: [],
      myWinHistoryPagination: {
        pageSize: 10,
        showSizeChanger: false,
        total: 0,
        onChange: (pageIndex) => {
          this.getMyWinHistory(pageIndex - 1);
        },
      },
      showWithdrawHistory: false,
      withdrawColumns: [
        {
          title: 'User',
          dataIndex: 'nick_name',
          align: 'left',
        },
        {
          title: 'Extract Rewards',
          dataIndex: 'bonus',
          align: 'left'
        },
        {
          title: 'Time',
          dataIndex: 'apply_time',
          align: 'left',
        },
        {
          title: 'Status',
          dataIndex: 'state',
          align: 'left',
          scopedSlots: {customRender: 'status'},
        },
      ],
      myWithdraw: [],
      withdrawPagination: {
        pageSize: 10,
        showSizeChanger: false,
        total: 0,
        onChange: (pageIndex) => {
          this.getMyWithdraw(pageIndex - 1);
        },
      },
      gods: [
        {
          index: 0,
          name: "eris",
          slogan: "eris_desc",
          desc: "eris_type",
          army: "eris_army",
          url: "/static/img/gods/Eris.png",
          trs_url: "/static/img/gods_trs/Eris.png",
        },
        {
          index: 1,
          name: "aphrodite",
          slogan: "aphrodite_desc",
          desc: "aphrodite_type",
          army: "aphrodite_army",
          url: "/static/img/gods/Aphrodite.png",
          trs_url: "/static/img/gods_trs/Aphrodite.png",
        },
        {
          index: 2,
          name: "athena",
          slogan: "athena_desc",
          desc: "athena_type",
          army: "athena_army",
          url: "/static/img/gods/Athena.png",
          trs_url: "/static/img/gods_trs/Athena.png",
        },
        {
          index: 3,
          name: "hera",
          slogan: "hera_desc",
          desc: "hera_type",
          army: "hera_army",
          url: "/static/img/gods/Hera.png",
          trs_url: "/static/img/gods_trs/Hera.png",
        },
        {
          index: 4,
          name: "thetis",
          slogan: "thetis_desc",
          desc: "thetis_type",
          army: "thetis_army",
          url: "/static/img/gods/Thetis.png",
          trs_url: "/static/img/gods_trs/Thetis.png",
        },
        {
          index: 5,
          name: "zeus",
          slogan: "zeus_desc",
          desc: "zeus_type",
          army: "zeus_army",
          url: "/static/img/gods/Zeus.png",
          trs_url: "/static/img/gods_trs/Zeus.png",
        },
        {
          index: 6,
          name: "apollo",
          slogan: "apollo_desc",
          desc: "apollo_type",
          army: "apollo_army",
          url: "/static/img/gods/Apollo.png",
          trs_url: "/static/img/gods_trs/Apollo.png",
        },
        {
          index: 7,
          name: "ares",
          slogan: "ares_desc",
          desc: "ares_type",
          army: "ares_army",
          url: "/static/img/gods/Ares.png",
          trs_url: "/static/img/gods_trs/Ares.png",
        },
        {
          index: 8,
          name: "hermes",
          slogan: "hermes_desc",
          desc: "hermes_type",
          army: "hermes_army",
          url: "/static/img/gods/Hermes.png",
          trs_url: "/static/img/gods_trs/Hermes.png",
        }
      ],
      broadcastInterval: null,
      updateDataInterval: null,
      broadcastShow: true,
      prize: 500000,
    }
  },
  mounted() {
    this.screenWidth = window.innerWidth;
    this.init();
    this.getBroadcast();
    this.runMarquee();
    this.getDefaultAddress();
    this.getPrize();
    this.initBroadcastInterval();
    this.updateDataInterval = setInterval(() => {
      this.getBroadcast();
      this.getPrize();
      this.getMyBonus();
    }, 1000 * 60);
  },
  beforeDestroy() {
    if(this.countDownInterval) {
      clearInterval(this.countDownInterval);
    }
    if (this.broadcastInterval) {
      clearInterval(this.broadcastInterval);
    }

    if (this.updateDataInterval) {
      clearInterval(this.updateDataInterval);
    }
  },
  methods: {
    initBroadcastInterval() {
      if (this.broadcastInterval) {
        clearInterval(this.broadcastInterval);
      }
      this.broadcastInterval = setInterval(() => {
        this.broadcastShow = !this.broadcastShow;
      }, 10000);
    },
    initCountDown() {
      if (this.countDownInterval) {
        clearInterval(this.countDownInterval);
      }

      const now = parseInt((new Date() / 1000));
      let startTime = new Date(new Date().setMinutes(0, 0, 1));
      let endTime = new Date(new Date().setMinutes(0, 0, 0) +  60 * 60 * 1000);
      startTime = parseInt((startTime - 1) / 1000);
      endTime = parseInt((endTime - 1) / 1000);


      const diffTime = endTime - now;
      if (this.lastPlayGameTime > startTime) {
        this.countDownTime = diffTime;
        this.countDownInterval = setInterval(() => {
          this.countDownTime -= 1;
          if (this.countDownTime < 0) {
            clearInterval(this.countDownInterval);
            this.countDownInterval = null;
          }
        }, 1000)
      }
    },
    async getDefaultAddress() {
      let v = this;
      const local_address = await v.action.getAddress();
      this.extractAccount = local_address;
    },
    getPrize() {
      fetch(`/api/v1/bonus_pool/info`, {
        method: "GET",
        mode: "cors",
      }).then(async (res) => {
        const result = await res.json();
        this.prize = result.data.total;
      });
    },
    setSelectGod(name, index) {
      this.selectGod = name;
      this.selectGodIndex = index;
    },
    goBack() {
      this.$router.push("/box");
    },
    changeTitle(title) {
      this.title = title;
      if (title === "my_profile") {
        this.showCard = "myProfile";
      } else if(title === "win_now") {
        this.showCard = "";
      }
    },
    changeShowCard(cardName) {
      this.showCard = cardName;
      if (cardName === "myRewards") {
        this.title = "";
        this.switchRewardsType('today');
      }
    },
    toPlayGame() {
      if (this.countDownTime <= 0) {
        this.$router.push('/box/games');
      }
    },
    switchRewardsType(type) {
      this.selectedRewards = type;
      const token = this.$store.state.trojanBox.token;
      if (token) {
        fetch("/api/v1/bonus/my", {
          method: "GET",
          mode: "cors",
          headers: {
            "Authorization": "Bearer " + token
          },
        }).then(async (res) => {
          const result = await res.json();
          this.totalWinAres = result.data.total_win;
          this.todayWinAres = result.data.today_win;
          this.gameAccountBalance = result.data.balance;
        })
      } else {
        this.init();
      }
    },
    getMyBonus() {
      const token = this.$store.state.trojanBox.token;
      if (!token) {
        return;
      }
      fetch("/api/v1/bonus/my", {
        method: "GET",
        mode: "cors",
        headers: {
          "Authorization": "Bearer " + token
        },
      }).then(async (res) => {
        const result = await res.json();
        this.totalWinAres = result.data.total_win;
        this.todayWinAres = result.data.today_win;
        this.gameAccountBalance = result.data.balance;
      })
    },
    getUserProfile() {
      const token = this.$store.state.trojanBox.token;
      fetch("/api/v1/user/profile", {
        method: "GET",
        mode: "cors",
        headers: {
          "Authorization": "Bearer " + token
        },
      }).then(async (res) => {
        const result = await res.json();
        this.nickName = result.data.nick_name;
        this.selectGodIndex = result.data.avatar;
        this.selectGodUrl = this.gods[result.data.avatar].url;
      })
    },
    updateUserProfile() {
      const token = this.$store.state.trojanBox.token;
      const data = {
        avatar: this.selectGodIndex,
        nick_name: this.nickName
      }
      fetch("/api/v1/user/profile", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
        body: JSON.stringify(data),
      }).then(async (res) => {
        const result = await res.json();
        this.title = "win_now";
        this.showCard = "";
        this.selectGodUrl = this.gods[this.selectGodIndex].url;
      })
    },
    getBroadcast() {
      let language = window.lang;
      if (language === 'zh') {
        language = "zh_CN";
      }
      fetch("/api/v1/broadcast?page=0&size=20", {
        method: "GET",
        mode: "cors",
        headers: {
          lang: language,
        }
      }).then( async (res) => {
        const result = await res.json();
        this.broadcasts = result.data.items;
      })
    },
    showExtract() {
      if (this.gameAccountBalance < 100) {
        this.rewardsLess = !this.rewardsLess
      } else {
        this.extractShow = !this.extractShow
      }
    },
    extractConfirm() {
      if (this.extractNum < 100) {
        this.rewardsLess = !this.rewardsLess;
      } else {
        this.shareCardShow = !this.shareCardShow;
        this.extractShow = false;
      }
    },
    init() {
        const token = this.$store.state.trojanBox.token;
        if(token) {
          this.getUserProfile();
          this.getMyBonus();
          this.getLastPlayGameInfo();
          return;
        }
        const timestamp = parseInt(new Date().getTime() / 1000);
        let v = this;
        v.action.getAddress().then(address => {
          address = v.myWeb3.utils.toChecksumAddress(address);
          fetch(`/api/v1/nonce?address=${address}`, {
            method: "GET",
            mode: "cors",
          }).then(async (res) => {
            const nonceRes = await res.json();
            const LoginSignMsg = `
trojan-box wants you to sign in with your Ethereum account:
${address}
for login
Nonce: ${nonceRes.data}
Timestamp: ${timestamp}
`

            const msg = v.myWeb3.utils.keccak256(LoginSignMsg);
            v.myWeb3.eth.sign(msg, address).then(sign => {
              const signBytes = v.myWeb3.utils.hexToBytes(sign);
              signBytes[64] -= 27;
              sign = v.myWeb3.utils.bytesToHex(signBytes);
              const param = {
                address: address,
                nonce: nonceRes.data,
                signed_msg: sign,
                timestamp: timestamp.toString()
              }
              fetch("/api/v1/user/auth", {
                method: "POST",
                mode: "cors",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(param),
              }).then(async (res) => {
                if (res.ok) {
                  const result = await res.json();
                  bus.appvue.$store.commit("setToken", result.data);
                  this.getUserProfile();
                  this.getMyBonus();
                  this.getLastPlayGameInfo();
                } else {
                  return Promise.reject("login error", res);
                }
              });
            });
          })
        });
    },
    getLastPlayGameInfo() {
      const token = this.$store.state.trojanBox.token;
      fetch("/api/v1/game/my/history\n?page=0&size=1", {
        method: "GET",
        mode: "cors",
        headers: {
          "Authorization": "Bearer " + token
        },
      }).then(async (res) => {
        const result = await res.json();
        this.lastWinMoney = result.data.items[0].bonus;
        this.lastPlayGameTime = result.data.items[0].play_time;
        this.lastSelectGodIndex = result.data.items[0].cards[result.data.items[0].chosen_index] - 1;
        this.initCountDown();
      })
    },
    runMarquee() {
      this.stopMarquee();
      this.timerMarquee = requestAnimationFrame(this.landscapeMarquee);
    },
    stopMarquee() {
      this.timerMarquee && cancelAnimationFrame(this.timerMarquee);
    },
    //横向滚动
    landscapeMarquee() {
      this.$refs.marqueeItem.clientWidth + this.$refs.marqueeWrapper.scrollLeft >= this.$refs.marqueeItem.scrollWidth ?
          this.$refs.marqueeWrapper.scrollLeft = 0 : this.$refs.marqueeWrapper.scrollLeft++;
      this.timerMarquee = requestAnimationFrame(this.landscapeMarquee);
    },
    getWinHistory(page, size = 10) {
      this.showWinHistory = true;
      fetch(`/api/v1/game/histories?page=${page}&size=${size}`, {
        method: "GET",
        mode: "cors",
      }).then(async (res) => {
        const result = await res.json();
        this.winHistoryPagination.total = result.data.totalNum;
        result.data.items.map(item => {
          item.address = this.hideMiddle(item.address, 6, 6);
        });
        this.winHistoryData = result.data.items;
      });
    },
    winHistoryCancel() {
      this.showWinHistory = false;
      this.winHistoryPagination.total = 0;
      this.winHistoryData = [];
    },
    getMyWinHistory(page, size = 10) {
      this.showMyWinHistory = true;
      const token = this.$store.state.trojanBox.token;
      fetch(`/api/v1/game/my/history?page=${page}&size=${size}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Authorization": "Bearer " + token
        },
      }).then(async (res) => {
        const result = await res.json();
        this.myWinHistoryPagination.total = result.data.totalNum;
        result.data.items.map(item => {
          item.create_time = new Date(item.play_time * 1000).toLocaleString();
          item.chosen_index = item.cards[item.chosen_index] - 1;
        });
        this.myWinHistoryData = result.data.items;
      });
    },
    getMyWithdraw(page, size = 10) {
      this.showWithdrawHistory = true;
      const token = this.$store.state.trojanBox.token;
      fetch(`/api/v1/withdraw/my/history?page=${page}&size=${size}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Authorization": "Bearer " + token
        },
      }).then(async (res) => {
        const result = await res.json();
        console.log("my withdraw", result);
        this.withdrawPagination.total = result.data.totalNum;
        result.data.items.map(item => {
          item.apply_time = new Date(item.apply_time * 1000).toLocaleString();
        });
        this.myWithdraw = result.data.items;
      });
    },
    myWinHistoryCancel() {
      this.showMyWinHistory = false;
      this.myWinHistoryPagination.total = 0;
      this.myWinHistoryData = [];
    },
    withdrawCancel() {
      this.showWithdrawHistory = false;
      this.withdrawPagination.total = 0;
      this.myWithdraw = [];
    },
    formatTime(second) {
      if (second <= 0) {
        return "";
      } else {
        const h = Math.floor(second / 3600 %24);
        const m = Math.floor(second / 60 % 60);
        let s = Math.floor(second % 60);
        if (s < 10) {
          s = "0" + s;
        }
        if (h < 1) {
          return m + ":" + s;
        } else {
          return h + ":" + m + ":" + s;
        }
      }
    },
    toMedium() {
      window.open("https://aresprotocollab.medium.com", "_blank)");
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
.winnerWrapper {
  width: 100%;
  min-height: 100vh;
  color: #FFF;
  position: relative;
  background: url("../../../assets/image/box_bcg1.png");
  font-family: "Moriis roman",serif;
  background-size: 100% 100%;
  position: relative;
  padding: 0 200px 50px 200px;
}

.bg-animation{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 117px 1613px #607FF6 , 1488px 635px #607FF6 , 944px 914px #607FF6 , 647px 277px #607FF6 , 1792px 1205px #607FF6 , 656px 1517px #607FF6 , 820px 1839px #607FF6 , 1153px 1400px #607FF6 , 870px 13px #607FF6 , 550px 702px #607FF6 , 1155px 1056px #607FF6 , 88px 1709px #607FF6 , 1450px 1090px #607FF6 , 1929px 457px #607FF6 , 1390px 905px #607FF6 , 1771px 269px #607FF6 , 1741px 669px #607FF6 , 432px 64px #607FF6 , 563px 996px #607FF6 , 1918px 1873px #607FF6 , 1845px 1211px #607FF6 , 231px 1503px #607FF6 , 37px 220px #607FF6 , 1970px 495px #607FF6 , 1812px 925px #607FF6 , 67px 1398px #607FF6 , 535px 279px #607FF6 , 1837px 829px #607FF6 , 1945px 685px #607FF6 , 1677px 1817px #607FF6 , 1317px 1415px #607FF6 , 1785px 905px #607FF6 , 1787px 1554px #607FF6 , 802px 1296px #607FF6 , 512px 1101px #607FF6 , 583px 1364px #607FF6 , 336px 558px #607FF6 , 979px 334px #607FF6 , 106px 792px #607FF6 , 204px 34px #607FF6 , 1845px 1763px #607FF6 , 445px 1599px #607FF6 , 386px 453px #607FF6 , 471px 952px #607FF6 , 1466px 1676px #607FF6 , 1885px 303px #607FF6 , 51px 1717px #607FF6 , 1211px 299px #607FF6 , 1546px 1887px #607FF6 , 1067px 33px #607FF6 , 1088px 1326px #607FF6 , 1938px 760px #607FF6 , 470px 648px #607FF6 , 1213px 269px #607FF6 , 1767px 78px #607FF6 , 977px 976px #607FF6 , 1926px 175px #607FF6 , 722px 1512px #607FF6 , 945px 227px #607FF6 , 1811px 99px #607FF6 , 1912px 1406px #607FF6 , 1602px 1243px #607FF6 , 610px 449px #607FF6 , 654px 1393px #607FF6 , 1930px 1193px #607FF6 , 258px 1184px #607FF6 , 89px 265px #607FF6 , 824px 1494px #607FF6 , 1506px 1435px #607FF6 , 1027px 753px #607FF6 , 1px 1197px #607FF6 , 530px 1161px #607FF6 , 864px 1555px #607FF6 , 1610px 1604px #607FF6 , 1035px 1114px #607FF6 , 1456px 133px #607FF6 , 1196px 1253px #607FF6 , 361px 1037px #607FF6 , 834px 351px #607FF6 , 436px 1676px #607FF6 , 1194px 1007px #607FF6 , 1141px 647px #607FF6 , 319px 454px #607FF6 , 937px 1769px #607FF6 , 1872px 1013px #607FF6 , 733px 643px #607FF6 , 1250px 511px #607FF6 , 189px 296px #607FF6 , 1639px 163px #607FF6 , 1584px 336px #607FF6 , 1912px 1343px #607FF6 , 1298px 1307px #607FF6 , 1750px 902px #607FF6 , 1129px 845px #607FF6 , 1899px 1470px #607FF6 , 1427px 232px #607FF6 , 1391px 838px #607FF6 , 1225px 1819px #607FF6 , 190px 1366px #607FF6 , 1865px 518px #607FF6 , 203px 1383px #607FF6 , 1455px 614px #607FF6 , 423px 354px #607FF6 , 1678px 1790px #607FF6 , 241px 608px #607FF6 , 1089px 730px #607FF6 , 1342px 38px #607FF6 , 1848px 249px #607FF6 , 1874px 1785px #607FF6 , 1040px 1837px #607FF6 , 751px 261px #607FF6 , 510px 1975px #607FF6 , 52px 795px #607FF6 , 1786px 1310px #607FF6 , 498px 712px #607FF6 , 190px 375px #607FF6 , 1341px 722px #607FF6 , 43px 1394px #607FF6 , 1821px 1687px #607FF6 , 106px 130px #607FF6 , 1717px 1978px #607FF6 , 168px 151px #607FF6 , 183px 740px #607FF6 , 945px 1381px #607FF6 , 669px 1170px #607FF6 , 1285px 1816px #607FF6 , 110px 1217px #607FF6 , 1623px 813px #607FF6 , 869px 647px #607FF6 , 867px 582px #607FF6 , 735px 1240px #607FF6 , 519px 1896px #607FF6 , 132px 156px #607FF6 , 1649px 193px #607FF6 , 241px 1109px #607FF6 , 643px 484px #607FF6 , 574px 1282px #607FF6 , 1952px 564px #607FF6 , 1978px 145px #607FF6 , 329px 903px #607FF6 , 1674px 617px #607FF6 , 1978px 558px #607FF6 , 1808px 1715px #607FF6 , 1526px 1238px #607FF6 , 475px 1330px #607FF6 , 810px 425px #607FF6 , 1709px 634px #607FF6 , 1658px 336px #607FF6 , 425px 194px #607FF6 , 352px 96px #607FF6 , 148px 180px #607FF6 , 1139px 1046px #607FF6 , 1809px 1233px #607FF6 , 1669px 171px #607FF6 , 263px 1394px #607FF6 , 534px 715px #607FF6 , 396px 1008px #607FF6 , 589px 1445px #607FF6 , 1190px 381px #607FF6 , 1709px 279px #607FF6 , 520px 891px #607FF6 , 1136px 1867px #607FF6 , 1280px 1233px #607FF6 , 836px 296px #607FF6 , 1348px 646px #607FF6 , 1539px 913px #607FF6 , 423px 781px #607FF6 , 1271px 1805px #607FF6 , 696px 564px #607FF6 , 1549px 804px #607FF6 , 303px 1555px #607FF6 , 1449px 1903px #607FF6 , 66px 687px #607FF6 , 1164px 856px #607FF6 , 1958px 1326px #607FF6 , 125px 157px #607FF6 , 508px 1669px #607FF6 , 465px 725px #607FF6 , 1925px 1440px #607FF6 , 405px 793px #607FF6 , 278px 110px #607FF6 , 1084px 1065px #607FF6 , 1077px 705px #607FF6 , 663px 1844px #607FF6 , 734px 263px #607FF6 , 870px 1761px #607FF6 , 103px 1169px #607FF6 , 1506px 1295px #607FF6 , 1883px 926px #607FF6 , 335px 1361px #607FF6 , 1126px 1284px #607FF6 , 257px 1165px #607FF6 , 837px 580px #607FF6 , 1211px 1362px #607FF6 , 1137px 1380px #607FF6 , 135px 632px #607FF6 , 1491px 1965px #607FF6 , 1098px 195px #607FF6 , 506px 417px #607FF6 , 693px 1243px #607FF6 , 622px 1862px #607FF6 , 1412px 1343px #607FF6 , 948px 1894px #607FF6 , 1315px 1363px #607FF6 , 754px 1098px #607FF6 , 1931px 930px #607FF6 , 1831px 342px #607FF6 , 1751px 1839px #607FF6 , 84px 775px #607FF6 , 1662px 1488px #607FF6 , 617px 1769px #607FF6 , 1869px 1292px #607FF6 , 963px 432px #607FF6 , 371px 1114px #607FF6 , 37px 642px #607FF6 , 21px 1184px #607FF6 , 602px 366px #607FF6 , 414px 524px #607FF6 , 282px 244px #607FF6 , 1689px 868px #607FF6 , 943px 681px #607FF6 , 898px 679px #607FF6 , 449px 1774px #607FF6 , 1678px 1313px #607FF6 , 475px 1811px #607FF6 , 1146px 1509px #607FF6 , 1151px 1863px #607FF6 , 1617px 846px #607FF6 , 82px 1077px #607FF6 , 324px 1317px #607FF6 , 1516px 885px #607FF6 , 1706px 1526px #607FF6 , 1925px 1180px #607FF6 , 553px 967px #607FF6 , 1072px 536px #607FF6 , 1715px 1816px #607FF6 , 185px 286px #607FF6 , 1362px 1600px #607FF6 , 628px 1938px #607FF6 , 1187px 412px #607FF6 , 569px 211px #607FF6 , 1959px 1356px #607FF6 , 1571px 105px #607FF6 , 319px 1111px #607FF6 , 36px 1364px #607FF6 , 502px 1788px #607FF6 , 1051px 1993px #607FF6 , 1617px 773px #607FF6 , 424px 1507px #607FF6 , 1623px 1955px #607FF6 , 307px 662px #607FF6 , 183px 1048px #607FF6 , 1919px 1453px #607FF6 , 1006px 1817px #607FF6 , 468px 673px #607FF6 , 1142px 1375px #607FF6 , 1228px 443px #607FF6 , 1734px 552px #607FF6 , 20px 1041px #607FF6 , 1783px 334px #607FF6 , 98px 1237px #607FF6 , 1356px 1940px #607FF6 , 853px 1779px #607FF6 , 1910px 560px #607FF6 , 1174px 1656px #607FF6 , 110px 1724px #607FF6 , 542px 1771px #607FF6 , 1758px 1931px #607FF6 , 1463px 1401px #607FF6 , 1155px 84px #607FF6 , 1504px 835px #607FF6 , 750px 322px #607FF6 , 407px 1900px #607FF6 , 1600px 1141px #607FF6 , 657px 886px #607FF6 , 526px 714px #607FF6 , 18px 836px #607FF6 , 1546px 1548px #607FF6 , 22px 469px #607FF6 , 594px 1466px #607FF6 , 1160px 1078px #607FF6 , 627px 1055px #607FF6 , 195px 699px #607FF6 , 1099px 684px #607FF6 , 530px 551px #607FF6 , 1160px 1325px #607FF6 , 894px 727px #607FF6 , 1157px 98px #607FF6 , 136px 1483px #607FF6 , 1875px 1975px #607FF6 , 1803px 566px #607FF6 , 318px 1073px #607FF6 , 1866px 1656px #607FF6 , 543px 414px #607FF6 , 719px 474px #607FF6 , 1115px 738px #607FF6 , 353px 875px #607FF6 , 184px 1938px #607FF6 , 1854px 1534px #607FF6 , 420px 1698px #607FF6 , 1480px 1550px #607FF6 , 522px 203px #607FF6 , 1897px 1904px #607FF6 , 975px 1708px #607FF6 , 1774px 602px #607FF6 , 1908px 274px #607FF6 , 61px 715px #607FF6 , 983px 1156px #607FF6 , 326px 1013px #607FF6 , 641px 290px #607FF6 , 1522px 120px #607FF6 , 405px 1637px #607FF6 , 1021px 1099px #607FF6 , 631px 1145px #607FF6 , 982px 1967px #607FF6 , 200px 651px #607FF6 , 795px 351px #607FF6 , 790px 1082px #607FF6 , 144px 1572px #607FF6 , 1542px 901px #607FF6 , 158px 1524px #607FF6 , 849px 1843px #607FF6 , 1807px 203px #607FF6 , 1747px 45px #607FF6 , 1603px 1738px #607FF6 , 617px 1966px #607FF6 , 342px 748px #607FF6 , 1779px 1173px #607FF6 , 1428px 152px #607FF6 , 589px 1998px #607FF6 , 1940px 1838px #607FF6 , 115px 272px #607FF6 , 1217px 1395px #607FF6 , 1402px 1491px #607FF6 , 1833px 1814px #607FF6 , 243px 966px #607FF6 , 319px 578px #607FF6 , 813px 364px #607FF6 , 669px 882px #607FF6 , 551px 134px #607FF6 , 1819px 920px #607FF6 , 740px 1826px #607FF6 , 1021px 952px #607FF6 , 1575px 453px #607FF6 , 324px 419px #607FF6 , 929px 417px #607FF6 , 885px 1112px #607FF6 , 503px 187px #607FF6 , 1908px 362px #607FF6 , 1063px 1601px #607FF6 , 169px 1792px #607FF6 , 789px 963px #607FF6 , 1697px 948px #607FF6 , 1761px 1810px #607FF6 , 1844px 1591px #607FF6 , 1709px 949px #607FF6 , 1402px 1396px #607FF6 , 1037px 225px #607FF6 , 1832px 518px #607FF6 , 1728px 1782px #607FF6 , 194px 1421px #607FF6 , 1395px 742px #607FF6 , 1478px 1325px #607FF6 , 40px 593px #607FF6 , 1732px 117px #607FF6 , 51px 158px #607FF6 , 1598px 1672px #607FF6 , 701px 849px #607FF6 , 1403px 1979px #607FF6 , 145px 1414px #607FF6 , 550px 906px #607FF6 , 1366px 460px #607FF6 , 142px 1379px #607FF6 , 34px 1864px #607FF6 , 1346px 308px #607FF6 , 293px 998px #607FF6 , 21px 1868px #607FF6 , 540px 1033px #607FF6 , 60px 746px #607FF6 , 1602px 1476px #607FF6 , 180px 804px #607FF6 , 345px 1982px #607FF6 , 1439px 640px #607FF6 , 939px 1834px #607FF6 , 20px 432px #607FF6 , 492px 1549px #607FF6 , 109px 1579px #607FF6 , 1796px 1403px #607FF6 , 1079px 519px #607FF6 , 1664px 389px #607FF6 , 1627px 1061px #607FF6 , 823px 419px #607FF6 , 1399px 1882px #607FF6 , 1906px 344px #607FF6 , 1189px 848px #607FF6 , 117px 882px #607FF6 , 1262px 33px #607FF6 , 1048px 434px #607FF6 , 1208px 1309px #607FF6 , 1616px 408px #607FF6 , 1833px 853px #607FF6 , 1433px 1656px #607FF6 , 811px 1861px #607FF6 , 439px 1672px #607FF6 , 1105px 248px #607FF6 , 328px 1652px #607FF6 , 13px 1658px #607FF6 , 685px 987px #607FF6 , 985px 403px #607FF6 , 1664px 1206px #607FF6 , 1993px 1925px #607FF6 , 440px 917px #607FF6 , 1835px 319px #607FF6 , 1404px 1907px #607FF6 , 624px 1443px #607FF6 , 843px 954px #607FF6 , 478px 1567px #607FF6 , 895px 1602px #607FF6 , 1231px 871px #607FF6 , 1267px 1646px #607FF6 , 475px 334px #607FF6 , 784px 796px #607FF6 , 1294px 199px #607FF6 , 109px 702px #607FF6 , 1978px 362px #607FF6 , 291px 940px #607FF6 , 971px 1343px #607FF6 , 74px 719px #607FF6 , 36px 715px #607FF6 , 1007px 1423px #607FF6 , 860px 314px #607FF6 , 631px 177px #607FF6 , 1900px 1590px #607FF6 , 1239px 1348px #607FF6 , 1346px 1270px #607FF6 , 1934px 1475px #607FF6 , 1553px 559px #607FF6 , 588px 1969px #607FF6 , 670px 1269px #607FF6 , 1484px 376px #607FF6 , 20px 1424px #607FF6 , 1396px 8px #607FF6 , 969px 244px #607FF6 , 1807px 538px #607FF6 , 1873px 891px #607FF6 , 636px 1142px #607FF6 , 1474px 1562px #607FF6 , 763px 350px #607FF6 , 663px 700px #607FF6 , 500px 1469px #607FF6 , 1302px 722px #607FF6 , 181px 291px #607FF6 , 266px 893px #607FF6 , 1403px 654px #607FF6 , 492px 460px #607FF6 , 1503px 1369px #607FF6 , 23px 1662px #607FF6 , 349px 333px #607FF6 , 1435px 1017px #607FF6 , 1441px 705px #607FF6 , 1708px 1446px #607FF6 , 1041px 911px #607FF6 , 1063px 780px #607FF6 , 1158px 1356px #607FF6 , 767px 1454px #607FF6 , 1912px 797px #607FF6 , 1731px 1759px #607FF6 , 1378px 1390px #607FF6 , 1815px 1364px #607FF6 , 960px 270px #607FF6 , 1343px 427px #607FF6 , 275px 203px #607FF6 , 1319px 1092px #607FF6 , 1455px 770px #607FF6 , 283px 1503px #607FF6 , 1505px 901px #607FF6 , 1738px 1561px #607FF6 , 1526px 1935px #607FF6 , 1757px 669px #607FF6 , 1640px 620px #607FF6 , 1750px 722px #607FF6 , 748px 66px #607FF6 , 1149px 540px #607FF6 , 159px 953px #607FF6 , 200px 1426px #607FF6 , 515px 1110px #607FF6 , 1552px 737px #607FF6 , 1094px 1459px #607FF6 , 778px 799px #607FF6 , 1031px 523px #607FF6 , 743px 1825px #607FF6 , 1100px 882px #607FF6 , 1088px 1836px #607FF6 , 255px 599px #607FF6 , 67px 1361px #607FF6 , 247px 1721px #607FF6 , 1722px 346px #607FF6 , 1822px 155px #607FF6 , 452px 1973px #607FF6 , 415px 1960px #607FF6 , 1109px 57px #607FF6 , 273px 1392px #607FF6 , 404px 1071px #607FF6 , 1212px 353px #607FF6 , 370px 460px #607FF6 , 795px 1523px #607FF6 , 1932px 340px #607FF6 , 51px 1473px #607FF6 , 1268px 364px #607FF6 , 1512px 1862px #607FF6 , 1678px 1801px #607FF6 , 1796px 579px #607FF6 , 254px 251px #607FF6 , 1466px 1717px #607FF6 , 893px 379px #607FF6 , 1153px 923px #607FF6 , 913px 1808px #607FF6 , 791px 789px #607FF6 , 417px 1924px #607FF6 , 1336px 1599px #607FF6 , 1695px 908px #607FF6 , 1120px 114px #607FF6 , 493px 1949px #607FF6 , 68px 1905px #607FF6 , 969px 481px #607FF6 , 1420px 1095px #607FF6 , 800px 1117px #607FF6 , 390px 234px #607FF6 , 356px 1644px #607FF6 , 1098px 1486px #607FF6 , 1360px 521px #607FF6 , 149px 1198px #607FF6 , 354px 747px #607FF6 , 1749px 487px #607FF6 , 470px 76px #607FF6 , 1672px 289px #607FF6 , 1731px 545px #607FF6 , 1547px 1590px #607FF6 , 498px 692px #607FF6 , 398px 1592px #607FF6 , 1846px 1237px #607FF6 , 1537px 1474px #607FF6 , 1726px 1374px #607FF6 , 1922px 858px #607FF6 , 376px 321px #607FF6 , 985px 227px #607FF6 , 234px 1421px #607FF6 , 760px 745px #607FF6 , 1990px 1132px #607FF6 , 1560px 1597px #607FF6 , 338px 1310px #607FF6 , 1924px 1664px #607FF6 , 547px 1747px #607FF6 , 1639px 1282px #607FF6 , 1202px 337px #607FF6 , 1985px 779px #607FF6 , 737px 456px #607FF6 , 89px 501px #607FF6 , 963px 792px #607FF6 , 655px 1447px #607FF6 , 1492px 1994px #607FF6 , 1171px 254px #607FF6 , 892px 827px #607FF6 , 1735px 442px #607FF6 , 1474px 1187px #607FF6 , 846px 1518px #607FF6 , 557px 1805px #607FF6 , 738px 945px #607FF6 , 795px 68px #607FF6 , 663px 1956px #607FF6 , 1607px 290px #607FF6 , 1524px 15px #607FF6 , 1097px 1911px #607FF6 , 157px 1939px #607FF6 , 935px 1065px #607FF6 , 1809px 1708px #607FF6 , 164px 1157px #607FF6 , 83px 855px #607FF6 , 625px 501px #607FF6 , 814px 398px #607FF6 , 552px 695px #607FF6 , 597px 1546px #607FF6 , 1237px 1417px #607FF6 , 628px 284px #607FF6 , 866px 767px #607FF6 , 1403px 1394px #607FF6 , 765px 1563px #607FF6 , 1648px 109px #607FF6 , 1205px 1659px #607FF6 , 921px 1313px #607FF6 , 1319px 243px #607FF6 , 18px 125px #607FF6 , 7px 777px #607FF6 , 181px 418px #607FF6 , 1062px 1892px #607FF6 , 382px 106px #607FF6 , 994px 751px #607FF6 , 964px 234px #607FF6 , 40px 118px #607FF6 , 278px 706px #607FF6 , 1540px 1978px #607FF6 , 425px 1661px #607FF6 , 1050px 321px #607FF6 , 735px 1729px #607FF6 , 1438px 260px #607FF6 , 1229px 1109px #607FF6 , 186px 1041px #607FF6 , 244px 1184px #607FF6 , 392px 1472px #607FF6 , 670px 1249px #607FF6 , 1260px 1443px #607FF6 , 1977px 1511px #607FF6 , 1240px 773px #607FF6 , 303px 513px #607FF6 , 63px 1530px #607FF6 , 610px 792px #607FF6 , 1987px 1647px #607FF6 , 676px 1597px #607FF6 , 1740px 1244px #607FF6 , 816px 1661px #607FF6 , 351px 802px #607FF6 , 252px 1082px #607FF6 , 31px 365px #607FF6 , 1453px 984px #607FF6 , 667px 1233px #607FF6 , 1247px 1800px #607FF6 , 839px 270px #607FF6 , 775px 913px #607FF6 , 1966px 1398px #607FF6 , 499px 813px #607FF6 , 922px 1982px #607FF6 , 1409px 1902px #607FF6 , 1499px 1766px #607FF6 , 721px 899px #607FF6 , 788px 807px #607FF6 , 989px 1355px #607FF6 , 1248px 1274px #607FF6 , 849px 1091px #607FF6 , 1799px 1036px #607FF6 , 1486px 700px #607FF6 , 170px 1989px #607FF6 , 1275px 799px #607FF6 , 772px 2000px #607FF6 , 1642px 362px #607FF6 , 216px 940px #607FF6 , 1893px 281px #607FF6 , 1944px 1298px #607FF6 , 1294px 400px #607FF6 , 1523px 441px #607FF6 , 1829px 340px #607FF6 , 468px 170px #607FF6 , 1099px 967px #607FF6 , 1331px 665px #607FF6 , 1174px 1553px #607FF6 , 1567px 325px #607FF6 , 1028px 1399px #607FF6 , 781px 1451px #607FF6 , 1912px 1954px #607FF6 , 874px 873px #607FF6 , 1298px 1722px #607FF6 , 1879px 706px #607FF6 , 57px 1221px #607FF6 , 1116px 1432px #607FF6 , 48px 811px #607FF6 , 101px 916px #607FF6 , 677px 304px #607FF6 , 1203px 639px #607FF6 , 1391px 199px #607FF6 , 1895px 1988px #607FF6 , 1462px 1023px #607FF6 , 1216px 1751px #607FF6 , 1261px 663px #607FF6 , 1290px 1119px #607FF6 , 137px 1793px #607FF6 , 1052px 1470px #607FF6 , 1561px 226px #607FF6 , 1156px 402px #607FF6 , 709px 693px #607FF6 , 1040px 1911px #607FF6 , 1624px 1115px #607FF6 , 551px 475px #607FF6 , 416px 1090px #607FF6 , 1183px 451px #607FF6 , 58px 765px #607FF6 , 743px 1016px #607FF6 , 198px 369px #607FF6 , 1645px 1503px #607FF6 , 997px 22px #607FF6 , 1447px 1323px #607FF6 , 379px 883px #607FF6 , 1171px 1195px #607FF6 , 919px 133px #607FF6 , 1400px 517px #607FF6 , 725px 804px #607FF6 , 1600px 699px #607FF6 , 357px 581px #607FF6 , 266px 1713px #607FF6 , 848px 1749px #607FF6 , 1963px 1045px #607FF6 , 119px 1136px #607FF6;
  -webkit-animation: animStar 50s linear infinite;
  -moz-animation: animStar 50s linear infinite;
  -ms-animation: animStar 50s linear infinite;
  animation: animStar 50s linear infinite;
}
#stars:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 117px 1613px #607FF6 , 1488px 635px #607FF6 , 944px 914px #607FF6 , 647px 277px #607FF6 , 1792px 1205px #607FF6 , 656px 1517px #607FF6 , 820px 1839px #607FF6 , 1153px 1400px #607FF6 , 870px 13px #607FF6 , 550px 702px #607FF6 , 1155px 1056px #607FF6 , 88px 1709px #607FF6 , 1450px 1090px #607FF6 , 1929px 457px #607FF6 , 1390px 905px #607FF6 , 1771px 269px #607FF6 , 1741px 669px #607FF6 , 432px 64px #607FF6 , 563px 996px #607FF6 , 1918px 1873px #607FF6 , 1845px 1211px #607FF6 , 231px 1503px #607FF6 , 37px 220px #607FF6 , 1970px 495px #607FF6 , 1812px 925px #607FF6 , 67px 1398px #607FF6 , 535px 279px #607FF6 , 1837px 829px #607FF6 , 1945px 685px #607FF6 , 1677px 1817px #607FF6 , 1317px 1415px #607FF6 , 1785px 905px #607FF6 , 1787px 1554px #607FF6 , 802px 1296px #607FF6 , 512px 1101px #607FF6 , 583px 1364px #607FF6 , 336px 558px #607FF6 , 979px 334px #607FF6 , 106px 792px #607FF6 , 204px 34px #607FF6 , 1845px 1763px #607FF6 , 445px 1599px #607FF6 , 386px 453px #607FF6 , 471px 952px #607FF6 , 1466px 1676px #607FF6 , 1885px 303px #607FF6 , 51px 1717px #607FF6 , 1211px 299px #607FF6 , 1546px 1887px #607FF6 , 1067px 33px #607FF6 , 1088px 1326px #607FF6 , 1938px 760px #607FF6 , 470px 648px #607FF6 , 1213px 269px #607FF6 , 1767px 78px #607FF6 , 977px 976px #607FF6 , 1926px 175px #607FF6 , 722px 1512px #607FF6 , 945px 227px #607FF6 , 1811px 99px #607FF6 , 1912px 1406px #607FF6 , 1602px 1243px #607FF6 , 610px 449px #607FF6 , 654px 1393px #607FF6 , 1930px 1193px #607FF6 , 258px 1184px #607FF6 , 89px 265px #607FF6 , 824px 1494px #607FF6 , 1506px 1435px #607FF6 , 1027px 753px #607FF6 , 1px 1197px #607FF6 , 530px 1161px #607FF6 , 864px 1555px #607FF6 , 1610px 1604px #607FF6 , 1035px 1114px #607FF6 , 1456px 133px #607FF6 , 1196px 1253px #607FF6 , 361px 1037px #607FF6 , 834px 351px #607FF6 , 436px 1676px #607FF6 , 1194px 1007px #607FF6 , 1141px 647px #607FF6 , 319px 454px #607FF6 , 937px 1769px #607FF6 , 1872px 1013px #607FF6 , 733px 643px #607FF6 , 1250px 511px #607FF6 , 189px 296px #607FF6 , 1639px 163px #607FF6 , 1584px 336px #607FF6 , 1912px 1343px #607FF6 , 1298px 1307px #607FF6 , 1750px 902px #607FF6 , 1129px 845px #607FF6 , 1899px 1470px #607FF6 , 1427px 232px #607FF6 , 1391px 838px #607FF6 , 1225px 1819px #607FF6 , 190px 1366px #607FF6 , 1865px 518px #607FF6 , 203px 1383px #607FF6 , 1455px 614px #607FF6 , 423px 354px #607FF6 , 1678px 1790px #607FF6 , 241px 608px #607FF6 , 1089px 730px #607FF6 , 1342px 38px #607FF6 , 1848px 249px #607FF6 , 1874px 1785px #607FF6 , 1040px 1837px #607FF6 , 751px 261px #607FF6 , 510px 1975px #607FF6 , 52px 795px #607FF6 , 1786px 1310px #607FF6 , 498px 712px #607FF6 , 190px 375px #607FF6 , 1341px 722px #607FF6 , 43px 1394px #607FF6 , 1821px 1687px #607FF6 , 106px 130px #607FF6 , 1717px 1978px #607FF6 , 168px 151px #607FF6 , 183px 740px #607FF6 , 945px 1381px #607FF6 , 669px 1170px #607FF6 , 1285px 1816px #607FF6 , 110px 1217px #607FF6 , 1623px 813px #607FF6 , 869px 647px #607FF6 , 867px 582px #607FF6 , 735px 1240px #607FF6 , 519px 1896px #607FF6 , 132px 156px #607FF6 , 1649px 193px #607FF6 , 241px 1109px #607FF6 , 643px 484px #607FF6 , 574px 1282px #607FF6 , 1952px 564px #607FF6 , 1978px 145px #607FF6 , 329px 903px #607FF6 , 1674px 617px #607FF6 , 1978px 558px #607FF6 , 1808px 1715px #607FF6 , 1526px 1238px #607FF6 , 475px 1330px #607FF6 , 810px 425px #607FF6 , 1709px 634px #607FF6 , 1658px 336px #607FF6 , 425px 194px #607FF6 , 352px 96px #607FF6 , 148px 180px #607FF6 , 1139px 1046px #607FF6 , 1809px 1233px #607FF6 , 1669px 171px #607FF6 , 263px 1394px #607FF6 , 534px 715px #607FF6 , 396px 1008px #607FF6 , 589px 1445px #607FF6 , 1190px 381px #607FF6 , 1709px 279px #607FF6 , 520px 891px #607FF6 , 1136px 1867px #607FF6 , 1280px 1233px #607FF6 , 836px 296px #607FF6 , 1348px 646px #607FF6 , 1539px 913px #607FF6 , 423px 781px #607FF6 , 1271px 1805px #607FF6 , 696px 564px #607FF6 , 1549px 804px #607FF6 , 303px 1555px #607FF6 , 1449px 1903px #607FF6 , 66px 687px #607FF6 , 1164px 856px #607FF6 , 1958px 1326px #607FF6 , 125px 157px #607FF6 , 508px 1669px #607FF6 , 465px 725px #607FF6 , 1925px 1440px #607FF6 , 405px 793px #607FF6 , 278px 110px #607FF6 , 1084px 1065px #607FF6 , 1077px 705px #607FF6 , 663px 1844px #607FF6 , 734px 263px #607FF6 , 870px 1761px #607FF6 , 103px 1169px #607FF6 , 1506px 1295px #607FF6 , 1883px 926px #607FF6 , 335px 1361px #607FF6 , 1126px 1284px #607FF6 , 257px 1165px #607FF6 , 837px 580px #607FF6 , 1211px 1362px #607FF6 , 1137px 1380px #607FF6 , 135px 632px #607FF6 , 1491px 1965px #607FF6 , 1098px 195px #607FF6 , 506px 417px #607FF6 , 693px 1243px #607FF6 , 622px 1862px #607FF6 , 1412px 1343px #607FF6 , 948px 1894px #607FF6 , 1315px 1363px #607FF6 , 754px 1098px #607FF6 , 1931px 930px #607FF6 , 1831px 342px #607FF6 , 1751px 1839px #607FF6 , 84px 775px #607FF6 , 1662px 1488px #607FF6 , 617px 1769px #607FF6 , 1869px 1292px #607FF6 , 963px 432px #607FF6 , 371px 1114px #607FF6 , 37px 642px #607FF6 , 21px 1184px #607FF6 , 602px 366px #607FF6 , 414px 524px #607FF6 , 282px 244px #607FF6 , 1689px 868px #607FF6 , 943px 681px #607FF6 , 898px 679px #607FF6 , 449px 1774px #607FF6 , 1678px 1313px #607FF6 , 475px 1811px #607FF6 , 1146px 1509px #607FF6 , 1151px 1863px #607FF6 , 1617px 846px #607FF6 , 82px 1077px #607FF6 , 324px 1317px #607FF6 , 1516px 885px #607FF6 , 1706px 1526px #607FF6 , 1925px 1180px #607FF6 , 553px 967px #607FF6 , 1072px 536px #607FF6 , 1715px 1816px #607FF6 , 185px 286px #607FF6 , 1362px 1600px #607FF6 , 628px 1938px #607FF6 , 1187px 412px #607FF6 , 569px 211px #607FF6 , 1959px 1356px #607FF6 , 1571px 105px #607FF6 , 319px 1111px #607FF6 , 36px 1364px #607FF6 , 502px 1788px #607FF6 , 1051px 1993px #607FF6 , 1617px 773px #607FF6 , 424px 1507px #607FF6 , 1623px 1955px #607FF6 , 307px 662px #607FF6 , 183px 1048px #607FF6 , 1919px 1453px #607FF6 , 1006px 1817px #607FF6 , 468px 673px #607FF6 , 1142px 1375px #607FF6 , 1228px 443px #607FF6 , 1734px 552px #607FF6 , 20px 1041px #607FF6 , 1783px 334px #607FF6 , 98px 1237px #607FF6 , 1356px 1940px #607FF6 , 853px 1779px #607FF6 , 1910px 560px #607FF6 , 1174px 1656px #607FF6 , 110px 1724px #607FF6 , 542px 1771px #607FF6 , 1758px 1931px #607FF6 , 1463px 1401px #607FF6 , 1155px 84px #607FF6 , 1504px 835px #607FF6 , 750px 322px #607FF6 , 407px 1900px #607FF6 , 1600px 1141px #607FF6 , 657px 886px #607FF6 , 526px 714px #607FF6 , 18px 836px #607FF6 , 1546px 1548px #607FF6 , 22px 469px #607FF6 , 594px 1466px #607FF6 , 1160px 1078px #607FF6 , 627px 1055px #607FF6 , 195px 699px #607FF6 , 1099px 684px #607FF6 , 530px 551px #607FF6 , 1160px 1325px #607FF6 , 894px 727px #607FF6 , 1157px 98px #607FF6 , 136px 1483px #607FF6 , 1875px 1975px #607FF6 , 1803px 566px #607FF6 , 318px 1073px #607FF6 , 1866px 1656px #607FF6 , 543px 414px #607FF6 , 719px 474px #607FF6 , 1115px 738px #607FF6 , 353px 875px #607FF6 , 184px 1938px #607FF6 , 1854px 1534px #607FF6 , 420px 1698px #607FF6 , 1480px 1550px #607FF6 , 522px 203px #607FF6 , 1897px 1904px #607FF6 , 975px 1708px #607FF6 , 1774px 602px #607FF6 , 1908px 274px #607FF6 , 61px 715px #607FF6 , 983px 1156px #607FF6 , 326px 1013px #607FF6 , 641px 290px #607FF6 , 1522px 120px #607FF6 , 405px 1637px #607FF6 , 1021px 1099px #607FF6 , 631px 1145px #607FF6 , 982px 1967px #607FF6 , 200px 651px #607FF6 , 795px 351px #607FF6 , 790px 1082px #607FF6 , 144px 1572px #607FF6 , 1542px 901px #607FF6 , 158px 1524px #607FF6 , 849px 1843px #607FF6 , 1807px 203px #607FF6 , 1747px 45px #607FF6 , 1603px 1738px #607FF6 , 617px 1966px #607FF6 , 342px 748px #607FF6 , 1779px 1173px #607FF6 , 1428px 152px #607FF6 , 589px 1998px #607FF6 , 1940px 1838px #607FF6 , 115px 272px #607FF6 , 1217px 1395px #607FF6 , 1402px 1491px #607FF6 , 1833px 1814px #607FF6 , 243px 966px #607FF6 , 319px 578px #607FF6 , 813px 364px #607FF6 , 669px 882px #607FF6 , 551px 134px #607FF6 , 1819px 920px #607FF6 , 740px 1826px #607FF6 , 1021px 952px #607FF6 , 1575px 453px #607FF6 , 324px 419px #607FF6 , 929px 417px #607FF6 , 885px 1112px #607FF6 , 503px 187px #607FF6 , 1908px 362px #607FF6 , 1063px 1601px #607FF6 , 169px 1792px #607FF6 , 789px 963px #607FF6 , 1697px 948px #607FF6 , 1761px 1810px #607FF6 , 1844px 1591px #607FF6 , 1709px 949px #607FF6 , 1402px 1396px #607FF6 , 1037px 225px #607FF6 , 1832px 518px #607FF6 , 1728px 1782px #607FF6 , 194px 1421px #607FF6 , 1395px 742px #607FF6 , 1478px 1325px #607FF6 , 40px 593px #607FF6 , 1732px 117px #607FF6 , 51px 158px #607FF6 , 1598px 1672px #607FF6 , 701px 849px #607FF6 , 1403px 1979px #607FF6 , 145px 1414px #607FF6 , 550px 906px #607FF6 , 1366px 460px #607FF6 , 142px 1379px #607FF6 , 34px 1864px #607FF6 , 1346px 308px #607FF6 , 293px 998px #607FF6 , 21px 1868px #607FF6 , 540px 1033px #607FF6 , 60px 746px #607FF6 , 1602px 1476px #607FF6 , 180px 804px #607FF6 , 345px 1982px #607FF6 , 1439px 640px #607FF6 , 939px 1834px #607FF6 , 20px 432px #607FF6 , 492px 1549px #607FF6 , 109px 1579px #607FF6 , 1796px 1403px #607FF6 , 1079px 519px #607FF6 , 1664px 389px #607FF6 , 1627px 1061px #607FF6 , 823px 419px #607FF6 , 1399px 1882px #607FF6 , 1906px 344px #607FF6 , 1189px 848px #607FF6 , 117px 882px #607FF6 , 1262px 33px #607FF6 , 1048px 434px #607FF6 , 1208px 1309px #607FF6 , 1616px 408px #607FF6 , 1833px 853px #607FF6 , 1433px 1656px #607FF6 , 811px 1861px #607FF6 , 439px 1672px #607FF6 , 1105px 248px #607FF6 , 328px 1652px #607FF6 , 13px 1658px #607FF6 , 685px 987px #607FF6 , 985px 403px #607FF6 , 1664px 1206px #607FF6 , 1993px 1925px #607FF6 , 440px 917px #607FF6 , 1835px 319px #607FF6 , 1404px 1907px #607FF6 , 624px 1443px #607FF6 , 843px 954px #607FF6 , 478px 1567px #607FF6 , 895px 1602px #607FF6 , 1231px 871px #607FF6 , 1267px 1646px #607FF6 , 475px 334px #607FF6 , 784px 796px #607FF6 , 1294px 199px #607FF6 , 109px 702px #607FF6 , 1978px 362px #607FF6 , 291px 940px #607FF6 , 971px 1343px #607FF6 , 74px 719px #607FF6 , 36px 715px #607FF6 , 1007px 1423px #607FF6 , 860px 314px #607FF6 , 631px 177px #607FF6 , 1900px 1590px #607FF6 , 1239px 1348px #607FF6 , 1346px 1270px #607FF6 , 1934px 1475px #607FF6 , 1553px 559px #607FF6 , 588px 1969px #607FF6 , 670px 1269px #607FF6 , 1484px 376px #607FF6 , 20px 1424px #607FF6 , 1396px 8px #607FF6 , 969px 244px #607FF6 , 1807px 538px #607FF6 , 1873px 891px #607FF6 , 636px 1142px #607FF6 , 1474px 1562px #607FF6 , 763px 350px #607FF6 , 663px 700px #607FF6 , 500px 1469px #607FF6 , 1302px 722px #607FF6 , 181px 291px #607FF6 , 266px 893px #607FF6 , 1403px 654px #607FF6 , 492px 460px #607FF6 , 1503px 1369px #607FF6 , 23px 1662px #607FF6 , 349px 333px #607FF6 , 1435px 1017px #607FF6 , 1441px 705px #607FF6 , 1708px 1446px #607FF6 , 1041px 911px #607FF6 , 1063px 780px #607FF6 , 1158px 1356px #607FF6 , 767px 1454px #607FF6 , 1912px 797px #607FF6 , 1731px 1759px #607FF6 , 1378px 1390px #607FF6 , 1815px 1364px #607FF6 , 960px 270px #607FF6 , 1343px 427px #607FF6 , 275px 203px #607FF6 , 1319px 1092px #607FF6 , 1455px 770px #607FF6 , 283px 1503px #607FF6 , 1505px 901px #607FF6 , 1738px 1561px #607FF6 , 1526px 1935px #607FF6 , 1757px 669px #607FF6 , 1640px 620px #607FF6 , 1750px 722px #607FF6 , 748px 66px #607FF6 , 1149px 540px #607FF6 , 159px 953px #607FF6 , 200px 1426px #607FF6 , 515px 1110px #607FF6 , 1552px 737px #607FF6 , 1094px 1459px #607FF6 , 778px 799px #607FF6 , 1031px 523px #607FF6 , 743px 1825px #607FF6 , 1100px 882px #607FF6 , 1088px 1836px #607FF6 , 255px 599px #607FF6 , 67px 1361px #607FF6 , 247px 1721px #607FF6 , 1722px 346px #607FF6 , 1822px 155px #607FF6 , 452px 1973px #607FF6 , 415px 1960px #607FF6 , 1109px 57px #607FF6 , 273px 1392px #607FF6 , 404px 1071px #607FF6 , 1212px 353px #607FF6 , 370px 460px #607FF6 , 795px 1523px #607FF6 , 1932px 340px #607FF6 , 51px 1473px #607FF6 , 1268px 364px #607FF6 , 1512px 1862px #607FF6 , 1678px 1801px #607FF6 , 1796px 579px #607FF6 , 254px 251px #607FF6 , 1466px 1717px #607FF6 , 893px 379px #607FF6 , 1153px 923px #607FF6 , 913px 1808px #607FF6 , 791px 789px #607FF6 , 417px 1924px #607FF6 , 1336px 1599px #607FF6 , 1695px 908px #607FF6 , 1120px 114px #607FF6 , 493px 1949px #607FF6 , 68px 1905px #607FF6 , 969px 481px #607FF6 , 1420px 1095px #607FF6 , 800px 1117px #607FF6 , 390px 234px #607FF6 , 356px 1644px #607FF6 , 1098px 1486px #607FF6 , 1360px 521px #607FF6 , 149px 1198px #607FF6 , 354px 747px #607FF6 , 1749px 487px #607FF6 , 470px 76px #607FF6 , 1672px 289px #607FF6 , 1731px 545px #607FF6 , 1547px 1590px #607FF6 , 498px 692px #607FF6 , 398px 1592px #607FF6 , 1846px 1237px #607FF6 , 1537px 1474px #607FF6 , 1726px 1374px #607FF6 , 1922px 858px #607FF6 , 376px 321px #607FF6 , 985px 227px #607FF6 , 234px 1421px #607FF6 , 760px 745px #607FF6 , 1990px 1132px #607FF6 , 1560px 1597px #607FF6 , 338px 1310px #607FF6 , 1924px 1664px #607FF6 , 547px 1747px #607FF6 , 1639px 1282px #607FF6 , 1202px 337px #607FF6 , 1985px 779px #607FF6 , 737px 456px #607FF6 , 89px 501px #607FF6 , 963px 792px #607FF6 , 655px 1447px #607FF6 , 1492px 1994px #607FF6 , 1171px 254px #607FF6 , 892px 827px #607FF6 , 1735px 442px #607FF6 , 1474px 1187px #607FF6 , 846px 1518px #607FF6 , 557px 1805px #607FF6 , 738px 945px #607FF6 , 795px 68px #607FF6 , 663px 1956px #607FF6 , 1607px 290px #607FF6 , 1524px 15px #607FF6 , 1097px 1911px #607FF6 , 157px 1939px #607FF6 , 935px 1065px #607FF6 , 1809px 1708px #607FF6 , 164px 1157px #607FF6 , 83px 855px #607FF6 , 625px 501px #607FF6 , 814px 398px #607FF6 , 552px 695px #607FF6 , 597px 1546px #607FF6 , 1237px 1417px #607FF6 , 628px 284px #607FF6 , 866px 767px #607FF6 , 1403px 1394px #607FF6 , 765px 1563px #607FF6 , 1648px 109px #607FF6 , 1205px 1659px #607FF6 , 921px 1313px #607FF6 , 1319px 243px #607FF6 , 18px 125px #607FF6 , 7px 777px #607FF6 , 181px 418px #607FF6 , 1062px 1892px #607FF6 , 382px 106px #607FF6 , 994px 751px #607FF6 , 964px 234px #607FF6 , 40px 118px #607FF6 , 278px 706px #607FF6 , 1540px 1978px #607FF6 , 425px 1661px #607FF6 , 1050px 321px #607FF6 , 735px 1729px #607FF6 , 1438px 260px #607FF6 , 1229px 1109px #607FF6 , 186px 1041px #607FF6 , 244px 1184px #607FF6 , 392px 1472px #607FF6 , 670px 1249px #607FF6 , 1260px 1443px #607FF6 , 1977px 1511px #607FF6 , 1240px 773px #607FF6 , 303px 513px #607FF6 , 63px 1530px #607FF6 , 610px 792px #607FF6 , 1987px 1647px #607FF6 , 676px 1597px #607FF6 , 1740px 1244px #607FF6 , 816px 1661px #607FF6 , 351px 802px #607FF6 , 252px 1082px #607FF6 , 31px 365px #607FF6 , 1453px 984px #607FF6 , 667px 1233px #607FF6 , 1247px 1800px #607FF6 , 839px 270px #607FF6 , 775px 913px #607FF6 , 1966px 1398px #607FF6 , 499px 813px #607FF6 , 922px 1982px #607FF6 , 1409px 1902px #607FF6 , 1499px 1766px #607FF6 , 721px 899px #607FF6 , 788px 807px #607FF6 , 989px 1355px #607FF6 , 1248px 1274px #607FF6 , 849px 1091px #607FF6 , 1799px 1036px #607FF6 , 1486px 700px #607FF6 , 170px 1989px #607FF6 , 1275px 799px #607FF6 , 772px 2000px #607FF6 , 1642px 362px #607FF6 , 216px 940px #607FF6 , 1893px 281px #607FF6 , 1944px 1298px #607FF6 , 1294px 400px #607FF6 , 1523px 441px #607FF6 , 1829px 340px #607FF6 , 468px 170px #607FF6 , 1099px 967px #607FF6 , 1331px 665px #607FF6 , 1174px 1553px #607FF6 , 1567px 325px #607FF6 , 1028px 1399px #607FF6 , 781px 1451px #607FF6 , 1912px 1954px #607FF6 , 874px 873px #607FF6 , 1298px 1722px #607FF6 , 1879px 706px #607FF6 , 57px 1221px #607FF6 , 1116px 1432px #607FF6 , 48px 811px #607FF6 , 101px 916px #607FF6 , 677px 304px #607FF6 , 1203px 639px #607FF6 , 1391px 199px #607FF6 , 1895px 1988px #607FF6 , 1462px 1023px #607FF6 , 1216px 1751px #607FF6 , 1261px 663px #607FF6 , 1290px 1119px #607FF6 , 137px 1793px #607FF6 , 1052px 1470px #607FF6 , 1561px 226px #607FF6 , 1156px 402px #607FF6 , 709px 693px #607FF6 , 1040px 1911px #607FF6 , 1624px 1115px #607FF6 , 551px 475px #607FF6 , 416px 1090px #607FF6 , 1183px 451px #607FF6 , 58px 765px #607FF6 , 743px 1016px #607FF6 , 198px 369px #607FF6 , 1645px 1503px #607FF6 , 997px 22px #607FF6 , 1447px 1323px #607FF6 , 379px 883px #607FF6 , 1171px 1195px #607FF6 , 919px 133px #607FF6 , 1400px 517px #607FF6 , 725px 804px #607FF6 , 1600px 699px #607FF6 , 357px 581px #607FF6 , 266px 1713px #607FF6 , 848px 1749px #607FF6 , 1963px 1045px #607FF6 , 119px 1136px #607FF6;
}

#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 1117px 1306px #607FF6 , 1078px 1783px #607FF6 , 1179px 1085px #607FF6 , 1145px 920px #607FF6 , 422px 1233px #607FF6 , 387px 98px #607FF6 , 1153px 637px #607FF6 , 1084px 782px #607FF6 , 476px 453px #607FF6 , 926px 1306px #607FF6 , 60px 1086px #607FF6 , 753px 1575px #607FF6 , 272px 1684px #607FF6 , 1285px 750px #607FF6 , 1416px 1327px #607FF6 , 1931px 473px #607FF6 , 736px 1395px #607FF6 , 1816px 763px #607FF6 , 438px 879px #607FF6 , 665px 1902px #607FF6 , 1341px 677px #607FF6 , 1404px 1073px #607FF6 , 100px 597px #607FF6 , 357px 1689px #607FF6 , 1044px 1342px #607FF6 , 1954px 502px #607FF6 , 1192px 1308px #607FF6 , 540px 1239px #607FF6 , 1360px 552px #607FF6 , 89px 752px #607FF6 , 659px 1253px #607FF6 , 62px 517px #607FF6 , 1375px 1705px #607FF6 , 1343px 1511px #607FF6 , 1659px 1922px #607FF6 , 1560px 289px #607FF6 , 1362px 1799px #607FF6 , 1886px 1480px #607FF6 , 1718px 1885px #607FF6 , 824px 738px #607FF6 , 1060px 1370px #607FF6 , 1781px 1171px #607FF6 , 255px 273px #607FF6 , 1197px 120px #607FF6 , 213px 7px #607FF6 , 1226px 1920px #607FF6 , 1844px 207px #607FF6 , 1675px 970px #607FF6 , 1435px 1283px #607FF6 , 37px 353px #607FF6 , 59px 417px #607FF6 , 921px 1602px #607FF6 , 1549px 1490px #607FF6 , 638px 1845px #607FF6 , 1328px 198px #607FF6 , 1050px 1149px #607FF6 , 1884px 711px #607FF6 , 333px 263px #607FF6 , 342px 1508px #607FF6 , 1388px 1810px #607FF6 , 1377px 1558px #607FF6 , 890px 487px #607FF6 , 1081px 759px #607FF6 , 890px 1515px #607FF6 , 911px 1284px #607FF6 , 335px 735px #607FF6 , 1140px 549px #607FF6 , 1239px 1064px #607FF6 , 226px 71px #607FF6 , 1100px 1278px #607FF6 , 1851px 1805px #607FF6 , 1370px 1999px #607FF6 , 1008px 1122px #607FF6 , 785px 813px #607FF6 , 1358px 601px #607FF6 , 1833px 1305px #607FF6 , 1768px 1304px #607FF6 , 1303px 532px #607FF6 , 860px 598px #607FF6 , 1329px 593px #607FF6 , 1038px 1088px #607FF6 , 408px 405px #607FF6 , 965px 82px #607FF6 , 1483px 1438px #607FF6 , 310px 1479px #607FF6 , 1786px 1500px #607FF6 , 1866px 852px #607FF6 , 18px 1757px #607FF6 , 1473px 1004px #607FF6 , 1542px 1933px #607FF6 , 633px 1970px #607FF6 , 1334px 1713px #607FF6 , 175px 28px #607FF6 , 592px 894px #607FF6 , 121px 1162px #607FF6 , 1601px 1567px #607FF6 , 1095px 657px #607FF6 , 640px 1233px #607FF6 , 1073px 1255px #607FF6 , 840px 1087px #607FF6 , 718px 250px #607FF6 , 967px 709px #607FF6 , 731px 239px #607FF6 , 1623px 593px #607FF6 , 1058px 1820px #607FF6 , 516px 1898px #607FF6 , 666px 12px #607FF6 , 1997px 1382px #607FF6 , 112px 1690px #607FF6 , 687px 1309px #607FF6 , 63px 539px #607FF6 , 185px 1897px #607FF6 , 1055px 1691px #607FF6 , 435px 1517px #607FF6 , 1175px 1119px #607FF6 , 1721px 133px #607FF6 , 1212px 47px #607FF6 , 166px 18px #607FF6 , 1416px 1652px #607FF6 , 1409px 1745px #607FF6 , 1357px 1232px #607FF6 , 1677px 1998px #607FF6 , 448px 1415px #607FF6 , 705px 1736px #607FF6 , 1031px 1466px #607FF6 , 543px 1651px #607FF6 , 1592px 1888px #607FF6 , 1749px 1175px #607FF6 , 639px 1114px #607FF6 , 1591px 508px #607FF6 , 759px 1244px #607FF6 , 824px 380px #607FF6 , 942px 955px #607FF6 , 723px 732px #607FF6 , 113px 1369px #607FF6 , 203px 1739px #607FF6 , 868px 733px #607FF6 , 713px 971px #607FF6 , 341px 833px #607FF6 , 762px 824px #607FF6 , 1359px 310px #607FF6 , 1858px 1349px #607FF6 , 1531px 692px #607FF6 , 1075px 1512px #607FF6 , 1677px 142px #607FF6 , 1912px 1478px #607FF6 , 1810px 1078px #607FF6 , 426px 844px #607FF6 , 1426px 588px #607FF6 , 1909px 654px #607FF6 , 1107px 295px #607FF6 , 1351px 527px #607FF6 , 1393px 599px #607FF6 , 1379px 1068px #607FF6 , 228px 1846px #607FF6 , 1271px 374px #607FF6 , 1348px 612px #607FF6 , 7px 1301px #607FF6 , 1501px 1782px #607FF6 , 1795px 423px #607FF6 , 1475px 1918px #607FF6 , 1328px 1861px #607FF6 , 1624px 51px #607FF6 , 1791px 672px #607FF6 , 1594px 1467px #607FF6 , 1655px 1603px #607FF6 , 919px 850px #607FF6 , 523px 609px #607FF6 , 1196px 207px #607FF6 , 753px 410px #607FF6 , 686px 1097px #607FF6 , 1570px 133px #607FF6 , 1996px 1137px #607FF6 , 361px 116px #607FF6 , 1015px 462px #607FF6 , 76px 1143px #607FF6 , 491px 1818px #607FF6 , 1563px 795px #607FF6 , 982px 1721px #607FF6 , 831px 1204px #607FF6 , 1737px 589px #607FF6 , 861px 1579px #607FF6 , 1666px 130px #607FF6 , 698px 1799px #607FF6 , 726px 1519px #607FF6 , 109px 1208px #607FF6 , 1184px 1057px #607FF6 , 835px 451px #607FF6 , 896px 594px #607FF6 , 35px 893px #607FF6 , 895px 542px #607FF6 , 706px 225px #607FF6 , 56px 1040px #607FF6 , 1954px 108px #607FF6 , 1439px 1423px #607FF6 , 26px 1881px #607FF6 , 802px 1564px #607FF6 , 273px 708px #607FF6 , 40px 31px #607FF6 , 859px 108px #607FF6;
  -webkit-animation: animStar 100s linear infinite;
  -moz-animation: animStar 100s linear infinite;
  -ms-animation: animStar 100s linear infinite;
  animation: animStar 100s linear infinite;
}
#stars2:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 1117px 1306px #607FF6 , 1078px 1783px #607FF6 , 1179px 1085px #607FF6 , 1145px 920px #607FF6 , 422px 1233px #607FF6 , 387px 98px #607FF6 , 1153px 637px #607FF6 , 1084px 782px #607FF6 , 476px 453px #607FF6 , 926px 1306px #607FF6 , 60px 1086px #607FF6 , 753px 1575px #607FF6 , 272px 1684px #607FF6 , 1285px 750px #607FF6 , 1416px 1327px #607FF6 , 1931px 473px #607FF6 , 736px 1395px #607FF6 , 1816px 763px #607FF6 , 438px 879px #607FF6 , 665px 1902px #607FF6 , 1341px 677px #607FF6 , 1404px 1073px #607FF6 , 100px 597px #607FF6 , 357px 1689px #607FF6 , 1044px 1342px #607FF6 , 1954px 502px #607FF6 , 1192px 1308px #607FF6 , 540px 1239px #607FF6 , 1360px 552px #607FF6 , 89px 752px #607FF6 , 659px 1253px #607FF6 , 62px 517px #607FF6 , 1375px 1705px #607FF6 , 1343px 1511px #607FF6 , 1659px 1922px #607FF6 , 1560px 289px #607FF6 , 1362px 1799px #607FF6 , 1886px 1480px #607FF6 , 1718px 1885px #607FF6 , 824px 738px #607FF6 , 1060px 1370px #607FF6 , 1781px 1171px #607FF6 , 255px 273px #607FF6 , 1197px 120px #607FF6 , 213px 7px #607FF6 , 1226px 1920px #607FF6 , 1844px 207px #607FF6 , 1675px 970px #607FF6 , 1435px 1283px #607FF6 , 37px 353px #607FF6 , 59px 417px #607FF6 , 921px 1602px #607FF6 , 1549px 1490px #607FF6 , 638px 1845px #607FF6 , 1328px 198px #607FF6 , 1050px 1149px #607FF6 , 1884px 711px #607FF6 , 333px 263px #607FF6 , 342px 1508px #607FF6 , 1388px 1810px #607FF6 , 1377px 1558px #607FF6 , 890px 487px #607FF6 , 1081px 759px #607FF6 , 890px 1515px #607FF6 , 911px 1284px #607FF6 , 335px 735px #607FF6 , 1140px 549px #607FF6 , 1239px 1064px #607FF6 , 226px 71px #607FF6 , 1100px 1278px #607FF6 , 1851px 1805px #607FF6 , 1370px 1999px #607FF6 , 1008px 1122px #607FF6 , 785px 813px #607FF6 , 1358px 601px #607FF6 , 1833px 1305px #607FF6 , 1768px 1304px #607FF6 , 1303px 532px #607FF6 , 860px 598px #607FF6 , 1329px 593px #607FF6 , 1038px 1088px #607FF6 , 408px 405px #607FF6 , 965px 82px #607FF6 , 1483px 1438px #607FF6 , 310px 1479px #607FF6 , 1786px 1500px #607FF6 , 1866px 852px #607FF6 , 18px 1757px #607FF6 , 1473px 1004px #607FF6 , 1542px 1933px #607FF6 , 633px 1970px #607FF6 , 1334px 1713px #607FF6 , 175px 28px #607FF6 , 592px 894px #607FF6 , 121px 1162px #607FF6 , 1601px 1567px #607FF6 , 1095px 657px #607FF6 , 640px 1233px #607FF6 , 1073px 1255px #607FF6 , 840px 1087px #607FF6 , 718px 250px #607FF6 , 967px 709px #607FF6 , 731px 239px #607FF6 , 1623px 593px #607FF6 , 1058px 1820px #607FF6 , 516px 1898px #607FF6 , 666px 12px #607FF6 , 1997px 1382px #607FF6 , 112px 1690px #607FF6 , 687px 1309px #607FF6 , 63px 539px #607FF6 , 185px 1897px #607FF6 , 1055px 1691px #607FF6 , 435px 1517px #607FF6 , 1175px 1119px #607FF6 , 1721px 133px #607FF6 , 1212px 47px #607FF6 , 166px 18px #607FF6 , 1416px 1652px #607FF6 , 1409px 1745px #607FF6 , 1357px 1232px #607FF6 , 1677px 1998px #607FF6 , 448px 1415px #607FF6 , 705px 1736px #607FF6 , 1031px 1466px #607FF6 , 543px 1651px #607FF6 , 1592px 1888px #607FF6 , 1749px 1175px #607FF6 , 639px 1114px #607FF6 , 1591px 508px #607FF6 , 759px 1244px #607FF6 , 824px 380px #607FF6 , 942px 955px #607FF6 , 723px 732px #607FF6 , 113px 1369px #607FF6 , 203px 1739px #607FF6 , 868px 733px #607FF6 , 713px 971px #607FF6 , 341px 833px #607FF6 , 762px 824px #607FF6 , 1359px 310px #607FF6 , 1858px 1349px #607FF6 , 1531px 692px #607FF6 , 1075px 1512px #607FF6 , 1677px 142px #607FF6 , 1912px 1478px #607FF6 , 1810px 1078px #607FF6 , 426px 844px #607FF6 , 1426px 588px #607FF6 , 1909px 654px #607FF6 , 1107px 295px #607FF6 , 1351px 527px #607FF6 , 1393px 599px #607FF6 , 1379px 1068px #607FF6 , 228px 1846px #607FF6 , 1271px 374px #607FF6 , 1348px 612px #607FF6 , 7px 1301px #607FF6 , 1501px 1782px #607FF6 , 1795px 423px #607FF6 , 1475px 1918px #607FF6 , 1328px 1861px #607FF6 , 1624px 51px #607FF6 , 1791px 672px #607FF6 , 1594px 1467px #607FF6 , 1655px 1603px #607FF6 , 919px 850px #607FF6 , 523px 609px #607FF6 , 1196px 207px #607FF6 , 753px 410px #607FF6 , 686px 1097px #607FF6 , 1570px 133px #607FF6 , 1996px 1137px #607FF6 , 361px 116px #607FF6 , 1015px 462px #607FF6 , 76px 1143px #607FF6 , 491px 1818px #607FF6 , 1563px 795px #607FF6 , 982px 1721px #607FF6 , 831px 1204px #607FF6 , 1737px 589px #607FF6 , 861px 1579px #607FF6 , 1666px 130px #607FF6 , 698px 1799px #607FF6 , 726px 1519px #607FF6 , 109px 1208px #607FF6 , 1184px 1057px #607FF6 , 835px 451px #607FF6 , 896px 594px #607FF6 , 35px 893px #607FF6 , 895px 542px #607FF6 , 706px 225px #607FF6 , 56px 1040px #607FF6 , 1954px 108px #607FF6 , 1439px 1423px #607FF6 , 26px 1881px #607FF6 , 802px 1564px #607FF6 , 273px 708px #607FF6 , 40px 31px #607FF6 , 859px 108px #607FF6;
}

#stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 940px 1360px #607FF6 , 1071px 539px #607FF6 , 1710px 1414px #607FF6 , 836px 299px #607FF6 , 1944px 1420px #607FF6 , 253px 1449px #607FF6 , 1257px 1250px #607FF6 , 1588px 1830px #607FF6 , 1077px 1204px #607FF6 , 273px 1081px #607FF6 , 1993px 766px #607FF6 , 1808px 479px #607FF6 , 917px 263px #607FF6 , 663px 1820px #607FF6 , 342px 1988px #607FF6 , 727px 1250px #607FF6 , 636px 1666px #607FF6 , 692px 1112px #607FF6 , 248px 1211px #607FF6 , 1422px 1121px #607FF6 , 881px 46px #607FF6 , 1531px 1977px #607FF6 , 1643px 1023px #607FF6 , 684px 1071px #607FF6 , 1142px 1873px #607FF6 , 292px 1313px #607FF6 , 256px 1237px #607FF6 , 89px 912px #607FF6 , 964px 1783px #607FF6 , 877px 760px #607FF6 , 1641px 1474px #607FF6 , 1492px 24px #607FF6 , 1776px 1642px #607FF6 , 183px 602px #607FF6 , 1998px 62px #607FF6 , 1560px 367px #607FF6 , 1333px 995px #607FF6 , 704px 1815px #607FF6 , 1809px 712px #607FF6 , 1503px 288px #607FF6 , 630px 556px #607FF6 , 1715px 125px #607FF6 , 353px 1878px #607FF6 , 975px 333px #607FF6 , 1740px 1409px #607FF6 , 1341px 1871px #607FF6 , 1279px 1064px #607FF6 , 169px 874px #607FF6 , 161px 528px #607FF6 , 1671px 1669px #607FF6 , 169px 632px #607FF6 , 547px 1724px #607FF6 , 1904px 110px #607FF6 , 679px 1670px #607FF6 , 196px 123px #607FF6 , 786px 871px #607FF6 , 1840px 324px #607FF6 , 356px 967px #607FF6 , 61px 549px #607FF6 , 99px 677px #607FF6 , 1719px 87px #607FF6 , 1713px 1990px #607FF6 , 1717px 1358px #607FF6 , 108px 1187px #607FF6 , 51px 869px #607FF6 , 1461px 902px #607FF6 , 1034px 891px #607FF6 , 962px 1881px #607FF6 , 1723px 595px #607FF6 , 479px 901px #607FF6 , 1546px 1823px #607FF6 , 285px 1208px #607FF6 , 1056px 347px #607FF6 , 261px 988px #607FF6 , 466px 990px #607FF6 , 1657px 648px #607FF6 , 1249px 933px #607FF6 , 1552px 1555px #607FF6 , 147px 62px #607FF6 , 292px 1157px #607FF6 , 1816px 423px #607FF6 , 1714px 757px #607FF6 , 1036px 961px #607FF6 , 1955px 710px #607FF6 , 1842px 516px #607FF6 , 479px 1870px #607FF6 , 1579px 1445px #607FF6 , 1225px 1309px #607FF6 , 1965px 566px #607FF6 , 1575px 1072px #607FF6 , 923px 329px #607FF6 , 651px 1514px #607FF6 , 865px 1100px #607FF6 , 782px 1873px #607FF6 , 115px 299px #607FF6 , 14px 1668px #607FF6 , 1666px 1817px #607FF6 , 1096px 1068px #607FF6 , 1462px 742px #607FF6 , 1384px 1750px #607FF6;
  -webkit-animation: animStar 150s linear infinite;
  -moz-animation: animStar 150s linear infinite;
  -ms-animation: animStar 150s linear infinite;
  animation: animStar 150s linear infinite;
}
#stars3:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 940px 1360px #607FF6 , 1071px 539px #607FF6 , 1710px 1414px #607FF6 , 836px 299px #607FF6 , 1944px 1420px #607FF6 , 253px 1449px #607FF6 , 1257px 1250px #607FF6 , 1588px 1830px #607FF6 , 1077px 1204px #607FF6 , 273px 1081px #607FF6 , 1993px 766px #607FF6 , 1808px 479px #607FF6 , 917px 263px #607FF6 , 663px 1820px #607FF6 , 342px 1988px #607FF6 , 727px 1250px #607FF6 , 636px 1666px #607FF6 , 692px 1112px #607FF6 , 248px 1211px #607FF6 , 1422px 1121px #607FF6 , 881px 46px #607FF6 , 1531px 1977px #607FF6 , 1643px 1023px #607FF6 , 684px 1071px #607FF6 , 1142px 1873px #607FF6 , 292px 1313px #607FF6 , 256px 1237px #607FF6 , 89px 912px #607FF6 , 964px 1783px #607FF6 , 877px 760px #607FF6 , 1641px 1474px #607FF6 , 1492px 24px #607FF6 , 1776px 1642px #607FF6 , 183px 602px #607FF6 , 1998px 62px #607FF6 , 1560px 367px #607FF6 , 1333px 995px #607FF6 , 704px 1815px #607FF6 , 1809px 712px #607FF6 , 1503px 288px #607FF6 , 630px 556px #607FF6 , 1715px 125px #607FF6 , 353px 1878px #607FF6 , 975px 333px #607FF6 , 1740px 1409px #607FF6 , 1341px 1871px #607FF6 , 1279px 1064px #607FF6 , 169px 874px #607FF6 , 161px 528px #607FF6 , 1671px 1669px #607FF6 , 169px 632px #607FF6 , 547px 1724px #607FF6 , 1904px 110px #607FF6 , 679px 1670px #607FF6 , 196px 123px #607FF6 , 786px 871px #607FF6 , 1840px 324px #607FF6 , 356px 967px #607FF6 , 61px 549px #607FF6 , 99px 677px #607FF6 , 1719px 87px #607FF6 , 1713px 1990px #607FF6 , 1717px 1358px #607FF6 , 108px 1187px #607FF6 , 51px 869px #607FF6 , 1461px 902px #607FF6 , 1034px 891px #607FF6 , 962px 1881px #607FF6 , 1723px 595px #607FF6 , 479px 901px #607FF6 , 1546px 1823px #607FF6 , 285px 1208px #607FF6 , 1056px 347px #607FF6 , 261px 988px #607FF6 , 466px 990px #607FF6 , 1657px 648px #607FF6 , 1249px 933px #607FF6 , 1552px 1555px #607FF6 , 147px 62px #607FF6 , 292px 1157px #607FF6 , 1816px 423px #607FF6 , 1714px 757px #607FF6 , 1036px 961px #607FF6 , 1955px 710px #607FF6 , 1842px 516px #607FF6 , 479px 1870px #607FF6 , 1579px 1445px #607FF6 , 1225px 1309px #607FF6 , 1965px 566px #607FF6 , 1575px 1072px #607FF6 , 923px 329px #607FF6 , 651px 1514px #607FF6 , 865px 1100px #607FF6 , 782px 1873px #607FF6 , 115px 299px #607FF6 , 14px 1668px #607FF6 , 1666px 1817px #607FF6 , 1096px 1068px #607FF6 , 1462px 742px #607FF6 , 1384px 1750px #607FF6;
}

#stars4 {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 233px 1976px #607FF6 , 1196px 1119px #607FF6 , 646px 740px #607FF6 , 335px 645px #607FF6 , 1119px 1452px #607FF6 , 176px 1870px #607FF6 , 639px 1711px #607FF6 , 647px 1388px #607FF6 , 1516px 1108px #607FF6 , 464px 66px #607FF6 , 331px 344px #607FF6 , 772px 1189px #607FF6 , 1516px 1850px #607FF6 , 1500px 1463px #607FF6 , 1275px 876px #607FF6 , 1107px 645px #607FF6 , 977px 478px #607FF6 , 583px 1179px #607FF6 , 284px 395px #607FF6 , 1220px 461px #607FF6 , 1160px 249px #607FF6 , 196px 865px #607FF6 , 670px 1915px #607FF6 , 1449px 382px #607FF6 , 1191px 546px #607FF6 , 1329px 605px #607FF6 , 1945px 458px #607FF6 , 995px 749px #607FF6 , 1495px 861px #607FF6 , 708px 1731px #607FF6 , 348px 653px #607FF6 , 548px 1298px #607FF6 , 1606px 990px #607FF6 , 1049px 1204px #607FF6 , 253px 1501px #607FF6 , 1154px 166px #607FF6 , 1087px 104px #607FF6 , 1034px 1161px #607FF6 , 1681px 462px #607FF6 , 577px 1897px #607FF6 , 193px 1901px #607FF6 , 1701px 1755px #607FF6 , 864px 1297px #607FF6 , 800px 1289px #607FF6 , 676px 28px #607FF6 , 185px 1341px #607FF6 , 379px 1151px #607FF6 , 1224px 1725px #607FF6 , 280px 541px #607FF6 , 473px 1196px #607FF6 , 921px 1628px #607FF6 , 969px 432px #607FF6 , 1475px 758px #607FF6 , 1195px 993px #607FF6 , 876px 1840px #607FF6 , 1274px 1689px #607FF6 , 1977px 1101px #607FF6 , 837px 527px #607FF6 , 1785px 1610px #607FF6 , 1650px 1843px #607FF6 , 1127px 1508px #607FF6 , 401px 1050px #607FF6 , 51px 1105px #607FF6 , 545px 880px #607FF6 , 1786px 1672px #607FF6 , 318px 260px #607FF6 , 568px 254px #607FF6 , 1026px 1527px #607FF6 , 1242px 852px #607FF6 , 1785px 982px #607FF6 , 1318px 1071px #607FF6 , 398px 1061px #607FF6 , 1509px 257px #607FF6 , 599px 928px #607FF6 , 1195px 1800px #607FF6 , 1254px 906px #607FF6 , 141px 26px #607FF6 , 1384px 1502px #607FF6 , 476px 767px #607FF6 , 1973px 722px #607FF6 , 1339px 1031px #607FF6 , 778px 818px #607FF6 , 213px 1320px #607FF6 , 184px 221px #607FF6 , 983px 1911px #607FF6 , 923px 1439px #607FF6 , 1936px 581px #607FF6 , 1105px 625px #607FF6 , 325px 729px #607FF6 , 1475px 204px #607FF6 , 1483px 1564px #607FF6 , 1327px 1272px #607FF6 , 1187px 1944px #607FF6 , 1945px 1471px #607FF6 , 116px 960px #607FF6 , 1660px 1610px #607FF6 , 412px 1022px #607FF6 , 1552px 1516px #607FF6 , 1517px 1892px #607FF6 , 306px 829px #607FF6 , 1416px 462px #607FF6 , 1575px 1460px #607FF6 , 424px 1500px #607FF6 , 1530px 1169px #607FF6 , 1388px 1608px #607FF6 , 185px 416px #607FF6 , 634px 1446px #607FF6 , 767px 479px #607FF6 , 71px 426px #607FF6 , 1937px 145px #607FF6 , 1955px 1312px #607FF6 , 1811px 611px #607FF6 , 1145px 569px #607FF6 , 1460px 676px #607FF6 , 131px 1858px #607FF6 , 1557px 473px #607FF6 , 735px 130px #607FF6 , 112px 1531px #607FF6 , 1312px 305px #607FF6 , 409px 1032px #607FF6 , 149px 1964px #607FF6 , 535px 1215px #607FF6 , 1382px 630px #607FF6 , 1437px 1368px #607FF6 , 362px 1181px #607FF6 , 388px 181px #607FF6 , 274px 1287px #607FF6 , 1858px 1414px #607FF6 , 661px 1935px #607FF6 , 675px 1205px #607FF6 , 1829px 1725px #607FF6 , 1937px 1145px #607FF6 , 237px 908px #607FF6 , 1059px 1185px #607FF6 , 824px 1248px #607FF6 , 1167px 1730px #607FF6 , 180px 1961px #607FF6 , 1663px 203px #607FF6 , 374px 221px #607FF6 , 724px 1883px #607FF6 , 970px 1362px #607FF6 , 832px 505px #607FF6 , 313px 233px #607FF6 , 1909px 597px #607FF6 , 434px 201px #607FF6 , 587px 995px #607FF6 , 1833px 623px #607FF6 , 1464px 561px #607FF6 , 231px 593px #607FF6 , 1558px 1433px #607FF6 , 1986px 1767px #607FF6 , 1753px 1728px #607FF6 , 1153px 1623px #607FF6 , 249px 229px #607FF6 , 1503px 1186px #607FF6 , 1784px 137px #607FF6 , 841px 403px #607FF6 , 1400px 354px #607FF6 , 197px 499px #607FF6 , 1188px 681px #607FF6 , 158px 391px #607FF6 , 443px 1099px #607FF6 , 723px 1445px #607FF6 , 1408px 1235px #607FF6 , 1908px 195px #607FF6 , 271px 891px #607FF6 , 469px 1693px #607FF6 , 580px 11px #607FF6 , 1533px 70px #607FF6 , 859px 761px #607FF6 , 1510px 1844px #607FF6 , 421px 558px #607FF6 , 1132px 1453px #607FF6 , 757px 1987px #607FF6 , 212px 293px #607FF6 , 569px 323px #607FF6 , 1404px 1394px #607FF6 , 252px 1386px #607FF6 , 1668px 1857px #607FF6 , 123px 1684px #607FF6 , 105px 490px #607FF6 , 1083px 1769px #607FF6 , 1071px 1953px #607FF6 , 1271px 1159px #607FF6 , 699px 1491px #607FF6 , 1744px 1997px #607FF6 , 1868px 1973px #607FF6 , 1438px 1449px #607FF6 , 1222px 1921px #607FF6 , 1328px 1210px #607FF6 , 438px 873px #607FF6 , 809px 780px #607FF6 , 491px 1524px #607FF6 , 447px 1830px #607FF6 , 927px 1936px #607FF6 , 564px 691px #607FF6 , 1784px 1747px #607FF6 , 1978px 1722px #607FF6 , 1599px 1480px #607FF6 , 1276px 729px #607FF6 , 731px 1174px #607FF6 , 1586px 1711px #607FF6 , 451px 1340px #607FF6 , 1075px 1899px #607FF6 , 13px 575px #607FF6 , 309px 1340px #607FF6 , 981px 183px #607FF6 , 248px 1315px #607FF6 , 849px 80px #607FF6 , 1754px 1540px #607FF6 , 73px 1432px #607FF6 , 1208px 1828px #607FF6 , 65px 575px #607FF6 , 1098px 730px #607FF6 , 127px 1358px #607FF6 , 185px 19px #607FF6 , 1222px 1679px #607FF6 , 1122px 315px #607FF6 , 1906px 452px #607FF6 , 761px 284px #607FF6 , 813px 492px #607FF6 , 1344px 843px #607FF6 , 118px 1834px #607FF6 , 1620px 359px #607FF6 , 1755px 1246px #607FF6 , 299px 1076px #607FF6 , 1746px 158px #607FF6 , 6px 1635px #607FF6 , 143px 190px #607FF6 , 101px 468px #607FF6 , 137px 971px #607FF6 , 1221px 1929px #607FF6 , 1752px 650px #607FF6 , 1635px 1761px #607FF6 , 1522px 833px #607FF6 , 908px 153px #607FF6 , 1044px 350px #607FF6 , 1151px 1940px #607FF6 , 822px 210px #607FF6 , 1774px 310px #607FF6 , 796px 1447px #607FF6 , 1069px 1903px #607FF6 , 217px 565px #607FF6 , 662px 1370px #607FF6 , 1876px 1570px #607FF6 , 847px 46px #607FF6 , 1042px 1689px #607FF6 , 1584px 1434px #607FF6 , 1791px 908px #607FF6 , 973px 908px #607FF6 , 793px 747px #607FF6 , 122px 483px #607FF6 , 1137px 1374px #607FF6 , 1757px 1791px #607FF6 , 513px 225px #607FF6 , 63px 731px #607FF6 , 1179px 1926px #607FF6 , 346px 18px #607FF6 , 589px 175px #607FF6 , 87px 302px #607FF6 , 380px 1295px #607FF6 , 450px 921px #607FF6 , 1667px 1973px #607FF6 , 1495px 1373px #607FF6 , 1462px 1850px #607FF6 , 540px 288px #607FF6 , 1208px 1051px #607FF6 , 1554px 1095px #607FF6 , 1009px 1516px #607FF6 , 181px 572px #607FF6 , 165px 387px #607FF6 , 549px 1835px #607FF6 , 960px 16px #607FF6 , 1360px 403px #607FF6 , 1251px 43px #607FF6 , 1905px 1813px #607FF6 , 1106px 866px #607FF6 , 1809px 277px #607FF6 , 1828px 1720px #607FF6 , 295px 1610px #607FF6 , 523px 166px #607FF6 , 1069px 692px #607FF6 , 1292px 217px #607FF6 , 11px 1721px #607FF6 , 99px 1045px #607FF6 , 51px 1584px #607FF6 , 1053px 266px #607FF6 , 1287px 1235px #607FF6 , 747px 1722px #607FF6 , 1542px 736px #607FF6 , 1256px 18px #607FF6 , 102px 609px #607FF6 , 586px 1339px #607FF6 , 1843px 1697px #607FF6 , 824px 1687px #607FF6 , 1124px 882px #607FF6 , 395px 501px #607FF6 , 1456px 672px #607FF6 , 1472px 1648px #607FF6 , 1326px 1164px #607FF6 , 777px 1672px #607FF6 , 81px 345px #607FF6 , 91px 386px #607FF6 , 243px 411px #607FF6 , 1560px 90px #607FF6 , 6px 1771px #607FF6 , 1601px 616px #607FF6 , 1220px 1808px #607FF6 , 1160px 836px #607FF6 , 246px 1777px #607FF6 , 456px 863px #607FF6 , 97px 1138px #607FF6 , 1811px 942px #607FF6 , 213px 414px #607FF6 , 891px 392px #607FF6 , 1044px 927px #607FF6 , 1856px 216px #607FF6 , 957px 347px #607FF6 , 1486px 406px #607FF6 , 838px 912px #607FF6 , 803px 361px #607FF6 , 564px 826px #607FF6 , 1597px 949px #607FF6 , 1206px 289px #607FF6 , 33px 1035px #607FF6 , 1762px 1377px #607FF6 , 789px 1815px #607FF6 , 1594px 1342px #607FF6 , 1668px 880px #607FF6 , 1539px 1581px #607FF6 , 1547px 53px #607FF6 , 861px 1433px #607FF6 , 693px 1618px #607FF6 , 1762px 782px #607FF6 , 1568px 682px #607FF6 , 1126px 1762px #607FF6 , 1242px 134px #607FF6 , 495px 959px #607FF6 , 1606px 219px #607FF6 , 1878px 1415px #607FF6 , 1652px 797px #607FF6 , 782px 1903px #607FF6 , 1774px 1133px #607FF6 , 1430px 408px #607FF6 , 265px 394px #607FF6 , 890px 336px #607FF6 , 1051px 311px #607FF6 , 461px 1559px #607FF6 , 1931px 91px #607FF6 , 1160px 380px #607FF6 , 1442px 1058px #607FF6 , 1157px 364px #607FF6 , 586px 227px #607FF6 , 1365px 715px #607FF6 , 1658px 1655px #607FF6 , 1923px 1664px #607FF6 , 1023px 1844px #607FF6 , 1939px 1367px #607FF6 , 1203px 1305px #607FF6 , 359px 642px #607FF6 , 1056px 425px #607FF6 , 787px 202px #607FF6 , 1609px 1850px #607FF6 , 1964px 200px #607FF6 , 1537px 586px #607FF6 , 1589px 903px #607FF6 , 1063px 1694px #607FF6 , 760px 1185px #607FF6 , 597px 1396px #607FF6 , 294px 452px #607FF6 , 433px 818px #607FF6 , 199px 840px #607FF6 , 1332px 1937px #607FF6 , 169px 1907px #607FF6 , 591px 834px #607FF6 , 1716px 1032px #607FF6 , 45px 1879px #607FF6 , 686px 1469px #607FF6 , 1520px 475px #607FF6 , 1122px 859px #607FF6 , 973px 1541px #607FF6 , 269px 477px #607FF6 , 1390px 716px #607FF6 , 1791px 783px #607FF6 , 824px 2000px #607FF6 , 1211px 1717px #607FF6 , 1008px 1587px #607FF6 , 1422px 204px #607FF6 , 234px 556px #607FF6 , 506px 550px #607FF6 , 942px 1670px #607FF6 , 397px 853px #607FF6 , 599px 795px #607FF6 , 762px 1926px #607FF6 , 1202px 1424px #607FF6 , 135px 1316px #607FF6 , 1442px 1692px #607FF6 , 977px 652px #607FF6 , 564px 1648px #607FF6 , 997px 1474px #607FF6 , 67px 1366px #607FF6 , 1860px 1451px #607FF6 , 1105px 772px #607FF6 , 1886px 1396px #607FF6 , 1510px 658px #607FF6 , 976px 1544px #607FF6 , 894px 543px #607FF6 , 1098px 1189px #607FF6 , 690px 77px #607FF6 , 770px 733px #607FF6 , 557px 1403px #607FF6 , 1758px 1623px #607FF6 , 1341px 812px #607FF6 , 699px 967px #607FF6 , 277px 866px #607FF6 , 1526px 1828px #607FF6 , 8px 977px #607FF6 , 1707px 952px #607FF6 , 12px 1900px #607FF6 , 72px 921px #607FF6 , 496px 1067px #607FF6 , 1288px 1749px #607FF6 , 273px 984px #607FF6 , 1197px 1991px #607FF6 , 242px 789px #607FF6 , 903px 1035px #607FF6 , 480px 1492px #607FF6 , 102px 1331px #607FF6 , 738px 1343px #607FF6 , 560px 1475px #607FF6 , 367px 846px #607FF6 , 1420px 962px #607FF6 , 1976px 892px #607FF6 , 1911px 1763px #607FF6 , 1639px 1002px #607FF6 , 437px 1522px #607FF6 , 1906px 1025px #607FF6 , 730px 1364px #607FF6 , 1127px 521px #607FF6 , 1401px 1792px #607FF6 , 1954px 1066px #607FF6 , 232px 250px #607FF6 , 1685px 660px #607FF6 , 1011px 999px #607FF6 , 1970px 790px #607FF6 , 750px 499px #607FF6 , 1738px 660px #607FF6 , 1621px 1849px #607FF6 , 446px 52px #607FF6 , 1055px 1396px #607FF6 , 1165px 1497px #607FF6 , 1740px 1425px #607FF6 , 1012px 1920px #607FF6 , 1258px 1560px #607FF6 , 1020px 1152px #607FF6 , 362px 673px #607FF6 , 1065px 975px #607FF6 , 582px 755px #607FF6 , 1271px 1479px #607FF6 , 719px 548px #607FF6 , 1602px 879px #607FF6 , 590px 499px #607FF6 , 721px 1412px #607FF6 , 1180px 113px #607FF6 , 1801px 1961px #607FF6 , 589px 941px #607FF6 , 883px 476px #607FF6 , 214px 890px #607FF6 , 1028px 892px #607FF6 , 1107px 1832px #607FF6 , 944px 361px #607FF6 , 480px 1453px #607FF6 , 1466px 683px #607FF6 , 981px 745px #607FF6 , 1968px 828px #607FF6 , 657px 1830px #607FF6 , 11px 1338px #607FF6 , 179px 730px #607FF6 , 1713px 197px #607FF6 , 51px 955px #607FF6 , 1243px 319px #607FF6 , 1175px 624px #607FF6 , 446px 46px #607FF6 , 5px 1158px #607FF6 , 82px 1352px #607FF6 , 1877px 402px #607FF6 , 708px 1778px #607FF6 , 903px 1625px #607FF6 , 1824px 352px #607FF6 , 1229px 140px #607FF6 , 1518px 24px #607FF6 , 1017px 512px #607FF6 , 515px 699px #607FF6 , 295px 265px #607FF6 , 69px 1773px #607FF6 , 1640px 1163px #607FF6 , 536px 342px #607FF6 , 970px 1766px #607FF6 , 560px 1416px #607FF6 , 577px 193px #607FF6 , 469px 9px #607FF6 , 466px 276px #607FF6 , 711px 853px #607FF6 , 401px 685px #607FF6 , 85px 506px #607FF6 , 865px 558px #607FF6 , 631px 105px #607FF6 , 887px 866px #607FF6 , 1704px 1001px #607FF6 , 1051px 1199px #607FF6 , 275px 1909px #607FF6 , 1462px 829px #607FF6 , 375px 1057px #607FF6 , 1531px 1501px #607FF6 , 205px 403px #607FF6 , 33px 1869px #607FF6 , 967px 1176px #607FF6 , 376px 863px #607FF6 , 1769px 1545px #607FF6 , 535px 51px #607FF6 , 1972px 1569px #607FF6 , 1773px 960px #607FF6 , 487px 620px #607FF6 , 1660px 687px #607FF6 , 1632px 972px #607FF6 , 1362px 42px #607FF6 , 479px 1655px #607FF6 , 1531px 1808px #607FF6 , 1450px 1412px #607FF6 , 1549px 170px #607FF6 , 1904px 1305px #607FF6 , 1209px 48px #607FF6 , 1933px 820px #607FF6 , 1623px 595px #607FF6 , 48px 643px #607FF6 , 179px 1754px #607FF6 , 589px 1032px #607FF6 , 1199px 356px #607FF6 , 1755px 1418px #607FF6 , 780px 1174px #607FF6 , 1905px 758px #607FF6 , 1567px 713px #607FF6 , 1372px 705px #607FF6 , 456px 654px #607FF6 , 759px 690px #607FF6 , 452px 673px #607FF6 , 993px 1610px #607FF6 , 1271px 188px #607FF6 , 343px 1750px #607FF6 , 1943px 1735px #607FF6 , 1717px 853px #607FF6 , 1247px 303px #607FF6 , 1314px 1895px #607FF6 , 1203px 489px #607FF6 , 741px 469px #607FF6 , 4px 246px #607FF6 , 1515px 115px #607FF6 , 606px 218px #607FF6 , 1966px 1471px #607FF6 , 177px 87px #607FF6 , 1575px 588px #607FF6 , 1136px 1386px #607FF6 , 70px 1868px #607FF6 , 1053px 18px #607FF6 , 1124px 721px #607FF6 , 1748px 1181px #607FF6 , 191px 1387px #607FF6 , 1931px 840px #607FF6 , 1088px 1603px #607FF6 , 634px 1255px #607FF6 , 814px 1434px #607FF6 , 585px 64px #607FF6 , 1074px 1618px #607FF6 , 1692px 761px #607FF6 , 651px 643px #607FF6 , 193px 335px #607FF6 , 1103px 1447px #607FF6 , 491px 1142px #607FF6 , 521px 408px #607FF6 , 536px 340px #607FF6 , 411px 1091px #607FF6 , 1646px 193px #607FF6 , 1595px 1285px #607FF6 , 870px 1349px #607FF6 , 1085px 1013px #607FF6 , 204px 1864px #607FF6 , 1359px 299px #607FF6 , 807px 964px #607FF6 , 219px 509px #607FF6 , 36px 1227px #607FF6 , 702px 1873px #607FF6 , 1471px 934px #607FF6 , 1763px 792px #607FF6 , 973px 1957px #607FF6 , 987px 68px #607FF6 , 593px 1282px #607FF6 , 1900px 607px #607FF6 , 407px 1659px #607FF6 , 587px 17px #607FF6 , 632px 158px #607FF6;
  -webkit-animation: animStar 600s linear infinite;
  -moz-animation: animStar 600s linear infinite;
  -ms-animation: animStar 600s linear infinite;
  animation: animStar 600s linear infinite;
}
#stars4:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 233px 1976px #607FF6 , 1196px 1119px #607FF6 , 646px 740px #607FF6 , 335px 645px #607FF6 , 1119px 1452px #607FF6 , 176px 1870px #607FF6 , 639px 1711px #607FF6 , 647px 1388px #607FF6 , 1516px 1108px #607FF6 , 464px 66px #607FF6 , 331px 344px #607FF6 , 772px 1189px #607FF6 , 1516px 1850px #607FF6 , 1500px 1463px #607FF6 , 1275px 876px #607FF6 , 1107px 645px #607FF6 , 977px 478px #607FF6 , 583px 1179px #607FF6 , 284px 395px #607FF6 , 1220px 461px #607FF6 , 1160px 249px #607FF6 , 196px 865px #607FF6 , 670px 1915px #607FF6 , 1449px 382px #607FF6 , 1191px 546px #607FF6 , 1329px 605px #607FF6 , 1945px 458px #607FF6 , 995px 749px #607FF6 , 1495px 861px #607FF6 , 708px 1731px #607FF6 , 348px 653px #607FF6 , 548px 1298px #607FF6 , 1606px 990px #607FF6 , 1049px 1204px #607FF6 , 253px 1501px #607FF6 , 1154px 166px #607FF6 , 1087px 104px #607FF6 , 1034px 1161px #607FF6 , 1681px 462px #607FF6 , 577px 1897px #607FF6 , 193px 1901px #607FF6 , 1701px 1755px #607FF6 , 864px 1297px #607FF6 , 800px 1289px #607FF6 , 676px 28px #607FF6 , 185px 1341px #607FF6 , 379px 1151px #607FF6 , 1224px 1725px #607FF6 , 280px 541px #607FF6 , 473px 1196px #607FF6 , 921px 1628px #607FF6 , 969px 432px #607FF6 , 1475px 758px #607FF6 , 1195px 993px #607FF6 , 876px 1840px #607FF6 , 1274px 1689px #607FF6 , 1977px 1101px #607FF6 , 837px 527px #607FF6 , 1785px 1610px #607FF6 , 1650px 1843px #607FF6 , 1127px 1508px #607FF6 , 401px 1050px #607FF6 , 51px 1105px #607FF6 , 545px 880px #607FF6 , 1786px 1672px #607FF6 , 318px 260px #607FF6 , 568px 254px #607FF6 , 1026px 1527px #607FF6 , 1242px 852px #607FF6 , 1785px 982px #607FF6 , 1318px 1071px #607FF6 , 398px 1061px #607FF6 , 1509px 257px #607FF6 , 599px 928px #607FF6 , 1195px 1800px #607FF6 , 1254px 906px #607FF6 , 141px 26px #607FF6 , 1384px 1502px #607FF6 , 476px 767px #607FF6 , 1973px 722px #607FF6 , 1339px 1031px #607FF6 , 778px 818px #607FF6 , 213px 1320px #607FF6 , 184px 221px #607FF6 , 983px 1911px #607FF6 , 923px 1439px #607FF6 , 1936px 581px #607FF6 , 1105px 625px #607FF6 , 325px 729px #607FF6 , 1475px 204px #607FF6 , 1483px 1564px #607FF6 , 1327px 1272px #607FF6 , 1187px 1944px #607FF6 , 1945px 1471px #607FF6 , 116px 960px #607FF6 , 1660px 1610px #607FF6 , 412px 1022px #607FF6 , 1552px 1516px #607FF6 , 1517px 1892px #607FF6 , 306px 829px #607FF6 , 1416px 462px #607FF6 , 1575px 1460px #607FF6 , 424px 1500px #607FF6 , 1530px 1169px #607FF6 , 1388px 1608px #607FF6 , 185px 416px #607FF6 , 634px 1446px #607FF6 , 767px 479px #607FF6 , 71px 426px #607FF6 , 1937px 145px #607FF6 , 1955px 1312px #607FF6 , 1811px 611px #607FF6 , 1145px 569px #607FF6 , 1460px 676px #607FF6 , 131px 1858px #607FF6 , 1557px 473px #607FF6 , 735px 130px #607FF6 , 112px 1531px #607FF6 , 1312px 305px #607FF6 , 409px 1032px #607FF6 , 149px 1964px #607FF6 , 535px 1215px #607FF6 , 1382px 630px #607FF6 , 1437px 1368px #607FF6 , 362px 1181px #607FF6 , 388px 181px #607FF6 , 274px 1287px #607FF6 , 1858px 1414px #607FF6 , 661px 1935px #607FF6 , 675px 1205px #607FF6 , 1829px 1725px #607FF6 , 1937px 1145px #607FF6 , 237px 908px #607FF6 , 1059px 1185px #607FF6 , 824px 1248px #607FF6 , 1167px 1730px #607FF6 , 180px 1961px #607FF6 , 1663px 203px #607FF6 , 374px 221px #607FF6 , 724px 1883px #607FF6 , 970px 1362px #607FF6 , 832px 505px #607FF6 , 313px 233px #607FF6 , 1909px 597px #607FF6 , 434px 201px #607FF6 , 587px 995px #607FF6 , 1833px 623px #607FF6 , 1464px 561px #607FF6 , 231px 593px #607FF6 , 1558px 1433px #607FF6 , 1986px 1767px #607FF6 , 1753px 1728px #607FF6 , 1153px 1623px #607FF6 , 249px 229px #607FF6 , 1503px 1186px #607FF6 , 1784px 137px #607FF6 , 841px 403px #607FF6 , 1400px 354px #607FF6 , 197px 499px #607FF6 , 1188px 681px #607FF6 , 158px 391px #607FF6 , 443px 1099px #607FF6 , 723px 1445px #607FF6 , 1408px 1235px #607FF6 , 1908px 195px #607FF6 , 271px 891px #607FF6 , 469px 1693px #607FF6 , 580px 11px #607FF6 , 1533px 70px #607FF6 , 859px 761px #607FF6 , 1510px 1844px #607FF6 , 421px 558px #607FF6 , 1132px 1453px #607FF6 , 757px 1987px #607FF6 , 212px 293px #607FF6 , 569px 323px #607FF6 , 1404px 1394px #607FF6 , 252px 1386px #607FF6 , 1668px 1857px #607FF6 , 123px 1684px #607FF6 , 105px 490px #607FF6 , 1083px 1769px #607FF6 , 1071px 1953px #607FF6 , 1271px 1159px #607FF6 , 699px 1491px #607FF6 , 1744px 1997px #607FF6 , 1868px 1973px #607FF6 , 1438px 1449px #607FF6 , 1222px 1921px #607FF6 , 1328px 1210px #607FF6 , 438px 873px #607FF6 , 809px 780px #607FF6 , 491px 1524px #607FF6 , 447px 1830px #607FF6 , 927px 1936px #607FF6 , 564px 691px #607FF6 , 1784px 1747px #607FF6 , 1978px 1722px #607FF6 , 1599px 1480px #607FF6 , 1276px 729px #607FF6 , 731px 1174px #607FF6 , 1586px 1711px #607FF6 , 451px 1340px #607FF6 , 1075px 1899px #607FF6 , 13px 575px #607FF6 , 309px 1340px #607FF6 , 981px 183px #607FF6 , 248px 1315px #607FF6 , 849px 80px #607FF6 , 1754px 1540px #607FF6 , 73px 1432px #607FF6 , 1208px 1828px #607FF6 , 65px 575px #607FF6 , 1098px 730px #607FF6 , 127px 1358px #607FF6 , 185px 19px #607FF6 , 1222px 1679px #607FF6 , 1122px 315px #607FF6 , 1906px 452px #607FF6 , 761px 284px #607FF6 , 813px 492px #607FF6 , 1344px 843px #607FF6 , 118px 1834px #607FF6 , 1620px 359px #607FF6 , 1755px 1246px #607FF6 , 299px 1076px #607FF6 , 1746px 158px #607FF6 , 6px 1635px #607FF6 , 143px 190px #607FF6 , 101px 468px #607FF6 , 137px 971px #607FF6 , 1221px 1929px #607FF6 , 1752px 650px #607FF6 , 1635px 1761px #607FF6 , 1522px 833px #607FF6 , 908px 153px #607FF6 , 1044px 350px #607FF6 , 1151px 1940px #607FF6 , 822px 210px #607FF6 , 1774px 310px #607FF6 , 796px 1447px #607FF6 , 1069px 1903px #607FF6 , 217px 565px #607FF6 , 662px 1370px #607FF6 , 1876px 1570px #607FF6 , 847px 46px #607FF6 , 1042px 1689px #607FF6 , 1584px 1434px #607FF6 , 1791px 908px #607FF6 , 973px 908px #607FF6 , 793px 747px #607FF6 , 122px 483px #607FF6 , 1137px 1374px #607FF6 , 1757px 1791px #607FF6 , 513px 225px #607FF6 , 63px 731px #607FF6 , 1179px 1926px #607FF6 , 346px 18px #607FF6 , 589px 175px #607FF6 , 87px 302px #607FF6 , 380px 1295px #607FF6 , 450px 921px #607FF6 , 1667px 1973px #607FF6 , 1495px 1373px #607FF6 , 1462px 1850px #607FF6 , 540px 288px #607FF6 , 1208px 1051px #607FF6 , 1554px 1095px #607FF6 , 1009px 1516px #607FF6 , 181px 572px #607FF6 , 165px 387px #607FF6 , 549px 1835px #607FF6 , 960px 16px #607FF6 , 1360px 403px #607FF6 , 1251px 43px #607FF6 , 1905px 1813px #607FF6 , 1106px 866px #607FF6 , 1809px 277px #607FF6 , 1828px 1720px #607FF6 , 295px 1610px #607FF6 , 523px 166px #607FF6 , 1069px 692px #607FF6 , 1292px 217px #607FF6 , 11px 1721px #607FF6 , 99px 1045px #607FF6 , 51px 1584px #607FF6 , 1053px 266px #607FF6 , 1287px 1235px #607FF6 , 747px 1722px #607FF6 , 1542px 736px #607FF6 , 1256px 18px #607FF6 , 102px 609px #607FF6 , 586px 1339px #607FF6 , 1843px 1697px #607FF6 , 824px 1687px #607FF6 , 1124px 882px #607FF6 , 395px 501px #607FF6 , 1456px 672px #607FF6 , 1472px 1648px #607FF6 , 1326px 1164px #607FF6 , 777px 1672px #607FF6 , 81px 345px #607FF6 , 91px 386px #607FF6 , 243px 411px #607FF6 , 1560px 90px #607FF6 , 6px 1771px #607FF6 , 1601px 616px #607FF6 , 1220px 1808px #607FF6 , 1160px 836px #607FF6 , 246px 1777px #607FF6 , 456px 863px #607FF6 , 97px 1138px #607FF6 , 1811px 942px #607FF6 , 213px 414px #607FF6 , 891px 392px #607FF6 , 1044px 927px #607FF6 , 1856px 216px #607FF6 , 957px 347px #607FF6 , 1486px 406px #607FF6 , 838px 912px #607FF6 , 803px 361px #607FF6 , 564px 826px #607FF6 , 1597px 949px #607FF6 , 1206px 289px #607FF6 , 33px 1035px #607FF6 , 1762px 1377px #607FF6 , 789px 1815px #607FF6 , 1594px 1342px #607FF6 , 1668px 880px #607FF6 , 1539px 1581px #607FF6 , 1547px 53px #607FF6 , 861px 1433px #607FF6 , 693px 1618px #607FF6 , 1762px 782px #607FF6 , 1568px 682px #607FF6 , 1126px 1762px #607FF6 , 1242px 134px #607FF6 , 495px 959px #607FF6 , 1606px 219px #607FF6 , 1878px 1415px #607FF6 , 1652px 797px #607FF6 , 782px 1903px #607FF6 , 1774px 1133px #607FF6 , 1430px 408px #607FF6 , 265px 394px #607FF6 , 890px 336px #607FF6 , 1051px 311px #607FF6 , 461px 1559px #607FF6 , 1931px 91px #607FF6 , 1160px 380px #607FF6 , 1442px 1058px #607FF6 , 1157px 364px #607FF6 , 586px 227px #607FF6 , 1365px 715px #607FF6 , 1658px 1655px #607FF6 , 1923px 1664px #607FF6 , 1023px 1844px #607FF6 , 1939px 1367px #607FF6 , 1203px 1305px #607FF6 , 359px 642px #607FF6 , 1056px 425px #607FF6 , 787px 202px #607FF6 , 1609px 1850px #607FF6 , 1964px 200px #607FF6 , 1537px 586px #607FF6 , 1589px 903px #607FF6 , 1063px 1694px #607FF6 , 760px 1185px #607FF6 , 597px 1396px #607FF6 , 294px 452px #607FF6 , 433px 818px #607FF6 , 199px 840px #607FF6 , 1332px 1937px #607FF6 , 169px 1907px #607FF6 , 591px 834px #607FF6 , 1716px 1032px #607FF6 , 45px 1879px #607FF6 , 686px 1469px #607FF6 , 1520px 475px #607FF6 , 1122px 859px #607FF6 , 973px 1541px #607FF6 , 269px 477px #607FF6 , 1390px 716px #607FF6 , 1791px 783px #607FF6 , 824px 2000px #607FF6 , 1211px 1717px #607FF6 , 1008px 1587px #607FF6 , 1422px 204px #607FF6 , 234px 556px #607FF6 , 506px 550px #607FF6 , 942px 1670px #607FF6 , 397px 853px #607FF6 , 599px 795px #607FF6 , 762px 1926px #607FF6 , 1202px 1424px #607FF6 , 135px 1316px #607FF6 , 1442px 1692px #607FF6 , 977px 652px #607FF6 , 564px 1648px #607FF6 , 997px 1474px #607FF6 , 67px 1366px #607FF6 , 1860px 1451px #607FF6 , 1105px 772px #607FF6 , 1886px 1396px #607FF6 , 1510px 658px #607FF6 , 976px 1544px #607FF6 , 894px 543px #607FF6 , 1098px 1189px #607FF6 , 690px 77px #607FF6 , 770px 733px #607FF6 , 557px 1403px #607FF6 , 1758px 1623px #607FF6 , 1341px 812px #607FF6 , 699px 967px #607FF6 , 277px 866px #607FF6 , 1526px 1828px #607FF6 , 8px 977px #607FF6 , 1707px 952px #607FF6 , 12px 1900px #607FF6 , 72px 921px #607FF6 , 496px 1067px #607FF6 , 1288px 1749px #607FF6 , 273px 984px #607FF6 , 1197px 1991px #607FF6 , 242px 789px #607FF6 , 903px 1035px #607FF6 , 480px 1492px #607FF6 , 102px 1331px #607FF6 , 738px 1343px #607FF6 , 560px 1475px #607FF6 , 367px 846px #607FF6 , 1420px 962px #607FF6 , 1976px 892px #607FF6 , 1911px 1763px #607FF6 , 1639px 1002px #607FF6 , 437px 1522px #607FF6 , 1906px 1025px #607FF6 , 730px 1364px #607FF6 , 1127px 521px #607FF6 , 1401px 1792px #607FF6 , 1954px 1066px #607FF6 , 232px 250px #607FF6 , 1685px 660px #607FF6 , 1011px 999px #607FF6 , 1970px 790px #607FF6 , 750px 499px #607FF6 , 1738px 660px #607FF6 , 1621px 1849px #607FF6 , 446px 52px #607FF6 , 1055px 1396px #607FF6 , 1165px 1497px #607FF6 , 1740px 1425px #607FF6 , 1012px 1920px #607FF6 , 1258px 1560px #607FF6 , 1020px 1152px #607FF6 , 362px 673px #607FF6 , 1065px 975px #607FF6 , 582px 755px #607FF6 , 1271px 1479px #607FF6 , 719px 548px #607FF6 , 1602px 879px #607FF6 , 590px 499px #607FF6 , 721px 1412px #607FF6 , 1180px 113px #607FF6 , 1801px 1961px #607FF6 , 589px 941px #607FF6 , 883px 476px #607FF6 , 214px 890px #607FF6 , 1028px 892px #607FF6 , 1107px 1832px #607FF6 , 944px 361px #607FF6 , 480px 1453px #607FF6 , 1466px 683px #607FF6 , 981px 745px #607FF6 , 1968px 828px #607FF6 , 657px 1830px #607FF6 , 11px 1338px #607FF6 , 179px 730px #607FF6 , 1713px 197px #607FF6 , 51px 955px #607FF6 , 1243px 319px #607FF6 , 1175px 624px #607FF6 , 446px 46px #607FF6 , 5px 1158px #607FF6 , 82px 1352px #607FF6 , 1877px 402px #607FF6 , 708px 1778px #607FF6 , 903px 1625px #607FF6 , 1824px 352px #607FF6 , 1229px 140px #607FF6 , 1518px 24px #607FF6 , 1017px 512px #607FF6 , 515px 699px #607FF6 , 295px 265px #607FF6 , 69px 1773px #607FF6 , 1640px 1163px #607FF6 , 536px 342px #607FF6 , 970px 1766px #607FF6 , 560px 1416px #607FF6 , 577px 193px #607FF6 , 469px 9px #607FF6 , 466px 276px #607FF6 , 711px 853px #607FF6 , 401px 685px #607FF6 , 85px 506px #607FF6 , 865px 558px #607FF6 , 631px 105px #607FF6 , 887px 866px #607FF6 , 1704px 1001px #607FF6 , 1051px 1199px #607FF6 , 275px 1909px #607FF6 , 1462px 829px #607FF6 , 375px 1057px #607FF6 , 1531px 1501px #607FF6 , 205px 403px #607FF6 , 33px 1869px #607FF6 , 967px 1176px #607FF6 , 376px 863px #607FF6 , 1769px 1545px #607FF6 , 535px 51px #607FF6 , 1972px 1569px #607FF6 , 1773px 960px #607FF6 , 487px 620px #607FF6 , 1660px 687px #607FF6 , 1632px 972px #607FF6 , 1362px 42px #607FF6 , 479px 1655px #607FF6 , 1531px 1808px #607FF6 , 1450px 1412px #607FF6 , 1549px 170px #607FF6 , 1904px 1305px #607FF6 , 1209px 48px #607FF6 , 1933px 820px #607FF6 , 1623px 595px #607FF6 , 48px 643px #607FF6 , 179px 1754px #607FF6 , 589px 1032px #607FF6 , 1199px 356px #607FF6 , 1755px 1418px #607FF6 , 780px 1174px #607FF6 , 1905px 758px #607FF6 , 1567px 713px #607FF6 , 1372px 705px #607FF6 , 456px 654px #607FF6 , 759px 690px #607FF6 , 452px 673px #607FF6 , 993px 1610px #607FF6 , 1271px 188px #607FF6 , 343px 1750px #607FF6 , 1943px 1735px #607FF6 , 1717px 853px #607FF6 , 1247px 303px #607FF6 , 1314px 1895px #607FF6 , 1203px 489px #607FF6 , 741px 469px #607FF6 , 4px 246px #607FF6 , 1515px 115px #607FF6 , 606px 218px #607FF6 , 1966px 1471px #607FF6 , 177px 87px #607FF6 , 1575px 588px #607FF6 , 1136px 1386px #607FF6 , 70px 1868px #607FF6 , 1053px 18px #607FF6 , 1124px 721px #607FF6 , 1748px 1181px #607FF6 , 191px 1387px #607FF6 , 1931px 840px #607FF6 , 1088px 1603px #607FF6 , 634px 1255px #607FF6 , 814px 1434px #607FF6 , 585px 64px #607FF6 , 1074px 1618px #607FF6 , 1692px 761px #607FF6 , 651px 643px #607FF6 , 193px 335px #607FF6 , 1103px 1447px #607FF6 , 491px 1142px #607FF6 , 521px 408px #607FF6 , 536px 340px #607FF6 , 411px 1091px #607FF6 , 1646px 193px #607FF6 , 1595px 1285px #607FF6 , 870px 1349px #607FF6 , 1085px 1013px #607FF6 , 204px 1864px #607FF6 , 1359px 299px #607FF6 , 807px 964px #607FF6 , 219px 509px #607FF6 , 36px 1227px #607FF6 , 702px 1873px #607FF6 , 1471px 934px #607FF6 , 1763px 792px #607FF6 , 973px 1957px #607FF6 , 987px 68px #607FF6 , 593px 1282px #607FF6 , 1900px 607px #607FF6 , 407px 1659px #607FF6 , 587px 17px #607FF6 , 632px 158px #607FF6;
}


@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}


.winnerHeader {
  padding: 50px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  z-index: 100;
}

.winnerBottomL1 img {
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
}

.winnerHeaderLeft {
  display: flex;
  column-gap: 10px;
  position: relative;
  z-index: 100;
}


.backBtn {
  width: 57px;
  height: 51px;
  line-height: 57px;
  background: #0025AC;
  box-shadow: 1px 5px 0 #001E8A;
  border-radius: 8px;
  text-align: center;
  font-size: 26px;
  cursor: pointer;
}

.prizePot {
  display: flex;
  align-items: center;
  column-gap: 15px;
  padding: 0 10px;
  /*width: 183px;*/
  height: 56px;
  background: #607FF6;
  border: 2px solid #0025AC;
  box-shadow: 4px 4px 0 #000B53;
  border-radius: 12px;
}

.prizeNum {
  line-height: 23px;
  font-size: 23px;
}

.bound {
  cursor: pointer;
  font-size: 23px;
  padding-right: 20px;
}

.winnerTitle {
  width: 162px;
  height: 37px;
  font-size: 35px;
  font-weight: bold;
}

.prizePotImg {
  margin-top: -25px;
}

.winnerAccount {
  width: 56%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 100;
}

.winnerAccountInfos {
  display: flex;
  column-gap: 20px;
  align-items: center;
  overflow: hidden;
}

.winnerCountdown {
  font-size: 20px;
  font-weight: bold;
  height: 55px;
  text-shadow: 0 3px 0 rgba(14, 23, 79, 0.2);
  background: #607FF6;
  border: 2px solid #0025AC;
  box-shadow: 4px 4px 0 #000B53;
  border-radius: 12px;
  padding: 2px 10px;
  cursor: pointer;
}

.winnerAward, .winnerMedium, .winnerAccountInfo {
  min-width: 60px;
  height: 55px;
  line-height: 55px;
  background: #607FF6;
  border: 2px solid #0025AC;
  box-shadow: 4px 4px 0 #000B53;
  opacity: 1;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
}

.winnerAccountInfo img {
  border-radius: 17px;
}

.winnerAccountInfo {
  padding: 0 10px;
}

.winnerAccountInfo .nickName {
  margin-left: 10px;
}

.winnerTips {
  text-align: center;
  width: 687px;
  height: 60px;
  line-height: 60px;
  background: #0A133F;
  border: 2px solid #607FF6;
  margin: 0 auto;
  border-radius: 12px;
  display: flex;
  justify-content: space-around;
  position: relative;
}

.tipsLogo {
  width: 74px;
  height: 74px;
  line-height: 74px;
  background: #0A133F;
  border: 2px solid #607FF6;
  border-radius: 50%;
  opacity: 1;
  position: absolute;
  left: -20px;
  top: -11px;
}

.winnerTipsItem {
  height: 73px;
  line-height: 73px;
  font-size: 25px;
  color: #FFF;
}



.winnerContentCards {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}

.winnerContentCard {
  width: 336px;
  height: 386px;
  background: #607FF6;
  border-radius: 30px;
  position: relative;
  text-align: center;
  padding: 10px;
}

.winnerCardDesc {
  margin-top: 30px;
  padding: 0 5px;
  font-size: 20px;
}

.winnerContentCardStatus {
  width: 230px;
  height: 61px;
  line-height: 61px;
  text-align: center;
  font-size: 25px;
  background: #83B246;
  margin: 0 auto;
  margin-top: -15px;
  border-radius: 0 0 15px 15px;
}

.winnerCardFooter {
  position: absolute;
  width: 95%;
  bottom: 0;
}

.winnerCardFooterImg {
  text-align: center;
  position: relative;
}

.maskCountdown {
  position: absolute;
  width: 186px;
  height: 186px;
  background: rgba(0, 11, 83, 0.5);
  top: 5px;
  left: 50%;
  color: #FFF;
  font-size: 24px;
  margin-left: -90px;
  border-radius: 50%;
  text-align: center;
  line-height: 200px;
  opacity: 0;
  border: 8px solid rgba(83, 83, 255, 0.4);
}

.maskCountdown:hover {
  cursor: pointer;
  opacity: 1;
  transform: scale(1.1);
  border-top-color: rgba(0, 0, 255, 0.4);
  border-left-color: rgba(0, 0, 255, 0.4);
  border-bottom-color: rgba(0, 0, 255, 0.4);
  border-right-color: rgba(0, 0, 255, 0.4);
  transition: transform 0.2s;
  transition: transform 0.2s, border-top-color 0.18s linear,
  border-left-color 0.18s linear 0.1s, border-bottom-color 0.18s linear 0.2s,
  border-right-color 0.18s linear 0.15s;
}

.winnerBtnNow {
  background: #000B53;
}

.winnerBtnLater {
  background: #FCAA36;
}

.winnerProfileWrapper {
  width: 647px;
  background: #607FF6;
  border-radius: 33px;
  margin: 0 auto;
  padding: 20px 60px;
}

.profileTitle {
  font-size: 20px;
  font-weight: bold;
  padding: 5px 0;
  margin-top: 30px;
}

.profileUserName .ant-input {
  height: 54px;
  line-height: 54px;
  font-size: 20px;
  background: #4B64C9;
  border-radius: 15px;
  border: none;
  color: #FFF;
  border: 2px solid rgba(10, 19, 63, 0.49019607843137253);
}

.profileAddress .ant-input {
  height: 54px;
  line-height: 54px;
  background: #2A4BCC;
  border-radius: 27px;
  border: none;
  color: #d2d2d2;
  font-size: 16px;
  font-family: Poppins,serif;
  font-weight: 400;
  padding: 0 20px;
}

.profileAvatarInfo {
  width: 54px;
  height: 54px;
  background: #595959;
  border-radius: 50%;
  position: relative;
  border: 2px solid #FFF;
}

.profileAvatarInfo img {
  border-radius: 50%;
  position: absolute;
  cursor: pointer;
}

.profileAvatarInfo img:hover {
  opacity: 0.3;
}

.profileAvatars {
  display: flex;
  column-gap: 20px;
  row-gap: 10px;
  flex-wrap: wrap;
}

.profileAvatarSelect {
  width: 50px;
  height: 50px;
  background: #0025AC;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  line-height: 50px;
  opacity: 0.8;
  font-weight: bold;
  color: #FFF;
  font-size: 23px;
}

.profileBtn {
  width: 144px;
  height: 53px;
  line-height: 53px;
  font-size: 25px;
  text-align: center;
  background: #0025AC;
  box-shadow: 1px 5px 0 #001E8A;
  border-radius: 15px;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
}

.myRewardsWrapper {
  text-align: center;
  position: relative;
}

.myRewardsTitle {
  font-size: 28px;
  line-height: 0;
  padding-bottom: 20px;
}

.myRewardsSwitchBtn {
  display: flex;
  width: 500px;
  border-radius: 15px;
  margin: 20px auto;
  border: 2px solid #607FF6;
}

.myRewardsBtn {
  background: #11194f;
  color: #FFF;
  width: 250px;
  height: 53px;
  line-height: 53px;
  text-align: center;
  cursor: pointer;
  border-radius: 13px 0 0 13px;
}

.todayBtn {
  border-radius: 13px 0 0 13px;
}

.myRewardsTotalSelected {
  background: #607FF6;
  border-radius: 0 13px 13px 0;
}


.myRewardsBtnSelected {
  background: #607FF6;
}

.romanBtn {
  border-radius: 0 13px 13px 0;
}

.myRewardsContent {
  width: 494px;
  height: 410px;
  margin: 0 auto;
  background: #607FF6;
  box-shadow: 15px 20px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 50px 10px;
}

.myRewardsContentAvatar {
  text-align: center;
}

.myRewardsContentAvatar img {
  width: 150px;
  border-radius: 150px;
}

.myRewardsContentName {
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  padding: 20px 0;
}


.myRewardsContentAres {
  width: 263px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 28px;
  background: #2A4BCC;
  border-radius: 24px;
  margin: 0 auto;
}

.winRecord {
  display: flex;
  align-items: center;
  font-size: 20px;
  column-gap: 10px;
  cursor: pointer;
  justify-content: center;
  margin-top: 20px;
  border-radius: 12px;
  padding: 5px;
  border: 1px solid #FFFFFF;
}

.recordBtns {
  display: flex;
  justify-content: center;
  column-gap: 20px;
}

.rewardsExtractBtn, .winTableBtn {
  width: 144px;
  height: 53px;
  line-height: 53px;
  font-size: 25px;
  text-align: center;
  background: #0025AC;
  box-shadow: 1px 5px 0 #001E8A;
  border-radius: 15px;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
}

.winTableBtn {
  width: 120px;
  height: 45px;
  line-height: 45px;
  font-size: 20px;
  margin-top: 0;
  font-family: "Moriis roman",serif;
}


.marqueeBox {
  width:100%;
  height: 60px;
  overflow: hidden;
  display: flex;
  align-items: center;
  white-space: nowrap;
  color: white;
  font-size: 14px;
  letter-spacing: 0;
  padding: 0 20px;
}

.marqueeWrapper {
  width:100%;
  height:100%;
  overflow: hidden;
  line-height: 40px;
}

.marqueeItem {
  height: 60px;
  line-height: 60px;
  .marqueeText {
    padding: 0 20px;
    white-space: nowrap;
    display: inline-block;
    height: 60px;
    line-height: 60px;
    font-size: 25px;
  }
}

.tableGodAvatar {
  display: flex;
  align-items: center;
  column-gap: 10px;
  img {
    width: 32px;
    border-radius: 50%;
  }
  .godAvatar {
    border: 2px solid #E7EBFF;
    border-radius: 50%;
  }
}

.modalTitle {
  position: absolute;
  top: -50px;
  font-family: "Morris Roman", serif;
  font-weight: bold;
  text-align: center;
  width: 100%;
  font-size: 25px;
}

@media screen and (max-width: 1300px) {
  .winnerWrapper {
    padding: 0 60px 50px 60px;
  }
  .winnerHeader {
    padding: 50px 0;
    width: 100%;
  }
  .winnerContentCard {
    width: 336px;
    height: 410px;
  }
}


@media screen and (min-width: 1300px) {
  .winnerWrapper {
    padding: 0 60px 50px 60px;
  }
  .winnerHeader {
    padding: 50px 0;
    width: 100%;
  }
  .winnerContentCard {
    width: 336px;
    height: 410px;
  }
}

@media screen and (max-width: 750px) {
  .winnerWrapper {
    padding: 0 20px 50px 20px;
  }
  .winnerTips {
    width: 320px;
    height: 57px;
    line-height: 57px;
  }
  .winnerTips img {
    width: 30px;
  }

  .winnerContentCards {
    display: block;
  }

  .winnerContentCard {
    width: 340px;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  .winnerCardDesc {
    padding: 0 15px;
    line-height: 28px;
  }


  .marqueeItem {
    height: 57px;
    line-height: 57px;
  }
  .marqueeItem .marqueeText {
    font-size: 20px;
    height: 57px;
    line-height: 57px;
  }

  .myRewardsSwitchBtn {
    width: 300px;
  }

  .myRewardsContent {
    width: 340px;
  }

  .shareCardBtn {
    width: 135px;
  }
  .shareTips {
    bottom: -115;
    width: 300px;
    right: -83px;
    line-height: 26px;
  }

  .winRecord {
    line-height: 20px;
    column-gap: 0;
    img {
      width: 30px;
    }
  }
}
</style>
