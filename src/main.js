import Vue from 'vue';
import App from './App.vue';
Vue.config.productionTip = false;
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
/**
 * 引入路由
 */
import router from './router/index'
/**
 * 组建注册
 */
import '@/components/index';
/**
 * 引入全局css样式
 */
import '@/assets/style/common.less'
/**
 * 引入公用方法
 */
import '@/libs/mixin';
new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
