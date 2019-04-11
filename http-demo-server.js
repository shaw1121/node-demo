var http = require('http');
var fs = require('fs');
var url = require('url');

// 创建服务器
http.createServer(function(request, response) {
    // 解析请求，包括文件名
    var pathname = url.parse(request.url).pathname;

    console.log('request for ' + pathname + ' received.');

    // 从文件系统中读取请求的内容
    fs.readFile(pathname.substr(1), function(err, data) {
        if (err) {
            console.log(err);
            response.writeHead(400, {'Content-Type': 'text/html'});
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});

            // 响应文件内容
            response.write(data.toString());
        }

        // 发送响应数据
        response.end();
    })
}).listen(2222);

console.log('server running at port 2222');
