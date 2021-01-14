const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: "./src",
  output: {
    path: path.resolve(__dirname, "build/"),
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: { dataUrlCondition: { maxSize: 15000 } },
      },
    ],
  },

  resolve: {
    alias: {
      images: path.resolve(__dirname, './src/Assets/Images'),
      atoms: path.resolve(__dirname, './src/Components/Atoms'),
      molecules: path.resolve(__dirname, './src/Components/Molecules'),
      organisms: path.resolve(__dirname, './src/Components/Organisms'),
      pages: path.resolve(__dirname, './src/Components/Pages'),
      global: path.resolve(__dirname, './src/Components/global'),
    },
    extensions: ["*", ".js", ".jsx", '.scss', '.css'],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
