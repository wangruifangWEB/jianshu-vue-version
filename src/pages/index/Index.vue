<template>
  <div :class="[{'blackBg':modeStatus }]">
    <nav-component></nav-component>
    <index-swiper></index-swiper>
  </div>
</template>
<script type="text/javascript">
  import indexSwiper from "./components/indexSwiper";
  import NavComponent from "./components/NavComponent";
  export default {
    data() {
      return {
        modeStatus: this.$store.state.modeStatus,
      };
    },
    method(){
    },
    components: {
      NavComponent,
      indexSwiper
    },
  }

</script>
<style>
</style>
