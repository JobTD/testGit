import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/page/index'
import YueJu from '@/components/page/yueju'
import ZiXun from '@/components/page/zixun'
import My from '@/components/page/my'
import Focus from '@/components/view/focus'
import LittleVideo from '@/components/view/littlevideo'
import Recommend from '@/components/view/recommend'
import Article from '@/components/view/article'
import Video from '@/components/view/video'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },{
      path: '/yueju',
      component: YueJu
    },{
      path: '/zixun',
      component: ZiXun,
      children:[{
        path: 'focus',
        name:'focus',
        component: Focus
      },{
        path: 'recommend',
        component: Recommend
      },{
        path: 'article',
        component: Article
      },{
        path: 'video',
        component: Video
      },{
        path: 'littlevideo',
        component: LittleVideo
      },{
        path: '',
        redirect: 'focus'
      }]
    },{
      path: '/my',
      component: My
    },{
      path:'*',
      redirect:'/index'
    }
  ]
})
