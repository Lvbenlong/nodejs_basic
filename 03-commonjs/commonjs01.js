const http = require('http')
const config = require('./config')

const app = http.createServer(function(req, res){
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

    res.write('你好 nodejs');

    console.log(config);

    res.end();
})

app.listen(8001, '127.0.0.1')