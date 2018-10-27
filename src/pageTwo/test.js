//const md = require("../conf/webpackModel1");
const path = require("path");
const user1 = {
    firstName: 'wang',
    lastName: "lei"
};
console.log(__dirname);
console.log(__filename);

//console.log(JSON.stringify(md.obj));
console.log(path.relative(__filename,__dirname));

console.log(
    ((user) => `hello ${user.firstName} ${user.lastName}`)(user1)
);