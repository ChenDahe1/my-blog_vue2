import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';  // 引入 router
import './assets/style.css';  // 引入全局样式

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,  // 使用 router
  render: h => h(App),
}).$mount('#app');
