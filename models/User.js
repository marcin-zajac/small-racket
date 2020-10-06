const mongoose = require('mongoose');
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
    enum: ['Admin', 'Worker', 'Manager'],
    default: 'Worker',
  },
});

module.exports = mongoose.model('user', UserSchema);
