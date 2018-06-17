const mongoose = require('mongoose');

let schema = new mongoose.Schema({
  number: Number,
  count: Number
});

module.exports = mongoose.model('statistics', schema);
