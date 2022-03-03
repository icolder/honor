// 导入组件，组件必须声明 name
import BoeMenu from "./src/boe-menu.vue"

// 为组件提供 install 安装方法，供按需引入
BoeMenu.install = function (Vue) {
  Vue.component(BoeMenu.name, BoeMenu)
}

// 默认导出组件
export default BoeMenu