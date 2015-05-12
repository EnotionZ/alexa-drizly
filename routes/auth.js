var Hash = require('../models/hash');

module.exports = function(req, res) {
    var hash = req.params.hash;

    Hash.get(hash, function(userId) {
        res.render('auth', {
            title: 'Authentication',
            hash: hash,
            userId: userId
        });
    });
};
