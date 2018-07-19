const express = require('express');
const router = express.Router();


router.get('/login', (req, res) => {
  res.render('login.ejs');
})
router.get('/register', (req, res) => {
  res.render('register.ejs');
})
router.post('/login', (req, res) => {
  res.json(req.body);
})
router.post('/register', (req, res) => {
  console.log(req.body, "this is req.body")
  res.json(req.body);
})
router.get('/logout', (req, res) => {
  res.send('have a nice day');
})


module.exports = router;