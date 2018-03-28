const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Vote', new Schema({
  user: { type: Schema.ObjectId, ref: 'User' },
  answer: { type: Schema.ObjectId, ref: 'Answer' },
  question: { type: Schema.ObjectId, ref: 'Question' },
}));