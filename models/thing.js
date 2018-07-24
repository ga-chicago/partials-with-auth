const mongoose = require('mongoose')

const thingSchema = new mongoose.Schema({
  title: String
})

const Thing = mongoose.model('Thing', thingSchema);

module.exports = Thing