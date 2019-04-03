<template>
  <div id="app">
      <router-view></router-view>
      <footer-nav></footer-nav>
  </div>
</template>

<script>
  import FooterNav from '@/components/FooterNav'
  export default {
    name: 'app',
    data(){
      return{
      }
    },
    components: {
			FooterNav
		}
  }
</script>
<style>

</style>
