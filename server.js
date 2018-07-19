const express = require('express');
const app = express();

// partials
// review params
// review mongoose
// review sessions
// review bcrypt/logging in

app.get('/', (req, res) => {
  res.render('home.ejs')
})


app.listen(3001, () => {
  console.log("SERVER RUNNING")  
})