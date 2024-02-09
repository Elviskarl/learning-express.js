const express = require('express');
const app = express();

function sendItems(request,response,next){
  const method = request.method;
  const url = request.url;
  const time = new Date().toLocaleString('US',{weekday: 'long',month: 'long',year:'numeric',day: '2-digit'});
  request.DetailsOfTime = {method,url,time}
  next();
}

app.get('/',sendItems,function(request,response){
  let {method,url,time} = request.DetailsOfTime;
  console.log(time);  
  response.send(`Method: ${method} <br>Url: ${url} <br>Time: ${time}`);
});
app.get('/about',function(request,response){
  response.send('About');
});

app.listen(5000,()=>{
  console.log('Connected to the Database');
})