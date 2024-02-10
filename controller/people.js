let {people} = require('../data');

function getData(req,res){
  res.status(200).json({success: true,data:people})
}

function postData(req,res){
  const {name} = req.body;
  return name ?
    res.status(201).json({success: true,name})
    :res.status(404).json({success: false, msg: 'Please provide the name value.'});
}

function putData(req,res){
  const {id} = req.params;
  const {name} = req.body;
  console.log(id,name);
  const personOfInterest = people.find(person => person.id === Number(id));

  personOfInterest ? 
    res.status(200).json({success: true,data: personOfInterest})
    :res.status(404).json({success: false, msg: 'Please provide a valid Id'});    
}

module.exports = {getData,postData,putData}