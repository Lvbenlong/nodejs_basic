const http = require('http')
// const tools = require('./tools.js') // js后缀结尾时候，可以省略.js
const tools = require('./tools')

const app = http.createServer(function(req, res){
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

    res.write('你好 nodejs');

    console.log(tools.add(1,1));
    console.log(tools.say());

    res.end();
})

app.listen(8001, '127.0.0.1')