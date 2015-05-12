var fs        = require('fs');
var path      = require('path');
var https     = require('https');
var express   = require('express');
var bodyParser = require('body-parser');
var port      = process.argv[2] || 8443;

var rootcrt   = path.join(__dirname, 'certs', 'server', 'my-root-ca.crt.pem');
var serverKey = path.join(__dirname, 'certs', 'server', 'my-server.key.pem');
var serverCrt = path.join(__dirname, 'certs', 'server', 'my-server.crt.pem');

require('ssl-root-cas').inject().addFile(rootcrt);

var options = {
    key: fs.readFileSync(serverKey),
    cert: fs.readFileSync(serverCrt)
};

var app = express();
app.use(bodyParser.json());

var server = https.createServer(options, app).listen(port, function () {
  port = server.address().port;
  console.log('Listening on https://' + server.address().address + ':' + port);
});

require('./routes/index')(app);
require('./intents')(app);
