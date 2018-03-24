<template>
  <div class="type">
    <Typehead/>
    <div class="killbox">
      <div class="leftbox" ref="leftbox">
        <ul>
          <li :class="{on:num === index1}" @click="tab(index1)"
              v-for="(item, index1) in typesName" :key="index1">{{item.name}}</li>
        </ul>
      </div>
      <div class="rightbox" ref="rightbox">
        <div class="wrap">
          <div v-for="(item, index2) in commonbrands" :key="index2"
                 :class="{on:num === index2}">
            <!--食物-->
            <TypeContent :types="item.types"/>
            <!--<TypeContent/>
            <TypeContent/>-->
            <!--热门品牌-->
            <HotBrands  v-if="item.hotBrands[0]"  :hotbrands="item.hotBrands[0]"/>
          </div>
        </div>
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
      });

    },
    methods:{
      tab(index){
        this.num = index
      }
    },
    computed:{
      ...mapState(['typesName','typesList']),

      commonbrands () {
        let arr = []
        arr = this.typesList.map(item =>{
          const types = item.filter(i => i.type===0)
          const hotBrands = item.filter(i => i.type===2)
          const arr = {types,hotBrands}
          return  arr
        })
        console.log('111',arr)
        return arr
      }
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
        .wrap
          >div
            display none
            &.on
              display block

</style>
