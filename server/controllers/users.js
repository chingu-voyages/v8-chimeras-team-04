const jwt = require('jwt-simple');
const UserModel = require('../models/user');
const { validateInputInfo } = require('../utils');

const mySecretJwtKey = process.env.SECRET_JWT_KEY || 'chingu';

const tokenForUser = user => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, mySecretJwtKey);
};

const logInUser = (req, res) => {
  const { username } = req.body;

  UserModel.findOne({ username })
    .then(_updatedUser => {
      const { id, username } = _updatedUser;

      return res.send({
        newUser: { id, username },
        token: tokenForUser(_updatedUser),
      });
    })
    .catch(err => {
      console.log(`log in user failed: ${err}`);
    });
};

const signUpUser = (req, res, next) => {
  const { username, password, passwordConfirm } = req.body;
  const error = validateInputInfo(username, password, passwordConfirm);

  if (error) {
    return res.send({ error });
  }

  UserModel.findOne({ username }, (err, user) => {
    if (err) {
      return next(err);
    }

    if (user) {
      return res.send({ error: `${username} already exists.` });
    }

    const newUser = new UserModel({
      password,
      username,
    });

    newUser.save(saveError => {
      if (saveError) {
        return next(saveError);
      }

      res.json({
        newUser,
        token: tokenForUser(newUser),
      });
    });
  });
};

module.exports = {
  logInUser,
  signUpUser,
};
