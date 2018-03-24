<template>
  <div>
    <Showhead title="全部品牌"/>
    <div class="allbrands" ref="brands">
      <div class="brand-list" >
        <div class="brand-item" v-for="(item, index) in allBrands" :key="index">
          <h2>{{item.order}}</h2>
          <div v-for="(list, index) in item.list" :key="index">
            <div class="brand-wrap">
              <div class="brand-img">
                <img :src="list.logo">
              </div>
              <div class="brand-name">
                <p class="fs14">{{list.name}}</p>
                <p class="fs12">{{list.address}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="letter">
        <div class="menu">
          <span :class="{current:index === currentIndex}" @click="selectCurrent(index)"
                v-for="(item,index) in menus" :key="index">{{item}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import Showhead from '../../components/Showhead/Showhead.vue'
  export default{
    data(){
      return{
        scrollY: 0, // 右侧y轴滑动坐标
        tops:[], // 包含所有分类小列表的top值
        menus:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"]
      }
    },
    mounted(){
      this.$store.dispatch('getAllBrands',() => {
        this.$nextTick(() => {
          // 初始滚动
          this._initScroll()
          //初始化tops
          this._initTops()
        })
      })
    },
    computed:{
      ...mapState(['allBrands']),
      //当前分类的下标
      currentIndex(){
        const {scrollY, tops} = this
        // 将scrollY与tops比较 大于当前top 小与下一个top值
        // findIndex（）返回true所对应的top的下标
        return tops.findIndex((top,index)=> scrollY>= top && scrollY< tops[index+1])
      }
    },
    methods:{
       _initScroll(){
         //列表滚动
         this.brandsScroll = new BScroll('.allbrands',{
           click: true,
           probeType: 2, // 手指滑动（惯性滑动，编码滑动不监视）
         })
         // 监视滑动
         this.brandsScroll.on('scroll',(pos)=>{
           console.log(pos.y)
           //保存y值
           this.scrollY = Math.abs(pos.y)
         })
         // 监视滑动结束
         this.brandsScroll.on('scrollEnd',(pos)=>{
           console.log('滑动结束',pos.y)
         })
       },
      _initTops(){
        const tops = []
        let top = 0
        // 计算各个top并保存到top中
        tops.push(top)
        // 得到brands-list下所有类型 返回伪数组
        const lists = this.$refs.brands.getElementsByClassName('brand-item')
       //  转为真数组
        Array.prototype.slice.call(lists).forEach((list, index) =>{
          top += list.clientHeight // 是当前list的高度
          tops.push(top)
        })
        this.tops = tops
        console.log(tops)
      },
      // 选择当前的分类
      selectCurrent(index){
        // 得到滚动的目标坐标
        const top = this.tops[index]
        // 更新目标的scrollY
        this.scrollY = top
        // 平滑滚动到指定位置（x,y,时间）
        this.brandsScroll.scrollTo(0,-top,300)
      }
    },
    components:{
      Showhead
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .allbrands
    width 100%
    position fixed
    top 50px
    bottom 0
    background #f3f4f5
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
          height 13px
          margin-top 5px
          font-size 13px
          text-align center
          color #666
          &.current
            color #fe3e3e
            font-weight 700
    .brand-list
      width 100%
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
