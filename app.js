// importa o express
const express = require("express");

// define a porta que o servidor vai escutar
const port = 3000;

// instancia o express
const app = express();

// variavel global que armazena a qtd de visitas
let visitCount = 0;

// middleware para logar a cada requisicao
app.use((req, res, next) => {
  console.log(`Rota acessada: ${req.method} ${req.url}`);
  next();
});

// rota de visitas
app.get("/visits", (req, res) => {
  visitCount++; // incrementa o contador a cada visita
  res.status(200).send(`Essa rota já foi acessada ${visitCount} vezes.`);
});

// inicia o servidor na porta selecionada
app.listen(port, () => {
  console.log("Servidor ativo.");
});
