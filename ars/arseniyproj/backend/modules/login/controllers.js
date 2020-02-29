const config = require("./config");

const login = (req, res, next) => {
  res.json(config.users);
};

module.exports = {
  login
};
