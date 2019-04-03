<template>
  <div >
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
  import friendWorld from "./friendWorld";
  import author from "./author";
  import write from "./write";

  export default {
    name: "followComponent",
    data() {
      return {
        list: [
          { path: "/author", component: author },
          { path: "/friendWorld", component: friendWorld },
          { path: "/write", component: write }
        ]
      };
    },
    mounted() {
      var mySwiper = new Swiper(".swiper-container", {
        autoHeight: true,
        // 设定初始化索引
        initialSlide:
          this.$route.path === '/author' ? 0 : this.$route.path === '/friendWorld' ? 1 : this.$route.path === '/write' ? 2 : 0
      });

      console.log(mySwiper);

      //左右滑动时将当前slide的索引发送到nav组件
      mySwiper.on("onSlideChangeEnd", () => {
        this.$root.eventHub.$emit("slideTab", mySwiper.activeIndex);
      });

      // 接收nav组件传过来的导航按钮索引值，跳转到相应内容区
      this.$root.eventHub.$on("changeTab", index => {
        // 点击导航键跳转相应内容区
        mySwiper.slideTo(index, 0, false);
      });
    },
    methods: {},
    components: {
      author,
      friendWorld,
      write
    }
  };
</script>
<style>
  @import "../../../../node_modules/swiper/dist/css/swiper.css";
  .swiper-container-autoheight{
    min-height:100vh
  }
</style>
