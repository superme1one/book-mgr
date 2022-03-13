const getYear = (ts) => {
  const data = new Date(ts);
  return data.getFullYear();
}
const getDate = (ts) => {
   const data = new Date(ts);
   return data.getDate();
 }
module.exports = {
   getYear,
   getDate,
};