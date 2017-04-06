// API Router

// Required packages
const express = require('express');

// Router creation
const router = express.Router();
module.exports = router;

router.use('/team', require('./team'));
router.use('/player', require('./player'));
router.use('/game', require('./game'));
