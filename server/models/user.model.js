const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
}));