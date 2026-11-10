const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  // main.js is the standard bundle; script.js keeps the reference in index.html working
  entry: {
    main: './src/script.js',
    script: './src/script.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
      inject: false,
    }),
  ],
  output: {
    filename: '[name].js',
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
