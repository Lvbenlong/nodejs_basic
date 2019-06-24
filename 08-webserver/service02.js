const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
const getmine = require('./tools/getmine')

// 解决 Content-Type的类型，只能是text/html 的局限性
// 解决 当我们的文件是/json/all.json？123456的时候，这个文件是带了参数的，造成请求会认为我们没有这个文件，所以也是需要处理的

// 当前页面还存在一个问题就是我们的getmine方法是通过手动去判断的，现在需要改善的是通过一个json文件来配对显示
// service03.js将解决这个问题

const app = http.createServer(function(req, res){
    // 通过这一步操作， 可以取到文件的具体名字，而不是带有请求参数的名字即data.json而不是data.json？123
    const pathname = url.parse(req.url).pathname
    if (pathname == '/') {
        pathname = '/index.html'
    }
    // 拿到文件的后缀
    const extname = path.extname(pathname)

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
                // 通过这一步我们拿到文件的后缀后，进行判断根据不同的后缀来显示不同的格式
                const mine = getmine(extname)
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