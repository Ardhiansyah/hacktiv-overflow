const express = require('express');
const router = express.Router();
const { verify } = require('../middlewares/token.middleware');
const { findAll, findById, findByUserId, create, update, drop } = require('../controllers/question.controller');
const answer = require('../controllers/answer.controller');
const { upvote, downvote } = require('../controllers/vote.controller');

module.exports = router
  .get('/', findAll)
  .get('/user', verify, findByUserId)
  .get('/:id', findById)
  .post('/', verify, create)
  .put('/:id', verify, update)
  .delete('/:id', verify, drop)
  .post('/:id/answer', verify, answer.create)
  .delete('/:id/answer/:answerId', verify, answer.drop)
  // .post('/:id/upvote', verify, upvote)
  // .post('/:id/downvote', verify, downvote)
  // .use('/:id/answer', verify, require('./answer.route'));