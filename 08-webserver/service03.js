const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
// const getMineFromFile = require('./tools/getMineFromFile') // 异步方式读取文件
const getMineFromFileSync = require('./tools/getMineFromFileSync') // 同步方式读取文件

// 当前页面主要是改善的问题就是我们的getmine方法是通过手动去判断的，现在需要改善的是通过一个json文件来配对显示
// 以及通过readFile和readFileSync的形式来读取文件

const app = http.createServer(function(req, res){
    const pathname = url.parse(req.url).pathname
    if (pathname == '/') {
        pathname = '/index.html'
    }
    // 拿到文件的后缀
    const extname = path.extname(pathname)

    if (pathname != '/favicon.ico') {
        fs.readFile('static/'+pathname, function(err, data){
            if (err){
                console.log('du qv error')
                fs.readFile('static/404.html', function(err, data) {
                    res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"})
                    res.write(data)
                    res.end()
                })
            }else{
                // 获取文件类型
                const mine = getMineFromFileSync(fs, extname)
                res.writeHead(200, {"Content-Type": ""+mine+";charset='utf-8'"})
                res.write(data)
                res.end()
            }
        })
    }
    // res.write('Hello world')
    // res.end()
})

app.listen(8001)