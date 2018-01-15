const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
  app.post('/api/stripe', (req, res) => {
    console.log('keys stripe stripeSecretKey', keys.stripeSecretKey);
    console.log('req.body:', req.body);
  });
};

// When you make post express to an express server, express by default does
// not parse the payload. This is where body-parser comes in.
