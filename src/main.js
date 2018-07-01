// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'
//
// Vue.config.productionTip = false
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

import Vue from 'vue'
import App from './App'
import VCharts from 'v-charts'
import VueRouter from 'vue-router'
import routeConfig from './router-config'  // 引入router-config.js文件

//加载路由中间件
Vue.use(VueRouter)
Vue.use(VCharts)

//定义路由
const router = new VueRouter({
  routes: routeConfig
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


