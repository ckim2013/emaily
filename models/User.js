const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema will describe what inividual records would look like
const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema);
