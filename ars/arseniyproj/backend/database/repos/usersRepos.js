const User = require("../models/usersModel");

const getUserByEmail = reqEmail => User.findOne({ email: reqEmail });

const getUserById = id => User.findById(id);

const addUser = user => User({ ...user }).save();
module.exports = {
  getUserByEmail,
  getUserById,
  addUser
};
