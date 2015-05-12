var BaseIntent = {

    /**
     * activate this intent
     * @param {object} req
     * @param {object} res
     * @param {boolean} isIntentRequest
     */
    activate: function(req, res, isIntentRequest) {
        this.req = req;
        this.res = res;

        if(typeof this.onIntent === 'function') {
            var slots = isIntentRequest ? req.body.request.intent.slots : null;

            if(typeof this.preIntent === 'function') {
                this.preIntent.call(this, req.body, slots);
            } else {
                this.onIntent(req.body, slots);
            }
        }
    },

    /**
     * creates card
     * @param {string} title
     * @param {string} subtitle
     * @param {string} content
     */
    createCard: function(title, subtitle, content) {
        return {
            type: 'Simple',
            title: title,
            subtitle: subtitle,
            content: content
        };
    },

    /**
     * respond back to Alexa
     * @param {string} msg
     * @param {boolean=true} shouldEnd
     * @param {object} card
     */
    respond: function(msg, shouldEndSession, card) {
        if(!this.res) {
            return false;
        }

        card = card || null;

        var output =  {
            "version": "1.0",
            "sessionAttributes": {
                "string": {
                }
            },
            "response": {
                "outputSpeech": {
                    "type": "PlainText",
                    "text": msg
                },
                "card": card,
                "shouldEndSession": shouldEndSession
            }
        };


        this.res.set({
            'Content-Type': 'application/json;charset=UTF-8',
            'Content-Length': JSON.stringify(output).length
        });

        this.res.send(output);

    }
};

var extend = function (obj) {
    Array.prototype.slice.call(arguments, 1).forEach(function(source) {
        if (source) {
            for (var prop in source) {
                if(source.hasOwnProperty(prop)) {
                    obj[prop] = source[prop];
                }
            }
        }
    });
    return obj;
}

module.exports = {
    create: function(props) {
        return Object.create(extend(props, BaseIntent));
    }
};
