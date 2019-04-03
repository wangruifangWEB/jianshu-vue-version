<template>
    <div class="recommend-box">
      <div  v-for="(parent,index) in data" :key="index">
        
         <div  v-for="(citem,cindex) in parent" :key="cindex" class="recommend-item" v-if="citem.picInfo.length >= 2 ">
            <a  target="_blank" :href="citem.link" >
            <p >{{ citem.title }}</p>
            <ul>
              <li v-for="(ccitem,ccindex) in citem.picInfo" :key="ccindex">
                <img :src="ccitem.url" alt="" />
              </li>
            </ul>
            <div class="recommend-bottom">
              <div class="recommend-bottom-lf">
                <span class="status"></em>{{citem.ptime}}</span>
                <i>{{ citem.source }}</i>
                <span><em class="iconfont icon-yanjing" style="font-size:18px;vertical-align:-2px"></em>{{citem.tcount}}</span>
                <span><em class="iconfont icon-xinxi" style="font-size:18px;vertical-align:-2px"></em>1</span>
                <!-- <span><em class="iconfont icon-shoucang-copy" style="font-size:18px;vertical-align:-2px"></em>{{citem.tcount}}</span> -->
              </div>
              <!--<span class="iconfont icon-guanbi recommend-bottom-rt" style="font-size:18px;vertical-align:-2px"
              @click="goDelete(index)"></span> -->
            </div>
          </a>
          </div>
   
      </div>
  </div>
</template>

<script>
  import Swiper from "../../../../node_modules/swiper";
  export default {
    name: "recommend",
    data() {
      return {
        data:{},
      };
    },
    mounted(){
      this.loadData();
    },
    methods: {
      goDelete(index) {
        console.log(index);
        // this.data.itemData.splice(index, 1);
      },
      loadData(){
        var that=this;
        this.$ajax.post('https://www.apiopen.top/journalismApi')
        .then(response => {
            if(response.data.code == 200 && response.data.msg == '成功!'){
              that.data = response.data.data 
              console.log(that.data)  
            }
          }
        )
        .catch(error => 
          console.log(error)
        )
      }
    },
    computed: {
      pages() {
        // 大于容器宽度如何显示
        const pages = [];
        this.dataArr.itemData.forEach((item, index) => {
          const page = Math.floor(index / 8);
          console.log(pages);
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(item);
        });
        return pages;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../assets/styles/varibles.styl';
  @import 'http://at.alicdn.com/t/font_989460_eb7ynwr5f6p.css';
  
  .recommend-box
    padding:57px 15px 45px 15px
    .recommend-item
      padding: 10px 0
      border-bottom: 1px solid #eee
      &:last-child
       border-bottom:none
      ul
        width: 100%
        display: flex
        overflow: hidden
        padding: 5px 0 15px 0
        li
          width: 33%
          margin: 5px
          background: #eee
          position: relative
          padding-bottom: 23.62%
        &:nth-child(2)
          margin: 3px 0 0 0
          img
           width:100%
           height:100%
           position:absolute
           top:0
           left:0
    p
      font-size: 14px
      line-height: 20px
      font-weight: bold 
      margin-left: 8px
      color:#222
    img
      width: 100%
      height: 100%
      border-radius: 6px
    .recommend-bottom
      display: flex
      justify-content: space-between
      padding: 0 8px 8px 8px
      img
        width: 18px
        height: 18px
        vertical-align: text-bottom
      i
        width: 100px
        text-overflow: ellipsis
        overflow: hidden
        white-space: nowrap
        display: inline-block
        font-style: normal
        text-align:center

      .recommend-bottom-lf .status
        color: #EA5D50
</style>
