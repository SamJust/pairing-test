const express = require('express')
    , PORT = process.env.PORT || 3001
    , bodyParser = require('body-parser')
    , arrayUnpairer = require('../utils/arrayUnpairer.js')
    , mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin1@ds161700.mlab.com:61700/pairing-test').then(()=>{
  console.log('Connected to a DB');
}, err =>{
  console.log(`An error connecting to a DB`);
  console.log(`${err.messaged}`);
});

let Statisctics = require('../models').Statisctics;

let app = express();

let jsonBodyParser = bodyParser.json();

app.use(jsonBodyParser);

app.post('/unpaired', (req, res)=>{
  let unpairedNumber = arrayUnpairer(req.body.data);
  Statisctics.findOne({number: unpairedNumber}).exec().then(data =>{
    if(!data) return Statisctics.create({number: unpairedNumber, amount: 1});
    else return Statisctics.findByIdAndUpdate(data._id, {
      $set:{
        amount:data.amount+1
      }
    });
  }).then(data => {
    res.json(unpairedNumber);
  }).catch(err => {
    console.log(err.message);
  });
});

app.get('/statistic', (req, res)=>{
  Statisctics.find({}, {_id:0, __v:0}).exec().then(data => {
    if(!data) res.json([]);
    else res.json(data);
  }).catch(err => {
    console.log(err.message);
  });
});

app.listen(PORT, ()=>{
  console.log(`Listening to port ${PORT}`);
});