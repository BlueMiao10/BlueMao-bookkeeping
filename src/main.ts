import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
//如果是目录，默认去找他的index，相当于import router from './router/index.js'
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagListModel from '@/models/tagListModel';
import labelListModel from '@/models/labelListModel';
import recordListModel from '@/models/recordListModel';


Vue.config.productionTip = false;
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

//recordStore
window.recordList = recordListModel.fetch();
window.createRecord = (record: RecordItem) => recordListModel.create(record);
//tagStore
window.tagList = tagListModel.fetch();
window.createTag = (name: string, value: string) => {
  if (labelListModel.fetch() > 8) {
    tagListModel.create(name, value, 0);
  } else {
    tagListModel.create(name, value, 1);
  }
};
window.removeTag = (id: string) => {
  tagListModel.destroy(id);
};

new Vue({
  //初始化组件，引入router
  router,
  store,
  render: h => h(App)
}).$mount('#app');
