const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./server/router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
router(app);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));