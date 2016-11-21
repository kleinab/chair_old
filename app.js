var express = require('express');
var app = express();

app.use(express.static(__dirname  + '/public'));

var server = app.listen(3001, function() {
  var port = server.address().port;
  console.log("Started server at port", port);
});
