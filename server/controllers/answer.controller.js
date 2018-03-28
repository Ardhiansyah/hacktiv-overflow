const mongoose = require('mongoose');
const Answer = require('../models/answer.model');
const Question = require('../models/question.model');

module.exports = {
  create: (request, response) => {
    let newAnswer = new Answer({
      description: request.body.description,
      user: mongoose.Types.ObjectId(request.body.id),
    });
    
    newAnswer.save(err => {
      if (err) return response.status(500).send({ message: err });

      console.log(request.params);
      Question.findById(request.params.id, (err, question) => {
        if (err) return response.status(500).send({ message: err });
        question.answer.push(newAnswer._id);
        question.save(err => {
          if (err) return response.status(500).send({ message: err });

          return response.status(201).send({
            message: 'Create answer success',
          });
        });
      });
    });
  },
  drop: (request, response) => {
    Question.findById(request.params.id, (err, question) => {
      if (err) return response.status(500).send({ message: err });

      question.answer = question.answer.filter(e => e !== request.params.answerId);
      question.save(err => {
        if (err) return response.status(500).send({ message: err });

        Answer.findByIdAndRemove(request.params.answerId, (err, answer) => {
          if (err) return response.status(500).send({ message: err });

          return response.status(200).send({
            message: 'Delete answer success',
          });
        });
      });
    });
  },
};