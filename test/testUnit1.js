// ES6
/*
const list=[1,2,3,4,5,6];
var a,rest;

  [a, ...rest] = list;

console.log(a);
console.log(typeof (a));
console.log(rest);
console.log(typeof (list));

((...input)=> input.map(i=>console.log(`this is a ${i} 条元素`)))(...list);*/

/*var x=11;
var obj=(function(){
    let me=this;
    me.x=22;

    me.say=()=>{
        console.log(this.x);
    };
    return me;
})();
obj.say();*/
//输出的值为22


var x=11;
var obj={
    x:22,
    say:function(){
        console.log(this.x);
    }
}
obj.say();