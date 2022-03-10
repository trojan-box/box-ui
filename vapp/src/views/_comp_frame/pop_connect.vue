<template>
  <div class="p-4 pt-5 text-center alertModal">
    <div class="title">
      <div class="text">
        <i class="fas fa-wallet" />&nbsp;{{ lg("connect_wallet") }}
      </div>
    </div>

    <div class="content">{{ lg("connectWalletDescription") }}</div>

    <div class="buttons">
      <button @click="this.onConnect">{{ lg("connect_wallet") }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "modalConnect",
  components: {},
  props: [],
  data() {
    return {};
  },
  computed: {
    is_installed() {
      return this.$store.state.app.is_metamask_installed;
    },
    account_default_address() {
      return this.$store.state.account.default_address;
    },
  },
  watch: {},
  methods: {
    onConnect() {
      // window.ethereum
      //   .request({
      //     method: "eth_requestAccounts",
      //   })
      //   .then((accounts) => {
      //     if (accounts) {
      //       window.location.reload();
      //     }
      //   });
      this.action.scanMetaMaskAccount();
    },
  },
  created() {},
  //mounted() {},
  //beforeDestroy() {},
  //update() {},
  //activited() {},
  //beforeRouteUpdate() {},
  //filters: {},
};
</script>

<style lang="scss" scoped>
.alertModal {
  font-size: 16px;
  position: relative;

  .closeButton {
    position: absolute;
    right: 0.5em;
    top: 0.5em;
    cursor: pointer;
  }

  .title {
    margin: 1em 0;

    .icon {
      font-size: 2em;
    }

    .text {
      font-size: 1.5em;
      font-weight: bold;
      color: #1d1f75;
      margin-left: 0.5em;
    }
  }

  .content {
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5;
    color: #363872;
    margin: 1em 0;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    button {
      background: #1295f0;
      border-radius: 34px;
      border: none;
      outline: none;
      font-size: 1em;
      color: white;
      padding: 0.25em 1em;
      margin: 1em 0.5em;

      span {
        margin: 0 0.25em;

        img {
          height: 1em;
        }
      }
    }
  }
}
</style>