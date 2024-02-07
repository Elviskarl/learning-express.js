const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.status(200).send(`<p style="color: red">HomePage</P>`)
});
app.get('/about',(req,res)=>{
  res.status(200).send('<h1 style="color: violet">This is the About Page</h1>')
});
app.all('*',(req,res)=>{
  res.status(404).send('<h1 style="color: yellow">Page not found</h1>')
})

app.listen(5000,()=>{
  console.log(`The server is listening on port 5000`);
})