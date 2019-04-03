<template>
  <div :class="['msg-box',{'blackBg':modeStatus}]">
    <header class="j-follow-top">
      <span class="j-follow-left">消息</span>
      <div class="j-follow-right">
        <img
          src="../../assets/images/icon/pushSetting.png"
          class="right-img"
          @click=""
        />
        <img
          src="../../assets/images/icon/search.png"
          class="right-img"
          @click="goSearch"
        />
      </div>
    </header>
    <!-- 中间内容 -->
    <div class="contentMiddle">
      <pictureTextList v-bind:imgs="imgs"></pictureTextList>
    </div>
    <div class="jianLetterBox">
      <!-- 简信列表 -->
      <div :class="['jianLetter',  {'blackBg':modeStatus ,'bg': !modeStatus}]">
        <p class="jianLetterTop"><span>简信</span> <i>新简信</i></p>
        <jianLetterList v-bind:lists="lists"></jianLetterList>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import pictureTextList from "./components/pictureTextList"
  import jianLetterList from "./components/jianLetterList"
  export default {
    data() {
      return {
        modeStatus: this.$store.state.modeStatus,
        imgs: [
          {
            id: 1,
            img: require("../../assets/images/icon/interaction.png"),
            title: "互动消息"
          },
          {
            id: 2,
            img: require("../../assets/images/icon/zuanshi_2.png"),
            title: "简书钻"
          },
          {
            id: 3,
            img: require("../../assets/images/icon/tixing.png"),
            title: "其他提醒"
          }
        ],
        lists: [
          {
            id: 1,
            title: "简书大学堂",
            hImg: require("../../assets/images/banner/01.jpg"),
            icon: require("../../assets/images/icon/ic_vip_official_small.png"),
            dtime: "10-25 01:27",
            desc:
              "互联网平台类型 -- 企业搭建产品平台进行运营，这类企业，大到 BAT，小到初创互联网平台的企业。"
          }
        ]
      };
    },
    methods: {
      tabChange($event, tabItem) {
        this.currentView = tabItem;
      },
      goSearch() {
        this.$router.push({
          path: "/search"
        });
      }
    },
    components : {
      pictureTextList,
      jianLetterList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/styles/varibles.styl'; 
.msg-box
   height:100vh
  .j-follow-top 
    width: 100%
    color: #000
    height: 45px
    line-height: 45px
    position: fixed
    z-index: 400
    border-bottom: 1px solid #eee
    .j-follow-left 
      font-size: 18px
      margin-left: 20px
      padding: 0 3px 3px 3px
  
    .j-follow-right 
      float: right
      padding-right: 10px
    
      img 
        width: 26px
        height: 26px
        vertical-align: middle
      
  .contentMiddle 
    padding-top: 55px
  .jianLetterBox 
    margin-top: 10px
    padding-top: 10px
    background-color: #eee
    .jianLetter 
      padding: 20px
    .bg
      background: #fff
      .jianLetterTop 
        font-size: 16px
        i 
          color: #e4887c
          float: right
  
</style>
