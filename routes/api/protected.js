const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')

module.exports = router.get('/', auth, (req, res)=>res.send("protected route :)"))

