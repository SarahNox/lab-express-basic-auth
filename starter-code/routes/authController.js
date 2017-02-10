const express = require("express");
const router = express.Router();
const User           = require("../models/user");
const bcrypt         = require("bcrypt");
const bcryptSalt     = 10;

router.get("/", (req, res, next) => {
  res.render("basic-auth/signup");
});
//-----------------------------SIGNING UP-------------------------------------//
////////////////////////////////////////////////////////////////////////////////
router.post("/signup", (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;
  var salt     = bcrypt.genSaltSync(bcryptSalt);
  var hashPass = bcrypt.hashSync(password, salt);

  if (username === "" || password === "") {
  res.render("basic-auth/signup",
  { errorMessage: "Indicate a username and a password to sign up"});
   } else {
     var newUser  = User({username, password: hashPass });

     newUser.save((err) => {res.redirect("/basic-auth/signup");});
   }
});
module.exports = router;
