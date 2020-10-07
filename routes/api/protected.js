const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const checkRole = require('../../middleware/checkRole');
const utils = require('../../config/utils');

module.exports = router.get(
  '/adminRoute',
  [auth, checkRole(utils.roles.ADMIN)],
  (req, res) => {
    res.json({ msg: 'Admin route' });
  }
);

module.exports = router.get('/', auth, (req, res) => {
  res.json(req.user.email);
});
