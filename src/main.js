/*创建vue实例*/
import Vue from 'vue'
import App from './App'
import './mock/mockServer'
// 配置路由
import router from './router'
import store from './store'

new Vue({
  el: '#app',
  render: h => h(App), // 渲染页面
  router,
  store
})
