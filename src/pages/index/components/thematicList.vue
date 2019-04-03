<template>
  <div :class="['thematicList',{'blackBg':modeStatus}]">
    <ul>
      <li v-for="(item,index) in thematicLists">
        <img :src="item.img">
        <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'thematicList',
  props: {
    thematicLists: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      modeStatus: this.$store.state.modeStatus,
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../assets/styles/varibles.styl';
.thematicList 
  padding: 60px 15px 15px 10px
  ul 
    text-align: center
    column-count: 5
    column-gap: 0
    li 
      margin-bottom: 10px
    span 
      display: inline-block
      margin-top: 8px
    img 
      width: 40px
      border-radius: 8px
</style>