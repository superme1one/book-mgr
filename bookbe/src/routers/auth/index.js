const Router = require('@koa/router');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const authrouter = new Router({
   prefix:'/auth'
});
authrouter.post('/register',async(ctx)=>{
   const {
      account,
      password,
   } = ctx.request.body;
   //用户名相同则返回
   const haveexist = await User.findOne({
      account,
   }).exec();
   if(haveexist){
      ctx.body ={
         code:0,  
         msg:'该用户名已经存在',
         data:null,
      };
      return;
   }
   const user = new User({
      account,
      password,

   });
   const res = await user.save();
   ctx.body ={
      code:1,
      msg:'注册成功',
      data:res,
   };
   //console.log("注册成功");
})
authrouter.post('/login',async(ctx)=>{
   ctx.body = '登录成功';
   //console.log("注册成功");
})
module.exports = authrouter;