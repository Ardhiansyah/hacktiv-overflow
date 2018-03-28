const mongoose = require('mongoose');
const Question = require('../models/question.model');
const User = require('../models/user.model');

module.exports = {
  findAll: (request, response) => {
    Question.find((err, questions) => {
      if (err) return response.status(500).send({ message: err });

      return response.status(200).send({
        message: 'Find all question success',
        questions
      });
    }).populate('user', 'name').populate({ path: 'answer', select: 'description createdAt', populate: { path: 'user', select: 'name' } });
  },
  findById: (request, response) => {
    Question.findById(request.params.id, (err, question) => {
      if (err) return response.status(500).send({ message: err });

      return response.status(200).send({
        message: 'Find question success',
        question
      });
    }).populate('user', 'name').populate({ path: 'answer', select: 'description createdAt', populate: { path: 'user', select: 'name' } });
  },
  findByUserId: (request, response) => {
    Question.find({ user: mongoose.Types.ObjectId(request.body.id) }, (err, question) => {
      if (err) return response.status(500).send({ message: err });

      return response.status(200).send({
        message: 'Find question success',
        question
      });
    }).populate('user', 'name').populate({ path: 'answer', select: 'description createdAt', populate: { path: 'user', select: 'name' } });
  },
  create: (request, response) => {
    let question = new Question ({
      title: request.body.title,
      description: request.body.description,
      user: request.body.id
    });

    question.save(err => {
      if (err) return response.status(500).send({ message: err });

      // User.findById(request.body.id, (err, user) => {
      //   if (err) return response.status(500).send({ message: err });

      //   user.question.push(question._id);
        // user.save(err => {
          return response.status(201).send({
            message: 'Create new question success',
          });
        // });
      // });
    });
  },
  update: (request, response) => {
    Question.findByIdAndUpdate(request.params.id, {
      description: request.body.description,
    }, (err, question) => {
      if (err) return response.status(500).send({ message: err });

      return response.status(200).send({
        message: 'Update question success',
      });
    });
  },
  drop: (request, response) => {
    Question.findByIdAndRemove(request.params.id, (err, question) => {
      if (err) return response.status(500).send({ message: err });

      return response.status(200).send({
        message: 'Delete question success',
      });
    });
  },
};