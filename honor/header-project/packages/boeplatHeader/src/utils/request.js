// 1、引入axios以及相关文件
import axios from 'axios'
import Base64 from 'base-64';
import Vue from 'vue';
// import { initRouter } from '@/router'
// import store from '@/store'
// var currentRouter = initRouter();
// 2、创建axios实例
let boeService = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 30000
})

// 3、axios的请求拦截--request
boeService.interceptors.request.use(config => {
  const token_type = localStorage.getItem('token_type');
  const token = localStorage.getItem('access_token');
  // 请求成功处理
  if (localStorage.getItem('token')) {//判断浏览器中的cookie中是否存在项目的token
    config.headers.token = localStorage.getItem('token')
  }
  let clientId = process.env.VUE_APP_CLIENTID;
  let clientSecret = process.env.VUE_APP_CLIENT_SECRET;
  let headerLogin = clientId + ':' + clientSecret;
  if (config.url.indexOf('oauth/token') > 0 || config.url.indexOf('getToken') > 0) {
    config.headers.Authorization = 'Basic ' + Base64.encode(headerLogin); // 增加客户端认证
  } else if (token_type && token) {
    config.headers.Authorization = token_type + ' ' + token;
  }
  //以下代码测试使用，打包删除
  console.log("tttttkkkkkkk",localStorage.getItem('token_type'),localStorage.getItem('access_token'));
  // config.headers.Authorization = 'bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55SWQiOiIxNDYwODczMzM0NjQzMzYzODQwIiwiY29kZSI6IjIwMDAwIiwidXNlcl9uYW1lIjoieGlvbmdtYW8xMjMiLCJzY29wZSI6WyJhbGwiXSwiZXhwIjoxNjQ0OTIxMzcwLCJ1c2VyTmFtZSI6Inhpb25nbWFvMTIzIiwidXNlcklkIjoiMTQ2MDg3Mjc0NTcxODgyOTA1NyIsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXSwianRpIjoiODc4NjQ5NmUtY2EyZi00YjVmLTgwZWItNDE2MjQzMzMyM2I4IiwiY2xpZW50X2lkIjoid2ViX2FwcCJ9.b0HnUHDEFT8AeKzM1AIuAu6HMRcNT_A6eLRWu9x-XZdZbsyiKRUcqN-ki93T05zn0urEE-CTDp7vXd7vaaWDF1DJGctBgt-9Un1fgXz60l4dQ98uhn-j4Aw-jEG_SmnyT6YFYFH9czGKXI6mxxtPxuvrRkx_AwL28HMv8WTWnWN-aNddmKYq0Q-Hg9HhVCfRk_bxZgx9k1clyx_rUlG_HcNqVD_Dknk7iU3E84OcDw0VFgZcxB1XwnwOJwCYvj42gLJHU6ElAAQgjxsUsglmdmRn1t9hUmINtMekxf6mCrJJWQYJWFOqMKpi7GTTLm4A8WyW6tKrmkcVm5f1vWEq8Q'
  return config;
}, err => {
  Promise.reject(err);// 请求错误处理
})

//4、axios的返回拦截--response
boeService.interceptors.response.use(response => Promise.resolve(response), err => {
  if (err && err.response && err.response.status) {
    switch (err.response.status) {
      case 401:
        if (process.env.NODE_ENV === "production") {
          localStorage.clear();
          window.location.href = process.env.VUE_APP_LOGIN_URL + 'client_id=' + process.env.VUE_APP_CLIENTID + '&response_type=' + process.env.VUE_APP_RESPONSE_TYPE + '&redirect_uri=' + process.env.VUE_APP_REDIRECT_URI;
        } else {
          localStorage.clear();
          setTimeout(() => {
            console.log("此处需要考虑跳转路由");
            // currentRouter.replace({
            //   path: '/login'
            // });
          }, 1000);
        }
        break;
      case 500:
        if (err.response.config.url.indexOf('check_token') > -1) {
          localStorage.clear();
          window.location.href = process.env.VUE_APP_LOGIN_URL + 'client_id=' + process.env.VUE_APP_CLIENTID + '&response_type=' + process.env.VUE_APP_RESPONSE_TYPE + '&redirect_uri=' + process.env.VUE_APP_REDIRECT_URI;
        } else {
          Vue.prototype.$message.warn(); ('请求方法：' + err.response.data.path + '失败，' + (err.response.data.msg || err.response.data.message) + '，请联系管理员')
          return
        }
        break;
      case 404:
        Vue.prototype.$message.warn('请求方法：' + err.response.data.path + '失败，' + (err.response.data.msg || err.response.data.message) + '，请联系管理员')
        break;
      case 400:
        Vue.prototype.$message.warn('请求方法：' + err.response.data.path + '失败，' + (err.response.data.msg || err.response.data.message) + '，请联系管理员')
        break;
    }
  }
  return Promise.reject(err);
})

//5、get请求的封装
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    boeService({
      url: boeService.defaults.baseURL + url,
      method: 'get',
      params: params
    }).then(res => {
      if (res.data.code != 20000) {
        // 20020  用于激活优惠券-不需要message提醒
        if (res.data.code != 20017 && res.data.code != 20020) {
          Vue.prototype.$message.warn(res.data.message)
        }
        reject(res.data);
      } else {
        resolve(res.data);
      }
    }).catch(err => {
      // 只做状态码为200的报错提示
      if (err.response.status == 200) {
        Vue.prototype.$message.warn(err.response.data.msg || err.response.data.message)
        // 返回回调，方便后续各种操作
        reject(err);
      } else if (err.response.status != 200) {
        reject(err);
      }
    })
  })
}

//6、post请求封装  默认json格式:'Content-Type':'application/json',如果是文件上传，可以修改headers为 headers: { 'Content-Type': 'multipart/form-data' }
export function post(url, params = {}, headers = { 'Content-Type': 'application/json' }) {
  return new Promise((resolve, reject) => {
    boeService({
      url: boeService.defaults.baseURL + url,
      method: 'post',
      data: params,
      headers: headers
    }).then(res => {
      if (res.data.code != 20000) {
        // 20020  用于激活优惠券-不需要message提醒
        if (res.data.code != 20020) {
          Vue.prototype.$message.warn(res.data.message)
        }
        reject(res.data);
      } else {
        resolve(res.data);
      }
    }).catch(err => {
      // 只做状态码为200的报错提示
      if (err.response.status == 200) {
        Vue.prototype.$message.warn(err.response.data.msg || err.response.data.message)
        // 返回回调，方便后续各种操作
        reject(err);
      } else if (err.response.status != 200) {
        reject(err);
      }
    })
  })
}

//7、baseURL 供图片预览使用
export const baseUrlUseForImg = boeService.defaults.baseURL

//8、将模块暴露
export default {
  get,
  post,
  baseUrlUseForImg
}
