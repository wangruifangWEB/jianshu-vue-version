import Vue from 'vue';
import Vuex from 'vuex';
//import state from './state.js'; //在state.js中设置状态值tagMessage;
//import getters from './getters.js';//getters.js中返回了状态值，在vue文件中通过引入mapGetters使用this来调用此state的状态值；
//import mutations from './mutations.js';//在mutations.js中设置函数来为状态值的常量赋值，从而改变状态值，但是此时state的状态值还没有改变；
//import actions from './actions.js';//actions设置函数，使用commit来提交mutations中状态值的改变，但是此时state的状态值还是没有改变，需要通过$dispatch来分配actions；


//在constants.js中设置状态值的常量；
//可以在vue文件中通过this.$store.dispatch来分配actions，从而完成state的commit提交，进一步进行状态值state的改变。

Vue.use(Vuex);

export default new Vuex.Store({
  state : {
    modeStatus:false
  },
  actions: {
    changeMode (ctx,modeStatus) {
      ctx.commit('changeMode',modeStatus)
    }
  },
  mutations: {
    changeMode (state,modeStatus) {
      state.modeStatus = modeStatus
    }
  },
  getters : {},
  moudles : {}
})



 