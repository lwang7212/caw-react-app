const util = require("./conf/webpack.config.common");
module.exports = util.addDefault("componentTest")
    .addDefault("pageThree")
    .addDefault("helloD3")
    .toPackage();