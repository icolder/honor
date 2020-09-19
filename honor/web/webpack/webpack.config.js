//jshint esversion:6
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

// process.env.NODE_ENV = 'development';

module.exports = {
  entry: {
    index: ["./src/js/index.js","./index.html"]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "js/index.[contenthash:10].js"
  },
  module: {
    rules: [
      {
        oneOf:[
          {
            test: /\.(css|scss)$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: "../"
                }
              },
              {
                loader: 'css-loader'
              },
              {
                loader: "postcss-loader",
                options: {
                  ident: "postcss",
                  plugins: () => [
                    require('postcss-preset-env')()
                  ]
                }
              },
              {
                loader: 'sass-loader'
              }
            ]
          },
          {
            test: /\.less$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: "../"
                }
              },
              {
                loader: 'css-loader'
              },
              {
                loader: "postcss-loader",
                options: {
                  ident: "postcss",
                  plugins: () => [
                    require('postcss-preset-env')()
                  ]
                }
              },
              {
                loader: 'less-loader'
              }
            ]
          },
          {
            test: /\.(jpg|png|gif|jpeg)$/,
            loader: 'url-loader',
            options: {
              limit: 20 * 1024,
              esModule: false,
              name: '[hash:10].[ext]',
              outputPath: 'img'
            }
          },
          {
            test: /\.html$/,
            loader: 'html-loader'
          },
          {
            exclude: /\.(html|js|css|scss|less|jpg|jpeg|png|gif)$/,
            loader: "file-loader",
            options: {
              name: '[hash:10].[ext]',
              outputPath: 'media'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      minify:{
        collapseWhitespace:true,
        removeComments:true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "css/index.[contenthash:10].css"
    }),
    new OptimizeCssAssetsWebpackPlugin()
  ],
  optimization:{
    splitChunks:{
      chunks:'all'
    },
    runtimeChunk:{
      name:entrypoint => `runtime-${entrypoint.name}`
    }
  },
  mode: 'development',
  // mode: 'production',

  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    port: 8080,
    open: true,
    hot: true,
    proxy:{
      'api':{
        target:"http:127.0.0.1:8000",
        pathRewrite:{
          "^/api":''
        }
      }
    }
  },
  devtool:'source-map'
};