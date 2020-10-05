const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// @route    POST api/users/register
// @desc     Register user
// @access   Public
router.post(
  '/register',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
    check('password', 'Password must have minimum six letters').isLength({
      min: 6,
    }),
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

      const { firstName, lastName, email, password } = req.body;
      const salt = await bcrypt.genSalt(10);

      const newUser = new User({
        firstName,
        lastName,
        password: await bcrypt.hash(password, salt),
        email,
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
// router.post('/login', (req, res) => res.json({ response: 'value' }));
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
    try {
        const options = {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.PUB_KEY,
            algorithms: ['RS256']
          };

          passport.use( new JwtStrategy(options, (jwt_payload, done) => {
            User.findOne({id: jwt_payload.sub}, function(err, user) {
        
                // This flow look familiar?  It is the same as when we implemented
                // the `passport-local` strategy
                if (err) {
                    return done(err, false);
                }
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
                
            })
          }))
    } catch (error) {}
  }
);

module.exports = router;
