/**
 * 支持多模块配置，
 * 默认模块定义如下
 * src/{模块名}
 *      /index.jsx
 *      /css
 *      index.html
 *      文件夹及文件名命名规范
 *         静态文件存放目录：所有文件及文件夹命名均为小写
 *         页面存放目录：文件夹命名均首字母大写
 *         公用组件及辅助类：所有文件及文件夹命名均为小写
 * @type {module:path}
 */
const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const baseConf = function () {
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
                    test: /\.html$/
                },
                {
                    test: /\.less$/,
                    use: [

                        'style-loader', "css-loader",
                        {
                            loader: 'less-loader', // compiles Less to CSS
                            options: {
                                modules: true,
                                javascriptEnabled: true
                            }
                        }]

                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                //保证import  style from css ,对类重新命名，防止css污染
                                modules: true
                            }
                        }
                    ],
                },
                {
                    test: /\.svg$/,
                    loader: 'raw-loader'
                }
            ]
        },
        plugins: [
            // CopyWebpackPlugin
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "../css/[id].css"
            })
        ],
    }
};
let MuliPackConfig = function () {
    let me = this;
    let _module = [];
    let _mainfest = [];
    /**
     * 添加模块清单json
     * @param pack
     * @private
     */
    let _addMainfest = function (pack) {
        if (pack.entry.main !== undefined) {
            return;
        }
        pack.plugins.filter(item => !(item.options.title === undefined))
            .forEach(item => {
                _mainfest.push({
                    title: item.options.title,
                    url: item.options.template.replace(/.\/src\//g, ""),
                });
            });
    };
    /**
     * 按回调函数设定包
     * @param fn
     * @returns {base}
     */
    me.addPack = function (fn) {
        let config = baseConf();
        fn.call(me, config);
        _module.push(config);
        _addMainfest.call(this, config);
        return me;
    };

    /**
     * 安装默认约定添加模块
     * @param packName
     * @returns {*}
     */
    me.addDefault = function (packName, p_title = "Webpack App") {
        let pack = baseConf();
        //项目根目录 __dirname 是相对于当前模块文件的路径
        let rootPath = path.resolve(__dirname, '../');
        console.log(`包[${packName}]projPath路径为${rootPath}`);
        pack.entry = {};
        pack.entry[packName] = `./src/${packName}/index.jsx`;
        pack.output = {
            filename: "index.js",
            path: path.resolve(rootPath, `dist/${packName}`),
        };
        console.log(`包[${packName}]output>>` + JSON.stringify(pack.output));

        pack.plugins.push(new HtmlWebPackPlugin({
            template: `./src/${packName}/index.html`,
            filename: "index.html",
            title: p_title,
            inject: true,
        }));
        _module.push(pack);
        _addMainfest.call(this, pack);
        return me;
    };
    me.forEach = function (fn) {
        _module.forEach(fn);
        return me;
    },
        me.toPackage = function (flag = false) {
            //写出清单文件
            if (flag) {
                console.log(JSON.stringify(_mainfest));
                let _dir = path.resolve(__dirname, "../dist/assets");
                console.log(_dir);
                if (!fs.existsSync(_dir)) {
                    fs.mkdirSync(_dir, {recursive: true});
                }
                let _fileName = _dir + "/mainfest.json";
                let _json = JSON.stringify(_mainfest, null, 2);
                fs.writeFile(_fileName, _json, (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("模块清单保存成功！" + _fileName);

                        }
                    }
                );
            }
            return _module;
        };
    return me;
};
module.exports = MuliPackConfig();
