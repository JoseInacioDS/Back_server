//19/04 criar o primeiro server com node

const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('efetuando pedido\n')
    //declarando um header
    res.setHeader('content-type', 'text/html')
    res.write('<h1>fala fiote<h1>');
    res.write('<h2>churras<h2>');
    res.write('<h3>pão de quiejo<h3>');
    res.end();
});

server.listen(3000, 'localhost',()=>{
    console.log('servidor no ar');
})