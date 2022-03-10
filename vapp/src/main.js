import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { Carousel, CarouselItem } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Antd);
Vue.use(Carousel);
Vue.use(CarouselItem);


Vue.config.productionTip = false

// 配置
import sitecfg from "./sitecfg.js"

//以太坊web3
const Web3 = require('web3');

if (window.web3 && (window.ethereum.chainId == '0x3' || window.ethereum.chainId == '3')) {
    Vue.prototype.myWeb3 = new Web3(window.web3.currentProvider);
}


// 挂载action
import action from "./action/index"
Vue.prototype.action = action


// 多语言处理
window.lang = sitecfg.default_lang || 'en'
import web_lang from "./lang/lang.js";
window.web_lang = web_lang;
import langMethods from './lang/index.js'
Vue.prototype.lg = langMethods.lg
Vue.prototype.lgRefer = langMethods.lgRefer

// filter
import filter from './filter/'
for (let key in filter) {
    Vue.filter(key, filter[key])
}

// Cookie plugin
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

// modal插件
import vmodal from "vue-js-modal";
Vue.use(vmodal);
// Toast插件
import Toasted from 'vue-toasted';
Vue.use(Toasted, {
    theme: "outline",
    position: "bottom-left",
    duration: 5000,
});
import VueConfirmDialog from 'vue-confirm-dialog';
Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)

import toastRegistry from './vendor/toast/index'
Vue.use(toastRegistry)
// Vue.use(Toasted, Options)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
