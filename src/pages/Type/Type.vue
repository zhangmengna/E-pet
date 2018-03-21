<template>
  <div class="type">
    <div class="type-head">
      <div class="head-left">
        <span class="on">分类</span>
      </div>
      <div class="head-right">
        <span>品牌</span>
      </div>
      <img src="./images/search.png">
    </div>
    <div class="killbox">
      <div class="leftbox" ref="left">
        <ul>
          <li class="on">为您推荐</li>
          <li>E宠国际</li>
          <li>狗狗主粮</li>
          <li>狗狗零食</li>
          <li>狗狗服饰</li>
          <li>狗狗窝垫</li>
          <li>狗狗生活</li>
          <li>狗狗玩具</li>
          <li>狗狗保健</li>
          <li>狗狗医疗</li>
          <li>狗狗牵引</li>
          <li>狗狗美容</li>
          <li>狗狗周边</li>
          <li>狗狗清洁</li>
        </ul>
      </div>
      <div class="rightbox">
        <!--食物-->
        <div class="sort-nav">
          <div class="sort-item">
            <p class="title">热门分类
              <img src="./images/cate_right_img.png">
            </p>
            <ul>
              <li>
                <img src="./images/ae88c0ee37db66c0279e4db90bd3abb2.jpg">
                <p>国产狗粮</p>
              </li>
              <li>
                <img src="./images/ae88c0ee37db66c0279e4db90bd3abb2.jpg">
                <p>国产狗粮</p>
              </li>
              <li>
                <img src="./images/ae88c0ee37db66c0279e4db90bd3abb2.jpg">
                <p>国产狗粮</p>
              </li>
              <li>
                <img src="./images/ae88c0ee37db66c0279e4db90bd3abb2.jpg">
                <p>国产狗粮</p>
              </li>
              <li>
                <img src="./images/ae88c0ee37db66c0279e4db90bd3abb2.jpg">
                <p>国产狗粮</p>
              </li>
              <li>
                <img src="./images/ae88c0ee37db66c0279e4db90bd3abb2.jpg">
                <p>国产狗粮</p>
              </li>
            </ul>
          </div>
        </div>
        <!--热门品牌-->
        <div class="sort-nav">
          <div class="sort-item">
            <p class="title">热门品牌</p>
            <ul class="row2">
              <li>
                <img class="logo" src="./images/dca58009b64dba66a1025358ced2df9a.jpg">
                <p>纽萃宝NUTRIPE</p>
              </li>
              <li>
                <img src="./images/dca58009b64dba66a1025358ced2df9a.jpg">
                <p>纽萃宝NUTRIPE</p>
              </li>
              <li>
                <img src="./images/dca58009b64dba66a1025358ced2df9a.jpg">
                <p>纽萃宝NUTRIPE</p>
              </li>
              <li>
                <img src="./images/dca58009b64dba66a1025358ced2df9a.jpg">
                <p>纽萃宝NUTRIPE</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'

  export default{
    mounted(){
      var scroll = new BScroll(this.$ref.left,{
        click: true
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .type
    width 100%
    margin-bottom 45px
    overflow hidden
    .type-head
      position fixed
      top 0
      left 0
      width 100%
      height 40px
      padding 0 15px
      border-bottom 1px solid #cbcbcb
      z-index 100px
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

    .killbox
      marign-top 40px
      .leftbox
        position fixed
        top 40px
        left 0
        border-right 5px solid #f3f4f5
        ul
          width 100%
          overflow hidden
          li
            padding 15px 0
            border-bottom 1px solid #f3f4f5
            width 70px
            line-height 19px
            font-size 13px
            text-align center
            &.on
              color #ed4044
              background #f3f4f5
      .rightbox
        position fixed
        top 40px
        left 0
        margin-left 75px
        border-top 5px solid #f3f4f5
        .sort-nav
          padding 5px 5px 20px
          border-top 1px solid #f3f4f5
          .sort-item
            overflow hidden
            .title
              margin-top 10px
              padding-left 5px
              font-size 12px
              img
                float right
                height 10px
                margin-right 10px
                margin-top 5px
            ul
              width 100%
              overflow hidden
              li
                float left
                width 33%
                box-sizing border-box
                padding 0 5px
                margin-top 10px
                img
                  height 100%
                  width 100%
                p
                  margin-top 10px
                  height 20px
                  font-size 13px
                  text-align center
            .row2
              overflow hidden
              li
                float left
                width 50%
                box-sizing border-box
                margin-top 10px
                padding 0 5px
                text-align center
                img
                  height 45px
                  width 89px
                  margin-top 4px
                  p
                    margin-top 5px
                    font-size 12px
                    text-align center

</style>
