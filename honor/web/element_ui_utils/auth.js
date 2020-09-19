//jshint esversion:6
const USER_KEY = "USER_KEY";
const TOKEN_KEY = "JWT_TOKEN_KEY";

class Auth{
  constructor(){
    this.user = null;
    this.token = null;
    this.token = localStorage.getItem(TOKEN_KEY);
    this.userJson = localStorage.getItem(USER_KEY);
    if(userJson){
      this.user = JSON.parse(userJson);
    }
  }

  static getInstance(){
    if(!this._instance){
      this._instance = new Auth();
    }
    return this._instance;
  }

  setUserToken(user,token){
    this.user = user;
    this.token = token;
    localStorage.setItem(USER_KEY,JSON.stringify(user));
    localStorage.setItem(TOKEN_KEY,JSON.token);
  }

  clearUserToken(){
    this.user = null;
    this.token = null;
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(TOKEN_KEY);
  }

  get is_authed(){
    if(this.user && this.token){
      return true;
    } else {
      return false;
    }
  }
}

export default Auth.getInstance();


// //在main.js中，
// import auth from "auth.js的存放路径";

// Vue.prototype.$auth = auth; // 把auth定义为一个全局变量，后期想使用的时候直接用 "this.$auth" 即可

// // 以下为在vue文件中使用时候的代码格式：
// const token = this.$auth.token;
// axios.get("http:127.0.0.1:8000/cms/url",{
//   params: {

//   },
//   headers: {
//     Authorization:'JWT' + token
//   }
// }).then((result) => {
//   console.log(result);
  
// }).catch((err) => {
//   console.log(err);

// });