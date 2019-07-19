var http = require("http");
var fs = require("fs");

//1. 服务端 = 三步｛接收请求，处理请求，发送响应｝
var server = http.createServer();

var handleRequest = function(request,response){
	var url = request.url;
	if(url === '/'){
		fs.readFile('./test.html','utf8',function(err,data){
			if(err){
				throw err
			}
			response.writeHead(200,{
				'Content-Type':'text/html'
			})
			response.end(data)
		})
	}else if(url.startsWith("/img")){
		var filePath = '.'+url;
		fs.readFile(filePath,function(err,data){
			if(err){
				throw err
			}
			response.end(data)
		})
	}else{
		response.end("404 not found")
	}
}

//event  request请求事件  
//任何请求都会触发request事件
server.on('request',handleRequest);

server.listen("8080",function(){
	console.log("Server is running at port 8080 ")
})
