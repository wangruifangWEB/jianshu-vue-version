<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in list">
          <keep-alive>
            <component :is="item.component"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import swiper from "../../../../node_modules/swiper";
  import Recommend from "./Recommend";
  import special from "./special";
  import serialize from "./serialize";
  export default {
    name: "indexSwiper",
    data() {
      return {
        list: [
          {
            path: "/Recommend",
            component: Recommend
          },
          {
            path: "/special",
            component: special
          },
          {
            path:"/serialize",
            component:serialize
          }
        ]
      };
    },
    mounted() {
      var mySwiper = new Swiper('.swiper-container', {
        autoHeight: true,
        observer:true,
        observeParents:true,
        // 设定初始化索引
        initialSlide: this.$route.path === "/recommend" ? 0 : this.$route.path === "/special" ? 1 :  this.$route.path === "/serialize" ? 2 :0
      });

      console.log(mySwiper);
       //解决切换到第二个Tab，滑动切换到页面的顶部
      // mySwiper.on('onSlideChangeStart',()=>{
      //   //$( '.swiper-container' ).scrollTop(0);这样是直接到顶部，往往会出现闪屏，
      //   document.querySelector( '.swiper-container' ).animate({scrollTop: 0},10);//动画慢慢过渡到顶部
			// })
     // 左右滑动时将当前slide的索引发送到nav组件
			mySwiper.on('onSlideChangeEnd',()=>{
				this.$root.eventHub.$emit("slideTab", mySwiper.activeIndex);
			})
       
		// 接收nav组件传过来的导航按钮索引值，跳转到相应内容区
      this.$root.eventHub.$on('changeTab', (index) => { // 点击导航键跳转相应内容区
        mySwiper.slideTo(index, 0, false);
      });
    },
    components: {
      swiper,
      Recommend,
      special,
      serialize
    }
  };
</script>
<style>
  @import "../../../../node_modules/swiper/dist/css/swiper.css";
</style>
