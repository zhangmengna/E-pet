<template>
  <div class="cart">
    <div class="cart-head">
      <div class="head-top">
        <span class="back"></span>
        <span class="title">购物车</span>
        <span class="showguide" @click="toggleShow"></span>
      </div>
      <div class="head-guide" v-show="isShow">
       <span>
         <span class="icon1"></span>
         <p>首页</p>
       </span>
        <span>
         <span class="icon2"></span>
         <p>商品分类</p>
       </span>
        <span>
         <span class="icon4"><em>0</em></span>
         <p>购物车</p>
       </span>
        <span>
         <span class="icon5"></span>
         <p>我的E宠</p>
       </span>
      </div>
    </div>
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
  export default{
    data(){
      return{
        isShow:false
      }
    },
    methods:{
      toggleShow(){
        this.isShow = !this.isShow
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .cart
    width 100%
    height 100%
    background #f3f4f5
    .cart-head
      overflow hidden
      background #fff
      .head-top
        height 50px
        border-bottom  1px  solid #f3f3f3
        padding 0 12px
        .back
          float left
          width 22px
          height 20px
          margin-top 16px
          background url("./images/personal-bico1.png") no-repeat
          background-size 9px 17px
        .title
          float left
          width 80%
          height 50px
          line-height 50px
          font-size 20px
          text-align center
        .showguide
          float right
          width 20px
          height 20px
          margin-top 14px
          background url("./images/imgtk-new.png") no-repeat
          background-size 20px 20px
      .head-guide
        display block
        box-sizing content-box
        height 50px
        padding 12px 0
        border-bottom 1px solid #d7d7d7
        overflow hidden
        span
          float left
          width 25%
          display flex
          flex-direction column
          text-align center
          span
            display block
            width 100%
            height 30px
            em
              display inline-block
              width 16px
              height 16px
              border 2px solid red
              background red
              border-radius 50%
              background red
              color #fff
              font-size 12px
              line-height 16px
              font-style normal
              position relative
              top -6px
              left 11px
            p
              text-align center
              color #666
              line-height 20px
          .icon1
            background url("./images/head_icon1.png") no-repeat
            background-position center
            background-size auto 30px
          .icon2
            background url("./images/head_icon2.png") no-repeat
            background-position center
            background-size auto 30px
          .icon4
            background url("./images/head_icon4.png") no-repeat
            background-position center
            background-size auto 30px
          .icon5
            background url("./images/head_icon5.png") no-repeat
            background-position center
            background-size auto 30px
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
