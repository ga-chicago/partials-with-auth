const express = require('express');
const router = express.Router();



router.get('/:id', (req, res) => {
  res.render('home.ejs', { theNumber: req.params.id })
})






module.exports = router;