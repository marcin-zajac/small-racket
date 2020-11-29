const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const checkObjectId = require('../../middleware/checkObjectId');
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const checkRole = require('../../middleware/checkRole');

// @route    GET api/users/
// @desc     get all users
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const filter = {};
    const allUsers = await User.find(filter);
    if (!allUsers) {
      return res.status(400).json({ msg: 'There is no users' });
    }

    res.json(allUsers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/users/me
// @desc     get current user
// @access   Private
router.get('/me', auth, async (req, res) => {
  try {
    const filter = { _id: req.user.id };
    const user = await User.find(filter);
    if (!user) {
      return res.status(400).json({ msg: 'There is no users' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/users/:id
// @desc     get user by id
// @access   Private
router.get('/:id', auth, checkObjectId('id'), async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).json({ msg: 'User not defined' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/users/:id
// @desc     delete user by id
// @access   Admin only
router.delete(
  '/:id',
  auth,
  checkRole('Admin'),
  checkObjectId('id'),
  async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.params.id });
      if (!user) {
        return res.status(400).json({ msg: 'User not defined' });
      }
      await user.remove();
      res.json({ msg: `User ${user.email} removed` });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
