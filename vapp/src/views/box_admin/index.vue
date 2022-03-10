<template>
  <div class="loginWrapper">
    <div class="loginModal">
      <div class="title">
        Login Box
      </div>
      <a-form-model layout="vertical" :model="loginForm" @submit="handleSubmit"
                    @submit.native.prevent class="loginModel">
        <a-form-model-item>
          <a-input v-model="loginForm.user" placeholder="Username" class="input">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-input v-model="loginForm.password" type="password" placeholder="Password" class="input">
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-button
              type="primary"
              html-type="submit"
              class="submitBtn"
              :disabled="loginForm.user === '' || loginForm.password === ''"
          >
            Log in
          </a-button>
        </a-form-model-item>
        <div style="color: #FFF; font-size: 20px;" v-if="showTips">you are not an administrator</div>
      </a-form-model>
    </div>
  </div>
</template>

<script>
import bus from "../../bus";

export default {
  name: "box_admin",
  data() {
    return {
      loginForm: {
        user: '',
        password: '',
      },
      showTips: false,
      mangerAddress: [],
      address: "",
    };
  },
  mounted() {
    this.getConfig();
    this.getDefaultAddress();
  },
  methods: {
    getConfig() {
      fetch(`/api/v1/app/config`, {
        method: "GET",
        mode: "cors",
      }).then(async (res) => {
        const result = await res.json();
        this.mangerAddress = result.data.manager_address;
      });
    },
    async getDefaultAddress() {
      let v = this;
      const local_address = await v.action.getAddress();
      this.address = local_address;
    },
    async handleSubmit(e) {
      e.preventDefault();

      if (this.mangerAddress.indexOf(this.address) !== -1)
      {
        this.showTips = !this.showTips;
        return;
      }

      if (this.loginForm.user === "admin" && this.loginForm.password === "TrojanAdmin")
      {
        await this.init();
        sessionStorage.setItem('box_admin_token', btoa('TrojanAdmin'));
        this.$router.push("/box/dashboard");
      }
    },
    async init() {
      const token = this.$store.state.trojanBox.token;
      if(token) {
        return;
      }
      const timestamp = parseInt(new Date().getTime() / 1000);
      let v = this;
      await v.action.getAddress().then(address => {
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
          await v.myWeb3.eth.sign(msg, address).then(sign => {
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
              } else {
                return Promise.reject("login error", res);
              }
            });
          });
        })
      });
    },
  },
};
</script>

<style scoped lang="scss">
  .loginWrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    font-family: "Moriis roman",serif;
    justify-content: center;
    align-items: center;
    background: url("../../assets/image/box_bcg2.jpg")
  }

  .loginModal {
    width: 500px;
    color: #FFF;
    text-align: center;
  }

  .title {
    font-size: 28px;
    padding-bottom: 30px;
  }

  .loginModel {
    background: #607FF6;
    padding: 50px;
    border-radius: 20px;
  }

  .submitBtn {
    height: 40px;
    width: 100px;
    border: none;
    background: #0025AC;
    box-shadow: 1px 5px 0 #001E8A;
  }

  .submitBtn:hover {
    background: #001E8A;
  }

  .input {
    height: 40px;
  }
</style>
