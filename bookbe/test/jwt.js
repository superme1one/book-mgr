var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'ba123123r' }, 'shhhhh');
//console.log(token);
jwt.verify(token, 'shhhhh', function(err, payload) {
   console.log(err,payload); // bar
 });