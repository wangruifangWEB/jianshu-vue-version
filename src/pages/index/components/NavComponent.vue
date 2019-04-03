<template>
  <div>
    <header :class="['j-follow-top',  {'blackBg':modeStatus ,'bg': !modeStatus}]" >
      <span
        v-for="(item,index) in topTitleArr"
        class="j-follow-left"
        @click="tabClick(index)"
        :class="{ 'active': nowIndex === index}"
        >{{ item }}</span
      >
      <div class="j-follow-right">
        <router-link to="search">
            <span class="iconfont icon-icon_search"></span>  
        </router-link>
        <span class="iconfont icon-icon_add" @click="multiMenuClick"></span>
      </div>
      <!-- 下拉菜单 -->
      <ul class="drop-down-box" v-if="show">
        <li>
          <router-link to="VueScan">
          <span class="iconfont icon-saoyisaojianjiban"></span>
          扫一扫
        </router-link>
        </li>
        <li>
          <span class="iconfont icon-tianjiaguanzhu"></span>
          添加关注
        </li>
        <li>
          <span class="iconfont icon-wodemingpian"></span>
          我的名片
        </li>
      </ul>
    </header>
  </div>
</template>

<script type="text/javascript">
 let scan = null;
  import VueRouter from "vue-router";
  import Search from "@/components/Search";
  import Recommend from "./Recommend";
  export default {
    data() {
      return {
        nowIndex: 0,
        topTitleArr: ["推荐", "专题", "连载", "会员"],
        show:false, //下拉框隐藏
      };
    },
    computed: {
      modeStatus() {
        return this.$store.state.modeStatus
      }
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
        this.$route.path === 0
          ? "/Recommend"
          : this.$route.path === 1
          ? "/Recommend"
          : 0;
      },
      tabClick: function(index) {
        this.nowIndex = index;
        // 点击导航按钮时向swiper组件发射index
        this.$root.eventHub.$emit("changeTab", index);
      },
      slideTab(index) {
        this.nowIndex = index;
        let router = new VueRouter();
        let href = index === 0 ? "/Recommend" : "/Recommend";
        // 利用路由的push方法更新路径
        router.push(href);
      },
      multiMenuClick(){
        this.show=!this.show;
      }
    },
    components: {
      Search,
      Recommend
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../assets/styles/varibles.styl'; 
  @import 'http://at.alicdn.com/t/font_989460_ui1bsm2etg.css';
 
   /* @keyframes ceshi{
  	0%{
  		transform:scale(.8)
  	}
  	50%{
  		transform:scale(.5)
  	}
  	100%{
  		transform:scale(1)
  	}
  } */
  .j-follow-top
    width: 100%
    color: #000
    height: 45px
    line-height: 45px
    position: fixed
    z-index: 400
    padding:0 20px
    box-sizing: border-box
    box-shadow:3px 0 3px #eee
   .bg
     background: #fff
    .drop-down-box
      width:130px
      height:150px
      position:absolute
      right: 8px
      top: 50px
      background-color:#fff
      box-shadow:1px 1px 3px 3px #eee
      text-align:center
      border-radius:8px
      font-size: 14px
      span
        color:#e96e54
        margin-right:10px
    .j-follow-left
      font-size: 16px
      margin-right: 20px
      padding: 0 3px 3px 3px
    .active
      color: #e96e54
      border-bottom: 2px solid #e96e54
    .j-follow-right
      float: right
      padding-right: 10px
      .icon-icon_add
        font-size:20px
        position:relative
      .icon-icon_search
        font-size:20px
        margin-right:10px
      img
        width: 24px
        height: 24px
        margin-right: 20px
        vertical-align: middle
        margin-bottom:5px;

   /*切换过渡动画
   .fade-enter-active,
   .fade-leave-active {
     transition: opacity 0.5s;
      transition: ceshi .5s;
   }
   .fade-enter,
   .fade-leave-to {
     opacity: 0;
   }*/
</style>
