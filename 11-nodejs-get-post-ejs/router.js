const url = require('url')
const path = require('path')
const fs = require('fs')



function router(req, res, staticpath) {
    var pathname = url.parse(req.url).pathname
    if (pathname == '/') {
        pathname = '/index.html'
    }
    // 拿到文件的后缀
    const extname = path.extname(pathname)

    if (pathname != '/favicon.ico') {
        fs.readFile(staticpath+'/'+pathname, function(err, data){
            if (err){
                console.log('du qv error')
                fs.readFile(staticpath+'/404.html', function(err, data) {
                    res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"})
                    res.write(data)
                    res.end()
                })
            }else{
                // 获取文件类型
                const mine = getMineFromFileSync(extname)
                res.writeHead(200, {"Content-Type": ""+mine+";charset='utf-8'"})
                res.write(data)
                res.end()
            }
        })
    }
}

function getMineFromFileSync(extname) {
    const data = fs.readFileSync('./mime.json');
    const mimes = JSON.parse(data.toString())
    return mimes[extname] || 'text/html'

}

module.exports = router