import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
//如果是目录，默认去找他的index，相当于import router from './router/index.js'
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';


Vue.config.productionTip = false;
Vue.component('Nav', Nav);
Vue.component('Layout',Layout);

new Vue({
  //初始化组件，引入router
  router,
  store,
  render: h => h(App)
}).$mount('#app');
