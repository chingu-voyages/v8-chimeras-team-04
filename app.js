const express = require('express');

const { authenticate } = require('./middleware/authenticate');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); //sets up bodyParser as middlewear

const data = {  
  '1': {
    id: '1',
    title: 'Front End Developer',
    company: 'Gieco Insurance',
    date: 110
  },
  '2': {
    id: '2',
    title: 'Web Developer',
    company: 'Starco Insurance',
    date: 30
  },
  '3': {
    id: '3',
    title: 'Front End Engineer',
    company: 'Norco',
    date: 80
  },
  '4': {
    id: '4',
    title: 'Front End Developer',
    company: 'City Council',
    date: 400
  },

}

let currentIndex = 5;


app.get('/chimeras', (req, res) => {
  res.send({ msg: 'We are Chimeras!!! 🔥'})
});

app.get('/authenticateTest', authenticate, (req, res) => {
  res.send({user: req.user, token: req.token });
});

app.get('/getAllApps', (req,res) => {
  const keys = Object.keys(data);
  res.send(keys.map(key => data[key]));
});

app.get('/app/:id', (req, res)=> {
  const app = data[req.params.id];
});

app.post('/addApp', (req, res)=>{
  const newId = currentIndex++;
  console.log(req.body);
  res.send(req.body);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));