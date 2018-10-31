const util = require("./conf/webpack.config.common");
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = util.addDefault("componentTest","组件测试")
    .addDefault("pageOne","多页面测试一")
    .addDefault("pageTwo","多页面测试二")
    .addDefault("pageThree","多页面测试三")
    .addDefault("helloD3","d3js测试")
    .addPack(pack=>{
        pack.entry.main = `./src/assets/index.js`;
        pack.output = {
            filename: "index.js",
            path: path.resolve(__dirname, "./dist/assets/scripts"),
        };
        pack.plugins.push(new HtmlWebPackPlugin({
            template: `./src/index.html`,
            filename: "../../index.html",
            title:"欢迎使用webpack-react-demo",
        }));
    })
    .toPackage(true);