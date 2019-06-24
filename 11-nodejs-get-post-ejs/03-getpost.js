const http = require('http')
const url = require('url')
const fs = require('fs')
const ejs = require('ejs')

const app = http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname
	const method = req.method.toLowerCase();

    res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"})

    if (pathname === '/login') {
        ejs.renderFile('views/login.ejs', {
        }, (err, data) => {
            res.end(data)
        })
    } else if (pathname === '/dologin' && method === 'get') {
        console.log(url.parse(req.url).query)
        res.end('dologin')
    } else if (pathname === '/dologin' && method === 'post') {
        var postStr='';
		req.on('data',function(chunk){

			postStr+=chunk;
		})
		req.on('end',function(err,chunk){

			//res.end(postStr);
			console.log(postStr);

			fs.appendFile('login.txt',postStr+'\n',function(err){

				if(err){
					console.log(err);
					return;
				}
				console.log('写入数据成功');
			})

			res.end("<script>alert('登录成功');history.back();</script>")

		})
    }
})

app.listen(8004)