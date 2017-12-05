const passport = require('passport');

module.exports = (app) => {
  // An express server has a number of route handlers associated with it.
  // By calling app.get, we are creating a new route handler.
  // app.get('/', (req, res) => {
  //   res.send({ bye: 'buddy' });
  // });

  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google')
  );
};
