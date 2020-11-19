const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  devServer: {
    historyApiFallback: true,
    port: 3002
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./styles/[name].css",
    }),
    new HtmlWebpackPlugin({
      title: "React Base Template",
      template: path.resolve(__dirname, "./src/index.html"),
      favicon: "./src/favicon.ico",
    }),
  ],
};
