const express = require('express')
const app = express();
const {products} = require('./data');

app.get('/',function(request,response){
  response.json(products);
});

app.listen(5000,()=>{
  console.log('You have successfully reached the server on port: 5000.');
})