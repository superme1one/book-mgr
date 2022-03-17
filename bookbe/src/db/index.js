//Schemas 要注册了才能使用
require('./Schemas/User');
require('./Schemas/InviteCode');
require('./Schemas/Book');
const mongoose = require('mongoose');
const connect = () =>{
   return new Promise((resolve) =>{
      //1.连接
      mongoose.connect('mongodb://127.0.0.1:27017/bookbe');
      //2.操作数据库
      mongoose.connection.on('open',()=>{
         console.log("数据库连接成功");

         resolve();
      });
   });
}

module.exports = {
   connect,
}
