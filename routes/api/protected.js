const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const checkAdmin = require('../../middleware/checkAdmin');

module.exports = router.get('/adminRoute', [auth, checkAdmin], (req, res) => {
  res.json(req.user);
});


module.exports = router.get('/', auth, (req, res) => {
  res.json(req.user);
});
