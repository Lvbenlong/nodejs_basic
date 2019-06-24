const express = require('express')
const bodyParser = require('body-parser')
const app = new express()
/**
 * 5.第三方中间件 以body-parser为例子 获取post提交的数据   (模块)
 * 使用方法: 1. 安装  yarn add body-parser
 * 使用方法: 2. 引用  const bodyParser = require('body-parser')
 * 使用方法: 3. 设置中间件  app.use(bodyParser.urlencoded({ extended: false }))
 *                         app.use(bodyParser.json())
 * 使用方法: 4. 具体使用中通过req.body获取数据
 */
// 5. 第三方中间件 body-parse
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// 4. 内置中间件  托管静态页面
app.use(express.static('public'));

app.set('view engine', 'ejs')

// 1. 应用级中间件   next()路由继续向下匹配
app.use((req, res, next) => {
  console.log('这是应用级中间件，所有的路由访问我都会被执行监听')
  next()
  // 如果没有next()则不会往下执行了
})

app.get('/', (req, res) => {
  console.log('welcome')
  res.send('Home page for middlwware.')
})

// 2. 路由中间件
app.get('/news', (req, res, next) => {
  console.log('Middleware before news page')
  next()
})

app.get('/news', (req, res) => {
  console.log('news page')
  res.send('News page for middlwware.')
})

app.get('/login', (req, res) => {
  console.log('login page')
  res.render('login')
})

app.post('/dologin', (req, res) => {
  console.log('dologin page')
  const name = req.body.username
  const pwd = req.body.password
  res.send(`login successful name: ${name} and password is ${pwd}`)
})

// 3. 错误处理中间件
app.use((req, res) => {
  // 以上路由都没有匹配到， 执行到这里， 404
  // 这条路由匹配一定是放在最后的
  res.status(404).send('404 not find ')
})


app.listen(3003)