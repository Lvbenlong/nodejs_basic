const  MongoClient = require('mongodb').MongoClient;
const url = require('url')
const ejs = require('ejs')
const DatabaseUrl = 'mongodb://127.0.0.1:27017'
const dbname = 'user'

const app = {
  add: function(req, res){
    const query = url.parse(req.url, true).query
    const name = query.name || 'defaultname'
    const age = query.age || 888
    MongoClient.connect(DatabaseUrl, (err, client) => {
      res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"})
      if (err) {
        console.log('数据库连接失败')
        return
      }
      const db = client.db(dbname)
      db.collection('student').insertOne({name: name, age: age}, (error, result) => {
        if (error) {
          console.log('增加数据失败')
          return
        }
        console.log('增加数据成功')
      })
      client.close() // 关闭数据库连接
    })
    res.end('Add data successful.')
  },
  delete: function(req, res){
    const query = url.parse(req.url, true).query
    const name = query.name || 'defaultname'
    MongoClient.connect(DatabaseUrl, (err, client) => {
      res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"})
      if (err) {
        console.log('数据库连接失败')
        return
      }
      const db = client.db(dbname)
      db.collection('student').deleteOne({name: name}, (error, result) => {
        if (error) {
          console.log('删除数据失败')
          return
        }
        console.log('删除数据成功')
      })
      client.close() // 关闭数据库连接
    })
    res.end('Delete data successful.')
  },
  update: function(req, res){
    // const query = url.parse(req.url, true).query
    // const name = query.name || 'defaultname'
    MongoClient.connect(DatabaseUrl, (err, client) => {
      res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"})
      if (err) {
        console.log('数据库连接失败')
        return
      }
      const db = client.db(dbname)
      db.collection('student').updateOne({name: 'susan'}, {$set: {age: 60}}, (error, result) => {
        if (error) {
          console.log('修改数据失败')
          return
        }
        console.log('修改数据成功')
      })
      client.close() // 关闭数据库连接
    })
    res.end('Update data successful.')
  },
  find: function(req, res){
    MongoClient.connect(DatabaseUrl, (err, client) => {
      res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"})
      if (err) {
        console.log('数据库连接失败')
        return
      }
      const db = client.db(dbname)
      const studentData = db.collection('student').find()
      let resultData = []
      studentData.each((err, doc) => {
        if (err) {
          console.log('遍历失败')
          return
        }
        if (doc !== null) {
          resultData.push(doc)
        }else{
          console.log(resultData)
          ejs.renderFile('views/list.ejs', {list: resultData}, (e, data) => {
            if (e) {
              console.log('error in shows')
              console.log(e)
              return
            }
            res.end(data)
          })
        }
      })
      client.close() // 关闭数据库连接
    })
    // res.end('find data successful.')
  },
  login: function(req, res){
    res.end('Login page')
  },
  home: function(req, res){
    res.end('Home page')
  }
}

module.exports = app