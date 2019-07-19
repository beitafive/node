//	 加载操作文件的模块包
//	fs 是 Node 提供的一个核心模块，专门用来操作文件
var fs = require("fs");

//写入文件 writeFile ：文件路径，要写入的文件数据，回调函数
fs.writeFile('./test.txt','hello node',function(err){
	//如果有错误，err 是一个错误对象 
	//如果没有错误，err为null
	if(err){
		return console.log("写入失败")
	}
	console.log("OK")
})


//读取文件 readFile： 文件路径，内容编码，回调函数
fs.readFile('./test.txt','utf8',function(err,data){
	if(err){
		throw err
	}
	console.log(data)
})
