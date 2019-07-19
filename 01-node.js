var express = require('express');
var app = express();
var path = require("path")
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
function sendEmail(obj){
	return new Promise((resolve,reject)=>{
		var transporter = nodemailer.createTransport({
			service: 'qq',  
			auth: {  
			    user: '851401711@qq.com',  
			    pass: 'lolsrrtsrcisbbae' //授权码,通过QQ获取  
			}  
		});
		var mailOptions = {  
		  from: '851401711@qq.com', // 发送者  
		  to: obj.email, // 接受者,可以同时发送多个,以逗号隔开  
		  subject: obj.name, // 标题  
		  //text: 'Hello world', // 文本  
		  html: `<h2>Hello</h2>`   
		};  
			
		transporter.sendMail(mailOptions, function(err, info) {
			if(err) {
				console.log(err);
				return;
			}
			console.log(obj.email);
			console.log(obj.name);
			resolve()
		});
	})
}
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/static', express.static('static'))
app.get('/api/index/getlist',(req,res)=>{
	res.send(req.query.index)
})
app.post('/api/send/email',urlencodedParser,(req,res)=>{
	res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
	if(req.body.user_name=='' || req.body.email == ''){
		var error = {
			"msg":"请完善信息"
		}
		res.end(JSON.stringify(error))
		return null;
	}
	var response = {
		"name":req.body.user_name,
		"email":req.body.email
	}
	sendEmail(response).then(()=>{
		res.end(JSON.stringify(response))		
	})
})
app.get('/*', function (req, res) {
	res.sendFile(__dirname+'/3.1.0/3.1.0/index.html');
})

var server = app.listen(8081, function () {
  var host = '127.0.0.1';
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})