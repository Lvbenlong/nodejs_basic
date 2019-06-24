const http = require('http')
const url = require('url')
const model = require('./model/model')

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"})

    const pathname = url.parse(req.url).pathname.replace('/', '')

    if (pathname !== '/favicon.ico') {
        try{
            model[pathname](req, res)
        } catch {
            model.home(req, res)
        }
    }


}).listen(8888)