"use strict";

let start = Date.now();

async function asyncBox (name){
	const a = await getName(name);
	const b = await returnName(a);
	return b
}
function getName(name){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.log(Date.now() - start ,'1');
			resolve(name + 1) 
		},100)
	})
}

function returnName(name){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.log(Date.now() - start ,'2');
			resolve(name + 2) 
		},50)
	})
}
asyncBox('123').then((res)=>{
	console.log(res)
	console.log(Date.now() - start ,'3');
})
