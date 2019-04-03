<template>
  <div>
    <div class="section">
      <header :class="['j-follow-top',  {'blackBg':modeStatus} , { 'bg': !modeStatus}]">
        <span class="j-follow-left">关注</span>
        <div class="j-follow-right">
          <router-link to="RecommendAttention">
           <span class="iconfont icon-guanzhu" style="font-size: 22px;margin-right: 8px"></span>
          </router-link>
          <router-link to="/search">
            <img src="../../../assets/images/icon/search.png"/>
          </router-link>
        </div>
      </header>
      <section class="j-section">
        <ul>
          <li
            v-for="(item,index) in navList"
            :class="{'active':currentIndex == index}"
            @click="switchClick(index)"
          >
            {{ item.text }}
          </li>
        </ul>
        <span class="rt-line" @click=""
          ><img src="../../../assets/images/ic_status_action_all_green.png"
        /></span>
      </section>
    </div>
    </div>
  </div>
</template>
<script type="text/javascript">

  export default {
    name: "navFollow",
    data() {
      return {
        modeStatus: this.$store.state.modeStatus,
        currentIndex: 0 ,
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
    mounted() {
      this.$nextTick(() => {
        //初始化保证页面刷新后导航和内容一致
        this.initPage();
      });
      /// 接收swiper组件发射的index进行导航按钮切换高亮和更新模板地址
      this.$root.eventHub.$on("slideTab", this.slideTab);
    },
    methods: {
      initPage() {
        this.$route.path === '/author' ? 0 : this.$route.path === '/friendWorld' ? 1 : this.$route.path === '/write' ? 2 : 0
      },
      switchClick: function(index) {
        this.currentIndex = index;
        // 点击导航按钮时向swiper组件发射index
        this.$root.eventHub.$emit("changeTab", index);
      },
      slideTab(index) {
        this.currentIndex = index;
        // let router = new VueRouter();
        // let href = index === 0 ? "/author" : index === 1 ? "/followComponent" : "/write";
         this.$route.path === '/author' ? 0 : this.$route.path === '/friendWorld' ? 1 : this.$route.path === '/write' ? 2 : 0 ;
        // 利用路由的push方法更新路径
        // router.push(href);
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../assets/styles/varibles.styl';
  @import 'http://at.alicdn.com/t/font_989460_si7ahszs0w.css';
  .section
    .j-follow-top 
      width: 100%
      color: #000
      height: 45px
      line-height: 45px
      position: fixed
      z-index: 400
      border-bottom: 1px solid #eee
      padding:0 20px
      box-sizing: border-box
     .bg
       background: #fff
      .j-follow-left 
        font-size: 16px
        padding: 0 3px 3px 3px
  
      .j-follow-right 
        float: right
        img 
          width: 20px
          height: 20px
          vertical-align: middle
  
    .swiper-slide
      width: 100%
      float: left
    .rt-line
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
    .j-section
      color: #A5A5A5
      width: 100%
      height: 30px
      line-height: 25px
      border-bottom: 1px solid #eee
      padding-top: 50px
      overflow: hidden
      font-size: 12px
   
      ul
        padding-left: 5px
        display: -webkit-box
        overflow-x: scroll
        overflow-y: hidden
        -webkit-overflow-scrolling: touch
        .active
          color: #fff
          width: 63px
          height: 25px
          line-height: 25px
          border-radius: 15px
          background-color: #DF8A79
        li
          width: 16%
          height: 100%
          text-align: center
</style>
