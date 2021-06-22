var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
  entry:"./src/main.js",
  output:{
    path:path.join(__dirname,"dist"),
    filename:"bb.js"
  },
  mode:"development",
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          {
            loader:MiniCssExtractPlugin.loader,
          },"css-loader"]
      },
      {
        test:/\.js$/,
        exclude:/(mode_modules)/,
        use:{
          loader:['babel-loader'],
          options:{
            presets:["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:"./public/index.html"
    }),
    new MiniCssExtractPlugin({
      filename:"css/index.css"
    }),
    new CleanWebpackPlugin()
  ],
  optimization:{
    splitChunks:{
      chunks:"all"
    }
  }
}