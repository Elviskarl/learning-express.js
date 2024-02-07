const express = require('express')
const app = express();
const {products} = require('./data');

app.get('/',function(request,response){
  response.send(`<h1>HomePage</h1>
  <a href="/api/products"><p>Products</p></a>`);
});
app.get('/api/products',(req,res)=>{
  const newProduct = [];
  for(let product of products){
    const {id,name,image} = product;
    newProduct.push({id,name,image})
  }
  // Stringify the JSON with 2 spaces indentation for better readability
  const formattedJson = JSON.stringify(newProduct, null, 2);
  res.set('Content-Type', 'application/json'); // Set the Content-Type header to indicate JSON
  res.send(formattedJson);
  // res.json(newProduct);
});

app.get('/api/products/:productId',(req,res)=>{
  // console.log(req);
  console.log(req.params);
  const {productId} = req.params;
  const singleProduct = products.find(product => product.id === Number(productId));
  if(!singleProduct){
    res.status(404).send('<p>Error: could not find the specified product.</p> \nConfirm the service you want to access.')
  }
  // Stringify the JSON with 2 spaces indentation for better readability
  const singleJson = JSON.stringify(singleProduct, null, 2);
  res.set('Content-Type', 'application/json'); // Set the Content-Type header to indicate JSON
  res.send(singleJson);
});

app.get('/api/v1/query',(req,res)=>{
  console.log(req.query);
  const {search,limit} = req.query;
  let sortedProducts = [...products];
  if(search){
    sortedProducts = sortedProducts.filter(product => product.name.startsWith(search));
  }
  if(limit){
    sortedProducts = sortedProducts.slice(0,Number(limit));
  }
  if(sortedProducts.length < 1){
    return res.status(200).json({
      success: true,
      data: sortedProducts,
      message: 'We could not find what you were looking for'
    });
  }
  // Stringify the JSON with 2 spaces indentation for better readability
  const sortedJson = JSON.stringify(sortedProducts, null, 2);
  res.set('Content-Type', 'application/json'); // Set the Content-Type header to indicate JSON
  res.status(200).send(sortedJson);
});

app.listen(5000,()=>{
  console.log('You have successfully reached the server on port: 5000.');
})