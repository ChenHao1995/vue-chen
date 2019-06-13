import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('./view/home/index.vue') },
  {
    path: '/table-chen',
    component: () => import('./view/table-chen/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

const store = new Vuex.Store({
  modules: {
    test: {
      namespaced: true,
      state: {
        count: 0
      },
      getters: {
        result(state) {
          return state.count + 100
        }
      },
      mutations: {
        increment(state) {
          state.count++
        }
      },
      actions: {
        increment(context) {
          console.log(context)
          context.commit('increment')
        }
      }
    },
    test1: {
      state: {
        count: 1234
      }
    }
  }
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
