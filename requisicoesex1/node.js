const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
    const urlParams = new URL(req.url, `http://localhost:3000`);
    const endpoint = urlParams.pathname;

    if (endpoint === '/') {
        const filePath = path.join(__dirname, 'index.html');
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Erro ao ler o arquivo. (Codigo 500: Erro no Servidor)\n');
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          res.end(data);
        }
      });
    }else if(endpoint === '/nome'){
        const nome = urlParams.searchParams.get('nome') || 'visitante';
      res.writeHead(200, { 'Content-Type': 'text/plain' });
        var idade = urlParams.searchParams.get('idade') || 'não informada';
        if (idade < 18) {
          idade = 'menor';  
        } 
        else {
          idade = 'maior';
        }
        res.end(`Ola, ${nome}!, voce e ${idade} de idade.`);
    }else if(endpoint === '/email'){
      const email = urlParams.searchParams.get('email') || 'não informado';
      if (email === 'admin@etefmc.com.br') {
      res.end(`Ola, o email foi enviado com sucesso!`);
      } else {
        res.end(`O email ${email} nao e valido.`);
      }
    }else{
      const filePath = path.join(__dirname, '404.html');
    
        fs.readFile(filePath, (err, data) => {
          if (err) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Erro 404: Página não encontrada.');
          } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
          }
        });
      }
    });
    
    const port = 3000;
    server.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}/`);
    });