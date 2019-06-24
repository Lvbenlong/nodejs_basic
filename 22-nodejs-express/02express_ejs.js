const express = require('express')

const app = new express()

// 设置模板配置引擎为ejs模板
app.set('view engine', 'ejs')

//设置模板的位置
// app.set('views', __dirname+'/pages')

// app.use() 中间件
app.use(express.static('public')) // 给public目录下面的文件提供静态web服务
// <link rel="stylesheet" href="css/style.css"> 这里引入的css/style.css 会去publi文件夹下去查找

//配置虚拟目录 的静态web服务
app.use('/static',express.static('public'));
//http://localhost:3001/static/images/baidu.png 请求的文件是以/static开头的， 所以会去public目录文件下查找images/baidu.png这个文件，如果有就返回


app.get('/', (req, res) => {
  res.send('Home page express and ejs')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.get('/list', (req, res) => {
  const data = [123,456,789]
  res.render('list', {data})
})

app.listen(3001)