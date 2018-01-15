// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  module.exports = require('./prod');
} else {
  // we are in development - return the dev keys
  module.exports = require('./dev');
}

// ES2015 import and export does not allow for logic, as apposed to
// what is seen in this file, where we check he NODE_ENV. Client side key
// handling is tricky because in our client side, we are using ES2015 and
// we need to figure out how to use the stripe keys for our frontend.
