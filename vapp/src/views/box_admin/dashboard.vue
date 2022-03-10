<template>
  <div class="dashboardWrapper">
    <div class="title">
      后台统计数据
    </div>
    <div class="nav">
      <router-link to="/box/transfer">
        <a-button>提取奖励管理</a-button>
      </router-link>

      <router-link to="/box/history">
        <a-button>查询历史记录</a-button>
      </router-link>

      <router-link to="/box/share">
        <a-button>分享任务系统</a-button>
      </router-link>
    </div>
    <div class="statistics">
      <div id="staking" class="staking"></div>
      <div id="rate" class="rate"></div>
    </div>
    <div class="contentWrapper">
      <div class="participation">
        <div class="cardTitle">
          参与人数
        </div>
        <div class="peopleNum">
          <span class="label">总计:</span> {{total_play_people}}
        </div>
        <div id="peopleBar" class="peopleBar"></div>
      </div>

      <div class="participation">
        <div class="cardTitle">
          参与次数
        </div>
        <div class="peopleNum">
          <span class="label">总计:</span> {{part_in_count}}
        </div>
        <div id="winBar" class="peopleBar"></div>
      </div>

      <div class="participation">
        <div class="cardTitle">
          发放游戏奖励
        </div>
        <div class="peopleNum">
          <span class="label">总计:</span> {{game_reward_amount}} ARES
        </div>
        <div id="issueReward" class="peopleBar"></div>
      </div>

      <div class="participation">
        <div class="cardTitle">
          发放分享奖励
        </div>
        <div class="peopleNum">
          <span class="label">总计:</span> {{share_reward_amount}} ARES
        </div>
        <div id="shareReward" class="peopleBar"></div>
      </div>

      <div class="participation">
        <div class="cardTitle">
          提取奖励
        </div>
        <div class="peopleNum">
          <span class="label">总计:</span> {{withdraw_amount}} ARES
        </div>
        <div id="withdraw" class="peopleBar"></div>
      </div>

      <div class="participation">
        <div class="cardTitle">
          大奖已开
        </div>
        <!--<div class="peopleNum">-->
        <!--  <span class="label">总计:</span> {{opened_big_reward}}-->
        <!--</div>-->
        <div id="awardsHasBeenOpen" class="peopleBar"></div>
      </div>


      <div class="participation">
        <div class="cardTitle">
          大奖未开
        </div>
        <!--<div class="peopleNum">-->
        <!--  <span class="label">总计:</span> {{unopened_big_reward}}-->
        <!--</div>-->
        <div id="awardIsNotOpen" class="peopleBar"></div>
      </div>

      <div class="participation">
        <div class="cardTitle">
          单人奖励Max
        </div>
        <!--<div class="peopleNum">-->
        <!--  <span class="label">总计:</span> {{single_reward_max}} ARES-->
        <!--</div>-->
        <div id="awardMax" class="peopleBar"></div>
      </div>

      <div class="participation">
        <div class="cardTitle">
          单人奖励Min
        </div>
        <!--<div class="peopleNum">-->
        <!--  <span class="label">总计:</span> {{single_reward_min}} ARES-->
        <!--</div>-->
        <div id="awardMin" class="peopleBar"></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: "dashboard",
  beforeRouteEnter (to, from, next) {
    const token = sessionStorage.getItem("box_admin_token");
    if("TrojanAdmin" === atob(token)) {
      next();
    } else {
      next( vm => {
        vm.$router.push("/box/admin");
      })
    }
  },
  data() {
    return {
      total_play_people: 0,
      opened_big_reward: 0,
      part_in_address: 0,
      part_in_count: 0,
      reward_amount: 0,
      staking_amount: 0,
      avgApr: 0,
      game_reward_amount: 0,
      share_reward_amount: 0,
      single_reward_max: 0,
      single_reward_min: 0,
      unopened_big_reward: 0,
      withdraw_amount: 0,
      stakingBalance: [],
      annuallyRate: [],
      time: [],
      barDates: [],
      partInCount: [],
      winCounts: [],
      rewardAmount: [],
      withdrawAmount: [],
      unopenedBigReward: [],
      singleRewardMax: [],
      singleRewardMin: [],
      shareRewards: [],
      updateDataInterval: null
    };
  },
  mounted() {
    this.getTotalNum();
    this.getHistoryList();
    this.getHourly();

    this.updateDataInterval = setInterval(() => {
      this.getTotalNum();
      this.getHistoryList();
      this.getHourly();
    }, 1000 * 60);
  },
  destroyed()
  {
    if (this.updateDataInterval)
    {
      clearInterval(this.updateDataInterval);
    }
  },
  methods: {
    getHourly() {
      fetch("/api/v1/stats/yield/hourly?page=0&size=48", {
        method: "GET",
        mode: "cors",
      }).then(async (res) => {
        const result = await res.json();

        if (!result.data.item) {
          return;
        }

        const staking = [];
        const rate = [];
        const time = [];
        this.stakingBalance = result.data.items[0].balance;
        this.annuallyRate = (result.data.items[0].annually_rate * 100).toFixed(2) + "%";
        result.data.items.forEach(item => {
          staking.push(item.balance);
          rate.push((item.annually_rate * 100).toFixed(2));
          time.push(item.time);
        })
        this.stakingBalance = staking;
        this.rate = rate;
        this.time = time;
        // this.drawStakingBalance();
        // this.drawRate();
      })
    },
    getTotalNum() {
      fetch("/api/v1/stats/total", {
        method: "GET",
        mode: "cors",
      }).then(async (res) => {
        const result = await res.json();
        console.log(result);
        this.total_play_people = result.data.part_in_address;
        this.staking_amount = result.data.staking_amount;
        this.part_in_count = result.data.part_in_count;
        this.reward_amount = result.data.reward_amount;
        this.game_reward_amount = result.data.game_reward_amount;
        this.share_reward_amount = result.data.share_reward_amount;
        this.withdraw_amount = result.data.withdraw_amount;
        this.avgApr = (result.data.avg_apr * 100).toFixed(2);
        this.single_reward_max = result.data.single_reward_max ? result.data.single_reward_max : 0;
        this.single_reward_min = result.data.single_reward_min ? result.data.single_reward_min : 0;
      })
    },
    getHistoryList() {
      fetch("/api/v1/stats/daily/list?page=0&size=7", {
        method: "GET",
        mode: "cors",
      }).then(async (res) => {
        const result = await res.json();
        const barDate = [];
        const partInCount = [];
        const rewardAmount = [];
        const withdrawAmount = [];
        const openedBigReward = [];
        const unopenedBigReward = [];
        const singleRewardMax = [];
        const singleRewardMin = [];
        const stakingAmount = [];
        const rates = [];
        const shareReward = [];
        const winCounts = [];
        result.data.items.reverse().forEach(item => {
          const year = item.day.slice(0, 4);
          const month = item.day.slice(4, 6);
          const day = item.day.slice(6);
          barDate.push(year + "-" + month + "-" + day);

          partInCount.push(item.part_in_address);
          winCounts.push(item.part_in_count);
          rewardAmount.push(item.game_reward_amount);
          shareReward.push(item.share_reward_amount);
          withdrawAmount.push(item.withdraw_amount);
          openedBigReward.push(item.opened_big_reward);
          unopenedBigReward.push(item.unopened_big_reward);
          singleRewardMax.push(item.single_reward_max);
          singleRewardMin.push(item.single_reward_min);
          stakingAmount.push(item.staking_amount);
          rates.push((item.annual_yield_rate * 100).toFixed(2));
        });
        this.barDates = barDate;
        this.partInCount = partInCount;
        this.rewardAmount = rewardAmount;
        this.withdrawAmount = withdrawAmount;
        this.openedBigReward = openedBigReward;
        this.unopenedBigReward = unopenedBigReward;
        this.singleRewardMax = singleRewardMax;
        this.singleRewardMin = singleRewardMin;
        this.stakingBalance = stakingAmount;
        this.rate = rates;
        this.winCounts = winCounts;
        this.shareRewards = shareReward;

        this.drawPeopleBar();
        this.drawWinCount();
        this.drawIssueReward();
        this.drawShardReward();
        this.drawWithdraw();
        this.awardsHasBeenOpen();
        this.awardIsNotOpen();
        this.awardMax();
        this.awardMin();
        this.drawStakingBalance();
        this.drawRate();
      })
    },
    drawPeopleBar() {
      const peopleBarDom = document.getElementById('peopleBar');
      const peopleBar = echarts.init(peopleBarDom);
      let option = {
        tooltip: {
          show: true
        },
        xAxis: {
          type: 'category',
          data: this.barDates,
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.partInCount,
            type: 'bar'
          }
        ]
      };
      peopleBar.setOption(option);
    },
    drawWinCount() {
      const winBarDom = document.getElementById('winBar');
      const winBar = echarts.init(winBarDom);
      let option = {
        tooltip: {
          show: true
        },
        xAxis: {
          type: 'category',
          data: this.barDates,
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.winCounts,
            type: 'bar'
          }
        ]
      };
      winBar.setOption(option);
    },
    drawIssueReward() {
      const rewardBarDom = document.getElementById('issueReward');
      const rewardBar = echarts.init(rewardBarDom);
      let option = {
        tooltip: {
          show: true
        },
        xAxis: {
          type: 'category',
          data: this.barDates
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.rewardAmount,
            type: 'bar'
          }
        ]
      };
      rewardBar.setOption(option);
    },
    drawShardReward() {
      const rewardBarDom = document.getElementById('shareReward');
      const rewardBar = echarts.init(rewardBarDom);
      let option = {
        tooltip: {
          show: true
        },
        xAxis: {
          type: 'category',
          data: this.barDates
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.shareRewards,
            type: 'bar'
          }
        ]
      };
      rewardBar.setOption(option);
    },
    drawWithdraw() {
      const withdrawBarDom = document.getElementById('withdraw');
      const withdrawBar = echarts.init(withdrawBarDom);
      let option = {
        tooltip: {
          show: true
        },
        xAxis: {
          type: 'category',
          data: this.barDates
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.withdrawAmount,
            type: 'bar'
          }
        ]
      };
      withdrawBar.setOption(option);
    },
    awardsHasBeenOpen() {
      const awardsHasBeenOpenBarDom = document.getElementById('awardsHasBeenOpen');
      const awardsHasBeenOpenBar = echarts.init(awardsHasBeenOpenBarDom);
      let option = {
        tooltip: {
          show: true
        },
        xAxis: {
          type: 'category',
          data: this.barDates
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.openedBigReward,
            type: 'bar'
          }
        ]
      };
      awardsHasBeenOpenBar.setOption(option);
    },
    awardIsNotOpen() {
      const awardIsNotOpenBarDom = document.getElementById('awardIsNotOpen');
      const awardIsNotOpenBar = echarts.init(awardIsNotOpenBarDom);
      let option = {
        tooltip: {
          show: true
        },
        xAxis: {
          type: 'category',
          data: this.barDates
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.unopenedBigReward,
            type: 'bar'
          }
        ]
      };
      awardIsNotOpenBar.setOption(option);
    },
    awardMax() {
      const awardMaxBarDom = document.getElementById('awardMax');
      const awardMaxBar = echarts.init(awardMaxBarDom);
      let option = {
        tooltip: {
          show: true
        },
        xAxis: {
          type: 'category',
          data: this.barDates
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.singleRewardMax,
            type: 'bar'
          }
        ]
      };
      awardMaxBar.setOption(option);
    },
    awardMin() {
      const awardMinBarDom = document.getElementById('awardMin');
      const awardMinBar = echarts.init(awardMinBarDom);
      let option = {
        tooltip: {
          show: true
        },
        xAxis: {
          type: 'category',
          data: this.barDates
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.singleRewardMin,
            type: 'bar'
          }
        ]
      };
      awardMinBar.setOption(option);
    },
    drawStakingBalance() {
      const stakingDom = document.getElementById('staking');
      const stakingDomLine = echarts.init(stakingDom);
      let option = {
        title: {
          text: `总质押量 ${this.staking_amount} ARES`,
          left: "0",
          top: "0",
          textStyle: {
            fontSize: 24
          },
        },
        tooltip: {
          show: true,
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        xAxis: {
          type: 'category',
          data: this.barDates
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.stakingBalance,
            type: 'line',
            smooth: true
          }
        ]
      };
      stakingDomLine.setOption(option);
    },
    drawRate() {
      const rateDom = document.getElementById('rate');
      const rateDomLine = echarts.init(rateDom);
      let option = {
        title: {
          text: `年化收益率   平均年化收益率：${this.avgApr} %`,
          left: "0",
          top: "0",
          textStyle: {
            fontSize: 24
          },
        },
        tooltip: {
          show: true,
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        xAxis: {
          type: 'category',
          data: this.barDates
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}%'
          }
        },
        series: [
          {
            data: this.rate,
            type: 'line',
            smooth: true
          }
        ]
      };
      rateDomLine.setOption(option);
    }
  }
}
</script>

<style scoped lang="scss">
  .dashboardWrapper {
    width: 100%;
    min-height: 100vh;
    padding: 30px 50px;
    color: #FFF;
    background: url("../../assets/image/box_bcg1.png")
  }

  .title {
    text-align: center;
    font-size: 28px;
    padding-bottom: 20px;
  }

  .contentWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 20px;
    row-gap: 20px;
  }

  .participation {
    background: #FFF;
    width: 400px;
    height: 320px;
    padding: 20px;
    color: #7e7e7e;
  }


  .cardTitle {

  }

  .statistics {
    display: flex;
    column-gap: 50px;
    justify-content: space-around;
    padding-bottom: 50px;
    //padding: 20px 0;
    //font-size: 22px;
  }

  .staking, .rate {
    width: 48%;
    height: 300px;
    background: #FFF;
  }

  .peopleNum {
    font-size: 38px;
    color: #38393b;
  }

  .label {
    font-size: 20px;
    color: #7e7e7e;
    padding-right: 20px;
  }

  .peopleBar {
    width: 380px;
    height: 250px;
  }

  .nav {
    padding: 10px 0;
    display: flex;
    column-gap: 15px;
  }


  @media screen and (min-width: 1400px) {
    .peopleBar {
      width: 390px;
    }
    .participation {
      width: 410px;
    }
  }

  @media screen and (min-width: 1560px) {
    .peopleBar {
      width: 450px;
    }
    .participation {
      width: 470px;
    }
  }
</style>
