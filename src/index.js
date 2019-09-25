const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

/**
 * Setup do Banco de Dados
 */
mongoose.connect(
  "mongodb+srv://Admin:120100@nodejscluster-ewrur.mongodb.net/uploadNode?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

//Aprende a lidar com o corpo das requisicoes json
app.use(express.json());
//dizendo como lidar com requisicoes urlencoded
app.use(express.urlencoded({ extended: true }));
//lib de log
app.use(morgan("dev"));

app.use(require("./routes"));

app.listen(3000);
