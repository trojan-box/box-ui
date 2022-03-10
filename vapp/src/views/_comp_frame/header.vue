<template>
  <div>
    <div class="the-header-wrap">
      <div class="the-header">
        <div
          class="box-links d-flex align-items-center"
          v-on:click="openRouterMenu"
        >
          <router-link to="/" class="logo">
            <img src="/static/img/logo.png" class="logo-img" />
          </router-link>

          <div class="routerMenuButton">▾</div>
        </div>

        <div
          class="box-account"
          v-if="!this.isMobile || (this.isMobile && this.isMenuShow)"
        >
          <router-link to="/box"
            class="medium ml-4"
          >
            Trojan Box
          </router-link>

          <a
            class="medium ml-4"
            href="https://aresprotocollab.medium.com/trojan-staking-will-launch-at-6-am-utc-13th-may-8c137fd28aa2"
            target="_blank"
            >Price Prediction</a
          >

          <router-link class="borderButton ml-4" to="/bridge">
            <div class="title" @click="hideMenu">Bridge Ares</div>
            <div class="label">ETH → BSC</div>
          </router-link>

          <span class="connectButton">
            <button
              v-if="!account_default_address"
              @click="showPopConnect()"
              type="button"
              class="btn-account"
            >
              {{ lg("connect_wallet") }}
            </button>
            <span v-else class="btn-account">
              {{ account_default_address | shortAddress }}
            </span>
          </span>

          <headerLangSelect class="headerLangSelect ml-4" />
        </div>

        <div class="drawers" @click="showMenu">≡</div>
      </div>
    </div>

    <div
      class="routerMenu"
      v-if="isRouterMenuShow"
      v-on:click="goToAres"
      v-on:mouseover="mouseOverMenu"
      v-on:mouseout="mouseOutMenu"
    >
      <img src="/static/img/bsc.png" />
    </div>

    <modal name="modalPopConnect">
      <popConnect :onClose="this.hidePopConnect" />
    </modal>

    <modal name="modalAlert">
      <alert-modal
        title="walletError"
        content="accountAbnormal"
        type="alert"
        :buttons="this.alertButtons"
        :onClose="this.closeAlert"
      />
    </modal>
  </div>
</template>

<script>
import headerLangSelect from "./header_lang_select.vue";
import popConnect from "@/views/_comp_frame/pop_connect.vue";
import AlertModal from "./alertModal.vue";

let eventTimer = null;

export default {
  name: "frameHeader",
  components: {
    headerLangSelect,
    popConnect,
    AlertModal,
  },
  props: [],
  data() {
    return {
      isRouterMenuShow: false,
      isMouseOverRouterMenu: false,
      isMenuShow: false,
      isMobile: false,
      alertButtons: [
        {
          icon: "/static/img/mail.png",
          label: "info@aresprotocol.io",
          onClick: this.mailTo,
        },
        {
          icon: "/static/img/wechat.png",
          label: "AresProtocol_wechat",
          onClick: this.copyWechat,
        },
      ],
    };
  },
  computed: {
    account_default_address() {
      if (this.$store.state.account.default_address) {
        this.checkAccount(this.$store.state.account.default_address);
      }
      return this.$store.state.account.default_address;
    },
  },
  watch: {},
  methods: {
    copyWechat() {
      navigator.clipboard.writeText("AresProtocol_wechat").then(
        function () {
          window.alert("'AresProtocol_wechat' copied.");
        },
        function () {
          window.alert("Failed to copy 'AresProtocol_wechat'");
        }
      );
    },
    async checkAccount(address) {
      const addressLowerCase = address.toLowerCase();
      const list = await (await fetch("/data/accounts.json")).json();
      for (const item of list) {
        if (item.address.toLowerCase() === addressLowerCase) {
          this.$modal.show("modalAlert");
          break;
        }
      }
    },
    mailTo() {
      window.open("mailto: info@aresprotocol.io");
    },
    closeAlert() {
      this.$modal.hide("modalAlert");
    },
    showPopConnect() {
      this.$modal.show("modalPopConnect");
    },
    hidePopConnect() {
      this.$modal.hide("modalPopConnect");
    },
    timerCloseRouterMenu() {
      clearTimeout(eventTimer);
      eventTimer = setTimeout(() => {
        this.isRouterMenuShow = false;
      }, 1500);
    },
    openRouterMenu(event) {
      this.isRouterMenuShow = !this.isRouterMenuShow;
      this.timerCloseRouterMenu();
    },
    mouseOverMenu(event) {
      clearTimeout(eventTimer);
      eventTimer = null;
      this.isMouseOverRouterMenu = true;
    },
    mouseOutMenu(event) {
      this.timerCloseRouterMenu();
    },
    goToAres() {
      this.isRouterMenuShow = false;
      window.location.href = "https://iliad.aresprotocol.io";
    },
    hideMenu() {
      this.isMenuShow = false;
    },
    showMenu() {
      this.isMenuShow = !this.isMenuShow;
    },
  },
  created() {},
  mounted() {
    this.isMobile = document.body.clientWidth <= 576;
  },
};
</script>

<style lang="scss" scoped>
.the-header-wrap {
  background-color: #1295f0;
  color: white;
  padding: 0.5em 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  box-shadow: 0px 1px 20px rgba(29, 31, 117, 0.51);

  .the-header {
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .routerMenuButton {
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      background-color: white;
      color: #1295f0;
      font-size: 0.8em;
      width: 1.2em;
      height: 1.2em;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      cursor: pointer;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    .logo {
      display: flex;
      align-items: center;
      margin-right: 1.5em;

      .logo-img {
        height: 48px;
      }

      .logo-text {
        font-size: 24px;
        color: #fff;
      }
    }

    .btn-account {
      display: inline-block;
      height: 40px;
      font-size: 1em;
      background: linear-gradient(149deg, #3075f2 0%, #333fdf 100%);
      border-radius: 34px;
      padding: 0 22px;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        color: #fff;
      }
    }

    .box-account {
      display: flex;
      align-items: center;

      .medium {
        //
      }

      .borderButton {
        color: white;
        outline: none;
        background-color: #1295f0;
        border: 1px solid #ffffff;
        border-radius: 2em;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.5s;
        box-shadow: none;

        &:hover {
          box-shadow: -1px 1px 3px rgba($color: #000000, $alpha: 0.3);
          transform: translate(1px, -1px);
        }

        .title {
          padding-left: 1.5em;
          padding-right: 1.5em;
        }

        .label {
          background: linear-gradient(167deg, #3075f2 0%, #333fdf 100%);
          border-radius: 2em;
          height: 100%;
          padding-left: 1em;
          padding-right: 1em;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .connectButton {
        margin-left: 1.5em;
      }

      .headerLangSelect {
        //
      }
    }

    .drawers {
      display: none;
    }
  }
}

.routerMenu {
  background: #ffffff;
  border: 1px solid #c4c8cb;
  border-radius: 8px;
  position: absolute;
  left: calc((100vw - 1100px) / 2);
  padding: 0.8em 2em;
  cursor: pointer;

  img {
    height: 48px;
  }

  span {
    margin-left: 0.5em;
    color: #1295f0;
  }
}

@media (max-width: 576px) {
  .the-header-wrap {
    font-size: 16px;
    padding-left: 1em;
    padding-right: 1em;

    .the-header {
      height: 58px;
      padding-left: 8px !important;
      padding-right: 8px !important;
      width: 100%;
      justify-content: space-between;
      position: relative;

      .logo {
        flex-wrap: wrap;
        margin-right: 0.5em;
      }

      .box-links {
        height: 26px;

        .logo {
          font-weight: bold;

          .logo-img {
            height: 30px;
          }
        }
      }

      .btn-account {
        font-size: 0.5em;
        padding: 0.5em 1.5em;
        height: auto;
      }

      .box-account {
        // display: none !important;
        flex-direction: column;
        width: 100vw;
        background: #1295f0;
        box-shadow: 0px 1px 20px rgba(29, 31, 117, 0.51);
        position: absolute;
        left: -1em;
        top: -1em;
        margin: 0;
        height: auto;
        padding: 2em 1em 2em 1em;
        justify-content: flex-start;
        align-items: flex-start;

        .medium {
          margin-bottom: 1em;
        }

        .borderButton {
          border: none;
          padding: 0;
          margin: 0;
          height: none;
          display: block;

          .title {
            padding: 0;
          }

          .label {
            display: none !important;
          }
        }

        .connectButton {
          display: none;
        }

        .headerLangSelect {
          border: none;
          margin: 0;
          padding: 0;
        }
      }

      .drawers {
        display: block;
        font-size: 2em;
        cursor: pointer;
        z-index: 1;
      }
    }
  }

  .routerMenu {
    left: 1em;

    img {
      width: 43px;
    }

    span {
      margin-left: 0.5em;
      color: #1295f0;
    }
  }
}
</style>
