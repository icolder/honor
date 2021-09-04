//npm i craco-less @craco/craco babel-plugin-import @babel/plugin-proposal-decorators -D
// npm i @craco/craco -g
// App.less文件去掉import 'antd/dist/antd.less';
// package.json文件中将启动项配置修改为以下代码,后期使用craco start命令启动项目
// "start": "craco start",
// "build": "craco build",
// "test": "craco test",

const CracoLessPlugin = require('craco-less');

module.exports = {
  babel:{
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],  //用来支持装饰器
      [   
        "import", 
        {
          "libraryName": "antd",
          "libraryDirectory": "es",
          "style": true //设置为true即是less
        }
      ]
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' }, //配置主题色
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  devServer: {
    proxy: {
      "/api": {
        target: "http://baidu.com",  
        //target: 'http://192.168.9.19:8080',
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};