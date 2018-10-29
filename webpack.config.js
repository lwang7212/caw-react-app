const path = require('path');
const util = require("./conf/webpack.config.common");
const HtmlWebPackPlugin = require("html-webpack-plugin");
/*module.exports = util.addPack((cfg) => {
    console.log("model onter"+__dirname);
    cfg.entry={
        pageOne:"./src/pageOne/scripts/pageOne.js"
    };
    cfg.output={
        filename: "pageOne.js",
        path: path.resolve(__dirname, "dist/pageOne/scripts") ,
    };
    cfg.plugins.push(new HtmlWebPackPlugin({
        template:"./src/pageOne/pageOne.html",
        filename: "../pageOne.html",
    }));
})

    .toPackage();*/


module.exports = util.addDefault("pageOne")
    .addDefault("pageTwo")
    .addDefault("pageThree").toPackage();