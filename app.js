const express = require('express');

const { authenticate } = require('./middleware/authenticate');

const app = express();


app.get('/chimeras', (req, res) => {
  res.send({ msg: 'We are Chimeras!!! 🔥'})
});

app.get('/authenticateTest', authenticate, (req, res) => {
  res.send({user: req.user, token: req.token });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));