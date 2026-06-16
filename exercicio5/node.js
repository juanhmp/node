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
}else if(req.url === '/login' ){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('200--"Login realizado com sucesso!"');
}else if(req.url === '/dashboard' ){
  res.statusCode = 401;
  res.setHeader('Content-Type', 'text/plain');
  res.end('401--"Acesso negado. Faça login primeiro."');
}else if(req.url === '/admin' ){
  res.statusCode = 403;
  res.setHeader('Content-Type', 'text/plain');
  res.end('403--"Você não tem permissão para acessar esta área."');
}else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404--"Página não encontrada."');
    }});

const port = 2000;
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
