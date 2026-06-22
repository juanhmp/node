const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
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
}else if(req.url === '/' ){
  const filePath = path.join(__dirname, 'index.html');

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Erro 500: Erro no Servidor.');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  }else if(req.url === '/post1' ){
  const filePath = path.join(__dirname, 'index1.html');

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Erro 500: Erro no Servidor.');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  }else if(req.url === '/post2' ){
  const filePath = path.join(__dirname, 'index2.html');

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Erro 500: Erro no Servidor.');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
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
  }});

const port = 2000;
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
