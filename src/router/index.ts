import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import EditLabel from '@/views/addLabel.vue';
import FrontPage from '@/views/FrontPage.vue';
import charts from '@/views/charts.vue';
// import FrontPage from '@/views/FrontPage.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/frontpage'
  },
  //首页
  {
    path: '/frontpage',
    component: FrontPage
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
  //图标
  {
    path: '/charts',
    component: charts
  },
  {
    path: '/labels/edit',
    component: EditLabel
  },
  //404界面，当上边所有的路由走不通才会走通配符
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
