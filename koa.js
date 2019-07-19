const Koa = require('koa');
const app = new Koa();

// logger

app.use(async (ctx, next) => {
	console.log(1)
	await next();
	const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
  console.log(4)
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  console.log(2)
	await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
  console.log(3)
});

// response

app.use(async ctx => {
	console.log(5)
  ctx.body = 'Hello World';
});

app.listen(3000);