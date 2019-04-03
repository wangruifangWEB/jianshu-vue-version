<template>
  <div>
    <div class="recommendWList-box">
      <div :class="['recommendWList-item', {'blackBg':modeStatus ,'bg': !modeStatus}]" v-for="(item,index) in recommendList">
        <p class="recommendWList-header"><span>{{item.uname}}</span>关注了作者</p>
        <div class="recommendWList-item-content">
          <div class="recommendWList-item-middle">
            <div class="recommendWList-item-left">
                <img src="../../../assets/images/banner/font.jpg" alt="">
                <span>木木壁虎</span>
            </div>
            <button>+ 关 注</button>
          </div>

          <div class="recommendWList-item-bottom">
            <p>变异方法 (mutation method)，顾名思义：</p>
            <p>
                <img src="../../../assets/images/icon/notepad.png" alt="">
                <span>变异方法 (mutation method)，顾名思义，会改变被</span>
            </p>
            <p>
                <img src="../../../assets/images/icon/notepad.png" alt="">
                <span>变异方法 (mutation method)，顾名思义，会改变被</span>
            </p>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script type="text/javascript">
  export default {
      name: 'recommendList',
      props: {
          recommendList: {
              type: Array, // 类型按需求
              required: true
          }
      },
      data() {
          return {
            modeStatus: this.$store.state.modeStatus,
          }
      },
      methods: {

      },
      components: {

      }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
 @import '../../../assets/styles/varibles.styl';
 
.recommendWList-box 
  border-top: 1px solid $borderBottomOldColor
  background-color: #F3F3F3
  .recommendWList-item 
    margin-top: 20px
    padding: 20px 18px 24px 18px
   .bg
     background-color: #fff
    .recommendWList-header 
      font-size: 18px
      border-bottom: 1px solid #eee
      padding-bottom: 18px
      color: #9C9C9C
      span 
        color: #379FE1
        margin-right: 3px
    .recommendWList-item-middle 
      padding: 20px 0 12px 0
      line-height: 38px
      img 
        width: 40px
        height: 40px
        border-radius: 50%
        margin-right: 8px
      .recommendWList-item-left 
        display: inline
        font-size: 18px
        color: #000
      button 
        float: right
        color: #fff
        width: 60px
        height: 30px
        border-radius: 3px
        background-color: #49BD38
    .recommendWList-item-bottom 
      margin-left: 50px
      p 
        margin: 10px 0
        &:first-child 
          border-bottom: 1px solid #eee
          padding-bottom: 15px
      img 
        width: 14px
        height: 14px
      span 
        display: inline-block
        width: 90%
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
</style>