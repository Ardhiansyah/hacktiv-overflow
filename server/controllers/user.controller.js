const User = require('../models/user.model');
const hash = require('../middlewares/hash.middleware');
const token = require('../middlewares/token.middleware');

module.exports = {
  signin: (request, response) => {
    User.findOne({ email: request.body.email }, (err, user) => {
      if (err) return response.status(500).send({ message: err });

      if (user)
        if (hash.compare(request.body.password, user.password))
          return response.status(200).send({
            message: 'Signin success',
            name: user.name,
            token: token.generate({ id: user._id, name: user.name, email: user.email }),
          });
        else return response.status(404).send({ message: 'Wrong Password' });
      else return response.status(404).send({ message: 'Wrong Email' });
    });
  },
  register: (request, response) => {
    let user = new User({
      name: request.body.name,
      email: request.body.email,
      password: hash.generate(request.body.password),
    });
    console.log(user);
    user.save(err => {
      if (err) return response.status(500).send({ message: err.message });

      return response.status(201).send({
        message: 'Register success',
        name: user.name,
        token: token.generate({ id: user._id, name: user.name, email: user.email }),
      });
    });
  },
  verify: (request, response) => {
    // console.log(request.body);
    return response.status(200).send({
      message: 'Verifikasi success',
      data: {
        name: request.body.name,
        email: request.body.email,
      },
    });
  },
};