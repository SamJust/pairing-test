const mongoose = require('mongoose');

let schema = new mongoose.Schema({
  number: Number,
  amount: Number
});

module.exports = mongoose.model('statistics', schema);
