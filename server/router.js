const passport = require('passport');
const { jwtLogin, localLogin } = require('./services/passport');
const {
  logInUser,
  removeBookMark,
  signUpUser,
} = require('./controllers/users');

const { authenticate } = require('./middleware/authenticate');

passport.use(jwtLogin);
passport.use(localLogin);

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogIn = passport.authenticate('local', { session: false });

module.exports = (app) => {
  // Users routes
  app.post('/bookmark', removeBookMark);
  app.post('/login', requireLogIn, logInUser);
  app.post('/signup', signUpUser);

  app.get('/chimeras', (req, res) => {
    res.send({ msg: 'We are Chimeras!!! 🔥' })
  });

  app.get('/authenticateTest', authenticate, (req, res) => {
    res.send({ user: req.user, token: req.token });
  });
};
