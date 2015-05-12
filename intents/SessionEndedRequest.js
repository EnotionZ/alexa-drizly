module.exports = require('./Intent').create({

    id: 'SessionEndedRequest',

    onMessage: function(requestBody) {
        console.log('==========================================');
        console.log('session ended abruptly');
        console.log('==========================================');
    }
});

