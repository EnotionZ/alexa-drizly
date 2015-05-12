var http      = require('http');
var express   = require('express');
var bodyParser = require('body-parser');
var port      = process.argv[2] || 8443;


var app = express();
app.use(bodyParser.json());

var exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var server = http.createServer(app).listen(port, function () {
  port = server.address().port;
  console.log('Listening on http://' + server.address().address + ':' + port);
});

require('./routes/index')(app);
require('./intents')(app);
