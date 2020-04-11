const config = require("./config");
const { userMapper } = require("./mappers");

const loginController = (req, res, next) => {
  const user = config.users.find(
    (user) =>
      user.username === req.body.username && user.password === req.body.password
  );

  if (user) return res.json({ status: 200, user: userMapper(user) });
  return res.status(404).json({ message: "Oh shit", status: 404 });
};

module.exports = {
  loginController,
};
