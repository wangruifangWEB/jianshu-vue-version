<template>
  <div class="recommendWays-box">
    <ul>
      <li v-for="(item,index) in list">
          <img :src="item.src" alt="">
          <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'recommendWays',
  data() {
      return {
        list: [
            {
                id: 1,
                title: '推荐作者',
                src: require('../../../assets/images/small/writergray.png')
            },
            {
                id: 2,
                title: '推荐专题',
                src: require('../../../assets/images/small/caidan.png')
            },
            {
                id: 3,
                title: '添加微信好友',
                src: require('../../../assets/images/small/weixin.png')
            },
            {
                id: 4,
                title: '添加QQ好友',
                src: require('../../../assets/images/small/QQ.png')
            }
        ]
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
  .recommendWays-box
    ul
      display: flex
      padding: 20px 0
      border-bottom: 1px solid #F7F7F7
      li 
        width: 33.3%
        text-align: center
      img 
        width: 38px
      span 
        display: block
        margin-top: 8px

</style>