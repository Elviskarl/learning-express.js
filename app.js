const express = require('express');
const morgan = require('morgan');
let {people} = require('./data');

const app = express();
app.use(morgan('tiny'));

// Static-Public folder
app.use(express.static('./methods-public'));
// Parse form Data
app.use(express.urlencoded({extended: false}));
// Parse json
app.use(express.json())

app.get('/api/people',function(req,res){
  res.status(200).json({success: true,data:people})
});

app.post('/login',function(req,res){
  console.log(req.body);
  const {name} = req.body;
  return name ?
    res.status(200).send(`Welcome ${name}`)
    :res.status(401).send(`Please provide your credentials!`);
});

app.post('/api/people',(req,res)=>{
  const {name} = req.body;
  return name ?
    res.status(201).json({success: true,name})
    :res.status(404).json({success: false, msg: 'Please provide the name value.'});
})

app.listen(5000,()=>{
  console.log('Connected to the DataBase');
});