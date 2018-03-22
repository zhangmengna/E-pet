import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../pages/Main/Main.vue'
import Type from '../pages/Type/Type.vue'
import Cart from '../pages/Cart/Cart.vue'
import Myepet from '../pages/Myepet/Myepet.vue'
import Pinpai from '../pages/Pinpai/Pinpai.vue'
import Allbrand from '../pages/Allbrand/Allbrand.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '/main',
      component: Main,
      meta:{
        FooterShow: true
      }
    },
    {
      path: '/type',
      component:Type,
      meta:{
        FooterShow: true
      }
    },
    {
      path: '/pinpai',
      component: Pinpai,
      meta:{
        FooterShow: true
      }
    },
    {
      path: '/allbrand',
      component: Allbrand,
    },
    {
      path:'/cart',
      component: Cart
    },
    {
      path: '/myepet',
      component: Myepet
    },
    {
      path: '/',
      redirect: '/main'
    }
  ]
})
