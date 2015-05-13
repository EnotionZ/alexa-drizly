module.exports = function(app) {
    app.get('/', function (req, res) {
        res.writeHead(200);
        res.end("hello world\n");
    });

    require('./auth').init(app);
};
