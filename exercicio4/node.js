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
}else if(req.url === '/seg' ){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hoje serviremos um delicioso filé de frango grelhado acompanhado de arroz branco, feijão carioca e batata sauté. Para complementar a refeição, teremos uma salada fresca de alface, tomate e cenoura. Como sobremesa, será servida gelatina de morango. Para beber, oferecemos água, refrigerante e suco natural. Desejamos a todos uma excelente refeição!');
}else if(req.url === '/ter' ){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hoje serviremos um saboroso bife acebolado acompanhado de arroz branco, feijão tropeiro e purê de batatas. A salada será composta por alface, tomate e pepino frescos. Para sobremesa, teremos mousse de maracujá. As bebidas disponíveis são água, refrigerante e suco natural.');
}else if(req.url === '/qua' ){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('O almoço de hoje contará com lasanha à bolonhesa acompanhada de arroz branco e salada de folhas verdes. Como acompanhamento, teremos legumes refogados. A sobremesa será pudim de leite condensado. Para beber, oferecemos água, refrigerante e suco natural.');
}else if(req.url === '/qui' ){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hoje serviremos pernil assado ao molho acompanhado de arroz branco, feijão carioca e farofa temperada. A salada do dia será de repolho, cenoura e tomate. Para sobremesa, teremos salada de frutas. As bebidas disponíveis são água, refrigerante e suco natural.');
}else if(req.url === '/sex' ){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('O cardápio de hoje traz strogonoff de frango acompanhado de arroz branco e batata palha. Para complementar a refeição, teremos uma salada fresca de alface e tomate. A sobremesa será um delicioso brigadeiro de colher. Para beber, oferecemos água, refrigerante e suco natural.');

}else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Dia não encontrado.');
    }});

const port = 2000;
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
