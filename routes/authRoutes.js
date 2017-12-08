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

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  // req is incoming request, and res is outgoing response.
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
