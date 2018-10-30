const util = require("./conf/webpack.config.common");
module.exports = util.addDefault("componentTest")
    .addDefault("pageThree")
    .toPackage();