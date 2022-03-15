const Router = require('@koa/router');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const InviteCode = mongoose.model('InviteCode');
const { getBody } = require("../../ults/index");
const jwt = require("jsonwebtoken");
const authrouter = new Router({
   prefix: '/auth'
});
//注册接口实现
authrouter.post('/register', async (ctx) => {
   //对象结构，对前端传过的ctxbody进行解构
   const {
      account,
      password,
      invitecode,
   } = getBody(ctx);
   //检查字段是否为空
   if(account ==''||password == ''||invitecode == ''){
      ctx.body = {
         code: 0,
         msg: '字段非法不能为空',
         data: null,
      };
      return;
   }
   //检测邀请码是否合法
   const findcode = await InviteCode.findOne({
      //注意这里的findone要设定查找值
      code:invitecode,
   }).exec();
   //如果邀请码在数据库中不存在或者已经被注册过了，否则继续往下走正常注册流程
   if(!findcode||findcode.user){
      ctx.body = {
         code: 0,
         msg: '邀请码不正确，请联系管理员获取邀请码',
         data: null,
      };
      return;
   }
   //查找用户是否已经存在
   const finduser = await User.findOne({
      account,
   }).exec();
   
   //如果查找到则返回
   if (finduser) {
      ctx.body = {
         code: 0,
         msg: '该用户名已经存在',
         data: null,
      };
      return;
   }
   //对modal user进行实例化
   const user = new User({
      account,
      password,

   });
   //存储到数据库
   const res = await user.save();


   //将邀请码的user进行赋值，避免重复使用
   findcode.user = res._id;
   //更新时间
   findcode.meta.updateAt =new Date().getTime();
   
   //存储到数据库
   await findcode.save();



   //返回注册成功
   ctx.body = {
      code: 1,
      msg: '注册成功',
      data: res,
   };

})






//登录接口逻辑实现
authrouter.post('/login', async (ctx) => {
   //通过请求体获取传过来的值
   const {
      account,
      password,
   } = getBody(ctx);
   if(account ==''||password == ''){
      ctx.body = {
         code: 0,
         msg: '字段非法不能为空',
         data: null,
      };
      return;
   }
   console.log(account, password);
   //查找数据库中是否有该用户名
   const haveexist = await User.findOne({
      account,
   }).exec();
   //如果不存在则报错，同时逻辑不再向下走
   if (!haveexist) {
      ctx.body = {
         code: 0,
         msg: '未查找到该用户',
         data: null,
      }
      return;
   }
   //console.log("用户名存在，正在检测密码是否正确");
   //jwt要求对象加密对象payload纯净，因此传值之前先进行解析
   const user = {
      account: haveexist.account,
      id: haveexist.id,

   }
   //检验密码是否正确
   if (haveexist.password === password) {
      ctx.body = {
         code: 1,
         msg: '密码正确，登录成功',
         data: {
            user,
            token: jwt.sign(user, 'bookbe'),
         },
      }
      return;
   }
   ctx.body = {
      code:0,
      msg:'密码错误',
      data:null,
   }
   return;

})
module.exports = authrouter;