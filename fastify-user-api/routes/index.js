const userController = require('../controllers/userController');

const routes = [
  {
    method: 'GET',
    url: '/api',
    handler: () => 'Hello',
  },
  {
    method: 'GET',
    url: '/api/users',
    handler: userController.getUsers,
  },
  {
    method: 'GET',
    url: '/api/users/:id',
    handler: userController.getUser,
  },
  {
    method: 'POST',
    url: '/api/users',
    handler: userController.createUser,
  },
];

module.exports = routes;
