const http = require('http');
const fs = require('fs');
const path = require('path');
var numeroAleatorio = Math.floor(Math.random()*100);
var tentativas = 0;
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
    }else if(endpoint === '/guess'){
    const numero = Number(urlParams.searchParams.get('numero'));

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    if(numero < numeroAleatorio){
        tentativas++;

        res.end(`
            <h1>O número recebido foi: ${numero}</h1>
            <p>Ele é menor que o número aleatório.</p>
            <p>Voltando em 5 segundos...</p>

            <script>
                setTimeout(() => {
                    window.location.href = "/";
                }, 5000);
            </script>
        `);
    }
    else if(numero > numeroAleatorio){
        tentativas++;

        res.end(`
            <h1>O número recebido foi: ${numero}</h1>
            <p>Ele é maior que o número aleatório.</p>
            <p>Voltando em 5 segundos...</p>

            <script>
                setTimeout(() => {
                    window.location.href = "/";
                }, 5000);
            </script>
        `);
    }
    else{
        res.end(`
            <h1>Acertou!</h1>
            <p>O número era ${numeroAleatorio}.</p>
            <p>Total de tentativas: ${tentativas}</p>
        `);
    }}else{
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
        })
      }
    });
    
    const port = 3000;
    server.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}/`);
    });