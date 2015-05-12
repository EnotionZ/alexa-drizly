module.exports = require('./Intent').create({

    id: 'LaunchRequest',

    preIntent: require('./hooks/auth'),

    onIntent: function(requestBody) {
        this.respond('yes, what can I help you with', false);
    }
});
