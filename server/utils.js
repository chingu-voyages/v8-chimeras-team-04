const UserModel = require('./models/user');

const validateInputInfo = (username, password, passwordConfirm) => {
  if (!username) {
    return 'Username is empty.';
  }

  if (!password) {
    return 'password is empty.';
  }

  if (!passwordConfirm) {
    return 'confirm your password.';
  }

  if (password !== passwordConfirm) {
    return 'passwords do not match';
  }
};

module.exports = {
  validateInputInfo,
};
