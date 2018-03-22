<template>
  <div class="type">
   <Typehead/>
    <div class="center">
      <div class="title">—— 推荐品牌 ——</div>
      <div class="list">
        <ul>
          <li>
            <div>
              <img src="./images/3b236d1731bd91004bffcec3515e1a0a.jpg">
            </div>
            <p>冠能</p>
            <p>美国</p>
          </li>
          <li>
            <div>
              <img src="./images/3b236d1731bd91004bffcec3515e1a0a.jpg">
            </div>
            <p>冠能</p>
            <p>美国</p>
          </li>
          <li>
            <div>
              <img src="./images/3b236d1731bd91004bffcec3515e1a0a.jpg">
            </div>
            <p>冠能</p>
            <p>美国</p>
          </li>
          <li>
            <div>
              <img src="./images/3b236d1731bd91004bffcec3515e1a0a.jpg">
            </div>
            <p>冠能</p>
            <p>美国</p>
          </li>
          <li>
            <div>
              <img src="./images/3b236d1731bd91004bffcec3515e1a0a.jpg">
            </div>
            <p>冠能</p>
            <p>美国</p>
          </li>
          <li>
            <div>
              <img src="./images/3b236d1731bd91004bffcec3515e1a0a.jpg">
            </div>
            <p>冠能</p>
            <p>美国</p>
          </li>
        </ul>
      </div>
      <div class="title">—— 推荐品牌 ——</div>
      <div class="list">
        <ul>
          <li>
            <div>
              <img src="./images/3b236d1731bd91004bffcec3515e1a0a.jpg">
            </div>
            <p>冠能</p>
            <p>美国</p>
          </li>
          <li>
            <div>
              <img src="./images/3b236d1731bd91004bffcec3515e1a0a.jpg">
            </div>
            <p>冠能</p>
            <p>美国</p>
          </li>
          <li>
            <div>
              <img src="./images/3b236d1731bd91004bffcec3515e1a0a.jpg">
            </div>
            <p>冠能</p>
            <p>美国</p>
          </li>
          <li>
            <div>
              <img src="./images/3b236d1731bd91004bffcec3515e1a0a.jpg">
            </div>
            <p>冠能</p>
            <p>美国</p>
          </li>
          <li>
            <div>
              <img src="./images/3b236d1731bd91004bffcec3515e1a0a.jpg">
            </div>
            <p>冠能</p>
            <p>美国</p>
          </li>
          <li>
            <div>
              <img src="./images/3b236d1731bd91004bffcec3515e1a0a.jpg">
            </div>
            <p>冠能</p>
            <p>美国</p>
          </li>
        </ul>
      </div>
      <div class="title">—— 推荐品牌 ——</div>
      <div class="list">
        <ul>
          <li>
            <div>
              <img src="./images/3b236d1731bd91004bffcec3515e1a0a.jpg">
            </div>
            <p>冠能</p>
            <p>美国</p>
          </li>
          <li>
            <div>
              <img src="./images/3b236d1731bd91004bffcec3515e1a0a.jpg">
            </div>
            <p>冠能</p>
            <p>美国</p>
          </li>
          <li>
            <div>
              <img src="./images/3b236d1731bd91004bffcec3515e1a0a.jpg">
            </div>
            <p>冠能</p>
            <p>美国</p>
          </li>
          <li>
            <div>
              <img src="./images/3b236d1731bd91004bffcec3515e1a0a.jpg">
            </div>
            <p>冠能</p>
            <p>美国</p>
          </li>
          <li>
            <div>
              <img src="./images/3b236d1731bd91004bffcec3515e1a0a.jpg">
            </div>
            <p>冠能</p>
            <p>美国</p>
          </li>
          <li>
            <div>
              <img src="./images/3b236d1731bd91004bffcec3515e1a0a.jpg">
            </div>
            <p>冠能</p>
            <p>美国</p>
          </li>
        </ul>
      </div>
      <div class="all" @click="goto('/allbrand')">
        <a href="#">全部</a>
      </div>
    </div>
    <FooterGuide/>
  </div>
</template>
<script>
  import Typehead from '../../components/Typehead/Typehead.vue'
  import FooterGuide from '../../components/FooterGuide/FooterGuide.vue'
  export default{
    methods:{
      goto(path){
        this.$router.push(path)
      }
    },
    components:{
      Typehead,
      FooterGuide
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .type
    width 100%
    background #f3f4f5
    overflow hidden
    .center
      position relative
      margin-top 45px
      margin-bottom 35px
      background #f3f4f5
      overflow hidden
      .title
        padding-top 20px
        font-size 12px
        line-height 19px
        background #fff
        text-align center
      .list
        background #fff
        padding 0 5px 15px
        margin-bottom 10px
        overflow hidden
        ul
          li
            float left
            width 33.3%
            margin-top 20px
            padding 0 5px
            text-align center
            div
              width 100%
              height 62px
              border 1px solid #e2e2e2
              padding 10px 12px
              background url("./images/default-epet2.jpg") no-repeat center center
              background-size 120px auto
              img
                height 100%
                width 100%
            p:nth-child(2)
              font-size 13px
              margin-top 5px
              line-height 20px
            p:nth-child(3)
              font-size 12px
              line-height 20px
              color #999

      .all
        position fixed
        right 10px
        bottom 70px
        width 40px
        height 40px
        line-height 40px
        text-align center
        border-radius 50%
        background rgba(0,0,0,.4)
        a
          color #fff
          font-size 13px
</style>
