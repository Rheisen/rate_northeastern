const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/client/base/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './app/client/base/index.js',
  plugins: [
    new CleanWebpackPlugin([path.resolve('./dist')], {root: process.cwd()}),
    HtmlWebpackPluginConfig
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist')
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      { test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      { test:  /\.(png|jpg|gif|pdf)$/, loader: "file-loader?name=./static/[hash].[ext]", exclude: /node_modules/ }
    ]
  }
};