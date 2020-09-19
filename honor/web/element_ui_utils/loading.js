//jshint esversion:6
import { Loading } from "element-ui";

class MLoading{
  show(text=null){
    this.loading = Loading.service({
      fullscreen:true,
      text: text?text:"正在加载中...",
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });
  }

  hide(){
    if(this.loading){
      this.loading.close();
    }
  }
}

export default new MLoading();

// 在main.js中，
// import loading from "loading.js的存放路径";

// Vue.prototype.$loading = loading  // 把http定义为一个全局变量，后期想使用的时候直接用 "this.$loading" 即可
