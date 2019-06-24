const express = require('express')
const app = new express()


app.get('/api/data', (req, res) => {
  res.json({"name": "Johnny"})
})

app.get('/', )


app.listen(3000)