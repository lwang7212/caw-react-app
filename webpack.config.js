const path = require('path');
//const _ = require('lodash');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const _const_module = {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: "html-loader",
                    options: {minimize: true}
                }
            ]
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        }
    ]
};
module.exports = [
    {
        // 入口文件
        entry: {
            pageOne: './src/pageOne/pageOne.js',
        },
        output: {
            filename: 'script/[name].js',
            path: path.resolve(__dirname, 'dist'),
        },
        module: _const_module,
        plugins: [

            new HtmlWebPackPlugin({
                files: {
                    js: ["script/pageOne.js"]
                },
                template: "./src/pageOne/pageOne.html",
                filename: "./pageOne/pageOne.html"
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            })
        ]
    },
    {
        // 入口文件
        entry: {

            pageTwo: './src/pageTwo/pageTwo.js'

        },
        output: {
            filename: 'script/[name].js',
            path: path.resolve(__dirname, 'dist'),
        },
        module: _const_module,
        plugins: [

            new HtmlWebPackPlugin({
                files: {
                    js: ["script/pageTwo.js"]
                },
                template: "./src/pageTwo/pageTwo.html",
                filename: "./pageTwo/pageTwo.html"
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            })
        ]
    },
    {
        // 入口文件
        entry: {
            pageThree: './src/pageThree/pageThree.js'
        },
        output: {
            filename: 'script/[name].js',
            path: path.resolve(__dirname, 'dist'),
        },
        module: _const_module,
        plugins: [
            new HtmlWebPackPlugin({
                files: {
                    js: ["script/pageThree.js"]
                },
                template: "./src/pageThree/pageThree.html",
                filename: "./pageThree/pageThree.html"
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            })
        ]
    }
    ];