const mongoose = require('mongoose');
//const { modelNames } = require('./../db');
const connection = require('./../db');
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    minLength: 1,
  },
  lastName: {
    type: String,
    minLength: 1,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ['ADMIN', 'MODERATOR', 'USER'],
    required: true,
  },
});

const User = connection.model('User', userSchema);
module.exports = User;
