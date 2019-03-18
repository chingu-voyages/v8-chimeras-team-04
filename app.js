const express = require('express');
const app = express();

app.get('/chimeras', (req, res) => {
  res.send({ msg: 'We are Chimeras!!! 🔥'})
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));