/*
 1. fs.stat  检测是文件还是目录
 2. fs.mkdir  创建目录
 3. fs.writeFile  创建写入文件
 4. fs.appendFile 追加文件
 5.fs.readFile 读取文件
 6.fs.readdir读取目录
 7.fs.rename 重命名
 8. fs.rmdir  删除目录
 9. fs.unlink删除文件
*/

const fs = require('fs')



// 1. fs.stat  检测是文件还是目录
/**
    fs.stat('html', function(err, stats) {
        if (err) {
            // 读取错误 返回
            console.log(err)
            return
        }
        // 读取成功
        // stats.isFile() 判断这个html是不是文件
        // stats.isDirectory() 判断这个html是不是目录
        console.log('html是文件吗:'+ stats.isFile())
        console.log('html是目录吗:'+ stats.isDirectory())
    })
    fs.stat('index.txt', function(err, stats) {
        if (err) {
            // 读取错误 返回
            console.log(err)
            return
        }
        // 读取成功
        // stats.isFile() 判断这个html是不是文件
        // stats.isDirectory() 判断这个html是不是目录
        console.log('index.txt是文件吗:'+ stats.isFile())
        console.log('index.txt是目录吗:'+ stats.isDirectory())
    })
 */

// 2. fs.mkdir  创建目录
    //mkdir(path, mode, callback)接收参数：
    //path            将创建的目录路径
    //mode          目录权限（读写权限），默认0777
    //callback      回调，传递异常参数err
/**
    fs.mkdir('css', function(err){
        // 在当前目录下创建一个css目录， 成功
        if (err) {
            // 创建错误 返回
            console.log(err)
            return
        }
        console.log("创建css目录成功")
    })
    fs.mkdir('html/css', function(err){
        // 在当前目录的html目录下下创建一个css目录， 成功
        if (err) {
            // 创建错误 返回
            console.log(err)
            return
        }
        console.log("创建html/css目录成功")
    })
    fs.mkdir('style/css', function(err){
        // 当前目录不存在style，此时创建一个style/css目录， 失败
        if (err) {
            // 创建错误 返回
            console.log(err)
            return
        }
        console.log("创建html/css目录成功")
    })
 */




// 3. fs.writeFile  创建写入文件
    // fs.writeFile(filename, data, options, callback)参数
    //filename      (String)            文件名称
    //data        (String | Buffer)    将要写入的内容，可以使字符串 或 buffer数据。
    //options        (Object)           option数组对象，包含：
    //· encoding   (string)            可选值，默认 ‘utf8′，当data使buffer时，该值应该为 ignored。
    //· mode         (Number)        文件读写权限，默认值 438
    //· flag            (String)            默认值 ‘w'
    //callback {Function}  回调，传递一个异常参数err。

/**
    fs.writeFile('a.txt', '$$$$This is add file', function(err){
        // 写入是创建一个新的文件，如果之前存在的话，那么会覆盖掉之前的文件
        if (err) {
            // 写入错误 返回
            console.log(err)
            return
        }
        console.log('写入c成功')
    })
 */

// 4. fs.appendFile 追加文件
/**
    fs.appendFile('a.txt', '\n This is add file content.', function(err){
        // 追加文件，如果文件之前存在的话，那么会在文件后追加写入的内容， 如果不存在的话会创建这个文件并将内容加进去
        if (err) {
            // 写入错误 返回
            console.log(err)
            return
        }
        console.log('追加成功')
    })
 */


 // 5.fs.readFile 读取文件
/**
    fs.readFile('a.txt', function(err, data){
        if (err) {
            // 读取错误 返回
            console.log(err)
            return
        }
        console.log(data.toString())
    })
 */

// 6.fs.readdir读取目录  把目录下面的文件和文件夹都获取到。
/**
    fs.readdir('html', function(err, data){
        if (err) {
            // 读取错误 返回
            console.log(err)
            return
        }
        console.log(data)
    })
 */

//7.fs.rename 重命名 可用于修改文件名或者剪切
// 接受的参数rename(oldname, newname, callback)
// oldname 要修改的文件地址
// new 修改后的文件地址
// callback修改后的回调
/**
    fs.rename('index.md', 'index.txt', function(err){
        // 修改文件名称
        if (err) {
            // 修改错误 返回
            console.log(err)
            return
        }
        console.log('修改成功')
    })
    fs.rename('style', 'css', function(err){
        // 修改目录名称
        if (err) {
            // 修改错误 返回
            console.log(err)
            return
        }
        console.log('修改成功')
    })
    fs.rename('a.txt', 'html/b.txt', function(err){
        // 文件剪切
        if (err) {
            // 修改错误 返回
            console.log(err)
            return
        }
        console.log('文件剪切成功')
    })
 */


// 8. fs.rmdir  删除目录 这个方法只能删除目录 不能删除文件 并且这个方法只能删除空目录
/**
    fs.rmdir('emptydir', function(err){
        // 删除成功，因为是目录并且是空的
        if (err) {
            // 删除失败 返回
            console.log(err)
            return
        }
        console.log('删除成功')
    })
    fs.rmdir('dir', function(err){
        // 删除失败，因为不是空的目录
        if (err) {
            // 删除失败 返回
            console.log(err)
            return
        }
        console.log('删除成功')
    })
    fs.rmdir('index.txt', function(err){
        // 删除失败，因为不是目录 而是一个文件
        if (err) {
            // 删除失败 返回
            console.log(err)
            return
        }
        console.log('删除成功')
    })
 */


// 9. fs.unlink删除文件
/**
    fs.unlink('index.txt',function(err){
        if(err){
        console.log(err);
        return false;
        }
        console.log('删除文件成功');
    })
 */