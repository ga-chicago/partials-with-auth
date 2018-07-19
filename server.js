const express = require('express');
const app = express();

// partials
// review params
// review mongoose
// review sessions
// review bcrypt/logging in


// controllers
const siteController = require('./controllers/siteController');
app.use('/site', siteController)


app.get('/', (req, res) => {
  res.render('home.ejs', { theNumber: undefined })
})


app.listen(3001, () => {
  console.log("SERVER RUNNING")  
})