var express = require('express');
var app = express();

app.use(express.static('www'));

app.get('/', function(req, res) {
  res.send('index');
});

var server = app.listen(3000, function() {
  console.log('roy.eng.br running on http://%s:%s', server.address().address, server.address().port)
});
