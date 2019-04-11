var fs = require('fs');
var events = require('events');
var http = require('http');

// 同步
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());

// 异步
// fs.readFile('input.txt', function(err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(data.toString());
// })


// console.log('over');

// 创建可读流
// var data = '';

// var readerStream = fs.createReadStream('input.txt');

// readerStream.setEncoding('UTF8');

// readerStream.on('data', function (chunk) {
    
//     data += chunk;
// })

// readerStream.on('end', function() {
//     console.log('stream: ' + data);
// })

// readerStream.on('error', function(err) {
//     console.log(err.stack);
// })

// console.log('create reader stream over');

// 写入流
// var data_write = '中国';
// var writerStream = fs.createWriteStream('output.txt');


// // 使用 utf8 编码写入数据
// writerStream.write(data_write, 'UTF8');

// // 标记文件末尾
// writerStream.end();

// // 处理流事件 --> data, end, and error
// writerStream.on('finish', function() {
//     console.log('写入完成');
// })

// writerStream.on('error', function(err) {
//     console.log('出错了：' + err.stack);
// })

// console.log('写入流完成');

// 创建eventEmitter事件处理程序
// var eventEmitter = new events.EventEmitter();

// var connectHandler = function connected() {
//     console.log('连接成功');

//     eventEmitter.emit('data_received');
// }

// eventEmitter.on('connection', connectHandler);

// eventEmitter.on('data_received', function() {
//     console.log('数据连接成功');
// })

// eventEmitter.emit('connection');

// console.log('事件程序执行完毕');

// Buffer
// let buf = Buffer.alloc(6, 1);
// console.log(buf);
// let len = buf.write('shaw');

// console.log('写入字节数：' + len + 'buf: ' + buf);


// console.error('hhh');

// console.time('start');

// let a = 0;
// for (let i = 0; i < 23; i++) {
//     a += i;
// }
// console.log(a);
// console.timeEnd('start');


// // util
// var util = require('util'); 
// function Person() { 
//     this.name = 'byvoid'; 
//     this.toString = function() { 
//     return this.name; 
//     }; 
// } 
// var obj = new Person(); 
// console.log(obj);
// console.log(util.inspect(obj)); 
// console.log(util.inspect(obj, true, 3, true)); 

// // 文件
// console.log("准备打开文件！");
// fs.open('input.txt', 'r+', function(err, fd) {
//    if (err) {
//        return console.error(err);
//    }
//   console.log("文件打开成功！");     
// });

// 准备打开文件
fs.stat('input.txt', function(err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log('读取文件信息成功');

    console.log('是否为目录？' + stats.isDirectory());
})

// 准备写入文件
console.log('准备写入文件');
fs.writeFile('input.txt', '我是通 过fs.writeFile 写入文件的内容', function(err) {
    if (err) {
        return console.error(err);
    }
    console.log('数据写入成功');
    fs.readFile('input.txt', function(err, data) {
        if (err) {
            return console.log(err);
        }
        console.log('异步读取文件数据： ' + data.toString());
    })
})