const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/site/0');
})

router.get('/:id', (req, res) => {
  const message = req.session.message;
  req.session.message = null
  res.render('home.ejs', { 
    theNumber: req.params.id, 
    message: message
  })
})






module.exports = router;