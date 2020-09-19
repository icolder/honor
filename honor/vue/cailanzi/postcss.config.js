module.exports = {
  plugins: {
    'autoprefixer': {
      overrideBrowserslist: ['last 5 version','Android >= 4.0', 'iOS >= 8']
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
      selectorBlackList: ["van-*"]
    }
  }
};
//该文件是自己新建的，配合'postcss-pxtorem'和'lib-flexible'共同使用，并且要在main.js中用'import "lib-flexible"'导入该下载。一般创建项目时候没有。以上的代码用途也可以在package.json的文件中使用以下方式
// 以下代码写在package.json文件跟"browserslist"（"dependencies"）这些同级目录下即可。
  // "postcss":{
  //   "plugins": {
  //     "autoprefixer": {},
  //     "postcss-pxtorem": {
  //       "rootValue": 37.5,
  //       "propList": ["*"],
  //       "selectorBlackList": ["van-*"]
  //     }
  //   }
  // }