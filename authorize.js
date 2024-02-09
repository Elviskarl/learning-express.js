function authorize(req,res,next){
  const {user} = req.query;
  console.log(user);
  if(user){
    console.log('Authorize');
    req.user = {name:user,id: 1}
    next();
}else{
  res.status(401).send(`Unauthorized user <br>Please log in your details`);
}
}

module.exports = authorize;