import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  //默认路径进入'/money'
  {
    path: '/',
    redirect: '/money'
  },
  //记账
  {
    path: '/money',
    component: Money,
  },
  //标签
  {
    path: '/labels',
    component: Labels,
  },
  //统计
  {
    path: '/statistics',
    component: Statistics
  },
  //404界面，当上边所有的路由走不通才会走通配符
  {
    path: '*',
    component: NotFound
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  routes
});

export default router;
