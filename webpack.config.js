
const  util = require("./conf/webpack.config.common");
util.configUtil.basePath=__dirname;
const  packages=[];
packages.push(util.configUtil.addPack("pageOne",{
    srcDir:"./src/pageOne",
    jsFileName: "pageOne.js",
    htmlFile:"pageOne.html",
    targetDir: "./dist/pageOne"
}));
packages.push(util.configUtil.addPack("pageTwo",{
    srcDir:"./src/pageTwo",
    jsFileName: "pageTwo.js",
    htmlFile:"pageTwo.html",
    targetDir: "./dist/pageTwo"
}));
packages.push(util.configUtil.addPack("pageThree",{
    srcDir:"./src/pageThree",
    jsFileName: "pageThree.js",
    htmlFile:"pageThree.html",
    targetDir: "./dist/pageThree"
}));
//console.log(JSON.stringify(packages));
module.exports = packages;