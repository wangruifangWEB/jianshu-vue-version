<template>
	<div class="indexDetails">
		<!-- 头部 -->
		<div class="indexDetails-return" :class="indexDetailsBottom == true ? 'isFixed' : '' ">
			<router-link to="/"><img src="../../../assets/images/return.png"></router-link>
			<div class="indexDetails-center" v-show="show">
				<img src="../../../assets/images/media.jpg">
				<span>夏风微凉1</span>
			</div>
			<img src="../../../assets/images/notification_more.png" class="indexDetails-return-rt">
		</div>
		<h1>一杯清茶，可否祭奠我们的友谊</h1>

		<!-- 发布内容详情 -->
		<div class="indexDetails-content">
			<div class="indexDetails-header">
				<img src="../../../assets/images/media.jpg">
				<span>夏风微凉1</span>
				<button>加关注</button>
			</div>
			<p class="indexDetails-time">2018-1-12 14:54•字数278•阅读9</p>
			<div class="indexDetails-contentDetails">
				<img src="../../../assets/images/banner/font.jpg">
				<div>
					<p>没有了你的消息，于是我孤独的沉默，沉默着叹息</p>
					<p>走过细细的日子，细数片片的回忆，行走在365天里，那些文字依然温暖相依</p>
					<p>走过细细的日子，细数片片的回忆，行走在365天里，邂逅在文字，走进了心里，有一种默契，铺陈在时光里</p>
					<p>没有了你的消息，于是我孤独的沉默，沉默着叹息,邂逅在文字，走进了心里，有一种默契，铺陈在时光里</p>
					<p>邂逅在文字，走进了心里，有一种默契，铺陈在时光里,没有了你的消息，于是我孤独的沉默，沉默着叹息</p>
					<p>邂逅在文字，走进了心里，有一种默契，铺陈在时光里,没有了你的消息，于是我孤独的沉默，沉默着叹息</p>
					<p>邂逅在文字，走进了心里，有一种默契，铺陈在时光里，细数片片的回忆，行走在365天里</p>
				</div>
				<img src="../../../assets/images/banner/bg.jpg">
				<a>图片发自瑞芳库</a>
				<i></i>
			</div>
		</div>

		<!-- 分享 -->
		<div class="indexDetails-share">
			<div class="indexDetails-share-lf">
				<img src="../../../assets/images/hot_icon_like_night.png">
				<span>3</span>
			</div>
			<div class="indexDetails-share-rt">
				<img src="../../../assets/images/ic_wechat_pay.png">
				<img src="../../../assets/images/ic_cb_weixin_checked.png">
				<img src="../../../assets/images/ic_more_action_overflow.png">
			</div>
		</div>
		<!-- 求关注 -->
		<div class="indexDetails-follow">
			<h2>小礼物走一走，来简书关注我</h2>
			<button>赞赏支持</button>
			<div class="indexDetails-author">
				<p class="indexDetails-authorHeader">关注作者，查看TA的更多好文章</p>
				<div class="indexDetails-authorDetails">
					<img src="../../../assets/images/media.jpg">
					<div>
						<h3>夏风微凉1</h3>
						<p>采花乐之味，泽鱼鸟之思</p>
					</div>
					<button>加关注</button>
				</div>
			</div>
		</div>
		<!-- 评论 -->
		<div class="indexDetails-talk">
			<div class="indexDetails-talkHeader">
				<span>评论1</span>
				<button>只看作者</button>
				<div>按点赞排序 <span><img src="../../../assets/images/zt_icon_open_night.png"></span></div>
			</div>
			<div class="indexDetails-talkContent">
				<div class="indexDetails-talkContent-item">
					<div class="indexDetails-talkContent-itemDetails">
						<img src="../../../assets/images/iron_cat.png" class="indexDetails-item-lf">
						<div class="indexDetails-item-center">
							<h3>沛儿威武</h3>
							<span>2楼•01.12 15:21</span>
						</div>
						<div class="indexDetails-item-rt">
							<img src="../../../assets/images/ic_review.png" class="indexDetails-item-rtInput">
							<img src="../../../assets/images/ic_vote.png">
						</div>
					</div>
					<p>有时间点个赞，举手之劳,人之所以美丽，是因为你会欣赏</p>
				</div>

				<div class="indexDetails-talkContent-item">
					<div class="indexDetails-talkContent-itemDetails">
						<img src="../../../assets/images/iron_cat.png" class="indexDetails-item-lf">
						<div class="indexDetails-item-center">
							<h3>沛儿威武</h3>
							<span>2楼•01.12 15:21</span>
						</div>
						<div class="indexDetails-item-rt">
							<img src="../../../assets/images/ic_review.png">
							<img src="../../../assets/images/ic_vote.png">
						</div>
					</div>
					<p>有时间点个赞，举手之劳,人之所以美丽，是因为你会欣赏</p>
				</div>
			</div>
		</div>
		<!-- 底部评论 -->
		<div class="indexDetails-talkInput">
			<input type="text" name="" placeholder="写下你的评论..." v-model="userIput">
		</div>
	</div>
</template>
<script type="text/javascript">
export default{
  data () {
    return {
    	indexDetailsBottom : false,
    	show : false
    }
  },

  components: {

  },
  methods:{
  	handleScroll(){
  		var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
 		if(scrollTop >= 40){
 			/*console.log(scrollTop);*/
 			this.indexDetailsBottom = true;
 			this.show = true;
 		}else{
 			this.show = false;
 			this.indexDetailsBottom = false;
 		}
  	}
  },
  mounted(){
  	window.addEventListener('scroll',this.handleScroll);
  }
}
</script>
<style type="text/css">
.indexDetails{
	width:100%;
  margin-top: 60px;
  background-color: #fff;
}
.indexDetails h1{
	margin:20px 0;
	padding:0 10px;
	line-height: 30px;
}
.indexDetails-return{
	width:100%;
	height:40px;
	line-height: 40px;
	padding:0 15px;
	box-sizing: border-box;
	position: fixed;
	z-index:100;
	top:0;
	background-color: #fff;
}
.isFixed{
	box-shadow:2px 0 5px rgba(0,0,0,.4);
}
.indexDetails-return img{
	width:20px;
	height:18px;
	vertical-align: sub;
}
.indexDetails-return 
.indexDetails-return-rt{
	width:auto;
	float:right;
	margin-top:10px;
}
.indexDetails-content 
.indexDetails-time{
	color:#B8B8B8;
}
.indexDetails-content{
	padding:0 20px;
}
.indexDetails-header{
	margin:8px 0;
}
.indexDetails-center{
	display: inline-block;
	margin-left:8px;
}
.indexDetails-center img{
	width:25px;
	height:25px;
	border-radius: 50%;
	vertical-align: middle;
}
.indexDetails-header img{
	width:40px;
	height:40px;
	border-radius: 50%;
	vertical-align: middle;
	margin-right:8px;
}
.indexDetails-header button{
	width:80px;
	height:30px;
	color:#fff;
	border:none;
	float: right;
	background-color: #49BC38;
	margin-top:3px;
}
.indexDetails-contentDetails{
	width:100%;
	text-align: center;
	margin-bottom: 30px;
}
.indexDetails-contentDetails img{
	width:330px;
	height:200px;
	margin:10px 0;
}
.indexDetails-contentDetails a{
	display: block;
	color:#b8b8b8;
	font-size: 18px;
	margin:18px 0;
}
.indexDetails-contentDetails i{
	display: block;
	width:160px;
	height:2px;
	margin:0 auto;
	background-color: #ddd;
}
.indexDetails-contentDetails div p{
	font-size: 16px;
	text-align: left;
	line-height: 26px;
	margin:12px 0;
	font-family: '微软雅黑'
}
/*分享*/
.indexDetails-share{
	height:50px;
	line-height: 50px;
	margin:30px 10px;
	border-bottom: 1px solid #ddd;
}
.indexDetails-share img{
	width:25px;
	vertical-align: middle;
}
.indexDetails-share span{
	font-size: 14px;
}
.indexDetails-share-rt{
	float: right;
	margin-left:20px;
}
.indexDetails-share-rt img{
	margin-left:15px;
}
.indexDetails-share-lf{
	display: inline-block;
}
/*求关注*/
.indexDetails-follow{
	margin-bottom: 30px;
	text-align: center;
}
.indexDetails-follow button{
	color:#fff;
	width:90px;
	height:30px;
	margin-top:20px;
	border-radius: 10px;
	background-color: #E76E55;
}
.indexDetails-author{
	height:120px;
	margin:20px 10px;
	border:1px solid #ddd;
}
.indexDetails-authorHeader{
	height:35px;
	line-height: 35px;
	margin:0 10px;
	text-align: left;
	border-bottom: 1px solid #ddd;
}
.indexDetails-authorDetails{
	margin-top:20px;
	padding: 0 10px;
}
.indexDetails-authorDetails h3{
	margin-bottom: 5px;
}
.indexDetails-authorDetails img{
	width:40px;
	height:40px;
	border-radius: 50%;
	float: left;
}
.indexDetails-authorDetails div{
	float:left;
	margin:4px 8px;
	text-align: left;
}
.indexDetails-authorDetails button{
	width:80px;
	float: left;
	margin-top: 6px;
	background-color: #48BC36;
}
/*评论*/
.indexDetails-talk{
	padding-bottom: 1.45rem;
}
.indexDetails-talkHeader{
	height:35px;
	line-height: 35px;
	background-color: #F3F3F3;
}
.indexDetails-talkHeader span{
	color:#CB958E;
	padding:0 10px;
}
.indexDetails-talkHeader div{
	float: right;
}
.indexDetails-talkHeader div img{
	width:10px;
	vertical-align: middle;
}
.indexDetails-talkHeader button{
	color:#aaa;
	width:80px;
	height:25px;
	border:1px solid #ddd;
	border-radius: 10px;
}
.indexDetails-talkContent-item{
	margin-top:20px;
	border-bottom: 1px solid #ddd;
}
.indexDetails-talkContent-item p{
	font-size: 16px;
	padding:0 10px;
	margin:10px 0;
	line-height: 23px;
}
.indexDetails-talkContent-itemDetails{
	display: -webkit-box;
}
.indexDetails-item-lf{
	width:45px;
	height:45px;
	border-radius: 50%;
}
.indexDetails-item-center{
	margin-top:4px;
	margin-left:5px;
}
.indexDetails-item-center h3{
	margin-bottom: 5px;
}
.indexDetails-item-rt{
	margin-left:100px;
	margin-top:4px;
}
.indexDetails-item-rt img{
	width:25px;
	margin-right: 20px;
}
.indexDetails-talkInput{
	width:100%;
	height:40px;
	line-height: 40px;
	position: relative;
	bottom:0;
	z-index:500;
	padding:0 10px;
	box-shadow:2px 0 5px rgba(0,0,0,.4);
}
.indexDetails-talkInput input{
	width:160px;
	height:25px;
	outline: none;
	padding:0 5px;
	border:1px solid #ddd;
	border-radius: 6px;
}
</style>