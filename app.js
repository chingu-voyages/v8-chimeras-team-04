const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const router = require('./server/router');
const app = express();

const mongoUri =
  process.env.MONGO_URI || 'mongodb+srv://chingu:chingu@job-app-cluster-krb6h.mongodb.net/test?retryWrites=true';
const options = {
  reconnectTries: 5,
  poolSize: 10,
  useNewUrlParser: true,
};

mongoose.connect(mongoUri, options, () => {
  console.log('database connected');
  // mongoose.connection.db.dropDatabase();
});
mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));
router(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
