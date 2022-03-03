const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'packages/boeplatHeader/src')
      }
    }
  },

  // 修改 src 目录 为 examples 目录
  pages: {
    index: {
      // page 的入口
      entry: 'examples/main.js',   // 把src 修改为examples
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  /* chainWebpack 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。 */
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();

    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 1024 * 1024 * 2 }));
      // .rule('js')
      // .include
      //   .add(__dirname + 'packages')  // 注意这里需要绝对路径，所有要拼接__dirname
      //   .end()
      // .use('babel')
      //   .loader('babel-loader')
      //   .tap(options => {
      //     // 修改它的选项...
      //     return options
      //   })
  },
  devServer: {
    overlay: {
      warning: false,
      errors: false
    },
    proxy: {
      '/api': { //此处要与 /services/api.js 中的 API_PROXY_PREFIX 值保持一致
        // target: process.env.VUE_APP_API_BASE_URL,
        target: 'http://dev.boeplat.com.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
}