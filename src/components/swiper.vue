<template>
  <div>
    <div class="section">
      <section class="j-section">
        <ul>
          <li
            v-for="(value,index) in navList"
            :class="{'circle-bg':index == num}"
            @click="toggle(index)"
          >
            {{ value.text }}
          </li>
        </ul>
        <span @click="follow">
          <!-- <img src="../assets/images/ic_status_action_all_green.png"/> -->
        </span>
      </section>
    </div>
    <div class="swiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide
          v-for="(value,index) in componentsList"
          v-show="index == num"
          :key="index"
        >
          <keep-alive>
            <compontent :is="value.compontent"></compontent>
          </keep-alive>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script type="text/javascript">
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import friendWorld from "@/components/friendWorld";
  import author from "@/components/author";
  import write from "@/components/write";

  export default {
    name: "Swiper",
    data() {
      return {
        swiperOption: {
          //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          autoplay: 3000,
          effect: "coverflow",
          grabCursor: true,
          setWrapperSize: true,
          pagination: ".swiper-pagination",
          paginationClickable: true,
          prevButton: ".swiper-button-prev",
          nextButton: ".swiper-button-next",
          observeParents: true
          /* onTransitionStart(swiper){
					  console.log(swiper)
					 }*/
        },
        componentsList: [
          { path: "/author", compontent: author },
          { path: "/friendWorld", compontent: friendWorld },
          { path: "/author", compontent: author },
          { path: "/write", compontent: write }
        ],
        navList: [
          { text: "全部关注" },
          { text: "简友圈" },
          { text: "作者" },
          { text: "专题" },
          { text: "连载" },
          { text: "文集" },
          { text: "推送更新" },
          { text: "全部关注" }
        ],
        num: 0
      };
    },
    components: {
      swiper,
      swiperSlide
    },
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted() {
      // you can use current swiper instance object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      /*  console.log(this.swiper);*/
    },
    methods: {
      toggle: function(index) {
        this.num = index;
        /*console.log(this.num = index);*/
      },
      follow: function() {
        this.$router.push({ path: "/follow" });
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../assets/styles/varibles.styl';
  .section
    .swiper-slide
      width: 100%
      float: left

    .j-section
      color: #A5A5A5
      width: 100%
      height: 30px
      line-height: 25px
      border-bottom: 1px solid #eee
      padding-top: 50px
      overflow: hidden
      font-size: 10px
      ul
        padding-left: 5px
        display: -webkit-box
        overflow-x: scroll
        overflow-y: hidden
        -webkit-overflow-scrolling: touch
        .circle-bg
          color: #fff
          width: 63px
          height: 25px
          line-height: 25px
          border-radius: 15px
          background-color: #DF8A79
        li
          width: 23%
          height: 100%
          text-align: center
        span
        width: 40px
        height: 25px
        position: absolute
        right: 0
        top: 50px
        background-color: #fff
        z-index: 200
        display: block
        text-align: center
        img
          width: 20px
          height: 20px
</style>
