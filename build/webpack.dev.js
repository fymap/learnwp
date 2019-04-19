const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    // clientLogLevel: 'warning',
    inline: true,
    compress: true
    // host: 'localhost',
    // port: 8080,
    // open: false,
    // overlay: { warning: false, errors: true },
    // publicPath: '/',
    // quiet: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
})
