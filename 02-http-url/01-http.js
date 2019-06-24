const http = require('http')

// http 模块所讲到的知识
// createServer方法用来创建一个服务
// writeHead 写入头信息
// write 向浏览器输出信息
// end 结束当前连接
// listen 监听某个端口
http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"})

    res.write('Hello world!!!')
    res.write('Hello world, node js')

    res.end()
}).listen(8001)