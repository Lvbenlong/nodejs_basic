const ejs = require('ejs')
const fs = require('fs')


const app = {
    login: function(req, res){
        ejs.renderFile('views/login.ejs', {}, (err, data) => {
            console.log('====================================');
            res.end(data)
        })
    },
    dologin: function(req, res){
        var postStr='';
		req.on('data',function(chunk){
			postStr+=chunk;
		})
		req.on('end',function(err,chunk){
			console.log(postStr);
			fs.appendFile('login.txt',postStr+'\n',function(err){
				if(err){
					console.log(err);
					return;
				}
				console.log('写入数据成功');
			})
			res.end("<script>alert('登录成功');</script>")
		})
    },
    home: function(req, res){
        ejs.renderFile('views/home.ejs', {}, (err, data) => {
            res.end(data)
        })
    }
}

module.exports = app