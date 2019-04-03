<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- <div
        class="swiper-slide"
        v-for="(item,index) in listImg"
        :style="{ backgroundImage: 'url(' + item.img + ')' }">
      </div> -->
      <div
        class="swiper-slide"
        v-for="(item,index) in listImg">
        <img :src="item.img" alt="" />
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>
</template>

<script>
  import Swiper from "../../../../node_modules/swiper";
  export default {
    name: "banner",
    props: ["listImg"],
    mounted() {
      var swiper = new Swiper(".swiper-container", {
        // autoHeight: true,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        loop: true,
        speed: 400,
        autoplay: 4000,
        observer:true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        onTouchEnd: function() {
          // swiper.startAutoplay();
        }
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../node_modules/swiper/dist/css/swiper.css";
 
  .swiper-slide
    img
      width: 100%
      height: 100%
      border-radius:10px
</style>
