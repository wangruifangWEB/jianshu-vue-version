<template>
  <div>
    <ul class="imgBox">
      <li v-for="(item,index) in imgs">
        <img :src="item.img" alt="" /> <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: "pictureTextList",
    // props: {
    // 	imgs: {
    // 		type: Array, // 类型按需求
    // 		required: true
    // 	}
    // },
    props: ["imgs"],
    data() {
      return {};
    },
    components: {},
    methods: {}
  };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../assets/styles/varibles.styl';
.imgBox 
  display: flex
  text-align: center
  padding: 20px 0
  li 
    width: 33.3%
    img 
      width: 28px
    span 
      display: block
      text-align: center
      margin-top: 8px

</style>
