  const app = require('./src/app');
  const mongoose = require("mongoose");
  
  mongoose
  .connect("mongodb://localhost.2717/series")
  .then(() => console.log("Conectado ao MongoDB!"))
  .catch((erro) => console.log ("Erro ao conectar ao MongoDB, erro"))

  const port = 3000;
  app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
