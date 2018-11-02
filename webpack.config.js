const MultiPackConfig = require("./conf/MultiPackConfig");
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const packs = MultiPackConfig.addDefault("componentTest", "组件测试")
    .addDefault("pageOne", "多页面测试一")
    .addDefault("pageTwo", "多页面测试二")
    .addDefault("pageThree", "多页面测试三")
    .addDefault("helloD3", "d3js测试")
    .addDefault("pageLayout","react布局测试")
    .addDefault("styled-components-demo","样式组件demo")
    .addPack(pack => {
        pack.entry.main = `./src/assets/index.jsx`;
        pack.output = {
            filename: "index.js",
            path: path.resolve(__dirname, "./dist/assets/scripts"),
        };
        pack.plugins.push(new HtmlWebPackPlugin({
            template: `./src/index.html`,
            filename: "../../index.html",
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
                icons: path.resolve(__dirname, 'src/assets/icons'),
                "css-style": path.resolve(__dirname, 'src/assets/css')
            }
        }
    }) .toPackage(true);
module.exports = packs;