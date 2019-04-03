<template>
<div class="j-section-friend">
  <router-link to="/followDetails">
    <div class="j-section-list">
      <img src="../../../assets/images/media.jpg">
      <div class="j-section-list-header">
        <p>开心的生活&nbsp;喜欢了文章</p>
        <span>18分钟前</span>
      </div>
      <div class="j-section-list-details">
        <h2>自信细心</h2>
        <p>一心向北 红尘贪墨三十载 何惧沧桑磨砺爱 声明本真磨叽啥 一心向北 红尘贪墨三十载 何惧沧桑磨砺爱 声明本真磨叽啥</p>
      </div>
      <div class="j-section-list-bottom">
        <i>新历史馆</i>
        <span>1评论 • 1喜欢</span>
      </div>
    </div>
  </router-link>
</div>
</template>
<script type="text/javascript">
	import followDetails from './followDetails'
	export default{
		name:'friendWorld',
	    data() {
	      return{
	      }
	    },
	    components:{
	    }
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
 @import '../../../assets/styles/varibles.styl';
.j-section-friend
  padding-bottom:50px
  border-bottom: none
  .j-section-list
    height:180px
    padding:25px 20px
    border-bottom: 1px solid #eee
    &:last-child
      border-bottom: none
    img
      width:45px
      height:45px
      border-radius: 50%
    .j-section-list-header
      display: inline-block
      margin-top:5px
      p
        font-size: 15px
        margin-bottom:5px
        font-weight: bold
      span
		    color:#ABABAB
    .j-section-list-details
      margin:20px 0
      h2
		    color:#A8A8A8
      p
        color:#9E9E9E
        height:40px
        line-height: 18px
        margin: 20px 0
        display: -webkit-box
        -webkit-box-orient: vertical
        -webkit-line-clamp: 2
        overflow: hidden
    .j-section-list-bottom i
      color: #73ACC6
      font-style: normal
      span
        color:#9E9E9E
        float: right
</style>