const express = require('express');
const router = express.Router();

router.post('/',function(req,res){
  console.log(req.body);
  const {name} = req.body;
  return name ?
  res.status(200).send(`Welcome ${name}`)
  :res.status(401).send(`Please provide your credentials!`);
});

module.exports = router;