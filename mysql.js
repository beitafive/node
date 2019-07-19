var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'xiaoqian',
	database: 'mysql',
	port:'3305'
})


connection.connect();

//插入数据
//var addsql = 'INSERT INTO websites(id,name,url,alexa,country) VALUES(0,?,?,?,?)';
//var params = ['安厨微店','https://wd-user.hzanchu.com','1','CN']

//查询数据
//var read = 'SELECT * FROM websites';

//删除数据
//var del = 'DELETE FROM websites where id=3';

//更新数据
var update = 'UPDATE websites SET name=?,url=? where id=?';
var params = ['淘宝','https:\/\/china.com',2]

connection.query(update,params,function(error,results,fields){
	if(error){
		console.log(error)
		return;
	}
	console.log('The solution is:',results);
})
console.log(__filename)
console.log(__dirname)
