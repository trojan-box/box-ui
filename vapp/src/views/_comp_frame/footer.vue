<template>
  <div class="the-footer-wrap px-4 about-us">
    <div class="cards d-flex justify-content-center align-items-center">
      <div
        class="card d-flex justify-content-center align-items-center"
        data-href="https://app.uniswap.org/#/swap?outputCurrency=0x358AA737e033F34df7c54306960a38d09AaBd523&use=V2"
        @click="toChange"
      >
        <img src="/static/img/Uniswap.png" />
        <div>Get ARES on UniSwap Now!</div>
      </div>
      <div
          class="card d-flex justify-content-center align-items-center"
          data-href="https://www.gateio.pro/trade/ARES_USDT"
          @click="toChange"
      >
        <span >
          <img src="/static/img/gateio.png" />&nbsp;<span style="font-size: 26px; color: #de5a58; line-height: 0">gate.io</span>
        </span>
        <div>Get ARES on Gate.io</div>
      </div>
      <div
        class="card d-flex justify-content-center align-items-center"
        data-href="https://etherscan.io/token/0x358aa737e033f34df7c54306960a38d09aabd523"
        @click="toChange"
      >
        <img src="/static/img/etherscan-logo.png" />
        <div>Official Contract Address</div>
      </div>
    </div>

    <div class="mt-5">About Us</div>

    <div class="about-info">
      Copyright © 2021.The Ares Protocol All rights reserved.
    </div>
    <div class="about-info">info@aresprotocol.io</div>

    <div class="img-box">
      <div>
        <img
          src="/static/img/plane.png"
          data-href="https://t.me/AresProtocolLab"
          @click="toChange"
        />
      </div>

      <div>
        <img
          src="/static/img/t.png"
          data-href="https://twitter.com/AresProtocolLab"
          @click="toChange"
        />
      </div>

      <div>
        <img
          src="/static/img/f.png"
          data-href="https://www.facebook.com/aresprotocollab"
          @click="toChange"
        />
      </div>

      <div>
        <img
          src="/static/img/d.png"
          data-href="https://discord.gg/EsaFRr7xmc"
          @click="toChange"
        />
      </div>

      <div>
        <img
          src="/static/img/reddit.png"
          data-href="https://www.reddit.com/r/AresProtocolLabs"
          @click="toChange"
        />
      </div>

      <div>
        <img
          src="/static/img/medium.png"
          data-href="https://aresprotocollab.medium.com"
          @click="toChange"
        />
      </div>

      <div>
        <img
          src="/static/img/github.png"
          data-href="https://github.com/aresprotocols"
          @click="toChange"
        />
      </div>

      <div>
        <img
          src="/static/img/ins.png"
          data-href="https://www.instagram.com/aresprotocollab"
          @click="toChange"
        />
      </div>

      <div>
        <img
          src="/static/img/youtube.png"
          data-href="https://www.youtube.com/channel/UCgwY4NwkoP8Hx1Fqmp_rJUw"
          @click="toChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "frameFooter",
  components: {},
  href: "",
  props: [],
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    toChange(e) {
      var url = e.target.dataset.href;
      console.log(url);
      window.open(url);
    },
  },
  created() {},
};
</script>

// <style lang="scss" scoped>
// .img-box img {
//   width: 30px;
//   height: 30px;
//   cursor: pointer;
// }
// .img-box {
//   display: flex;
//   justify-content: space-between;
//   width: 16%;
//   margin-top: 30px;
// }
// .the-footer-wrap {
//   // max-width: 1100px;
//   margin-left: auto;
//   margin-right: auto;
//   margin-top: 30px;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;

//   a {
//     margin-right: 30px;
//     font-size: 26px;
//     color: inherit;
//     opacity: 0.8;
//     &:hover {
//       opacity: 1;
//     }
//   }
// }
// .about-us {
//   text-align: center;
//   font-size: 24px;
//   color: #333;
// }
// .about-info {
//   text-align: center;
//   color: #333;
//   font-size: 14px;
//   margin-top: 15px;
// }

// @media screen and (max-width: 720px) {
//   .img-box img {
//     width: 30px;
//     height: 30px;
//     cursor: pointer;
//   }
//   .img-box {
//     display: flex;
//     justify-content: space-between;
//     width: 80%;
//     margin-top: 40px;
//   }
// }
//
</style>

<style lang="scss" scoped>
.cards {
  flex-direction: row;

  .card {
    flex-direction: column;
    background: rgba($color: #e5e9eb, $alpha: 0.89);
    border: 1px solid #c4c8cb;
    box-shadow: 5px 15px 15px rgba(29, 31, 117, 0.16);
    border-radius: 14px;
    margin: 0 1em;
    min-width: 18em;
    min-height: 6em;
    cursor: pointer;

    &:hover {
      box-shadow: 5px 12px 12px rgba(29, 31, 117, 0.16);
    }

    img {
      // width: 50%;
      height: 33px;
      pointer-events: none;
    }

    div {
      font-size: 18px;
      margin-top: 0.5em;
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
      pointer-events: none;
    }
  }
}

.img-box img {
  width: 1em;
  height: 1em;
}

.img-box {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  div {
    cursor: pointer;
    margin: 0.25em;
    border: 1px solid #1295f0;
    border-radius: 50%;
    width: 2em;
    height: 2em;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
    background-color: #C6E8FF;
  }
  }
}
.the-footer-wrap {
  // max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  a {
    margin-right: 30px;
    font-size: 26px;
    color: inherit;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
}
.about-us {
  text-align: center;
  font-size: 24px;
  color: #333;
}
.about-info {
  text-align: center;
  color: #333;
  font-size: 14px;
  margin-top: 15px;
}

@media (max-width: 576px) {
  .the-footer-wrap {
    font-size: 12px;
  }

  .cards {
    flex-direction: column;
    margin-top: 0;
    width: 100%;

    .card {
      width: 100%;
      cursor: pointer;
      margin: 0.5em 0;

      img {
        // width: 50%;
        height: 33px;
      }

      div {
        font-size: 0.8em;
        margin-top: 0.5em;
        font-family: "Montserrat", sans-serif;
        font-weight: bold;
      }
    }
  }

  .img-box img {
    width: 1em;
    height: 1em;
    cursor: pointer;
  }

  .img-box {
    font-size: 1em;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    width: 90%;
    flex-wrap: wrap;

    div {
      cursor: pointer;
      margin: 0.25em;
      border: 1px solid #1295f0;
      border-radius: 50%;
      width: 2em;
      height: 2em;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
