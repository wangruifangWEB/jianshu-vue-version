<template>
  <div class="recommend">
    <!--专题 -->
    <thematicList v-bind:thematicLists="thematicLists"></thematicList>
    <!-- 我关注的专题 -->
    <div class="myRecommend">
      <header>
          <img src="../../../assets/images/small/caidan.png" alt="" />我关注的专题
      </header>
      <div class="myRecommend-list">
        <ul class="myRecommend-item">
          <li v-for="(item,index) in myRecommend">
            <img :src="item.img" alt="" />
            <span>{{item.title}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import thematicList from "./thematicList";
  export default {
    data() {
      return {
        thematicLists: [
          {
            id: 1,
            title: "活动专栏",
            img: require("../../../assets/images/icon/f-icon/1.png")
          },
          {
            id: 2,
            title: "活动专栏",
            img: require("../../../assets/images/icon/f-icon/2.png")
          },
          {
            id: 3,
            title: "活动专栏",
            img: require("../../../assets/images/icon/f-icon/3.png")
          },
          {
            id: 4,
            title: "活动专栏",
            img: require("../../../assets/images/icon/f-icon/4.png")
          },
          {
            id: 5,
            title: "活动专栏",
            img: require("../../../assets/images/icon/f-icon/5.png")
          },
          {
            id: 6,
            title: "活动专栏",
            img: require("../../../assets/images/icon/f-icon/6.png")
          },
          {
            id: 7,
            title: "活动专栏",
            img: require("../../../assets/images/icon/f-icon/7.png")
          },
          {
            id: 8,
            title: "新人客栈",
            img: require("../../../assets/images/icon/f-icon/8.png")
          },
          {
            id: 9,
            title: "新人客栈",
            img: require("../../../assets/images/icon/f-icon/9.png")
          },
          {
            id: 1,
            title: "活动专栏",
            img: require("../../../assets/images/icon/f-icon/11.png")
          },
          {
            id: 2,
            title: "活动专栏",
            img: require("../../../assets/images/icon/f-icon/15.png")
          },
          {
            id: 3,
            title: "活动专栏",
            img: require("../../../assets/images/icon/f-icon/12.png")
          },
          {
            id: 4,
            title: "活动专栏",
            img: require("../../../assets/images/icon/f-icon/13.png")
          },
          {
            id: 5,
            title: "活动专栏",
            img: require("../../../assets/images/icon/f-icon/14.png")
          },
          {
            id: 6,
            title: "活动专栏",
            img: require("../../../assets/images/icon/f-icon/15.png")
          },
          {
            id: 7,
            title: "活动专栏",
            img: require("../../../assets/images/icon/f-icon/1.png")
          },
          {
            id: 8,
            title: "新人客栈",
            img: require("../../../assets/images/icon/f-icon/2.png")
          },
          {
            id: 9,
            title: "新人客栈",
            img: require("../../../assets/images/icon/f-icon/3.png")
          },
          {
            id: 8,
            title: "新人客栈",
            img: require("../../../assets/images/icon/f-icon/4.png")
          },
          {
            id: 9,
            title: "新人客栈",
            img: require("../../../assets/images/icon/f-icon/3.png")
          }
        ],
        myRecommend: [
          {
            id:1,
            title:'这是题目，这是题目。。。',
            img:require("../../../assets/images/banner/font.jpg")
          },
          {
            id:1,
            title:'这是题目，这是题目。。。',
            img:require("../../../assets/images/banner/font.jpg")
          },
          {
            id:1,
            title:'这是题目，这是题目。。。',
            img:require("../../../assets/images/banner/font.jpg")
          },
          {
            id:1,
            title:'这是题目，这是题目。。。',
            img:require("../../../assets/images/banner/font.jpg")
          },
          {
            id:1,
            title:'这是题目，这是题目。。。',
            img:require("../../../assets/images/banner/font.jpg")
          },
          {
            id:1,
            title:'这是题目，这是题目。。。',
            img:require("../../../assets/images/banner/font.jpg")
          }
        ]
      };
    },
    methods: {},
    components: {
      thematicList
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../assets/styles/varibles.styl';
  .recommend
    margin-bottom:60px
  .myRecommend
    background: #eee
    overflow: hidden
  header
    color: #000
    font-size: 14px
    padding: 8px 20px
    background-color: #fff
    margin-top:10px
    img
      width: 18px
      vertical-align: middle
      margin-right: 8px
  .myRecommend-list
    margin-top: 10px
    background-color: #fff
    overflow:hidden
    padding: 15px
    .myRecommend-item
      text-align: center
      padding-top: 10px
      li
        width:115px
        float:left
        img
          width: 94%
          height: 100px
          border-radius: 6px
        span
          line-height:15px
          display:inline-block
          margin:10px 0
</style>
