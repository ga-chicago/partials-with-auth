const express = require('express');
const router = express.Router();
const User = require('../models/user')
const bcrypt = require('bcrypt')

router.get('/login', (req, res) => {
  res.render('login.ejs');
})
router.get('/register', (req, res) => {
  res.render('register.ejs');
})
router.post('/login', (req, res) => {
  res.json(req.body);
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
  res.send('have a nice day');
})


module.exports = router;