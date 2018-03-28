const express = require('express');
const router = express.Router();
const { signin, register, verify } = require('../controllers/user.controller');
const token = require('../middlewares/token.middleware')

module.exports = router
  .get('/', (request, response) => response.status(200).send({ message: 'Welcome to Hacktiv-Overflow API' }))
  .post('/register', register)
  .post('/signin', signin)
  .post('/verify', token.verify, verify)
  .use('/questions', require('./question.route'));