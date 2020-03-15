const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/styles.css',
    }),
  ],
  output: {
    filename: './js/main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: /^((?!\.test\.).)*\.js$/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: /^((?!\.module).)*\.css$/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        include: /\.module\.css$/,
      },
      {
        test: /\.jpg$/,
        use: 'file-loader',
      },
    ],
  },
};
