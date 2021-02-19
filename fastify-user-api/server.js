const fastify = require('fastify')({
  logger: true,
});
const mongoose = require('mongoose');

const mongoUrl = 'mongodb://localhost:27017/users';

try {
  mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (err) {
  // eslint-disable-next-line no-console
  console.error(err);
}

module.exports = fastify;
