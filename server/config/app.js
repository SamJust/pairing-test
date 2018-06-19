const express = require('express')
    , PORT = process.env.PORT || 3001
    , bodyParser = require('body-parser')
    , arrayUnpairer = require('../utils/arrayUnpairer.js')
    , mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin1@ds161700.mlab.com:61700/pairing-test').then(()=>{
  console.log('Connected to a DB');
}).catch(err =>{
  console.log(`An error connecting to a DB`);
  console.log(`${err.message}`);
});

let Statisctics = require('../models').Statisctics;

let app = express();

let jsonBodyParser = bodyParser.json();

app.use(jsonBodyParser);

app.post('/unpaired', (req, res)=>{
  let unpairedNumber = arrayUnpairer(req.body.data);
  if(!unpairedNumber) return res.sendStatus(204);
  Statisctics.update({number: unpairedNumber}, {
    $inc:{
      count:1
    }
  }).then(data=>{
    if(data.nModified === 0){
      Statisctics.create({number: unpairedNumber, count: 1}).then(data=>{
        res.json(unpairedNumber);
      });
    }
    else res.json(unpairedNumber);
  }).catch(err=>{
    res.sendStatus(500);
    console.log(err.message);
  });
});

app.get('/statistic', (req, res)=>{
  Statisctics.find({}, {_id:0, __v:0}).then(data => {
    if(!data) res.json([]);
    else res.json(data);
  }).catch(err => {
    res.sendStatus(500);
    console.log(err.message);
  });
});

app.listen(PORT, ()=>{
  console.log(`Listening to port ${PORT}`);
});

module.exports = app;
