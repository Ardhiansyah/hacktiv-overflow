const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Question', new Schema({
  title: String,
  description: String,
  user: { type: Schema.ObjectId, ref: 'User' },
  answer: [{ type: Schema.ObjectId, ref: 'Answer' }],
  vote: [{ type: Schema.ObjectId, ref: 'Vote'}],
}, {
  timestamps: true,
}));