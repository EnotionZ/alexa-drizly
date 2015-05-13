var najax = require('najax');
var config = require('../config');
var user = require('../models/user');

var baseUrl = 'https://sandbox.drizly.com/api/v3/';

module.exports = {
    login: function(opts) {
        opts.partner_token = config.partner_token;
        opts.token = config.anon_token;
        console.log(opts);
        return najax({
            type: 'POST',
            url: baseUrl + 'user/authenticate',
            data: opts
        });
    }
};

