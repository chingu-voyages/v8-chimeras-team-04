const UserModel = require('./models/user');

const validateInputInfo = (username, password, passwordConfirm) => {
  if (!username) {
    return 'Username is Empty.';
  }

  if (!password) {
    return 'Password is Empty.';
  }

  if (!passwordConfirm) {
    return 'Confirm your Password.';
  }

  if (password !== passwordConfirm) {
    return 'Passwords do not match';
  }
};

module.exports = {
  validateInputInfo,
};
