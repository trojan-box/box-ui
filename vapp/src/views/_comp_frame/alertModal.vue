<template>
  <div class="p-4 pt-5 text-center alertModal">
    <div class="closeButton" @click="onClose">✖︎</div>

    <div class="title">
      <span v-if="this.type === 'alert'">
        <img src="/static/img/alert.png" width="64px" />
      </span>

      <span v-if="this.type === 'success'">
        <img src="/static/img/check.png" width="64px" />
      </span>

      <span class="text" v-if="this.title">{{ lg(this.title) }}</span>
    </div>

    <div class="content">{{ lg(this.content) }}</div>

    <div class="buttons" v-if="this.buttons.length > 0">
      <button
        v-for="(button, index) in this.buttons"
        v-bind:key="index"
        @click="button.onClick"
      >
        <span><img :src="button.icon" /></span>
        <span>{{ button.label }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "alertModal",
  components: {},
  props: ["title", "content", "buttons", "onClose", "type"],
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
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
