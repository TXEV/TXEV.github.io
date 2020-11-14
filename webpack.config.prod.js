const path = require("path");
const terserWebpackPlugin = require("terser-webpack-plugin");
const optimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        main: "./src/index.ts",
    },
    optimization: {
        minimizer: [
            new terserWebpackPlugin(),
            new optimizeCssAssetsPlugin()
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: "./css/main.css"
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        })
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "docs")
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    "html-loader"
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    miniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.tsx?$/,
                use: [
                    "ts-loader"
                ]
            }
        ]
    }
}
