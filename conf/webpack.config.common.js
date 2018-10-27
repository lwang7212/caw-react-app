const path = require('path');
const _ = require('lodash');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const   baseConf = function () {
    return {
        entry: {},
        module: {
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
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            })
        ]
    }
};
const  baseModelOption = function () {
    return {
        srcDir: "./src/",
        jsFileName: "index.js",
        htmlFile: "index.html",
        targetDir: "./dist/"
    }
};
const webpackUtil = {
    basePath:__dirname,
    addPack: function ( modeKey,modelOption) {

        let opt = Object.assign( baseModelOption(),modelOption);
        let config =Object.assign({},baseConf());
       // console.log(JSON.stringify(config));
        config.entry[modeKey]= `./${opt.srcDir}/${opt.jsFileName}`;
        config.output = {
             filename: `${opt.jsFileName}`,
             path: path.resolve(webpackUtil.basePath, opt.targetDir) ,
        };
        config.plugins.push(new HtmlWebPackPlugin({
            template: `./${opt.srcDir}/${opt.htmlFile}`,
            filename: `./${opt.htmlFile}`,
        }));
        console.log(JSON.stringify(config));
        return config;

    }
};
module.exports = {configUtil: webpackUtil};