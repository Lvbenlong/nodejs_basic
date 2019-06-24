const fs = require('fs')

//1.判断服务器上面有没有upload目录。没有创建这个目录。   （图片上传）
/**
fs.stat('upload', function(err, stats){
    if (err) {
        fs.mkdir('upload', function(error){
            if (error) {
                console.log(error)
                return
            }
            console.log('mkdir upload successful')
        })
    }else{
        console.log('has exits upload')
        console.log(stats.isDirectory())
        if (!stats.isDirectory()) {
            fs.unlink('upload', function(e){
                if (e) {
                    console.log(e)
                    return
                }
            })
            fs.mkdir('upload', function(error){
                if (error) {
                    console.log(error)
                    return
                }
                console.log('mkdir upload successful2')
            })
        }
    }
})
 */

//2. 找出html目录下面的所有的目录，然后打印出来
// 错误的写法
// var filesArr=[];
// fs.readdir('html',function(err,files){
//     if(err){
//         console.log(error);
//     }else{  /*判断是目录还是文件夹*/
//         console.log(files);  /*数组*/
//         for(let i=0;i<files.length;i++){
//             console.log(files[i]);
//             fs.stat(files[i],function(error,stats){  /*循环判断是目录还是文件  ---异步 错误写法*/
//                 console.log(files[i]);
//                 if(stats.isDirectory()){ /*目录*/
//                     filesArr.push (files[i]);  /*保存数据*/
//                 }
//             })
//         }
//     }
// })

// 正确的写法
var filesArr=[];
fs.readdir('html',function(err,files){
    if(err){
        console.log(error);
    }else{  /*判断是目录还是文件夹*/
        //console.log(files);  /*数组*/
        (function getFile(i){
            if(i==files.length){  /*循环结束*/
                console.log('目录：');
                console.log(filesArr);   /*打印出所有的目录*/
                return false;
            }
            //files[i]  =   css  js   news.html
            //注意：目录
            fs.stat('html/'+files[i],function(error,stats){  /*循环判断是目录还是文件  ---异步 错误写法*/
                if(stats.isDirectory()){ /*目录*/
                    filesArr.push (files[i]);  /*保存数据*/
                }
                //递归掉用
                getFile(i+1);
            })
        })(0)
    }
})

