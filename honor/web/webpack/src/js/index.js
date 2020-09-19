//jshint esversion:6
import "../css/index.css";
import "../css/love.scss";
import '../css/style.less';
import print from "./print";
console.log("hello world");


if(module.hot){
  module.hot.accept('./print.js',function(){
    print("he");
  });
}