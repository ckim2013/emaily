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

  // After user comes back from the oauth flow, passport middleware
  // will take over in authenticate('google') then passes the request on to the
  // arrow function which takes the request in and tells the response to inform
  // the browser that it needs to go to another route.
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
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
