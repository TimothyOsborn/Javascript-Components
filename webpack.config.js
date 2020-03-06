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
        test: /\.ts$/,
        use: 'babel-loader',
        include: /^((?!\.test\.).)*\.ts$/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: /^((?!\.module).)*\.scss$/,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        include: /\.module\.scss$/,
      },
    ],
  },
};
