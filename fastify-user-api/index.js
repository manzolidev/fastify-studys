const fastify = require('fastify');
const mongoose = require('mongoose');

const app = fastify();
const mongoUrl = 'mongodb://localhost:27017/users';

const User = require('./User');

try {
  mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (err) {
  // eslint-disable-next-line no-console
  console.error(err);
}

app.get('/api', (req, res) => {
  res.send('Hello!');
});

// Routes
// Users
app.get('/api/users', (req, res) => {
  User.find({}, (err, users) => {
    if (!err) {
      res.send(users);
    } else {
      res.send({ error: err });
    }
  });
});

app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;

  User.findById(userId, (err, user) => {
    if (!err) {
      res.send(user);
    } else {
      res.send({ error: err });
    }
  });
});

app.post('/api/users', (req, res) => {
  const userToCreate = req.body;

  User.create(userToCreate, (err, createdUser) => {
    if (!err) {
      res.send(createdUser);
    } else {
      res.send({ error: err });
    }
  });
});

app.listen(3000, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
