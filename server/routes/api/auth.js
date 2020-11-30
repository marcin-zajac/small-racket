const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

// @route    POST api/users/register
// @desc     Register new user
// @access   Public
router.post(
  '/register',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
    check('password', 'Password must have minimum six letters').isLength({
      min: 6,
    }),
    check('role', 'You can create accouunt only as worker or manager type')
      .not()
      .equals('Admin'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    try {
      const user = await User.findOne({ email: req.body.email }).exec();
      if (user) {
        res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        return;
      }

      const { firstName, lastName, email, password, role } = req.body;
      const salt = await bcrypt.genSalt(10);

      const newUser = new User({
        firstName,
        lastName,
        email,
        password: await bcrypt.hash(password, salt),
        role,
      });

      await newUser.save();

      res.status(200).json({ msg: 'ok', user: newUser });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    POST api/users/login
// @desc     Login user
// @access   Public
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
    check('password', 'Password incorrect').isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.KEY,
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
