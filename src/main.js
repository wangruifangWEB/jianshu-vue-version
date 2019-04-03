// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import store from './store/store.js'
import './assets/common/common.css'
import animate from '../node_modules/animate.css'

Vue.use(animate)

Vue.config.productionTip = false

fastClick.attach(document.body)

Vue.prototype.$ajax=axios
Vue.prototype.$qs=qs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//加入sotre的配置
  template: '<App/>',
  components: { App },
  data : {
    eventHub: new Vue() // 使用集中的事件处理器,一劳永逸的在任何组件调用事件发射、接受的方法
  }
  
});

