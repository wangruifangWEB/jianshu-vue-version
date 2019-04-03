import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
routes : [
{
path: '/',
name: 'index',
component: () => import('@/pages/index/Index')
},
{
path: '/follow',
name: 'follow',
component: () => import('@/pages/follow/follow') 
},
{
path: '/msg',
name: 'msg',
component: () => import('@/pages/msg/Msg') 
},
{
path: '/mine',
name: 'mine',
component: () => import('@/pages/mine/Mine') 
},
{
path: '/search',
name: 'search',
component: () => import('@/components/search') 
},
{
path: '/VueScan',
name: 'VueScan',
component: () => import('@/components/VueScan') 
},
{
path: '/search',
name: 'search',
component: () => import('@/components/search') 
},
{
path: '/RecommendAttention',
name: 'RecommendAttention',
component: () => import('@/pages/index/components/RecommendAttention') 
},
{
path: '/followDetails',
name: 'followDetails',
component: () => import('@/pages/follow/components/followDetails') 
}
],

scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})