const MultiPackConfig = require("./conf/MultiPackConfig");
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const packs = MultiPackConfig
    .addDefault("Navigation", "导航栏测试")
    .addDefault("StateShareTest", "状态提升测试")
    .addDefault("RefTest", "RefTest测试")
    .addDefault("contextTest", "contextTest测试")
    .addDefault("todolist", "react-redux样例测试")
    .addDefault("redux-sample", "redux样例测试")
    .addDefault("react-suber", "react-suber样例测试")
    .addDefault("AppFrameWork", "Application框架测试")
    .addDefault("helloD3", "d3js测试")
    .addDefault("pageLayout", "react布局测试")
    .addDefault("styled-components-demo", "样式组件demo")
    .addDefault("antd","ant desiner测试")
    .addPack(pack => {
        pack.entry.main = `./src/assets/index.jsx`;
        pack.output = {
            filename: "index.js",
            path: path.resolve(__dirname, "./dist/assets"),
        };
        pack.plugins.push(new HtmlWebPackPlugin({
            template: `./src/index.html`,
            filename: "../index.html",
            title: "欢迎使用webpack-react-demo",
        }));
    })
    .forEach(pack => {
        //提供路径别名映射
        pack.resolve = {
            extensions: [
                '.webpack-loader.js',
                '.web-loader.js',
                '.loader.js',
                '.js',
                '.jsx',
                '.css',
                '.coffee'
            ],
            alias: {
                Utilities: path.resolve(__dirname, 'src/shared/utilities/'),
                Components: path.resolve(__dirname, 'src/shared/components/'),
                Modules: path.resolve(__dirname, 'src/shared/modules/'),
                Service : path.resolve(__dirname, 'src/shared/services/'),
                icons: path.resolve(__dirname, 'src/assets/icons'),
                styles: path.resolve(__dirname, 'src/shared/styles'),
                "css-style": path.resolve(__dirname, 'src/assets/css')
            }
        }
    }).toPackage(true);
module.exports = packs;
/*module.exports = function(webpackConfig) {
    webpackConfig.babel.plugins.push('transform-runtime');
    webpackConfig.babel.plugins.push(['import', {
        libraryName: 'antd',
        style: 'css',
    }]);

    return webpackConfig;
};*/
