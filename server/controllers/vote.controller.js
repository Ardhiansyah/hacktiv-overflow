const mongoose = require('mongoose');
const Vote = require('../models/vote.model');

module.exports = {
  upvote: (request, response) => {
    let vote
    if (request.params.answerId)
      new Vote({
        user: mongoose.Types.ObjectId(request.body.id),
        answer: mongoose.Types.ObjectId(request.params.answerId),
      }).save(err => {
        if (err) return response.status(500).send({ message: err });

        return response.status(201).send({
          message: 'Vote answer success'
        });
      });
    else
      new Vote({
        user: mongoose.Types.ObjectId(request.body.id),
        answer: mongoose.Types.ObjectId(request.params.answerId),
      }).save(err => {
        if (err) return response.status(500).send({ message: err });

        return response.status(201).send({
          message: 'Vote question success'
        });
      });
  },
  // downvote: (request, response) => {

  // },
};