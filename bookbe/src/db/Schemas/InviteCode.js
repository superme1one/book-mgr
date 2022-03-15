const mongoose = require('mongoose');
const {getMate} = require('../helper');
const InviteCodeSchema = new mongoose.Schema({
   //生成的邀请码
   code:String,
   //邀请码对应的账户
   user:String,
   meta:getMate(),
})
mongoose.model('InviteCode',InviteCodeSchema);