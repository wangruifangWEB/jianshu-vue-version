<template>
  <div :class="[{'blackBg':modeStatus } , 'mine_box']" >
    <!-- 白、夜模式转换 -->
    <div class="mode" @click="modeChange">
      <!-- <img src="../../assets/images/mine/1.png" alt=""> -->
      <i :class="[modeStatus ? 'iconfont icon-taiyangbaitianrijianmoshibaitianqingxianxing' : 'iconfont icon-circle-fee-night']" style="font-size:20px"></i>
      <span>{{modeStatus ? modeTxt[0] : modeTxt[1]}}</span>
    </div>
    <!-- 个人信息 -->
    <div class="persona_msg">
      <img :src="userMsg[0].hImg" alt="" />
      <div>
        <span class="uname">{{ userMsg[0].uname }}</span>
        <ul>
          <li>
            <i>{{ userMsg[0].follow }}</i> <span>关注</span>
          </li>
          <li>
            <i>{{ userMsg[0].fans }}</i> <span>粉丝</span>
          </li>
          <li>
            <i>{{ userMsg[0].integral }}</i> <span>积分</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 简书钻 -->
    <div class="jian_diamonds">
      <div class="jian_diamonds_top">
        <i class="iconfont icon-zuanshi" style="color:#df8a79;font-size:20px"></i>
        <span>简书钻：3.76</span> <i>查看</i>
      </div>
      <ul class="jian_diamonds_bottom">
        <li>
         <i class="iconfont icon-wodewenzhang1" style="font-size:28px"></i>
          <span>我的文章</span> <i>2篇私密</i>
        </li>
        <li>
          <i class="iconfont icon-icon-aiyuedu-wodeshujia" style="font-size:28px"></i>
          <span>我的书架</span> <i>含已购内容</i>
        </li>
        <li>
          <i class="iconfont icon-xihuanshoucang" style="font-size:28px"></i>
          <span>喜欢收藏</span>
        </li>
        <li>
          <i class="iconfont icon-jiangli" style="font-size:28px"></i>
          <span>奖励任务</span> <i>领简书钻</i>
        </li>
      </ul>
    </div>

    <!--轮播组件 -->
    <div class="swiper">
      <banner-swiper v-bind:listImg="listImg"></banner-swiper>
    </div>

    <!-- 相关列表 -->
    <div class="mine_lists">
      <div class="mine_lists_item">
        <span>简书会员</span>
        <div class="mine_lists_item_rt">
          <i>随时赠简书券</i> <em></em>
          <span class="iconfont icon-xiaoyuhao-copy"></span>

        </div>
      </div>
      <div class="mine_lists_item">
        <span>简书活动</span>
        <div class="mine_lists_item_rt">
          <i>百万奖金等你</i> <em></em>
          <span class="iconfont icon-xiaoyuhao-copy"></span>

        </div>
      </div>
      <div class="mine_lists_item">
        <span>我的钱包</span>
        <div class="mine_lists_item_rt">
          <i>0 张优惠券</i> <em></em>
          <span class="iconfont icon-xiaoyuhao-copy"></span>
        </div>
      </div>
      <div class="mine_lists_item">
        <span>浏览记录</span>
        <div class="mine_lists_item_rt">
          <!-- <i>随时赠简书券</i> <em></em> -->
          <span class="iconfont icon-xiaoyuhao-copy"></span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import bannerSwiper from "./components/bannerSwiper";
  // import {mapState} from 'vuex';
  export default {
    data() {
      return {
        modeStatus:false,
        modeStatus: this.$store.state.modeStatus,
        modeTxt:['日间','夜间'],
        userMsg: [
          {
            uid: 1,
            uname: "w_rf",
            hImg: require("../../assets/images/banner/01.jpg"),
            follow: 26,
            fans: 56,
            integral: 55
          }
        ],
        listImg: [
          {
            id: 1,
            img:require('../../assets/images/mine/7.png')
          },
          {
            id: 2,
            img:"https://img.zcool.cn/community/012a05582050aea84a0d304fc05b34.jpg@1280w_1l_2o_100sh.jpg"
          },
          {
            id: 3,
            img:"https://img.zcool.cn/community/01044058205274a84a0e282b226894.jpg@1280w_1l_2o_100sh.jpg"
          }
        ]
      };
    },
    methods: {
      modeChange:function() {
        this.modeStatus = !this.modeStatus
        //点击事件触发后直接通过dispatch触发index.js中actions中的changCity方法并将新值传递过去:
        this.$store.dispatch('changeMode',this.modeStatus)
        console.log(this.$store.state.modeStatus);//全局状态值
      }
    },
    components: {
      bannerSwiper
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/styles/varibles.styl';
  @import 'http://at.alicdn.com/t/font_989460_7ppb5l0abrj.css';
 
  .mine_box
    padding: 0 20px 50px 20px
    box-sizing:border-box
    .mode
      font-size:12px
      float:right
      margin-bottom:30px
      line-height:25px
      margin-top:10px
      img
        width:23px

    .persona_msg 
      width: 100%
      font-size: 14px
      overflow: hidden
      img 
        width: 60px
        height: 60px
        border-radius: 50%
        float: left
        margin-right: 16px
      div 
        float: left
        .uname 
          font-size: 16px
          font-weight: bold
        ul 
          display: -webkit-inline-box
          width: 100%
          margin-top: 10px
          li 
            width: 60%
            color: #000
            span 
              display: block
              margin-top: 6px

    /* 简书钻 */
    .jian_diamonds 
      margin: 20px 0
      box-shadow: 0px 0 6px #eeeeee
      .jian_diamonds_top 
        border-bottom: 1px solid #eee
        margin: 0 8px
        padding: 8px 0
        font-size:14px
      .jian_diamonds_bottom 
        padding: 20px 0
        text-align: center
        li 
          width: 24%
          display: inline-grid
          text-align: -webkit-center
          span 
            margin: 3px 0 6px 0
            font-size: 14px
            color: #333
          i 
            color: #B6B6B6
            font-size: 10px
            *font-size: 10px
            -webkit-transform: scale(0.8)

    /* banner图重置 */
    .swiper 
      .swiper-container 
        height: 100px
        .swiper-slide
          img 
            width: 100%
            height: 100%
            border-radius: 10px
    /* 列表 */
    .mine_lists 
      padding: 10px 0
      .mine_lists_item 
        border-bottom: 1px solid #eee
        padding: 18px 0
        &:last-child
          border-bottom:none
        span 
          font-size: 15px
          font-weight: bold

        .mine_lists_item_rt 
          float: right
          color: #b0b0b0
          img 
            width: 9px
            height: 9px
            vertical-align: middle
          em 
            display: inline-block
            width: 6px
            height: 6px
            background-color: #ec6b4e
            border-radius: 50%
            position: relative
            bottom: 4px
      
</style>