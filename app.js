const express = require('express');
const uuid = require('uuid');
const moment = require('moment');

const { authenticate } = require('./middleware/authenticate');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); //sets up bodyParser as middleware

const data = {  
  '1': {
    id: '1',
    position: 'Front End Developer',
    company: 'Gieco Insurance',
    date: 110
  },
  '2': {
    id: '2',
    position: 'Web Developer',
    company: 'Starco Insurance',
    date: 30
  },
  '3': {
    id: '3',
    position: 'Front End Engineer',
    company: 'Norco',
    date: 80
  },
  '4': {
    id: '4',
    position: 'Front End Developer',
    company: 'Teh Googleh',
    date: 400
  },

}


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
  if (app) {
    res.send(app);
  } else {
    res.send(404);
  }
});

app.post('/addApp', (req, res)=>{
  const {position, company} = req.body;
  if (position && company) {
    const id = uuid();
    date = moment();
    data[id] = {
      id, position, company, date
    }
    res.send(data[id]);
  } else {
    res.send(400);
  }
});

app.put('/editApp/:id', (req, res)=> {
  const id = req.params.id;
  const {position, company, date} = req.body;
  if (data[id]) {
    data[id] = {
      id, position, company, date
    }
    console.log(data[id]);
    res.send(data[id]);
  } else {
    res.send(400);
  }
});

app.delete('/deleteApp/:id', (req, res) => {
  const id = req.params.id;
  if (data[id]) {
    delete data[id];
    res.send(200);
  } else {
    res.send(400);
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));