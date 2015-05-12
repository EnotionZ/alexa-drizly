module.exports = require('./Intent').create({

    id: 'LaunchRequest',

    onMessage: function(requestBody) {
        this.respond('yes, what can I help you with', false);
    }
});
