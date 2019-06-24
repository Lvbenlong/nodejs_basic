const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
const router = require('./router') // 同步方式读取文件

const app = http.createServer(function(req, res){
    router(req, res, 'static')
})

app.listen(8001)