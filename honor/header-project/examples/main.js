import Vue from 'vue'
import App from './App.vue'
// 测试导入组件库
import BoeplatHeader from './../packages/index'
// 测试注册组件库
Vue.use(BoeplatHeader)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
