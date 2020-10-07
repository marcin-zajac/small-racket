const mongoose = require('mongoose');
const utils = require('../config/utils');
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  email_is_verified: {
    type: Boolean,
    default: false,
  },
  password: String,
  isWorkingNow: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: Object.values(utils.roles),
    default: 'Worker',
  },
});

module.exports = mongoose.model('user', UserSchema);
