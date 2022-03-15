//邀请码注册路由实现

const Router = require('@koa/router');
const mongoose = require('mongoose');
const InviteCode = mongoose.model('InviteCode');
//const { getBody } = require("../../ults/index");
//const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require('uuid');

const Inviterouter = new Router({
   prefix: '/invite'
});
//get形式 通过访问add接口添加邀请码 {"code":1,"data":{"code":"b0170500-30fc-472c-a120-411e663bb052","user":"","meta":{"createAt":1647334266588,"updateAt":1647334266588},"_id":"6230544190f12b9561803226","__v":0},"msg":"邀请码创建成功"}
//通过按钮点击
Inviterouter.post('/add',async (ctx) => {
   const code = new InviteCode({
      code:uuidv4(),
      user:'',
   });
   const saved = await code.save();

   ctx.body = {
      code:1,
      data:saved,
      msg:"邀请码创建成功",
   }
});






//注册接口实现

module.exports = Inviterouter;