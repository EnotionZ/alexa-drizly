/**
 * @module intents
 */

var intents = [
    'LaunchRequest',
    'SessionEndedRequest'
];
intents = intents.map(function(id) { return require('./intents/' + id); });



var REQUEST_TYPES = {
    LAUNCH: 'LaunchRequest',
    INTENT: 'IntentRequest',
    END: 'SessionEndedRequest'
};



var getIntent = function(request) {
    var intentId;

    if(request.type === REQUEST_TYPES.INTENT) {
        intentId = request.intent.name;
    } else {
        // resolves to REQUEST_TYPES.LAUNCH || REQUEST_TYPES.END
        intentId = request.type;
    }

    for(var i = 0; i < intents.length; i++) {
        if(intents[i].id === intentId) {
            return intents[i];
        }
    }
};



module.exports = function(app) {
    app.post('/', function(req, res) {
        var o = req.body;
        var session = o.session;
        var request = o.request;
        var intent = getIntent(request);

        console.log(o);

        if(intent && typeof intent.activate === 'function') {
            var isIntentRequest = request.type === REQUEST_TYPES.INTENT;
            intent.activate(req, res, isIntentRequest);
        }
    });
};
