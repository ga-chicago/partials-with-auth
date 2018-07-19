const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// partials done
// review params done 
// review static assets
// review mongoose
// review sessions
// review bcrypt/logging in

// db connection
require('./db/db')

// middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

// controllers
const siteController = require('./controllers/siteController');
app.use('/site', siteController)
const userController = require('./controllers/userController');
app.use('/user', userController)


app.get('/', (req, res) => {
  res.render('home.ejs', { theNumber: undefined })
})


app.listen(3001, () => {
  console.log("SERVER RUNNING")  
})