const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   nickname:String,
   password:String,
   age:Number,
})
const UserModal = mongoose.model('User',UserSchema);

const connect = () =>{
   mongoose.connect('mongodb://127.0.0.1:27017/bookbe');
   mongoose.connection.on('open',()=>{
      console.log("开启成功");

      const user = new UserModal({
         nickname:"xiaoming",
         password:"123456",
         age:12,
      })
      user.save();
   })
}

connect();