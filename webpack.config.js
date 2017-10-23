const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/app/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
  entry: {
    app: './src/app/index.js',
    style: './src/scss/index.scss'
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  resolve: {
    modules: ['node_modules', 'src/app', 'src/scss'],
    extensions: ['.js', '.jsx', '.scss', '.css']
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        use: [{loader: 'babel-loader'}],
        exclude: '/node_modules/',
      },
      { 
        test: /\.jsx$/, 
        use: [{loader: 'babel-loader'}],
        exclude: '/node_modules/',
      },
      { 
        test: /\.scss$/, 
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader'},
            {loader: 'sass-loader'},
          ],
        })
      },
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin('styles.css')
  ]
}
