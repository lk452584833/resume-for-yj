// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 加载路由 vue.$route vue.$router
import store from './store' // 加载vuex  $store
import VueLazyload from 'vue-lazyload' // 懒加载
import { Swipe, SwipeItem } from 'vant'
import 'vant/lib/index.css'
import '../static/css/reset.css' // 加载rest.css

import 'lib-flexible/flexible.js'
import myaxios from './common/axios/api' // 自定义封装的axios api层。
import './mock' // 加载模拟数据mock

import FastClick from 'fastclick' // 解决移动端300毫秒点击延迟
FastClick.attach(document.body)

Vue.use(myaxios) // 全局使用this.$_axios.getWork().then()
Vue.use(Swipe).use(SwipeItem)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/images/timg@2x.png',
  loading: '../static/images/timg@2x.png',
  attempt: 3
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
	store: store,
  render: h => h(App),
  created() {
		this.$router.push({path: '/info'})
  }
})
