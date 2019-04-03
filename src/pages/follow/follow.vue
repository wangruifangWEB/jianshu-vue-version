<template>
  <div  :class="[{'blackBg':modeStatus }]">
    <nav-follow></nav-follow>
    <follow-swiper></follow-swiper>
  </div>
</template>
<script type="text/javascript">
  import navFollow from "./components/navFollow";
  import followSwiper from "./components/followSwiper";
  export default {
    name: "follow",
    data() {
      return {
        modeStatus: this.$store.state.modeStatus,
      };
    },
    components: {
      navFollow,
      followSwiper
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped></style>
