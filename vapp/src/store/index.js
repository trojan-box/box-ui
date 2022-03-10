import Vue from 'vue'
import Vuex from 'vuex'

// 导入配置
import sitecfg from "../sitecfg.js"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        sitecfg: {
            state: sitecfg,
        },
        token_price: {
            state: {
                tron_on_usd: "",
            },
            mutations: {
                setTokenPriceKey(state, obj) {
                    for (let key in obj) {
                        state[key] = obj[key];
                    }
                },
            },
        },
        // $store.state.index_page_stauts.page_stauts
        index_page_stauts: {
            state: {
                page_stauts: "hq",
            },
            mutations: {
                setPageStatus(state, obj) {
                    state['page_stauts'] = obj
                },
            },
        },
        app: {
            state: {
                lang: sitecfg.default_lang || "en",
                is_metamask_installed: window.tronWeb ? true : false,
            },
            mutations: {
                lang(state, str) {
                    state.lang = str;
                },
                setAppKey(state, obj) {
                    for (let key in obj) {
                        state[key] = obj[key];
                    }
                },
            },
        },
        account: {
            state: {
                default_address: "",
                node_host: "",
            },
            mutations: {
                lang(state, str) {
                    state.lang = str;
                },
                setAccountKey(state, obj) {
                    for (let key in obj) {
                        state[key] = obj[key];
                    }
                },
            },
        },
        trojanBox: {
            state: {
                token: ""
            },
            mutations: {
                setToken(state, obj) {
                    state['token'] = obj;
                }
            }
        }
    },
});
