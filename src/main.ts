import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
//如果是目录，默认去找他的index，相当于import router from './router/index.js'
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/element-variables.scss'

Vue.config.productionTip = false;
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);
Vue.use(ElementUI);

new Vue({
  //初始化组件，引入router
  router,
  store,
  render: h => h(App)
}).$mount('#app');
