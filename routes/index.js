var express = require('express');
var router = express.Router();

router.use('/', require('./creditcard'));

module.exports = router;