import Vue from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import BoeplatHeader from './boeplatHeader';
import BoeAvatar from "./boeplatHeader/index2"
import BoeMenu from "./boeplatHeader/index3"

// 存储组件列表
const components = [
  BoeplatHeader,
  BoeAvatar,
  BoeMenu
]
Vue.use(Antd);
/* 
  定义install 方法，接收Vue作为参数，如果使用use注册插件，则所有的组件都将被注册
*/
const install = function (Vue) {
  // 判断是否安装
  if(install.installed){return}
  // 遍历所有组件
  components.map(item => {
    Vue.component(item.name,item)
  })
}

// 判断是否引入文件
if(typeof window !== 'undefined' && window.Vue){
  install(window.Vue)
}
export default{
  install,
  BoeplatHeader,
  BoeAvatar,
  BoeMenu
}