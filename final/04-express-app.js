const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'));
// app.get('/',(req,res)=>{
//   res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'));
// });
app.get('/about.html',(req,res)=>{
  res.status(200).send('<p> Found here is brief information about us</p>');
});
app.all('*',(req,res)=>{
  res.status(404).send('Resource not found.');
})
app.listen(5000,()=>{
  console.log('You have Reached the server on port: 5000');
})