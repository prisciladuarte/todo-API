const tarefasJson = require("../models/tarefas.json");
const fs = require("fs");
const getAll = (request, response) => {
  response.status(200).send(tarefasJson);
};

const createTask = (request, response) => {
  const bodyRequest = request.body;

  const novaTarefa = {
    id: Math.random().toString(32).substr(2, 9),
    dataInclusao: new Date(),
    descricao: bodyRequest.descricao,
    concluido: false,
    nome: bodyRequest.nome,
  };
  console.log(novaTarefa);

  tarefasJson.push(novaTarefa);

  fs = require("fs");
  fs.writeFile(
    "srcmodels\tarefas.json",
    JSON.stringify(tarefasJson),
    "utf8",
    function (err) {
      if (err) return console.log(err);
      console.log("eita!");
    }
  );

  response.status(201).send(tarefasJson);
};

module.exports = {
  createTask,
  getAll
};
