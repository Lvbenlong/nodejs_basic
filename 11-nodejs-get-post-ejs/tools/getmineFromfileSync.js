// const fs = require('fs')
// 使用同步的方式来读取文件
function getMineFromFileSync(fs, extname) {
    const data = fs.readFileSync('./mime.json');
    const mimes = JSON.parse(data.toString())
    return mimes[extname]
    // return mimes[extname] || 'text/html'

}

module.exports = getMineFromFileSync