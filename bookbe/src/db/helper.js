//共用组件
const getMate = () =>{
   return {
      createAt:{
         type:Number,
         default:(new Date()).getTime(),
      },
      updateAt:{
         type:Number,
         default:(new Date()).getTime(),
      },
   }
}
module.exports = {
   getMate,
};