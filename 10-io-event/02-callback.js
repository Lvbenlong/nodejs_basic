const fs = require('fs')


function getMime(callback){
    //1
    fs.readFile('data.txt',function(err,data){
        callback(data)
    })
}

console.log(getMime(function(data){
    // 通过回调函数的方式我们就可以拿到数据，在回调函数中进行相关的操作
    console.log(data.toString())
})); 

// 因为nodejs 是非阻塞IO readfile是异步的操作所以是在最后打印的
// 通过回调函数的方式解决

