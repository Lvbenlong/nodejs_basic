const http = require('http')
const url = require('url')

// url 模块所讲到的知识
// parse 将一个请求地址进行解析, 第二个参数为true表示讲链接中query解析成对象
// url.format(urlObject) //是上面 url.parse() 操作的逆向操作 
// url.resolve(from, to) 添加或者替换地址 url.resolve('https://www.baidu.com/one', 'two')  的结果是 https://www.baidu.com/two


http.createServer(function(req, res){
    console.log(url.parse(req.url, true))

    const link = 'https://www.baidu.com/one'
    console.log(url.resolve(link, 'two'))
    res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"})

    res.write('Hello world!!!')
    res.write('Hello world, node js')

    res.end()
}).listen(8001)