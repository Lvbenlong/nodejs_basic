## express 的使用
  1. cd到项目里面
  2. npm init --yes //创建package.json
  3. 安装express: npm install express --save
  4. 引入express: var express=require('express');
  5. 使用: var app = new express()  app.get('',function(req,res){})

## express 中使用ejs
  1. 首先安装ejs： npm install ejs --save
  2. 在项目中无需引入ejs， express默认帮我们引入了，我们只用将express的模板引擎设置为ejs即可
  3. 配置express的模板引擎为ejs: app.set("view engine","ejs");
  4. 设置模板的位置, 如果没有设置，默认会在views这个文件里面找模板
     如果设置在其他文件：app.set('views', __dirname + '/pages'); // 表示将模板设置在pages目录下
  4. 在项目中使用ejs
      1. 读取ejs模板： res.render('page', {data: data}, callback())
         page: 表示读取哪个文件， 比如读取news.ejs 模板， 直接设置成news即可， 设置为news.ejs也可以
         data: 表示传入的数据
         callback: 回调

## Express  中间件  
Express是一个自身功能极简，完全是由路由和中间件构成一个的web开发框架：从本质上来说，一个Express应用就是在调用各种中间件。
中间件(Middleware)是一个函数,它可以访问请求对象(request object(req)), 响应对象(response object (res))和web应用中处理请求-响应循环流程中的中间件，一般被命名为 next 的变量。 
中间件：就是匹配路由之前和匹配路由之后做的一系列的操作

中间件的功能：
  1. 执行任何代码
  2. 修改请求和响应对象
  3. 终结请求-响应循环
  4. 调用堆栈中的下一个中间件

中间件分类：
  1. 应用级中间件
  2. 路由级中间件
  3. 错误处理中间件
  4. 内置中间件
  5. 第三方中间件


## express 中使用cookie





