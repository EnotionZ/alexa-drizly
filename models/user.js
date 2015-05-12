var levelup = require('level');
var db = levelup('../db_user');



var getUser = function(id, fn) {
    db.get(id, function(err, value) {
        if(err) {
            fn(null);
        } else {
            fn(JSON.parse(value));
        }
    });
};


var saveUser = function(id, info) {
    db.put(id, JSON.stringify(info), function(err) {
    });
};


module.exports = {
    getUser: getUser,
    saveUser: saveUser
};
