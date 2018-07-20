const express = require('express');
const router = express.Router();
const User = require('../models/user')
const bcrypt = require('bcrypt')

router.get('/login', (req, res) => {
  if(req.session.loggedIn) {
    req.session.message = "You are already logged in."
    res.redirect('/site/0');
  }
  else {
    const message = req.session.message;
    req.session.message = null;
    res.render('login.ejs', {
      message: message
    }); 
  }
})
router.get('/register', (req, res) => {
  res.render('register.ejs');
})
router.post('/login', async (req, res, next) => {
  try {
    const foundUser = await User.findOne({ username: req.body.username })
    if(foundUser) {
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        req.session.loggedIn = true;
        req.session.message = "You are logged in as " + foundUser.username;
        res.redirect('/site/0')

      } else {
        console.log("bad password");
        req.session.message = "Invalid username or password.";
        res.redirect('/user/login')
      }
    } else {
      console.log("username not found")
      req.session.message = "Invalid username or password.";
      res.redirect('/user/login');
    }
  }
  catch (err) {
    next(err)
  }
})
router.post('/register', async (req, res, next) => {
  try {
    // create a user on the site
    const createdUser = await User.create({
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    })
    res.json(createdUser);
  } 
  catch (err) {
    next(err);
  }
})
router.get('/logout', (req, res) => {
  req.session.loggedIn = false; 
  req.session.message = "You are logged out.  Thanks for visiting."
  res.redirect('/user/login')
})


module.exports = router;