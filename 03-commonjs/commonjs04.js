const http = require('http')
const nav = require('nav')
// const news = require('new/new')
/*bar默认在目录下面没有，没有的话nodejs会在node_modules里面找这个模块 */
// require('new/new') 这种形式太难看 想用 require('new') 怎么实现
// 在new/new 文件下init一个package.json文件 该文件的生成通过 npm init --yes 来生成

const app = http.createServer(function(req, res){
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

    res.write('你好 nodejs');

    console.log(nav);

    //nav 在根目录不存在，去node_modules ，找到了nav文件夹。 nav文件夹下面有package.json ，

    //找 package.json 入口文件 "main": "nav.js",
    //package.json      npm init  --yse       进入这个目录运行这个命令

    res.end();
})

app.listen(8001, '127.0.0.1')