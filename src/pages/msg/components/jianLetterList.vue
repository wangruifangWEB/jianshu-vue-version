<template>
	<div>
		<ul class="lists">
			<li v-for="(item,index) in lists">
				<img :src="item.hImg" alt="" class="hImg">
				<div>
					<p>
						<span>{{item.title}}</span>
						<img :src="item.icon" alt="">
						<i>{{item.dtime}}</i>
					</p>
					<p class="desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'pictureTextList',
		props: {
			lists: {
				type: Array, // 类型按需求
				required: true
			}
		},
		data() {
			return {
				// modeStatus: this.$store.state.modeStatus,
			}
		},

		components: {

		},
		methods: {

		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../assets/styles/varibles.styl';
.lists 
  padding-top:20px
  div 
    border-bottom: 1px solid #eee
    padding-bottom: 15px
    width: 85%
    float: right

    img 
      width: 18px
    i 
      float: right
      font-style: normal
    .desc 
      width: 100%
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
      margin-top: 8px
    span 
      font-size: 15px
      font-weight: bold
  li 
    overflow: hidden
    margin-bottom: 15px
  .hImg 
    width: 40px
    height: 40px
    border-radius: 50%
    margin-right: 8px
</style>