const path = require("path");
const config = require("./webpack.config")
const { merge } = require("webpack-merge")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(config, {
    mode: "production",
    output: {
        filename: "[name].[fullhash].bundle.js",
        path: path.resolve(__dirname, "public")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/,
              },
            {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets',
                },
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
      },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[fullhash].css"
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            `...`,
            new CssMinimizerPlugin()
        ],
        splitChunks: {
            chunks: 'all',
        },
    },
})