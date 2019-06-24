const http = require('http')
const bar = require('bar')
/*bar默认在目录下面没有，没有的话nodejs会在node_modules里面找这个模块 */
const news = require('new/new')
/* new/new 默认在目录下面没有，没有的话nodejs会在node_modules里面找这个模块 */

const app = http.createServer(function(req, res){
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

    res.write('你好 nodejs');

    console.log(bar);
    console.log(news);

    res.end();
})

app.listen(8001, '127.0.0.1')