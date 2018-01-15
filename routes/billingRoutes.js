const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
  app.post('/api/stripe', async (req, res) => {
    // console.log('req.body:', req); // this is from body parser
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });

    // req.user exists because of the wiring up passport via initialize and session
    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};

// When you make post express to an express server, express by default does
// not parse the payload. This is where body-parser comes in.
