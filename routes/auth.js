var Hash = require('../models/hash');
var drizly = require('../helpers/drizly');

function get(req, res) {
    var hash = req.params.hash;

    Hash.get(hash, function(userId) {
        res.render('auth', {
            title: 'Authentication',
            hash: hash,
            userId: userId
        });
    });
}

function post(req, res) {
    var amznId = req.body.amzn_id;
    var email = req.body.email;
    var password = req.body.password;

    drizly.login(req.body).then(function(data) {
        console.log(data);
        res.status(201).end();
    });
}


module.exports = {
    init: function(app) {
        app.get('/auth/:hash', get);
        app.post('/auth', post);
    }
};
