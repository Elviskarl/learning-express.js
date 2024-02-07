const http = require('http');
const {readFileSync} = require('fs');

const HomePage = readFileSync('./navbar-app/index.html');
const HomePageCss = readFileSync('./navbar-app/styles.css');
const HomePageLogo = readFileSync('./navbar-app/logo.svg');
const HomePageJs = readFileSync('./navbar-app/browser-app.js');
console.log(HomePage);

const server = http.createServer((req,res)=>{
  console.log('You reached the server');
  
  const url = req.url;
  console.log(url);
  if(url === '/'){
    console.log(req.url)
    res.writeHead(200,{"content-type": 'text/html'});
    res.write(HomePage);
      res.end()
  }else if(url === '/about'){
    res.writeHead(200,{"content-type": 'text/html'});
    res.write(`<h1>You have reached the About Page</h1>
    <p>Here is more information on this issue</p>`);
    res.end();
  }else if(url === '/styles.css'){
    res.writeHead(200,{"content-type": 'text/css'});
    res.write(HomePageCss);
    res.end();
  }else if(url === '/logo.svg'){
    res.writeHead(200,{"content-type": 'image/svg+xml'});
    res.write(HomePageLogo);
    res.end();
  }else if(url === '/browser-app.js'){
    res.writeHead(200,{"content-type": 'text/javascript'});
    res.write(HomePageJs);
    res.end();
  }else{
    res.writeHead(404,{"content-type": 'text/html'});
    res.write(`<h1>OOPS!!!!</h1>
    <p>page not found</p>`);
    res.end()
  }
});
server.listen(5000);
console.log('Express Tutorial')
