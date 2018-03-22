<template>
  <div class="cart">
    <Showhead title="购物车"/>
    <div class="cart-nav">
      <div class="bg">
        <span></span>
      </div>
      <p>购物车是空的</p>
      <div class="todo">
        <span>去逛逛</span>
        <span>我的收藏</span>
      </div>
    </div>
  </div>
</template>
<script>
  import Showhead from '../../components/Showhead/Showhead.vue'

  export default{

    components:{
      Showhead
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .cart
    width 100%
    height 100%
    background #f3f4f5

    .cart-nav
      background #fff
      padding-bottom 50px
      overflow hidden
      .bg
        width 100%
        height 170px
        text-align center
        span
          display inline-block
          margin 50px auto 20px
          width 100px
          height 100px
          background url("./images/cart-ico.png") no-repeat 0 -160px
          background-size 105px auto
      p
        line-height 20px
        text-align center
        font-size 16px
        color #dbdbdb
      .todo
        margin-top 18px
        text-align center
        span
          display inline-block
          border 1px solid #999
          border-radius 5px
          height 40px
          line-height 40px
          width 100px



</style>
