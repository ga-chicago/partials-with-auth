const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  if(!req.session.loggedIn) {
    req.session.message = "You must be logged in to do that.", 
    req.session.messageClass = "bad",
    res.redirect('/user/login')
  }
  else {
    next()
  }
})

router.get('/', (req, res) => {
  res.redirect('/site/0');
})

router.get('/:id', (req, res) => {
  const message = req.session.message;
  const messageClass = req.session.messageClass;
  req.session.message = null
  res.render('home.ejs', { 
    theNumber: req.params.id, 
    message: message,
    messageClass: messageClass
  })
})






module.exports = router;