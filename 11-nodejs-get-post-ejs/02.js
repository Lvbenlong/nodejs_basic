const http = require('http')
const url = require('url')
const ejs = require('ejs')

const app = http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname

    res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"})

    if (pathname === '/login') {
        ejs.renderFile('views/login.ejs', {
        }, (err, data) => {
            res.end(data)
        })
    } else {
        ejs.renderFile('views/index.ejs', {
            msg: 'message data',
            list: [1,2,3,4,5,6],
            htm: '<h1>title</h1>'
        }, (err, data) => {
            res.end(data)
        })
    }
})

app.listen(8004)