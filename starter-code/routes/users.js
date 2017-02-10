var express = require('express');
var router = express.Router();
const User = require('../models/user');
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.get('/signup', function(res,req,next){
  res.render('/');
});

module.exports = router;
