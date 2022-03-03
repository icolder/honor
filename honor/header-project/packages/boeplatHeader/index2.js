// 导入组件，组件必须声明 name
import BoeAvatar from "./src/boe-avatar.vue"

// 为组件提供 install 安装方法，供按需引入
BoeAvatar.install = function (Vue) {
  Vue.component(BoeAvatar.name, BoeAvatar)
}

// 默认导出组件
export default BoeAvatar