<template>
  <div class="wrapper">
    <div class="title">
      查询历史记录
    </div>
    <div class="header">
      <div class="headerButton">
        <div :class="['btnItem', selectBtnIndex === 0 ? 'selectBtn' : '']" @click="changeStatus(0)">查询获奖记录</div>
        <div :class="['btnItem', selectBtnIndex === 1 ? 'selectBtn' : '']" @click="changeStatus(1)">查询提取记录</div>
      </div>
    </div>
    <div class="nav">
      <router-link to="/box/dashboard">
        <a-button>Dashboard</a-button>
      </router-link>
    </div>

    <div class="searchBtn">
      <a-input-search
          placeholder="input search address"
          enter-button="Search"
          size="large"
          v-model="searchValue"
          @search="onSearch"
      />
    </div>

     <div class="tableContainer">
       <a-table v-if="selectBtnIndex === 0" bordered :data-source="dataSource" :columns="columns"
                :pagination="pagination">
         <template slot="GodAvatar" slot-scope="text">
           <div class="tableGodAvatar">
             <div class="godAvatar">
               <img :src="gods[text].url" alt="">
             </div>
             <span>{{lg(gods[text].name)}}</span>
           </div>
         </template>
       </a-table>
       <a-table v-if="selectBtnIndex === 1" bordered :data-source="withdrawHistory"
                :columns="withdrawColumns" :pagination="withdrawpagination">
         <template slot="status" slot-scope="text">
           <span v-if="text === 0">unProcess</span>
           <span v-if="text === 1">processing</span>
           <i class="fa fa-clock-o" aria-hidden="true" v-if="text === 2"></i>
         </template>
       </a-table>
     </div>
  </div>
</template>

<script>
export default {
  name: "history",
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
      selectBtnIndex: 0,
      searchValue: "",
      dataSource: [],
      columns: [
        {
          title: '用户',
          dataIndex: 'nick_name',
          width: '30%',
        },
        {
          title: '地址',
          dataIndex: 'address',
        },
        {
          title: '时间',
          dataIndex: 'play_time',
        },
        {
          title: '奖励',
          dataIndex: 'bonus',
        },
        {
          title: 'God',
          dataIndex: 'chosen_index',
          scopedSlots: { customRender: 'GodAvatar' },
        },
      ],
      pagination: {
        pageSize: 10,
        showSizeChanger: false,
        total: 0,
        onChange: (pageIndex) => {
          this.getWinHistory(pageIndex - 1);
        },
      },
      withdrawHistory: [],
      withdrawColumns: [
        {
          title: '用户',
          dataIndex: 'nick_name',
          width: '30%',
        },
        {
          title: '提取奖励数量',
          dataIndex: 'bonus',
        },
        {
          title: '地址',
          dataIndex: 'address',
        },
        {
          title: '请求时间',
          dataIndex: 'apply_time',
        },
        {
          title: 'Status',
          dataIndex: 'state',
          align: 'left',
          scopedSlots: {customRender: 'status'},
        },
      ],
      withdrawpagination: {
        pageSize: 10,
        showSizeChanger: false,
        total: 0,
        onChange: (pageIndex) => {
          this.getWithdrawHistory(pageIndex - 1);
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
    }
  },
  mounted() {
    this.getWinHistory();
  },
  methods: {
    changeStatus(index) {
      this.selectBtnIndex = index;
      if (index === 0) {
        this.getWinHistory();
      } else if (index === 1) {
        this.getWithdrawHistory();
      }
    },
    getWinHistory(pageIndex = 0){
      fetch(`/api/v1/game/histories?address=${this.searchValue}&page=${pageIndex}&size=${10}`, {
        method: "GET",
        mode: "cors",
      }).then(async (res) => {
        const result = await res.json();
        this.pagination.total = result.data.totalNum;
        result.data.items.map(item => {
          item.play_time = new Date(item.play_time * 1000).toLocaleString();
          item.chosen_index = item.cards[item.chosen_index] - 1;
        });
        this.dataSource = result.data.items;
        console.log(result, this.pagination);
      });
    },
    getWithdrawHistory(pageIndex = 0){
      fetch(`/api/v1/withdraw/histories?address=${this.searchValue}&page=${pageIndex}&size=10`, {
        method: "GET",
        mode: "cors",
      }).then(async (res) => {
        const result = await res.json();
        this.withdrawpagination.total = result.data.totalNum;
        result.data.items.map(item => {
          item.apply_time = new Date(item.apply_time * 1000).toLocaleString();
        });
        this.withdrawHistory = result.data.items;
      })
    },
    onSearch(value) {
      console.log(value);
      if (this.selectBtnIndex === 0) {
        this.getWinHistory();
      } else if (this.selectBtnIndex === 1) {
        this.getWithdrawHistory();
      }
    },
  }
}
</script>

<style scoped lang="scss">
  .wrapper {
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

  .header {
    padding: 20px 0;
    display: flex;
    justify-content: center;
  }

  .headerButton {
    display: flex;
    justify-content: center;
    height: 52px;
    border: 1px solid #7345f5;
    border-radius: 5px;
  }

  .btnItem {
    width: 120px;
    height: 50px;
    line-height: 50px;
    background: #FFF;
    color: #101010;
    text-align: center;
    cursor: pointer;
  }

  .selectBtn {
    background: #7345f5;
    color: #FFF;
  }

  .tableContainer {
    background: #FFF;
    margin-top: 20px;
  }

  .searchBtn {
    width: 400px;
    margin: 0 auto;
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
</style>
