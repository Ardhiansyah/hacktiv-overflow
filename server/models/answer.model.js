const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Answer', new Schema({
  description: String,
  user: { type: Schema.ObjectId, ref: 'User' },
  vote: [{ type: Schema.ObjectId, ref: 'Vote'}],
}, {
  timestamps: true,
}));