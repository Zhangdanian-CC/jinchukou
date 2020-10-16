import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import loadable from './loadable'

// const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')

const ManageAnalysis = () => import('../page/manage-analysis')
// 小企业 管理分析
const home = () => import('../page/small/home.vue')
// const home2 = () => import('../page/small/home2.vue')
const world = () => import('../page/small/world.vue')
const china = () => import('../page/small/china.vue')
const monitor = () => import('../page/small/monitor.vue')
const guimo = () => import('../page/small/guimo.vue')
const xiaoyi = () => import('../page/small/xiaoyi.vue')
const zhiliang = () => import('../page/small/zhiliang.vue')
const tese = () => import('../page/small/tese.vue')
const test = () => import('../page/small/test.vue')

const zhongxiaowei = () => import('../page/small/zhongxiaowei.vue')
const yidaiyilu = () => import('../page/small/yidaiyilu.vue')
const minying = () => import('../page/small/minying.vue')
const duiwai = () => import('../page/small/duiwai.vue')
const shengji = () => import('../page/small/shengji.vue')
const zouchuqu = () => import('../page/small/zouchuqu.vue')
const lvse = () => import('../page/small/lvse.vue')
const zhengcexing = () => import('../page/small/zhengcexing.vue')
const zhizao = () => import('../page/small/zhizao.vue')
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/test',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    name: 'Home',
    redirect: '/manage/home'
  },
  {
    path: '/manage',
    component: loadable(ManageAnalysis),
    // eslint-disable-next-line no-sparse-arrays
    children: [
      {
        path: '/',
        redirect: "debts"
      },

      {
        path: 'home',
        component: loadable(home),
      },

      // {
      //   path: 'home',
      //   component: loadable(home2),
      // },
      {
        path: 'world',
        component: loadable(world),
      },
      {
        path: 'china',
        component: loadable(china),
      },
      {
        path: 'monitor',
        component: loadable(monitor),
      },
      {
        path: 'guimo',
        component: loadable(guimo),
      },
      {
        path: 'xiaoyi',
        component: loadable(xiaoyi),
      },
      {
        path: 'zhiliang',
        component: loadable(zhiliang),
      },
      {
        path: 'tese',
        component: loadable(tese),
      //   children:[ {
      //     path: 'zhongxiaowei',
      //     component: loadable(zhongxiaowei),
      //   },
      // ]
      },
      {
        path: 'test',
        component: loadable(test),
      },
      ,
      {
        path: 'zhongxiaowei',
        component: loadable(zhongxiaowei),
      },
      {
        path: 'yidaiyilu',
        component: loadable(yidaiyilu),
      },
      {
        path: 'minying',
        component: loadable(minying),
      },
      {
        path: 'duiwai',
        component: loadable(duiwai),
      },
      {
        path: 'shengji',
        component: loadable(shengji),
      },
      {
        path: 'zouchuqu',
        component: loadable(zouchuqu),
      },
      {
        path: 'lvse',
        component: loadable(lvse),
      },
      {
        path: 'zhengcexing',
        component: loadable(zhengcexing),
      },
      {
        path: 'zhizao',
        component: loadable(zhizao),
      }
    ]
  }
  ]
})
