<template>
  <div id="app" :key="app_key">
    <frameHeader v-if="$route.meta.keepAlive" />
    <router-view />
    <vue-confirm-dialog></vue-confirm-dialog>
  </div>
</template>

<script>
import frameHeader from "@/views/_comp_frame/header.vue";
import bus from "./bus.js";

export default {
  name: "",
  components: {
    frameHeader,
  },
  data() {
    return {
      app_key: 0,
    };
  },
  watch: {
    "$store.state.app.lang"() {
      let v = this;
      v.app_key += 1;
    },
  },
  methods: {
    async scanMetaMaskAccount() {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
      await this.action.scanMetaMaskAccount();
      this.checkMetamask();
    },
    checkMetamask() {
      const userAgent = window.navigator.userAgent;
      // don't check when in mobile
      if (
          /(iPhone|iPad|iPod|iOS)/i.test(userAgent) ||
          /(Android)/i.test(userAgent)
      ) {
        return;
      }
      if (
          userAgent.toLowerCase().includes("chrome") &&
          !window.ethereum.isMetaMask
      ) {
        this.$confirm({
          title: `Install Metamask`,
          message: `You should install Metamask to continu to use this application.
                        Go to install metamask?`,
          button: {
            no: "No",
            yes: "Yes",
          },
          callback: (confirm) => {
            if (confirm) {
              window.open("https://metamask.io/download.html", "_blank");
            }
          },
        });
      }
    },
  },
  created() {
    // 挂载
    bus.appvue = this;
    bus.$store = this.$store;
  },
  mounted() {
    // 检查安装否
    this.scanMetaMaskAccount();
    // 监听事件
    this.action.listenMetaMask();
  },
};
</script>

<style lang="scss">
@import "@/assets/css/main.scss";

.btn-disabled {
  background-color: #95999c !important;
  cursor: not-allowed !important;
  pointer-events: none;
}
#app {
  position: relative;
  z-index: 102;
}
@media screen and (max-width: 720px) {
  body .boxed {
    max-width: 100%;
  }
  body .stake-page {
  }
}

@font-face {
  font-family: "Moriis roman";
  src: url("./assets/Morris roman.ttf") format("woff2")
}

.el-carousel__item .el-carousel__mask {
  background-color: #000;
  opacity: 0;
}

.el-carousel__indicators {
  padding-top: 25px !important;
}

.el-carousel__arrow i {
  font-size: 26px;
  color: #607FF6;
  font-weight: 900 !important;
}

.tableHide {
  display: none;
}

.winHistoryWrapper {
  .ant-modal-body {
    .modalTitle {
      font-family: "Moriis roman",serif;
    }
  }
  .ant-modal-content {
    background: #607FF6;
    color: #FFFFFF !important;
  }
  .myWinTable {
    .ant-table-thead > tr > th {
      background: #2A4BCC;
      color: #FFF;
      border-right: none;
      border-bottom: none;
      font-family: "Moriis roman",serif;
    }

    .ant-table-placeholder {
      background: #607FF6;
      color: #FFF;
      border: none;
    }

    .ant-table-thead > tr > th:first-child {
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
      padding-left: 20px !important;
    }

    .ant-table-thead > tr > th:last-child {
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
    }

    .ant-table {
      color: #FFF;
      font-size: 16px;
    }
    .ant-table-tbody {
      font-family: Poppins,serif;
    }
    .ant-table-tbody > tr > td {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    .ant-table-tbody > tr:hover {
      color: #2E4765;
    }
  }

  .winTable {
    .ant-table-thead > tr > th:nth-child(2) {
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
      padding-left: 20px !important;
    }
  }
}

.aboutTable {
  border-radius: 20px;
  table {
    border: none !important;
    font-family: Poppins,serif;
    color: #2E4765;
    font-size: 16px;
  }
  .ant-table-wrapper {
    padding: 20px 20px !important;
  }
  .ant-table-thead > tr > th {
    background: #E7EBFF;
    color: #0E174F;
    border-right: none;
  }
}

.boxTransferTableWrapper {
  border-radius: 10px;
  table {
    border: none !important;
  }
  .ant-table-thead > tr > th {
    background: #7345f5;
    color: #FFF;
    border-right: none;
  }
  .ant-table-pagination {
    padding: 0 20px;
  }
}

.postImageWrapper {
  display: flex;
  .ant-input-affix-wrapper {
    border: none;
    .ant-input {
      border: 2px solid rgba(10, 19, 63, 0.49);
      background: #4B64C9;
      color: #FFF;
      height: 48px;
      line-height: 48px;
      font-size: 18px;
    }

    .ant-input:focus {
      border: 2px solid rgba(10, 19, 63, 0.49);
    }
  }
}

.uploadBtn {
  .ant-spin-dot-item {
    background-color: #FFF;
  }
}

.message .ant-badge-count {
  min-height: 17px;
  height: 17px;
  line-height: 17px;
  background: #FFF;
  color: #0E1750;
  transform: translate(10%, -10%);
}

@media screen and (max-width: 750px) {
  .greekGodsContent {
    .el-carousel__indicators--horizontal {
      bottom: 7px;
    }

    .el-carousel__button {
      width: 8px;
    }
  }
}

</style>
