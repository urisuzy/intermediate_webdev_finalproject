const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/script.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
      inject: false,
    }),
  ],
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    libraryTarget: 'window',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        type: 'asset/resource',
        generator: { filename: 'style.css' },
      },
    ],
  },
};
