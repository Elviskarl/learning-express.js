const express = require('express');
const morgan = require('morgan');
let peopleRouter = require('./Route/People');
let authRouter = require('./Route/auth');

const app = express();
app.use(morgan('tiny'));

// Static-Public folder
app.use(express.static('./methods-public'));
// Parse form Data
app.use(express.urlencoded({extended: false}));
// Parse json
app.use(express.json());

app.use('/api/people',peopleRouter);
app.use('/login',authRouter);

app.listen(5000,()=>{
  console.log('Connected to the DataBase');
});