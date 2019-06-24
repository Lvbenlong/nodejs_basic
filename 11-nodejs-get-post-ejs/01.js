const http = require('http')
const url = require('url')

const app = http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname

    if (pathname === '/login') {
        res.end('login')
    } else if (pathname === '/register') {
        res.end('register')
    }    else if (pathname === '/admin') {
        res.end('admin')
    } else if (pathname === '/order') {
        res.end('order')
    } else {
        res.end('index')
    }
})

app.listen(8003)