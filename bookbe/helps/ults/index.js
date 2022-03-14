const getYear = (ts) => {
  const data = new Date(ts);
  return data.getFullYear();
}
const getDate = (ts) => {
   const data = new Date(ts);
   return data.getDate();
 }
const getBody = (ctx) =>{
  return ctx.request.body||{};
}
module.exports = {
   getYear,
   getDate,
   getBody,
};