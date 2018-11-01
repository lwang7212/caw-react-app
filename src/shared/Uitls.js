/*
export  default  class  Uitls {

    isEmpty(target){
        return target===undefined;
    }
};*/
export default function () {
    let me=this;
    me.isEmpty=function (target){
        return target===undefined;
    };
    return this;
}