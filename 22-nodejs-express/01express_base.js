const express = require('express')

const app = new express()

app.get('/', (req, res) => {
  res.send('Hello express')
})

app.get('/login', (req, res) => {
  res.send('login page')
})

//动态路由  http://localhost:3000/news/213
app.get('/news/:aid', (req, res) => {
  // 获取动态路由的方法 通过req.params
  const aid = req.params.aid
  res.send('news page'+aid)
})

//获取get传值   http://localhost:3000/product?id=123
app.get('/product', (req, res) => {
  // 获取get传值方法 通过req.query
  const query = req.query
  console.log(query)
  res.send('news page'+query.id)
})

app.listen(3000)