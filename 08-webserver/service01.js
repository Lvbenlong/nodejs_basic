const http = require('http')
const fs = require('fs')

// 一下写法存在的问题， 首先固定了Content-Type的类型， 只能是text/html 存在局限性
// 二是当我们的文件是/json/all.json？123456的时候，这个文件是带了参数的，造成请求会认为我们没有这个文件，所以也是需要处理的
// service02.js即将改善这两个问题

const app = http.createServer(function(req, res){
    const pathname = req.url
    if (pathname == '/') {
        pathname = '/index.html'
    }
    if (pathname != '/favicon.ico') {
        console.log(req.url)
        fs.readFile('static/'+pathname, function(err, data){
            if (err){
                console.log('du qv error')
                fs.readFile('static/404.html', function(err, data) {
                    res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"})
                    res.write(data)
                    res.end()
                })
            }else{
                res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"})
                res.write(data)
                res.end()
            }

        })
    }
    // res.write('Hello world')
    // res.end()
})

app.listen(8001)