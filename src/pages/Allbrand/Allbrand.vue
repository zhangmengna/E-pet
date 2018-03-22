<template>
  <div>
    <Showhead title="全部品牌"/>
    <div class="allbrands">
      <div class="letter">
        <div class="menu">
          <span class="current">A</span>
          <span>B</span>
          <span>C</span>
          <span>D</span>
        </div>
      </div>
      <div class="brand-list">
        <div class="brand-item">
          <h2>A</h2>
          <div>
            <div class="brand-wrap">
              <div class="brand-img">
                <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg">
              </div>
              <div class="brand-name">
                <p class="fs14">艾尔</p>
                <p class="fs12">中国</p>
              </div>
            </div>
          </div>
        </div>
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
  .allbrands
    background #f3f4f5
    position relative
    .letter
      position fixed
      top 0
      right 4px
      height 100%
      width 10px
      z-index 10px
      display table
      .menu
        display table-cell
        height 100%
        vertical-align middle
        span
          display block
          height 12px
          margin-top 2px
          font-size 12px
          &.current
            color #fe3e3e
            font-weight 700

    .brand-list
      padding 0
      .brand-item
        h2
          line-height 24px
          text-indent 15px
          font-size 12px
        div
          background #fff
          overflow hidden
          .brand-wrap
            padding 10px
            margin-right 20px
            border-bottom 1px solid #f3f4f5
            .brand-img
              float left
              height 52px
              width 98.5px
              border 1px solid #f3f4f5
              padding 5px
              text-align center
              background url("./images/default-epet2.jpg") no-repeat center center #fff
              background-size 120px auto
              img
                height 40px
                width auto
            .brand-name
              float left
              margin 5px 0 5px 20px
              .fs14
                font-size 14px
              .fs12
                font-size 12px
                color #999
</style>
