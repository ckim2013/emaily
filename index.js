// import express from 'express';
// As of the creation of the course, the nodejs runtime only has support
// for common JS modules. Thus, import express from 'express'; wouldn't work.
// Node.js does not have support for ES2015 modules, at least not at the
// creation of the course. This is not a problem though for frontend React.
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


// By invoking express(), we are creating a new application that represents
// a running express app. Inside a single node.js project, we can have multiple
// express apps.
const app = express();

// An express server has a number of route handlers associated with it.
// By calling app.get, we are creating a new route handler.
// app.get('/', (req, res) => {
//   res.send({ bye: 'buddy' });
// });

passport.use(new GoogleStrategy());

// Here, express is telling NODE to listen in on port 5000.
const PORT = process.env.PORT || 5000;
app.listen(PORT);
