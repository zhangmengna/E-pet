<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="main" :class="{on:$route.path==='/main'}" @click="goto('/main')">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="type" :class="{on:$route.path==='/type'}" @click="goto('/type')">
      <span class="item_icon">
        <i class="iconfont icon-icon04"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="cart" @click="goto('/cart')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche2"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="mye" @click="goto('/myepet')">
      <span class="item_icon">
        <i class="iconfont icon-xiaolian"></i>
      </span>
      <span>我的E宠</span>
    </a>
  </footer>
</template>
<script>
  export default{
    methods:{
      goto(path){
        this.$router.push(path)
      }
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'
  .footer_guide
    top-border-1px(#e7e7e7)
    position fixed
    bottom 0
    left 0
    height 45px
    width 100%
    background #fff
    z-index 100
    display flex
    a
      width 25%
      height 45px
      display flex
      flex 1
      text-align center
      flex-direction column
      justify-content center
      color #999
      &.on
        color lightgreen
      span
        font-size 10px
        margin-top 0
        .iconfont
          font-size 21px

</style>
