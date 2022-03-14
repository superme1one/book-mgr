const Router = require('@koa/router');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const { getBody } = require("../../ults/index");
const jwt = require("jsonwebtoken");
const authrouter = new Router({
   prefix: '/auth'
});
//注册接口实现
authrouter.post('/register', async (ctx) => {
   const {
      account,
      password,
   } = ctx.request.body;
   //用户名相同则返回
   if(account ==''||password == ''){
      ctx.body = {
         code: 0,
         msg: '字段非法不能为空',
         data: null,
      };
      return;
   }
   const haveexist = await User.findOne({
      account,
   }).exec();
   if (haveexist) {
      ctx.body = {
         code: 0,
         msg: '该用户名已经存在',
         data: null,
      };
      return;
   }
   const user = new User({
      account,
      password,

   });
   const res = await user.save();
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