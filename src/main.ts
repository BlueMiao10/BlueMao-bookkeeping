import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
//如果是目录，默认去找他的index，相当于import router from './router/index.js'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  //初始化组件，引入router
  router,
  store,
  render: h => h(App)
}).$mount('#app')
