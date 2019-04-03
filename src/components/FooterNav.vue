<template>
  <div :class="['bottom-tab', {'blackBg':modeStatus ,'bg': !modeStatus}]" >
    <ul>
      <li class="tab-item" @click="switchTo('/')">
        
        <img
          :src="'/' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal"
          alt="首页"
        />
        <span :class="{on: '/' === $route.path}">首页</span>
      </li>
      <li class="tab-item" @click="switchTo('/follow')">
        <img
          :src="'/follow' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal"
          alt="关注"
        />
        <span :class="{on: '/follow' === $route.path}">关注</span>
      </li>
      <li class="tab-item" @click="switchTo('/')">
        <img
          :src="'' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].normal"
          alt=""
        />
        <span></span>
      </li>
      <li class="tab-item" @click="switchTo('/msg')">
        <img
          :src="'/msg' === $route.path ? tabBarImgArr[3].selected : tabBarImgArr[3].normal"
          alt="消息"
        />
        <span :class="{on: '/msg' === $route.path}">消息</span>
      </li>
      <li class="tab-item" @click="switchTo('/mine')">
        <img
          :src="'/mine' === $route.path ? tabBarImgArr[4].selected : tabBarImgArr[4].normal"
          alt="我的"
        />
        <span :class="{on: '/mine' === $route.path}">我的</span>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: "FooterNav",
    data() {
      return {
        tabBarImgArr: [
          //图片切换
          {
            normal: require("../assets/images/icon/Inx.png"),
            selected: require("../assets/images/icon/InxSelected.png")
          },
          {
            normal: require("../assets/images/icon/find.png"),
            selected: require("../assets/images/icon/findSelected.png")
          },
          {
            normal: require("../assets/images/icon/remind_icon_dingyue.png"),
            selected: require("../assets/images/icon/remind_icon_dingyue.png")
          },
          {
            normal: require("../assets/images/icon/msg.png"),
            selected: require("../assets/images/icon/msgSelected.png")
          },
          {
            normal: require("../assets/images/icon/mine.png"),
            selected: require("../assets/images/icon/mineSelected.png")
          }
        ]
      };
    },
    computed: {
      modeStatus() {
        return this.$store.state.modeStatus
      }
    },
    methods: {
      switchTo(path) {
        // console.log(this.$router);
        this.$router.replace(path);
      }
    },
    components: {}
  };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../assets/styles/varibles.styl';
.bottom-tab 
  width:100%
  position: fixed
  bottom: 0
  padding: 6px 0
  z-index: 300
  box-shadow:3px 0 3px #eee
.bg
   background:#fff
  .on
      color: $color
  img 
    width: 24px
    height: 24px
    vertical-align: middle
  li
    width: 20%
    float: left
    text-align: center

  span 
    display: block
    color: #b6b6b6
    display: grid
    margin-top: 6px
    font-size: 12px

  li:nth-child(3) img 
    width: 38px
    height: 38px
</style>
