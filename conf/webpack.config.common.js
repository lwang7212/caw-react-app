//const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader"
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "../css/[id].css"
            })
        ]
    }
};
let base = function () {
    let me = this;
    let _module = [];
    /**
     * 按回调函数设定包
     * @param fn
     * @returns {base}
     */
    me.addPack = function (fn) {
        let config = baseConf();
        fn.call(me, config);
        _module.push(config);
        return me;
    };
    /**
     * 安装默认约定添加模块
     * @param packName
     * @returns {*}
     */
    me.addDefault = function (packName) {
        let pack = baseConf();
        //项目根目录 __dirname 是相对于当前模块文件的路径
        let rootPath = path.resolve(__dirname, '../');
        console.log(`包[${packName}]projPath路径为${rootPath}`)
        pack.entry = {
            pageOne: `./src/${packName}/scripts/index.js`
        };
        pack.output = {
            filename: "index.js",
            path: path.resolve(rootPath, `dist/${packName}/scripts`),
        };
        console.log(`包[${packName}]output>>` + JSON.stringify(pack.output));

        pack.plugins.push(new HtmlWebPackPlugin({
            template: `./src/${packName}/index.html`,
            filename: "../index.html"
        }));
        //dev server 配置
        /* pack.devServer= {
              contentBase: `./dist/${packName}`
          },*/
        _module.push(pack);
        return me;
    };
    me.toPackage = function () {
        return _module;
    };
    return me;
};
module.exports = base();