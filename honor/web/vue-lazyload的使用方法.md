vue中vue-lazyload的使用方法：
1. npm install vue-lazyload --save-dev

2. 在vue项目主入口文件“main.js”中，写如下代码
```main.js文件
import Vue from 'vue';
import lazyload from 'vue-lazyload'; //此处的lazyload严格来说要使用"VueLazyload"

Vue.use(lazyload,{
  preLoad: 1.3, //提前加载高度（数字 1 表示 1 屏的高度），默认为1.3
  error: './assets/ab1.jpg', //当图片加载失败时显示的图片,该图片放在assets文件夹下的时候，可以直接使用相对路径（error: './assets/ab1.jpg'）的方式，但是如果图片放在其他（如static）文件夹下是，要使用require的方式写入（error: "require('./assets/ab1.jpg')"）。
  loading: './assets/ab1.jpg', //图片加载状态下显示的图片,不同路径下加载使用方式同上。
  attempt: 1  //加载错误后最大尝试次数
});
```

3. 在要使用懒加载的vue文件中，把img标签中原来的src属性替换成v-lazy=''即可。
  ```*.vue文件
<template>
     <ul>
      <li v-for="img in imgs" :key="img.src" >
        <img v-lazy='img.src' alt=""> //把img标签中原来的src属性替换成v-lazy=''即可
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name:",
  data() {
    return {
      imgs:[
        {src:'文件路径'},
        {src:'文件路径'},
      ]
    }
  },
  </script>
  ```