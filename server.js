var express = require('express');

var app = express();





// listen
var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('listening on port', port);
});
