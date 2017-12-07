const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

// The callback key is the url that the client will get sent to once he/she
// grants permission to our app.
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log('accessToken', accessToken);
      // console.log('refreshToken', refreshToken);
      // console.log('profile', profile);
      // console.log('done', done);

      // This query returns a promise
      User.findOne({ googleId: profile.id })
          .then(existingUser => {
            if (existingUser) {
              // We already have a record with a given profile ID
            } else {
              // We don't have a user record with this ID so we will make one
              // Here we create a user instance and then save it (using save())
              new User({ googleId: profile.id }).save();
            }
          });
    }
  )
);
