import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'



Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(dataV)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
