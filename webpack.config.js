const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Updated webpack to work with extracted css. TODO: Module specific CSS to be reconfigured correctly
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/styles.css',
    }),
  ],
<<<<<<< HEAD
  output: {
    filename: './js/main.js',
=======
  plugins: [new MiniCssExtractPlugin()],
  output: {
    filename: 'main.js',
>>>>>>> Added initial webpack config and testing
=======
  output: {
    filename: './js/main.js',
>>>>>>> Updated webpack to work with extracted css. TODO: Module specific CSS to be reconfigured correctly
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
        test: /\.js$/,
        use: 'babel-loader',
        include: /^((?!\.test\.).)*\.js$/,
      },
      {
>>>>>>> Updated webpack to work with extracted css. TODO: Module specific CSS to be reconfigured correctly
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: /^((?!\.module).)*\.css$/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
<<<<<<< HEAD
        exclude: /\.module\.css$/,
>>>>>>> Added initial webpack config and testing
=======
        include: /\.module\.css$/,
>>>>>>> Updated webpack to work with extracted css. TODO: Module specific CSS to be reconfigured correctly
      },
      {
        test: /\.jpg$/,
        use: 'file-loader',
      },
    ],
  },
};
