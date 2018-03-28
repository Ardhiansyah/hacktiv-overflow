const jwt = require('jsonwebtoken');

module.exports = {
  generate: (data) => {
    return jwt.sign(data, process.env.SECRET);
  },
  verify: (request, response, next) => {
    if (!request.headers.token) return response.status(401).send({ message: 'User does not have the necessary credentials.'});
    
    try {
      let decode = jwt.verify(request.headers.token, process.env.SECRET);
      request.body.id = decode.id;
      request.body.name = decode.name;
      request.body.email = decode.email;
      next();
    } catch (error) {
      return response.status(403).send({ message: 'The user might not have the necessary permissions for a resource'})
    }
  },
};