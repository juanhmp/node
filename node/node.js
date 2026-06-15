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
      res.end('(Codigo 200: Sucesso)',data);
    }
  });
}else if(req.url === '/contato' ){
  res.statusCode = 100;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Para contato, utilize o e-mail: lualeomen@gmail.com.(Codigo 100: Informações)');
}else if(req.url === '/redirecionamento'){
  res.statusCode = 300;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Redirecionando a outra pagina...(Codigo 300: Redirecionamento)');
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
