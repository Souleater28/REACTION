const userMapper = (user) => {
  const { username, role } = user;

  return {
    username,
    role,
  };
};

module.exports = {
  userMapper,
};
