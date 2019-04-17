const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const router = require('./server/router');
const app = express();
app.use(bodyParser.json()); //sets up bodyParser as middleware

const data = {
  '1': {
    id: '1',
    position: 'Front End Developer',
    company: 'Gieco Insurance',
    date: 110,
  },
  '2': {
    id: '2',
    position: 'Web Developer',
    company: 'Starco Insurance',
    date: 30,
  },
  '3': {
    id: '3',
    position: 'Front End Engineer',
    company: 'Norco',
    date: 80,
  },
  '4': {
    id: '4',
    position: 'Front End Developer',
    company: 'Teh Googleh',
    date: 400,
  },
};

const mongoUri =
  process.env.MONGO_URI || 'mongodb+srv://chingu:chingu@job-app-cluster-krb6h.mongodb.net/test?retryWrites=true';
const options = {
  reconnectTries: 5,
  poolSize: 10,
  useNewUrlParser: true,
};

mongoose.connect(mongoUri, options, () => {
  // mongoose.connection.db.dropDatabase();
});
mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));
router(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
