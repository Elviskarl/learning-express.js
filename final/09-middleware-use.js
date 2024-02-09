const sendItems = require('./logger');
const authorize = require('./authorize');
const express = require('express');
const app = express();

app.use([sendItems,authorize]);
app.get('/',function(request,response){
  let {method,url,time} = request.DetailsOfTime;
  console.log(time);  
  response.send(`Method: ${method} <br>Url: ${url} <br>Time: ${time}`);
});
app.get('/about',function(request,response){
  let {method,url,time} = request.DetailsOfTime;
  console.log(time);  
  response.send(`Method: ${method} <br>Url: ${url} <br>Time: ${time}`);
  console.log(request.user);
});

app.listen(5000,()=>{
  console.log('Connected to the Database');
});