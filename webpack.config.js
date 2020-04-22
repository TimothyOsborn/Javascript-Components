const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
<<<<<<< HEAD
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/styles.css',
    }),
  ],
  output: {
    filename: './js/main.js',
=======
  plugins: [new MiniCssExtractPlugin()],
  output: {
    filename: 'main.js',
>>>>>>> Added initial webpack config and testing
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
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
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        exclude: /\.module\.css$/,
>>>>>>> Added initial webpack config and testing
      },
      {
        test: /\.jpg$/,
        use: 'file-loader',
      },
    ],
  },
};
