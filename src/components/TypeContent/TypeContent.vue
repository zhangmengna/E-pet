<template>
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
</template>
<script>
  export default{
    props:{
      typesList: Array
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
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
</style>
