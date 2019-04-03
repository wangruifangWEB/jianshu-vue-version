<template>
  <div :class="['recommend-box',{'blackBg':modeStatus }]">
    <!-- 搜索框 -->
    <div class="search-top">
      <div class="search-top-back">
        <img
          src="../../../assets/images/hwpush_ic_toolbar_back.png"
          alt=""
          @click="goback"
        />
        <span>推荐关注</span>
      </div>
      <input type="text" placeholder="搜索简书的内容和朋友" />
    </div>
    <!-- 添加方式 -->
    <recommendWays></recommendWays>
    <!-- 推荐列表 -->
    <recommendList v-bind:recommendList="recommendList"></recommendList>
  </div>
</template>
<script>
  import recommendWays from "./recommendWays";
  import recommendList from "./recommendList";
  export default {
    name: "RecommendAttention",
    data() {
      return {
        modeStatus: this.$store.state.modeStatus,
        recommendList: [
          {
            id: 1,
            uname: "暖暖的太阳花儿",
            title: "变异方法 (mutation method)，顾名思义：",
            list: [
              {
                title: "变异方法 (mutation method)，顾名思义，会改变被"
              },
              {
                title: "变异方法 (mutation method)，顾名思义，会改变被"
              }
            ]
          }
        ]
      };
    },
    methods: {
      goback() {
        this.$router.push({
          path: "/"
        });
      }
    },
    components: {
      recommendWays,
      recommendList
    }
  };
</script>

<style>
  .search-top {
    border-bottom: 1px solid #f7f7f7;
    margin: 0 10px;
    padding: 10px 0;
    text-align: center;
  }

  .search-top img {
    width: 34px;
    height: 34px;
    vertical-align: middle;
  }

  .search-top input {
    width: 80%;
    height: 30px;
    border-radius: 20px;
    padding-left: 10px;
    font-size: 15px;
    border: 1px solid #ececec;
    background-image: url("../../../assets/images/ic_search.png");
    background-size: 18px 18px;
    background-repeat: no-repeat;
    background-position: 15%;
    background-color: #fcfcfc;
    outline: none;
    text-align: center;
    letter-spacing: 0.5px;
    margin-top: 10px;
  }

  .search-top-back {
    color: #616161;
    text-align: left;
    font-size: 16px;
    border-bottom: 1px solid #f7f7f7;
  }
</style>
