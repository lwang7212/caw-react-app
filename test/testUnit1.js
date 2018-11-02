let str="this is a ";
let obj={};
debugger;
console.log(typeof (str)==="string");
console.log(typeof (obj)==="object");
let ty=typeof(typeof (obj));
console.log(typeof (ty));

let a="";
console.log(Object.keys(a).length);
a.dd=function () {

};
console.log(Object.keys(a).length);