const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

// We are not iporting this middleware into index.js because we only need this middleware
// for some of these routes, not all of them.
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  // Doesn't matter how many middlewares you throw in but make sure to have
  // a request handler in the very end.
  app.post('/api/stripe', requireLogin, async (req, res) => {
    // console.log('req.body:', req); // this is from body parser

    // req.user exists because of the wiring up passport via initialize and session.
    // Below if statement works but naive approach because I don't want to keep
    // typing this everywhere! So instead, let's make a middleware.
    // if (!req.user) {
    //   return res.status(401).send({ error: 'You must be logged in!' });
    // }

    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};

// When you make post express to an express server, express by default does
// not parse the payload. This is where body-parser comes in.
