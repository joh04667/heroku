var express = require('express');
var path = require('path');


var app = express();

app.use(express.static('public'));



// listen
var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('listening on port', port);
});

app.get('/', function(req, res) {
  console.log('request incoming');
  res.sendFile(path.join(__dirname, './index.html'));
});
