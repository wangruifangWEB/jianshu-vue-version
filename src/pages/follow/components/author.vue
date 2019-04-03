<template>
  <div>
       <div class="author">
          <img src="https://img.zcool.cn/community/0314a1c5959abe4a8012193a372f0ac.jpg@260w_195h_1c_1e_1o_100sh.jpg">
          <div class="author-right">
              <div>
                <h2>幸运</h2>
                <em><i></i>42篇文章</em>
              </div>
              <p>MUJI年度大赏：盘点17年最受欢迎的商品</p>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
      name: 'author',
      data () {
        return {
          
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../assets/styles/varibles.styl';
.author
  height:50px
  padding:10px
  border-bottom: 1px solid #eee
  div
    margin:8px 0
  img
    width:50px
    height:50px
    border-radius: 50%
  .author-right
    color:#C3C3C3
    display: inline-block
    h2
      color:#3a3a3a
      display: inline-table
    i
      width:10px
      height:10px
      display: inline-block
      border-radius: 50%
      background-color: #4D9DF3
      margin:0 5px
</style>
