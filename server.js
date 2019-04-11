
var http = require('http');
var url = require('url');

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received.');
        // console.log(global);
        console.log('__filename: ' + __filename);
        console.log('__dirname: ' + __dirname);
        console.warn('')

        route(pathname);

        // 发送 HTTP 头部 
        // HTTP 状态值: 200 : OK
        // 内容类型: text/plain
        response.writeHead(200, {'Content-Type': 'text/plain'});
        
        // 发送响应数据 "Hello World"
        response.end('hello world\n');
    }

    // 创建http服务器
    http.createServer(onRequest).listen(3333);

    console.log('Server running at http://localhost:3333/');
}

exports.start = start;


