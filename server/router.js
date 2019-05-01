const passport = require('passport');
const { jwtLogin, localLogin } = require('./services/passport');
const { logInUser, signUpUser } = require('./controllers/users');
const { addNewJob, getAllJobs, updateStage } = require('./controllers/jobs');

passport.use(jwtLogin);
passport.use(localLogin);

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogIn = passport.authenticate('local', { session: false });

module.exports = app => {
  app.post('/login', requireLogIn, logInUser);
  app.post('/signup', signUpUser);
  app.post('/addjob', addNewJob);
  app.post('/jobs', getAllJobs);
  app.post('/stage', updateStage);
};
