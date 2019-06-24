const express = require('express')
const cookieParser = require('cookie-parser')

const app = new express()

app.listen(3000)

app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Home pages....')
})

app.get('/get', (req, res) => {
  res.send('I went to  ' + req.cookies.city)
})

app.get('/set', (req, res) => {
  if (!req.query.city) {
    res.send('I hava went to none')
    return
  }

  let city = req.query.city
  let citys = req.cookies.city
  
  if (citys) {
    citys.push(city)
  } else {
    citys = []
    citys.push(city)
  }
  res.cookie("city", citys, {maxAge: 60000})
  // const city = req.query.city
  res.send('I hava went to ' + city)
})

