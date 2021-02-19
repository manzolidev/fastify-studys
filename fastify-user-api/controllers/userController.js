const User = require('../schemas/User');

exports.getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    throw new Error('Não foi possivel listar os usuarios');
  }
};

exports.getUser = async (req) => {
  try {
    const userId = req.params?.id;
    const user = await User.findById(userId);
    return user;
  } catch (err) {
    throw new Error('Não foi possivel encontrar o usuario');
  }
};

exports.createUser = async (req) => {
  try {
    const userToCreate = req.body;
    const createdUser = await User.create(userToCreate);
    return createdUser;
  } catch (err) {
    throw new Error('Não foi criar o usuario');
  }
};
