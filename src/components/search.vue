<template>
    <div :class="['search-box', {'blackBg':modeStatus}]">
        <!-- 搜索框 -->
        <div class="search-top">
            <span class="iconfont icon-fanhui" style="font-size:18px;vertical-align:-2px;margin-top: 5px;" @click="goBack"></span>
            <input type="text" placeholder="搜索文章、专题、 用户、文集" :class="[{'blackBg':modeStatus,'bg': !modeStatus}]">
        </div>
        <!-- 搜索历史 -->
        <div class="history-search">
            <div>
                <div>
                    <span class="iconfont icon-shijian" style="font-size:22px;vertical-align: -2px;"></span>
                    <i>历史搜索</i>
                </div>
                <span  @click="clearHistory" style="float:right">清除历史</span>
            </div>

            <ul :class="['history-box',{'blackBg':modeStatus,'bg': !modeStatus}]">
                <li v-for="(value,index) in searchWords" @click="">{{value}}</li>
            </ul>
        </div>
        <!-- 搜索推荐-->
        <div class="search-recommend">
            <div class="search-recommend-top">
                <span class="iconfont icon-huo" style="font-size:22px;color:#e96e54;vertical-align: -2px;"></span>
                <span> 搜索趋势</span>
            </div>
            <div class="search-recommend-box">
                <div class="search-recommend-item">
                    <span>1</span>
                    <i>有趣的ASCII艺术</i>
                    <em>阅读361</em>
                </div>
                <div class="search-recommend-item">
                    <span>2</span>
                    <i>有趣的ASCII艺术</i>
                    <em>阅读361</em>
                </div>
                <div class="search-recommend-item">
                    <span>3</span>
                    <i>有趣的ASCII艺术</i>
                    <em>阅读361</em>
                </div>
                <div class="search-recommend-item">
                    <span>4</span>
                    <i>有趣的ASCII艺术</i>
                    <em>阅读361</em>
                </div>
                <div class="search-recommend-item">
                    <span>5</span>
                    <i>有趣的ASCII艺术</i>
                    <em>阅读361</em>
                </div>
                <div class="search-recommend-item">
                    <span>6</span>
                    <i>有趣的ASCII艺术</i>
                    <em>阅读361</em>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                modeStatus: this.$store.state.modeStatus,
                show:true,
                searchWords: ['成人考试试题', '今天发生了什么', '下来', '今天发生了什么', '今天发生了什么']
            }
        },
        methods: {
            goBack() {
                this.$router.push({
                    path: '/'
                })
            },
            clearHistory(){
                this.searchWords='';
            }
        },
        components: {

        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../assets/styles/varibles.styl';
@import 'http://at.alicdn.com/t/font_989460_nd1v3bq3mc.css';

.search-top 
  border-bottom: 1px solid #F7F7F7
  padding: 10px
  display: flex
  input 
    width: 80%
    height: 27px
    line-height:27px
    border-radius: 20px
    padding-left: 10px
    margin-left: 15px
    font-size: 14px
    border: 1px solid #ECECEC
    background-image: url('../assets/images/ic_search.png')
    background-size: 18px 18px
    background-repeat: no-repeat
    background-position: 90%
    outline: none
    .bg
     background-color: #FCFCFC
.history-search 
  color: #404040
  margin: 15px 15px 0 15px
  padding-bottom: 10px
  font-size: 12px
  border-bottom: 1px solid #F6F6F6
  div 
    display: inline
    i 
      font-style: normal
      color: #272727
      font-size: 16px
    em 
      font-style: normal
      color: #989898
      font-size: 14px
    
  .history-box 
    margin-top:20px
    li 
      border-radius: 20px
      display: inline-block
      margin: 5px 8px
      padding: 5px 8px
      border:1px solid #eee
    .bg
      background-color: #F5F5F5
.search-recommend 
  height:100vh 
  padding: 0 15px
  .search-recommend-top 
    padding: 10px 0
    font-size: 18px
    color: #3B3B3B
  .search-recommend-box
    font-size:16px
    .search-recommend-item 
      border-bottom: 1px solid #F6F6F6
      padding: 10px 7px
      span
        color: #EE5E4F
      i
        color: #272727
      em
       font-size:12px
</style>