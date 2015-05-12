/**
 * preIntent authentication hook
 */

var Hash = require('../../models/hash');
var User = require('../../models/user');
var config = require('../../config');


module.exports = function(body, slots) {

    var userId = body.session.user.userId;

    User.getUser(userId, function(user) {
        if(!user) {

            var hash = Hash.generate();
            var url = config.base_url + 'auth/' + hash;
            Hash.save(hash, userId);

            this.respond(
                'You must authenticate before you can use this feature. A card has been added to your companion app with the link to log in',
                true,
                this.createCard('Log in to Drizly', 'open the following link in your browser window', url)
            );

        } else {
            this.user = user;
            this.onIntent(body, slots);
        }
    }.bind(this));

};
