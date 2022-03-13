const koa = require('koa');
const koaBody = require('koa-body');
const { connect } = require('./db');//连接要在下面的routers之前
const registerRoutes = require('./routers');
const cors = require('@koa/cors');
const app = new koa();

connect().then(() => {
   app.use(cors());
   app.use(koaBody());
   registerRoutes(app);


   app.listen(3000, () => {
      console.log("启动成功");
   });

})

