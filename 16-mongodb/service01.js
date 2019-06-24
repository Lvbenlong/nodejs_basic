const http = require('http')
const url = require('url')
const route = require('./tools/route')

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"})
  const pathname = url.parse(req.url).pathname.replace('/', '')
  // console.log(pathname)
  if (pathname !== 'favicon.ico') {
    try {
      route[pathname](req, res) 
    }catch{
      route['home'](req, res) 
    }
  }
})

server.listen(8001)