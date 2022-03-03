// 导入组件，组件必须声明 name
import BoeplatHeader from "./src/boeplat-header.vue";

// 为组件提供 install 安装方法，供按需引入
BoeplatHeader.install = function (Vue) {
  Vue.component(BoeplatHeader.name, BoeplatHeader)
}

// 默认导出组件
export default BoeplatHeader