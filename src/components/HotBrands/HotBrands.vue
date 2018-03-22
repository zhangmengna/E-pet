<template>
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
</template>
<script>
  export default{}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .sort-nav
    display none
    padding 5px 5px 20px
    border-top 1px solid #f3f4f5
    &.on
      display block
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
