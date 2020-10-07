const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const checkObjectId = require('../../middleware/checkObjectId');
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const checkRole = require('../../middleware/checkRole');

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
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findOne({ email: req.body.email }).exec();
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
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
      let user = await User.findOne({ email });

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
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

// @route    GET api/users/
// @desc     get all users
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const filter = {};
    const all = await User.find(filter);
    if (!all) {
      return res.status(400).json({ msg: 'There is no users' });
    }

    res.json(all);
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
router.delete('/:id', auth, checkRole("Admin") ,checkObjectId('id'), async (req, res) => {
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
});

module.exports = router;
