import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: () => import('./view/home/index.vue') },
  {
    path: '/table-chen',
    component: () => import('./view/table-chen/index.vue')
  }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
