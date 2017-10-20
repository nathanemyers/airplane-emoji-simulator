const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/app/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  resolve: {
    modules: ['node_modules', 'src/app', 'src/scss'],
    extensions: ['.js', '.jsx', '.scss', '.css']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/  },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/  },
      { test:    /\.scss?$/, loader: ExtractTextPlugin.extract('css!postcss!sass') },
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
