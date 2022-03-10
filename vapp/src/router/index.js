import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home/'
import stake from '../views/stake/'
import staticStake from '../views/static-stake/'
import bridge from "../views/bridge/"
import Admin from "../views/admin/"
import Transfer from "../views/admin/transfer/"
import Boxes from "../views/boxes"
import Tikkets from "../views/boxes/comps/tikkets.vue"
import Win from "../views/boxes/win"
import Games from "../views/boxes/games"
import BoxAdmin from "../views/box_admin/index.vue"
import BoxDashboard from "../views/box_admin/dashboard.vue"
import BoxTransfer from "../views/box_admin/transfer.vue"
import BoxHistory from "../views/box_admin/history.vue"
import ShareManager from "../views/box_admin/share_manager.vue"



// import jfi from '../views/jfi/'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: home,
        meta: {
            keepAlive: true
        }
    },
    {
        path: "/stake/:id",
        component: stake,
        meta: {
            keepAlive: true
        }
    },
    {
        // path: "/static-stake/:stakeAddr/:rewardAddr/:tokenAddr",
        path: "/static-stake/:id",
        component: staticStake,
        meta: {
            keepAlive: true
        }
    },
    {
        path: "/bridge",
        component: bridge,
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/admin/tran',
        component: Transfer,
        meta: {
            keepAlive: true
        }
    },
    {
        path: "/admin",
        component: Admin,
        meta: {
            keepAlive: true
        }
    },
    {
        path: "/box",
        component: Boxes,
        meta: {
            keepAlive: false
        },
    },
    {
        path: "/box/tikkets",
        component: Tikkets,
        meta: {
            keepAlive: false
        },
    },
    {
        path: "/box/win",
        component: Win,
        meta: {
            keepAlive: false
        },
    },
    {
        path: "/box/games",
        component: Games,
        meta: {
            keepAlive: false
        },
    },
    {
        path: "/box/admin",
        component: BoxAdmin,
        meta: {
            keepAlive: false
        },
    },
    {
        path: "/box/dashboard",
        component: BoxDashboard,
        meta: {
            keepAlive: false
        },
    },
    {
        path: "/box/transfer",
        component: BoxTransfer,
        meta: {
            keepAlive: false
        },
    },
    {
        path: "/box/history",
        component: BoxHistory,
        meta: {
            keepAlive: false
        },
    },
    {
        path: "/box/share",
        component: ShareManager,
        meta: {
            keepAlive: false
        },
    },

    // {
    //     path: "/jfi",
    //     component: jfi,
    // },

    // {
    //   path: "/testpage",
    //   component: testpage,
    // },

    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.onReady(() => {
    if (new RegExp(/\/stake\/*/).test(router.currentRoute.path) ||
        new RegExp(/\/stake-stake\/*/).test(router.currentRoute.path)) {
        router.replace({ path: '/' })
    }
})

export default router
