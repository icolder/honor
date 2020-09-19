//jshint esversion:6
import axios from "axios"; //再具体使用该文件进行数据传递的时候，vue文件中就不需要再导入axios了
import auth from "./auth";
import router from "../routes"; //存放路由的路径文件

const BASE_URL = "http://127.0.0.1:8000";

class Http {
  constructor(){
    this.http = axios.create({
      baseURL: BASE_URL,
      timeout: 1000,
    });

    // 请求之前的拦截器，用来设置JWT
    this.http.interceptors.request.use(config => {
      const token = auth.token;
      if(token){
        config.headers.common.Authorization = "JWT " + token;
      }
      return config;
    });

    // 响应之后的拦截器
    this.http.interceptors.response.use(response => {
      return response;
    },err => {
      auth.clearUserToken();
      router.replace("/login"); //跳转到登录页面  此处使用的话需要先从routes.js中导入router
      return Promise.reject(err);
    });
  }

  // 在具体使用的时候先在这里定义函数，然后在具体的vue文件中调用该函数
  login(params){
    const url = "/cms/login";
    return this.http.post(url,params);  //post 请求
  }

  // 从服务器获取商家信息，安装后端写好的分页要求，返回具体某一页的内容
  getMerchants(page=1){
    const url = "/cms/merchant?page=" + page;
    return this.http.get(url);   //get 请求
  }
}

export default new Http();

// 在main.js中，
// import http from "http.js的存放路径";

// Vue.prototype.$http = http  // 把http定义为一个全局变量，后期想使用的时候直接用 "this.$http" 即可
