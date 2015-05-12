# alexa-drizly

An Amazon Echo / Alexa third party app to order drinks from Drizly.

_Note: This is not meant to be a production-level app; it's just a programming exercise in building an end-to-end Alexa app with third party integration. Shortcuts will be taken, error-handeling will be omitted, and designs will be glossed over. Use at your own risk!_


### Generate SSL key and cert in dev mode

Alexa Apps are HTTPS endpoints. You can use a self-signed certificate in development mode.

`./_generate_cert.sh 'domain.com'`

Go to your app in the [Alexa developer portal](https://developer.amazon.com/edw/home.html) and copy the contents of `certs/client/my-root-ca.crt.pem` to SSL Certificate field 

### Create a config.js file
`cp config.sample.js config.js`, remember to enter your partner token.
