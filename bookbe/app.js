const koa = require('koa');
const app = new koa();
const ults = require('./helps/ults/index');
//console.log(ults.getDate(new Date().getTime()));
//console.log(ults.getYear(new Date().getTime()));
app.use((ctx)=>{
   const {request:req} = ctx;
   const {url} = req;
   console.log(url);
   if(url ==='/user/123'){
      ctx.body = "<h1>获取用户123的信息</h1>";
      return;
   }
   
   ctx.body = "未定义";
 })
app.listen(3000,()=>{
   console.log("启动成功");
})