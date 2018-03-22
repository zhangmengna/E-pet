<template>
  <div class="type">
    <Typehead/>
    <div class="killbox">
      <div class="leftbox" ref="leftbox">
        <ul>
          <li :class="{on:num === index}" @click="tab(index)"
              v-for="(item, index) in typesName" :key="index">{{item.name}}</li>
        </ul>
      </div>
      <div class="rightbox" ref="rightbox">
        <!--食物-->
        <TypeContent :typesList="item.list"/>
        <!--热门品牌-->
        <HotBrands/>


      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import Typehead from '../../components/Typehead/Typehead.vue'
  import TypeContent from '../../components/TypeContent/TypeContent.vue'
  import HotBrands from '../../components/HotBrands/HotBrands.vue'
  export default{
    data(){
      return{
        num: 0
      }
    },
    mounted(){
      this.$store.dispatch('getTypesName',() => {
        this.$nextTick(() => {
          if(!this.nameScroll){
            this.nameScroll = new BScroll(this.$refs.leftbox, {
              click: true,
              bounceTime: 300 //swipe 持续时间
            })
          }else{
            this.nameScroll.refresh()
          }
        })
      })

      this.$store.dispatch('getTypesList',() =>{
        this.$nextTick(() => {
          if(!this.listScroll){
            this.listScroll = new BScroll(this.$refs.rightbox,{
              click: true
            })
          }else{
            this.listScroll.refresh()
          }
        })
      })

    },
    methods:{
      tab(index){
        this.num = index
      }
    },
    computed:{
      ...mapState(['typesName','typesList'])
    },
    components:{
      Typehead,
      TypeContent,
      HotBrands
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .type
    width 100%
    margin-bottom 45px
    overflow hidden

    .killbox
      marign-top 40px
      .leftbox
        position fixed
        top 40px
        bottom 45px
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
        bottom 45px
        left 0
        margin-left 75px
        border-top 5px solid #f3f4f5
        .sort-nav
          display none
          padding 5px 5px 20px
          border-top 1px solid #f3f4f5
          &.on
            display block
</style>
