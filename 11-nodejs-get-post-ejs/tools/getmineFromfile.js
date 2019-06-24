// const fs = require('fs')

// 这里是异步操作，会造成读取延迟，所以我们可以采用同步的方式 即使用readFileSync方法代替 
// 另一个getmineFromfileSync.js文件中使用的就是同步的方式
function getMineFromFile(fs, extname) {
    console.log(1)
    fs.readFile('./mime.json', function(err, data){
        if(err){
            console.log('mime.json文件不存在');
            return false;
        }
        // console.log(data.toString())
        const mimes = JSON.parse(data.toString())
        // console.log(mimes['.zip'])
        console.log(2)
        return mimes[extname]
    })
    console.log(3)
}

module.exports = getMineFromFile