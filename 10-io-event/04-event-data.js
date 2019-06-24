/**
 * Created by Administrator on 2017/7/3 0003.
 */
var fs=require('fs');
var events=require('events');

var EventEmitter=new events.EventEmitter();


function getMime(callback){

    fs.readFile('mime.json',function(err,data){
        EventEmitter.emit('data',data)
    })

}

getMime();
EventEmitter.on('data',function(mime){

    console.log(mime.toString());
})
