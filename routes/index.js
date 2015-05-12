module.exports = function(app) {
    app.get('/', function (req, res) {
        res.writeHead(200);
        res.end("hello world\n");
    });

    app.get('/auth/:hash', require('./auth'));
};
