const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema will describe what inividual records would look like.
const userSchema = new Schema({
  googleId: String,
  credits: {
    type: Number,
    default: 0
  }
});

// Two arguments mean we are trying to load something into mongoose.
// Single argument means we are trying to fetch something out of mongoose.
mongoose.model('users', userSchema);
