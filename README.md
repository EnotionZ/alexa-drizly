# alexa-drizly

An Amazon Echo / Alexa third party app to order drinks from Drizly.

### Generate SSL key and cert

`./_generate_cert.sh 'domain.com'`

copy the contents of `certs/client/my-root-ca.crt.pem` to SSL Certificate field
`cat certs/client/my-root-ca.crt.pem | pbcopy`

### Create a config.js file
`cp config.sample.js config.js`, remember to enter your partner token.
