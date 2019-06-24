const fs = require('fs')

// console.log('1');
// fs.readFile('mime.json',function(err,data){
//    //console.log(data);
//    console.log('2');
// })
// console.log('3');
// 最终打印结果的顺序是 1 3 2 

function getMime(){
    //1
    fs.readFile('mime.json',function(err,data){
        //console.log(data.toString());
        return data;//3
    })
    //2
    //return '123';
}

console.log(getMime()); 

// 因为nodejs 是非阻塞IO readfile是异步的操作所以是在最后打印的
// 通过回调函数的方式解决

