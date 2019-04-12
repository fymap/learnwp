const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var useCssSourceMap = !(process.env.NODE_ENV === 'development');
console.log('process.env.NODE_ENV: ' + process.env.NODE_ENV);
console.log('useCssSourceMap: ' + useCssSourceMap);
module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(s)?css$/,
        use: [{
          loader: 'style-loader',
          options: {
            sourceMap: useCssSourceMap
          }
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: useCssSourceMap
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: useCssSourceMap
          }
        }]
      },
      {
        test: /\.(png|svg|jpe?g|gif)(\?.*)?$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'wp'
    })
  ]
}
