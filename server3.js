const http = require('http');
const fs = require('fs');

let porta = 3000;
let host = 'localhost';

const server = http.createServer((req,res)=>{
    //header
    res.setHeader('content-type', 'text/html');

    let html_page = '';
    switch(req, URL) {
        case '/':
            html_page = 'home.html'
            res.statusCode = 200
            break;
        case '/home':
            html_page = 'home.html'
            res.statusCode = 200
            break;
        case '/servicos':
            html_page = 'servicos.html'
            res.statusCode = 200
            break;
        case '/sobre':
            html_page = 'sobre.html'
            res.statusCode = 200
            break;
        default:
            html_page = '404.html'
            res.statusCode = 404
            break;
    }

    fs.readFile('./Html/' + html_page, (erro, data)=>{
        if (erro){
            console.log('erro no carregamento da pagina');
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    })
});

server.listen(porta, host,()=>{
    console.log('Servidor ta abrido')
})

//hora de criar a infa de html
//criar sistema de rotas

