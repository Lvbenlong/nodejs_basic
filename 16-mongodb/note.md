mongodb 的安装和环境变量的配置

安装完成并配置好环境变量后，开始使用
首先先开启服务端的mongodb服务
    输入命令： mongod --dbpath E:\mongodb  //表示开启服务端的mongo服务， 数据是存放在E:\mongodb文件下
    开启之后不能关闭，一旦关闭代表服务就停住了，然后就不能连接上来了
然后本地连接mongo服务器
    新开命令窗口，输入命令： mongo  // 表示连接到本地的mongo服务
    如果想要连接远程的mongo服务器， 则输入命令： mongo 127.0.0.1:27017 // mogon后面跟着远程mongo服务的地址，代表连接到远程服务器

##mongodb 数据库的操作
1. 列出当前所有的数据库： show dbs 

2. 创建/使用一个数据库： use user 
3. 删除一个数据库： db.dropDatabase(); // 表示删除当前所在的数据库

4. 查看数据库下的数据集合(表): show collections
5. (增)创建一个数据集合： db.student.insert({"name": "zhangshan", "age": 18}) // 首先会检查是否存在这个表， 如果不存在的话会去创建这个表同时添加一条数据， 存在的话则直接添加一条数据
6. (删)删除数据集合： db.student.drop() // 表示删除当前数据库下student这个数据集合(表)
7. (查)对表数据查询
    1. 查询所有记录： db.student.find(); // 相当于：select* from student;
    2. 查询去掉后的当前聚集集合中的某列的重复数据: db.student.distinct("name"); // 会过滤掉 name 中的相同数据
    3. 查询age=20的数据： db.student.find({"age": 20})
    4. 查询age>20的数据： db.student.find({"age": {$gt: 20}})
    5. 查询age<20的数据： db.student.find({"age": {$lt: 20}})
    6. 查询age>=20的数据： db.student.find({"age": {$gte: 20}})
    7. 查询age<=20的数据： db.student.find({"age": {$lte: 20}})
    8. 查询age>=20并且age<=21的数据： db.student.find({"age": {$gte: 20, $lte: 21}})
    9. 查询name中包含mongo的数据, 模糊查询： db.student.find({"name": /mongo/})
    10. 查询name中以mongo开头的数据, 模糊查询： db.student.find({"name": /^mongo/})
    11. 查询name中以mongo结尾的数据, 模糊查询： db.student.find({"name": /mongo$/})
    12. 查询指定列name数据: db.student.find({}, {"name": 1}) // 当然 name 也可以用 true 或 false,当用 ture 的情况下河name:1效果一样，如果用 false 就是排除 name，显示 name 以外的列信息。
    13. 查询指定列name,age数据,age > 25: db.student.find({age: {$gt: 25}}, {name: 1, age: 1});
        相当于：select name, age from student where age >25;
    14. 按照年龄排序 1  升序 -1  降序
        升序：db.student.find().sort({age: 1});
        降序：db.student.find().sort({age: -1});
    15. 查询name=zhangsan,age=22的数据: db.student.find({name: 'zhangsan', age: 22});
        相当于：select * from student where name = ‘zhangsan’ and age = ‘22’;
    16. 查询前5条数据: db.student.find().limit(5)
    17. 查询10条以后的数据： db.student.find().skip(10)
    18. 查询第5~10条之间的数据: db.student.find().limit(10).skip(5)
        可用于分页，limit 是 pageSize，skip 是第几页*pageSize
    19. or 与查询， 查询age=20或者21的数据: db.student.find({$or: [{"age": 20}, {"age": 21}]})
    20. findOne查询第一条数据: db.student.findOne()
    21. 对查询数据的结果数量统计: db.student.find().count()
        如果要返回限制之后的记录数量，要使用 count(true)或者 count(非 0)
        db.student.find().skip(2).limit(5).count(true);
8. (改)对表数据的更改
    1. 将name=lisi的这条数据的age修改成16 db.student.update({"name":"lisi"},{$set:{"age":16}});
    2. 完整替换 上面表示了更改数据中的某一项，如果想替换掉全部数据，则不需要加入set，即:
       db.student.update({"name":"lisi"},{"age":88});
9. (删)对表数据某一项或者某几项的删除: db.student.remove({"name": "s1"}) // 表示删除name=s1的数据
        如果符合条件的数据不止一条，那么只想删除一条怎么办： db.student.remove({"name": "s1"}, {justOne: true})


## mongodb 索引
索引是对数据库表中一列或多列的值进行排序的一种结构，可以让我们查询数据库变得更快。

创建索引： db.list.ensureIndex({"title": 1})
获取当前表的索引：db.list.getIndexes()
删除索引： db.list.dropIndex({"title": 1})

创建唯一索引： db.list.ensureIndex({"id": 1}, {"unique": true})
唯一索引表示该项的值在表中是唯一的，不会有重复
如果创建的数据中，有重复值会报错不能创建成功

## 使用 explain 
explain 是非常有用的工具，会帮助你获得查询方面诸多有用的信息。只要对游标调用该方法，就可以得到查询细节。explain 会返回一个文档，而不是游标本身。
例如： db.list.find({"title": "title123"}).explain()

explain executionStats  查询具体的执行时间
db.list.find({"id": "123"}).explain("executionStats")

可以通过explain来检查设置索引和没有设置索引时查询所用的时间，就知道设置索引会查询更快


## nodejs中使用mongodb
1. 首先安装mongodb: yarn add mongodb
2. 数据库引用: const MongoClient = require('mongodb').MongoClient;  
3. 设置数据库连链接: cons shujukuURL = 'mongodb://localhost:27017/news'  //数据库连接的地址，最后的斜杠表示数据库名字
4. 连接数据: MongoClient.connect(shujukuURL, function(err,client){
        /*进行数据操作*/
        let db=client.db(dbName);   /*获取db对象*/
        db.collection("admin").find()
        ......    
    } ) // 这是一个异步的操作
   数据表操作：
       1. (增)db.collection('tableName').insertOne({data: data}, function(err, data){/*创建数据的回调*/})
       2. (删)db.collection('tableName').deleteOne({id: 123}, function(err, data){/*删除数据的回调*/})
       3. (改)db.collection('tableName').updateOne({id: 123}, {newdata: newdata}, function(err, data){/*修改数据的回调*/})
          (改)db.collection('tableName').updateOne({id: 123}, {$set: {newdata: newdata}}, function(err, data){/*修改数据的回调*/}) // 两种update的区别 第一种是将原数据清空然后把设置的数据作为新数据放进去 第二种是将要修改的数据项替换掉jiuok
       4. (查)db.collection('tableName').find() // 这里查询出来的结果不是我们可以直接使用的，还需要做处理
5. 数据库关闭: db.close() // 可以增加性能速度


for (var i=3001; i<9000; i++){
    db.list.insert({"title": "title"+i, id: i})
}

db.list.find({"title": "title3999"})


db.list.ensureIndex({"id": 1})

db.list.insert({"title": "add title", "id": 22222})





db.student.insert({"name": "s4", "age": 22, sex: 'woman'})
db.teacher.insert({"name": "t2", "age": 29})
db.qq.insert({"name": "t2", "age": 29})
db.student.distinct("name");
db.student.find({"name": /zh/})
db.student.find({"name": /u$/})
db.student.update({name: 'lisi'}, {$set: {age: 16}})
db.student.update({"name":"s4"},{"age":88});
db.student.remove({"age": {$gt: 21}})
db.student.remove({"age": {$gt: 21}}, {justOne: true})

db.teacher.find()






