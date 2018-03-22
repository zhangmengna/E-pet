<template>
  <div class="type-head">
    <div class="head-left">
      <span :class="{on:$route.path==='/type'}" @click="goto('/type')">分类</span>
    </div>
    <div class="head-right">
      <span :class="{on:$route.path==='/pinpai'}" @click="goto('/pinpai')">品牌</span>
    </div>
    <img src="./images/search.png">
  </div>
</template>
<script>
  export default{
    methods: {
      goto(path){
        this.$router.push(path)
      },

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .type-head
    position fixed
    top 0
    left 0
    width 100%
    height 40px
    padding 0 15px
    border-bottom 1px solid #cbcbcb
    background #fff
    z-index 100
    div
      float left
      width 50%
      height 40px
      span
        display block
        width 34px
        height 40px
        line-height 40px
        padding 0 4px
        font-size 13px
        &.on
          color #ed4044
          border-bottom 2px solid #ed4044
    .head-left
      padding 0 5%
      span
        float right
    .head-right
      padding 0 5%
      text-align left
    img
      float right
      width 14px
      height 14px
      margin-top -25px

</style>
