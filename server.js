const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session')

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
app.use(session({
  secret: "fascism is bad", // you may want to .gitignore this and import it (check out Dotenv)
  resave: false, // don't update cookie unless req.session has changed
  saveUninitialized: false // legally you can't track user until they log in
}))

// controllers
const siteController = require('./controllers/siteController');
app.use('/site', siteController)
const userController = require('./controllers/userController');
app.use('/user', userController)


app.get('/', (req, res) => {
  res.redirect('/site/0')
})


app.listen(3001, () => {
  console.log("SERVER RUNNING")  
})