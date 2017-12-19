const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  // The user.id is not the same as the profile.id! We use the mongodb
  // generated id instead of profile.id because this allows for flexibility
  // just in case we want to use other types of Oauth and not just google.
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
      .then(user => {
        done(null, user);
      }
    );
});

// The callback key is the url that the client will get sent to once he/she
// grants permission to our app.
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback', // We could place in actual domain but relative path is easier
      proxy: true // By default, the strategy assumes that if our request from the browser when through a proxy, the request should no longer be https. Thus, we need to set the value of proxy to true to make the google oauth work or else we would get an error.
    },
    // (accessToken, refreshToken, profile, done) => {
    //   console.log('accessToken', accessToken);
    //   console.log('refreshToken', refreshToken);
    //   console.log('profile', profile);
    //   console.log('done', done);
    //
    //   // This query returns a promise
    //   User.findOne({ googleId: profile.id })
    //       .then(existingUser => {
    //         if (existingUser) {
    //           // We already have a record with a given profile ID.
    //           // If we found a user, then everything is fine so we pass
    //           // in null to the error parameter.
    //           done(null, existingUser);
    //         } else {
    //           // We don't have a user record with this ID so we will make one.
    //           // Here we create a user model instance and then save it
    //           // (using save()) which returns a promise.
    //           new User({ googleId: profile.id })
    //               .save()
    //               .then(user => done(null, user));
    //         }
    //       });
    // }

    // More modern approach on handling promises
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
