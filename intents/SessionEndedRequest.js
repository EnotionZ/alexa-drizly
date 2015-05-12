module.exports = require('./Intent').create({

    id: 'SessionEndedRequest',

    onIntent: function(requestBody) {
        console.log('==========================================');
        console.log('session ended abruptly');
        console.log('==========================================');
    }
});

