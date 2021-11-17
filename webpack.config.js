const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPLugin = require("css-minimizer-webpack-plugin");
const Webpack = require("webpack");

module.exports = {
  entry: "./app/src/js/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "app/dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerWebpackPLugin(), "..."],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/src/index.html",
      filename: "index.html",
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new Webpack.optimize.ModuleConcatenationPlugin(),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000,
  },
};
