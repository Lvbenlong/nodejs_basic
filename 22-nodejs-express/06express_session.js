/**
 * express中使用session
 * 1. 安装express-session: yarn add express-session
 * 2. 引入: const session = require('express-session')
 * 3. 设置中间件使用: app.use(session({
 *      secret: 'keyboard cat',
 *      resave: false,
 *      saveUninitialized: true
 *    }))
 * 4. 使用: 设置值: req.session.username = "张三"
 *          获取值: req.session.username
 *          销毁session: req.session.destroy(callback)  ||  req.session.cookie.maxAge=0  // 两种方式销毁，一种是函数一种是设置cookie的过期时间
 */

 const express = require('express')
 const session = require('express-session')

 const app = new express()
 app.listen(3000)

 app.use(session({
  secret: 'this is string key',   // 可以随便写。 一个 String 类型的字符串，作为服务器端生成 session 的签名
	name:'session_id',/*保存在本地cookie的一个名字 默认connect.sid  可以不设置*/
  resave: false,   /*强制保存 session 即使它并没有变化,。默认为 true。建议设置成 false。*/
	saveUninitialized: true,   //强制将未初始化的 session 存储。  默认值是true  建议设置成true
	cookie: {
    maxAge:5000,    /*过期时间*/
    secure: true /*secure https这样的情况才可以访问cookie*/
	},
  rolling:true //在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false）
  // rolling具体的业务场景，当我们设置session30分钟后过期，那么如果这30分钟我们一直在操作，到第30分钟的时候，突然过期了，会很奇怪
  // 所以我们需要设置的是当用户最后一次操作当前页面，然后相隔30分钟后没有操作才设置过期，可以将rolling设置为true 
  // 设置过期时间比如是30分钟，只要游览页面，30分钟没有操作的话在过期
 }))

 app.get('/', (req, res) => {
   if (req.session.username) {
    res.send('Welcome back ' + req.session.username)
   }else{
    res.send('No logins.....')
   }
 })

 app.get('/login', (req, res) => {
   req.session.username = 'Johnny'
   res.send('Login successful.....')
 })