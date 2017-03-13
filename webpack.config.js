const webpack = require('webpack')
const path = require('path')
const WebpackBrowserPlugin = require('webpack-browser-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new WebpackBrowserPlugin({
      browser: 'Chrome',
      port: 8080,
      url: 'http://localhost'
    })
  ],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /(\.css|\.scss)$/, loaders: [ 'style-loader', 'css-loader?sourceMap', 'postcss-loader', 'sass-loader?sourceMap' ] },
      // { test: /\.svg$/, loaders: [
      //   { loader: 'babel-loader', query: { presets: ['es2015', 'react'] }},
      //   { loader: 'react-svg', query: { jsx: true } }
      // ]},
      { test: /\.svg$/, loader: 'svg-loader' },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]' }
      // { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
}
