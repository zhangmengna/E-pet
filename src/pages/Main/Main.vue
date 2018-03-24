<template>
  <div class="main">
    <div class="top">
      <div class="appdown" v-show="isShow">
      <span class="closebtn" @click="hide">
        <img src="./images/closebtn_03.png">
      </span>
        <a href="#" class="dowing">
          <img src="./images/guanggao.jpg">
        </a>
      </div>
      <header class="header">
        <div class="main">
          <div class="main-top">
            <div class="search">
              <a href="#" class="place">
                <span>狗狗</span>
                <span>|</span>
                <span>重庆</span>
                <i></i>
              </a>
              <span  class="input">
                <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
                <img src="./images/search.png" alt="">
              </span>
              <a href="#" class="chat">
                <img src="./images/mydope.png" alt="">
              </a>
            </div>
          </div>
          <div class="main-item">
            <div class="swiper-container " id="swiper-nav">
              <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="(menu,index) in headMenus" :key="index" @click="tab(index)">
                  <span  :class="{on:index=== num}">{{menu.menu_name}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
    <!--轮播-->
    <div class="banner-nav" ref="banner">
      <div class="swiper-container swiper-banner" v-if="imgsList[0]">
        <div class="swiper-wrapper" >
          <div class="swiper-slide" v-for="(item, index) in imgsList[0].value" :key="index">
           <img :src="item.image">
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!--轮播下de图片-->
    <div class="img-nav img1" v-if="imgsList[1]">
      <img :src="imgsList[1].value[0].image">
    </div>
    <!--导航图-->
    <div class="column">
      <ul v-if="columnImgs">
        <li v-for="(item, index) in columnImgs" :key="index">
          <img :src="item.image">
        </li>
      <!--  <li>
          <img src="./images/4e820b334820dbb62178bd367cdd7ba6.jpg">
        </li>
        <li>
          <img src="./images/4e820b334820dbb62178bd367cdd7ba6.jpg">
        </li>
        <li>
          <img src="./images/4e820b334820dbb62178bd367cdd7ba6.jpg">
        </li>
        <li>
          <img src="./images/4e820b334820dbb62178bd367cdd7ba6.jpg">
        </li>
        <li>
          <img src="./images/4e820b334820dbb62178bd367cdd7ba6.jpg">
        </li>
        <li>
          <img src="./images/4e820b334820dbb62178bd367cdd7ba6.jpg">
        </li>
        <li>
          <img src="./images/4e820b334820dbb62178bd367cdd7ba6.jpg">
        </li>
        <li>
          <img src="./images/4e820b334820dbb62178bd367cdd7ba6.jpg">
        </li>
        <li>
          <img src="./images/4e820b334820dbb62178bd367cdd7ba6.jpg">
        </li>-->
      </ul>
    </div>
    <!--7张图片-->
    <div class="img-nav img1" v-if="index>=2 && index<=8" v-for="(imglist,index) in imgsList">
      <img :src="imglist.value[0].image">
    </div>
    <!--<div class="img-nav img1" v-if="imgsList[2]">
      <img :src="imgsList[2].value[0].image">
    </div>
    <div class="img-nav img1" v-if="imgsList[3]">
      <img :src="imgsList[3].value[0].image">
    </div>
    <div class="img-nav img1" v-if="imgsList[4]">
      <img :src="imgsList[4].value[0].image">
    </div>
    <div class="img-nav img1" v-if="imgsList[5]">
      <img :src="imgsList[5].value[0].image">
    </div>
    <div class="img-nav img1" v-if="imgsList[6]">
      <img :src="imgsList[6].value[0].image">
    </div>
    <div class="img-nav img1" v-if="imgsList[7]">
      <img :src="imgsList[7].value[0].image">
    </div>
    <div class="img-nav img1" v-if="imgsList[8]">
      <img :src="imgsList[8].value[0].image">
    </div>-->
    <!--flex布局图-->
    <div class="boxflex" v-if="adBrands[0]">
      <div class="boximg" v-for="(items, index) in adBrands[0].content_images" :key="index">
        <div v-for="(item, index) in items" :key="index">
          <img :src="item.image">
        </div>
      </div>
    </div>
    <!--打折区图-->
    <div class="img-nav img1" v-if="index>=9 && index <=11" v-for="(imglist,index) in imgsList">
      <img :src="imglist.value[0].image">
    </div>
   <!-- <div class="img-nav img1" v-if="imgsList[9]">
      <img :src="imgsList[9].value[0].image">
    </div>
    <div class="img-nav img1" v-if="imgsList[10]">
      <img :src="imgsList[10].value[0].image">
    </div>
    <div class="img-nav img1" v-if="imgsList[11]">
      <img :src="imgsList[11].value[0].image">
    </div>-->
    <!--打折主题 + 内容 flex 2*1  4个-->
    <div class="flex-two" v-if="adBrands[1]">
      <div v-for="(item, index) in adBrands[1].content_images" :key="index">
        <img :src="list.image" v-for="(list,index) in item" :key="index">
      </div>
    </div>
    <!--2-->
    <div class="img-nav img1" v-if="imgsList[12]">
      <img :src="imgsList[12].value[0].image">
    </div>
    <div class="flex-two" v-if="adBrands[2]">
      <div v-for="(item, index) in adBrands[2].content_images" :key="index">
        <img :src="list.image" v-for="(list,index) in item" :key="index">
      </div>
    </div>
    <!--3-->
    <div class="img-nav img1" v-if="imgsList[13]">
      <img :src="imgsList[13].value[0].image">
    </div>
    <div class="flex-two" v-if="adBrands[3]">
      <div v-for="(item, index) in adBrands[3].content_images" :key="index">
        <img :src="list.image" v-for="(list,index) in item" :key="index">
      </div>
    </div>
    <!--4-->
    <div class="img-nav img1" v-if="imgsList[14]">
      <img :src="imgsList[14].value[0].image">
    </div>
    <div class="flex-two" v-if="adBrands[4]">
      <div v-for="(item, index) in adBrands[4].content_images" :key="index">
        <img :src="list.image" v-for="(list,index) in item" :key="index">
      </div>
    </div>
    <!--带白边 播放视频-->


    <div class="img-nav img4" v-if="imgsList[15]">
      <img :src="imgsList[15].value[0].image">
    </div>
    <!--img5-->
    <div class="img-nav img1" v-if="imgsList[15]">
      <img :src="imgsList[15].value[0].image">
    </div>
    <!--flex 2*2-->
    <div class="flex-two2" v-if="adBrands[5]">
      <div class="flex flex1" v-for="(items, index) in adBrands[5].content_images" :key="index">
        <img v-for="(item,index) in items" :key="index" :src="item.image">
      </div>
      <!--<div class="flex flex2">
        <img src="./images/9287d4348daf658d9e3561841d240be2.jpg">
        <img src="./images/114db902c4aee3711f585ac7e9718ec2.jpg">
      </div>-->
    </div>
    <!--flex 2*1-->
    <div class="flex-two3" v-if="adBrands[6]">
      <div v-for="(items,index) in adBrands[6].content_images" :key="index">
        <img :src="item.image" v-for="(item,index) in items" :key="index">
      </div>

    </div>
    <!--flex 3*2-->
    <div class="flex-two4" v-if="adBrands[7]">
      <div v-for="(items, index) in adBrands[7].content_images" :key="index">
        <img :src="item.image" v-for="(item,index) in items" :key="index">
      </div>
    </div>
    <!--空图-->
    <div class="img-nav" v-if="imgsList[16]">
      <img :src="imgsList[16].value[0].image">
    </div>
    <!--每日特价-->
    <div class="surprise">
      <div class="surprise-tit">
        <img src="./images/new_index_icon_suprice.png">
        <span class="text">下一场开始</span>
        <span class="time">14:00</span>
      </div>
      <div class="surprise-pro">
        <div class="swiper-container swiper-pro">
          <ul class="swiper-wrapper">
            <li class="swiper-slide">
              <img src="./images/19c2694eebfb1cea95c7bb527991bc86.jpg">
              <div class="price">
                <span>￥</span><em>1.50</em>
              </div>
              <p class="jy">省13.50</p>
            </li>
            <li class="swiper-slide">
              <img src="./images/19c2694eebfb1cea95c7bb527991bc86.jpg">
              <div class="price">
                <span>￥</span><em>1.50</em>
              </div>
              <p class="jy">省13.50</p>
            </li>
            <li class="swiper-slide">
              <img src="./images/19c2694eebfb1cea95c7bb527991bc86.jpg">
              <div class="price">
                <span>￥</span><em>1.50</em>
              </div>
              <p class="jy">省13.50</p>
            </li>
            <li class="swiper-slide">
              <img src="./images/19c2694eebfb1cea95c7bb527991bc86.jpg">
              <div class="price">
                <span>￥</span><em>1.50</em>
              </div>
              <p class="jy">省13.50</p>
            </li>
            <li class="swiper-slide">
              <img src="./images/19c2694eebfb1cea95c7bb527991bc86.jpg">
              <div class="price">
                <span>￥</span><em>1.50</em>
              </div>
              <p class="jy">省13.50</p>
            </li>
            <li class="swiper-slide">
              <img src="./images/19c2694eebfb1cea95c7bb527991bc86.jpg">
              <div class="price">
                <span>￥</span><em>1.50</em>
              </div>
              <p class="jy">省13.50</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="main-footer">
      <div class="foot-top">
        <span class="bt">触屏版</span>
        <span>手机客户端</span>
        <span>关于我们</span>
        <span>联系我们</span>
      </div>
      <div class="foot-bottom">
        © wap.epet.com 版权：重庆易宠科技有限公司
      </div>
    </div>
   <!--定位动态图-->
    <div class="dog eyeclo"></div>

    <FooterGuide/>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import FooterGuide from '../../components/FooterGuide/FooterGuide.vue'
  //import Banner from '../../components/Banner/Banner.vue'
  export default{
    data(){
      return{
        isShow: true,
        num:0
      }
    },
    methods:{
      hide(){
        this.isShow = !this.isShow
        this.$refs.banner.style.marginTop = '86px'
      },
      tab(index){
        this.num = index
      }
    },
    mounted(){
      this.$store.dispatch('getHeadMenus',()=>{
        this.$nextTick(()=>{
          const swipernav =new Swiper('#swiper-nav',{
            slidesPerView:5,
            freeMode:true,
          });
        })
      })
      this.$store.dispatch('getImgsList',()=>{
        this.$nextTick(()=>{
          const swiperbanner = new Swiper('.swiper-banner', {
            centeredSlides: true,
            loop:true,
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          })
        })
      })
      this.$store.dispatch('getColumnImgs')

      this.$store.dispatch('getAdBrands')

      new Swiper('.swiper-pro',{
        slidesPerView:3.5,
        freeMode:true,
      })

    },
    computed:{
      ...mapState(['headMenus','imgsList','columnImgs','adBrands'])
    },
    components:{
      FooterGuide
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .dog
    background url("./images/godog.png") no-repeat
    width 41px
    height 46px
    background-size 80px auto
    position fixed
    bottom 15%
    right: -1px
    z-index 10px
    animation eyeclo 2.5px steps(2) infinite
    @keyframes eyeclo {
      50%{ transform: translate(-87px)}
    }
  .swiper-pagination-bullet-active{
    height 6px
    width 16px
    border-radius 3px 0 0 3px
    background: #fff;
  }
  .main
    margin-bottom 46px
    background #fff
    overflow hidden
    .top
      position fixed
      top 0
      left 0
      z-index 100
      .appdown
        width:100%
        height 55px
        background pink
        .closebtn
          display inline-block
          width 20px
          position absolute
          top 10%
          left 5px
          img
            width 100%
        .dowing
          height 55px
          img
            height 100%
      .header
        width 100%
        height 86px
        background #fff
        .main
          clearFix()
          width 100%
          font-size 14px
          .main-top
            clearFix()
            padding 5px 10px
            .search
              padding 8px 0
              vertical-align middle
              .place
                i
                  display inline-block
                  vertical-align middle
                  border-width 4px
                  border-style solid solid dotted
                  border-color #898989 transparent transparent transparent
              .input
                position relative
                input
                  border 0
                  border-radius 4px
                  width 240px
                  height 25px
                  line-height 25px
                  padding-left 5px
                  padding-right 5px
                img
                  width 11px
                  margin-left -20px
              .chat
                height 25px
                img
                  vertical-align bottom
                  height 25px
                  line-height 25px
          .main-item
            height 36px
            line-height 36px
            overflow hidden
            .swiper-container
              ul
                width 100%
                li
                  float left
                  text-align center
                  span
                    display inline-block
                    box-sizing border-box
                    width 28px
                    height 36px
                    font-size 14px
                    color #666
                    &.on
                      color #459d36
                      border-bottom 2px solid #459d36

    /*轮播*/
    .banner-nav
      margin-top 141px
      height 160px
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          .swiper-slide
            >img
              width 100%

    .img-nav
      width 100%
      overflow hidden
      font-size 0
      img
        width 100%
        height 100%
    .column
      width 100%
      overflow hidden
      ul
        display flex
        flex-wrap wrap
        width 100%
        li
          width 20%
          img
            display block
            width 100%

    /*flex布局图*/
    .boxflex
      display flex
      flex-direction row
      justify-content space-around
      width 100%
      overflow hidden
      .boximg
        width 25%
        display flex
        flex-direction column
        div
          img
            display block
            width 100%
            height 94px

    .flex-two
      display flex
      overflow hidden
      div
        img
          display block
          width 100%
    .img4
      padding-bottom 25px

    .flex-two2
      display flex
      overflow hidden
      div
        display flex
        flex-direction column
        img
          width 100%
          height auto

    .flex-two3
      display flex
      width 100%
      height 186px
      div
        img
          display block
          height 186px


    .flex-two4
      display flex
      width 100%
      overflow hidden
      div
        display flex
        flex-direction column
        img
          width 100%



    .surprise
      overflow hidden
      .surprise-tit
        position relative
        padding 10px
        line-height 19px
        img
          width 85px
        .text
          position absolute
          right 107px
          margin-right 5px
          font-size 13px
        .time
          position absolute
          right 55px
      .surprise-pro
        .swiper-container
          ul
            width 100%
            li
              float left
              padding 0 7px
              width 85px
              text-align center
              font-size 12px
              img
                width 85px
                height 85px
                margin-bottom 5px
              .price
                color red
                em
                  font-style normal
                  font-size 14px
              p
                line-height 19px



    .main-footer
      margin-top 14px
      overflow hidden
      .foot-top
        padding 15px 0 5px
        text-align center
        span
          line-height 22px
          font-size 14px
          padding-right 10px
          &.bt
            color red
      .foot-bottom
        margin 0 10px
        padding-bottom 25px
        font-size 12px
        text-align center
</style>
