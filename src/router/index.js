import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import member from '../components/member.vue'
import shopcar from '../components/shopcar.vue'
import search from '../components/search.vue'
import newslist from '../components/news/newsList.vue'
import newsInfo from '../components/news/newsInfo.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect:'/home'},
    { path: '/home', component: home },
    { path: '/member', component: member },
    { path: '/shopcar', component: shopcar },
    { path: '/search', component: search },
    { path: '/home/newslist', component: newslist },
    { path: '/home/newsInfo/:id', component: newsInfo }
  ],
  linkActiveClass:'mui-active'
})
