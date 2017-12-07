// import express from 'express';
// As of the creation of the course, the nodejs runtime only has support
// for common JS modules. Thus, import express from 'express'; wouldn't work.
// Node.js does not have support for ES2015 modules, at least not at the
// creation of the course. This is not a problem though for frontend React.
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
// To tell passport to make use of the cookies
const passport = require('passport');
const keys = require('./config/keys');

// Order of require matters a lot!
require('./models/User');
// Since we are not returning anything in passport.js file and just require
// the code to run, we can just require without assigning the require to
// any variable.
require('./services/passport');

mongoose.connect(keys.mongoURI);

// By invoking express(), we are creating a new application that represents
// a running express app. Inside a single node.js project, we can have multiple
// express apps.
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // Cookie will last for 30 days
    keys: [keys.cookieKey] // Used to encrypt cookie
  })
);
app.use(passport.initialize());
app.use(passport.session());

// We could have required and assigned to a const, and then call the const
// with the app but this is not necessary. We can just do below.
require('./routes/authRoutes')(app);

// Here, express is telling NODE to listen in on port 5000.
const PORT = process.env.PORT || 5000;
app.listen(PORT);
