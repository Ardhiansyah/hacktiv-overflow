const express = require('express');
const router = express.Router();
const { create, drop } = require('../controllers/answer.controller');
const { upvote, downvote } = require('../controllers/vote.controller');

module.exports = router
  .post('/', create)
  .delete('/:answerId', drop)
  // .post('/:answerId/upvote', upvote)
  // .post('/:answerId/downvote', downvote);