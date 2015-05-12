var crypto = require('crypto');
var levelup = require('level');
var db = levelup('../db_hash');



var generate = function(id, fn) {
    var current_date = (new Date()).valueOf().toString();
    var random = Math.random().toString();
    return crypto.createHash('sha1').update(current_date + random).digest('hex');
};

var get = function(hash, fn) {
    db.get(hash, function(err, val) {
        if(err) {
            fn(null);
        } else {
            fn(val);
        }
    });
};


var save = function(hash, userId) {
    db.put(hash, userId, function(err) {
    });
};


module.exports = {
    generate: generate,
    save: save,
    get: get
};

