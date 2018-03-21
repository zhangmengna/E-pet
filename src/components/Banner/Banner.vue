<template>
  <div class="banner-nav">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./images/d945d3f1b34e0081cf8c9eb34def9096.jpg">
        </div>
        <div class="swiper-slide">
          <img src="./images/9f49bbf054e4dcab567e1584f48db3f0.jpg">
        </div>
        <div class="swiper-slide">
          <img src="./images/94d4681e2ab878c340d441a5c1c7b98a.jpg">
        </div>
        <div class="swiper-slide">
          <img src="./images/f0e3af5548da9b04aa098004e07ff6c1.jpg">
        </div>
        <div class="swiper-slide">
          <img src="./images/b898562338c7f04ac9b2fa3e5aec8b4c.jpg">
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
  export default{
    mounted (){
      var swiper = new Swiper('.swiper-container', {
        centeredSlides: true,
        look:true,
        autoplay:true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      })
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .banner-nav
    width 100%
    margin-top 141px
    height 160px
    .swiper-container
      width: 100%;
      height: 100%;
      .swiper-wrapper
        .swiper-slide
          img
            height 160px
</style>
