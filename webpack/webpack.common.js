const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");

const production = process.env.NODE_ENV === "production";

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "..", "./dist"),
    filename: production
      ? "static/scripts/[name].[contenthash].js"
      : "static/scripts/[name].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.(png|jpg|gif|webp)$/,
        type: "asset/resource",
        generator: {
          filename: "static/images/[hash][ext][query]",
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource",
        generator: {
          filename: "static/fonts/[hash][ext][query]",
        },
      },
      {
        test: /\.svg$/i,
        type: "asset",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          production ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".json"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/pages/index.html"),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "static/styles/[name].[contenthash].css",
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development",
    }),
  ],
};
