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
  phone: {
    type: String,
  },
  department: {
    type: String,
    enum: Object.values(utils.departments),
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
    default: utils.roles.WORKER,
  },
  status: {
    type: String,
    enum: Object.values(utils.status),
    default: utils.status.AVAILABLE,
  },
  workStatus: {
    type: String,
    enum: Object.values(utils.workStatus),
    default: utils.workStatus.NOT_WORK,
  },
});

module.exports = mongoose.model('user', UserSchema);
