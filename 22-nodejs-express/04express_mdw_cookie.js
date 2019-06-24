/**
 * cookie 中间件的使用
 * 1.安装 yarn add cookie-parser
 * 2.引入 const cookieParser = require('cookie-parser');
 * 3.设置中间件 app.use(cookieParser());
 * 4.设置cookie res.cookie("name",'zhangsan',{maxAge: 900000, httpOnly: true}); //HttpOnly 默认 false 不允许 客户端脚本访问
 * 5.获取cookie req.cookies.name
 * 6.删除cookie res.cookie("name",'zhangsan',{maxAge: 0}); 
 * 6.删除cookie res.cookie("name",'zhangsan',{expires: new Date(0)});
 */

/**
 * 设置cookie的第三个参数的可选项
 * 1. domain: 域名
 * 2. Expires：过期时间（秒），在设置的某个时间点后该Cookie就会失效，如 new Date() + 3600
 * 3. maxAge： 最大失效时间（毫秒），设置在多少后失效
 * 4. secure： 当secure值为 true 时，cookie 在 HTTP 中是无效，在 HTTPS 中才有效
 * 5. Path： 表示在指定路径下才能访问到cookie，如 path=/news, 则只能在news下才能访问到
 * 6. httpOnly：只能在服务端读取cookie，浏览器端不能。是微软对 COOKIE 做的扩展。如果在 COOKIE 中设置了“httpOnly”属性，则通过程序（JS脚本、applet 等）将无法读取到COOKIE 信息，防止 XSS 攻击产生
 * 7. singed：表示是否签名cookie, 设为true 会对这个 cookie 签名，这样就需要用res.signedCookies 而不是 res.cookies 访问它。被篡改的签名 cookie 会被服务器拒绝，并且 cookie值会重置为它的原始值
 */

 /**
  * 针对加密cookie使用的注意事项
  * 1. 在设置中间件的时候，需要加入加密的随机字符串,任意加密字符串均可 app.use(cookieParser('any'));
  * 2. 设置signed为true res.cookie('userinfo','cookie222_info',{maxAge:600000,signed:true});
  * 3. 读取的时候： req.signedCookies() 通过这种方式读取
  */

const express = require('express')
const cookieParser = require('cookie-parser')
const app = new express()

app.use(cookieParser('123456')) // 可以加入加密的随机字符串
app.listen(3000)

app.get('/', (req, res) => {
  console.log(req.cookies)
  res.send('cookies getseccookie ')
})

app.get('/getseccookie', (req, res) => {
  console.log(req.signedCookies)
  res.send('cookies test')
})

app.get('/set', (req, res) => {
  res.cookie("name", "zhangshan", {})
  res.send('cookies set successful.')
})

app.get('/setsecurity', (req, res) => {
  res.cookie("password", "123456", {signed: true})
  res.send('cookies setsecurity successful.')
})

app.get('/delete', (req, res) => {
  res.cookie("name", "zhangshan", {maxAge: 0})
  res.send('cookies delete successful.')
})







