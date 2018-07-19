const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/partials-db', { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
  console.log("mongoose is connected")
})
mongoose.connection.on('disconnected', () => {
  console.log("mongoose is disconnected")
})
mongoose.connection.on('error', (err) => {
  console.error(err, " <--------mongoose connection error")
})