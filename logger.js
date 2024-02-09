function sendItems(request,response,next){
  const method = request.method;
  const url = request.url;
  const time = new Date().toLocaleString('US',{weekday: 'long',month: 'long',year:'numeric',day: '2-digit'});
  request.DetailsOfTime = {method,url,time}
  next();
}

module.exports = sendItems;