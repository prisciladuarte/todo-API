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
      if (err) {
        return response.status(500).send({ message: err });
      }
    }
  );

  response.status(201).send(tarefasJson);
};

const deleteTask = (request, response) => {
  const idRequest = request.params.id;

  const indiceTarefa = tarefasJson.findIndex(
    (tarefa) => tarefasJson.id == idRequest
  );
  tarefasJson.splice(indiceTarefa, 1);
  fs.writeFile(
    "srcmodels\tarefas.json",
    JSON.stringify(tarefasJson),
    "utf8",
    function (err) {
      if (err) {
        return response.status(500).send({ message: err });
      }
    }
  );
  response.status(200).json({
    message: "Tarefa deletada com sucesso!",
    deletada: idRequest,
    tarefasJson,
  });
};

module.exports = {
  createTask,
  getAll,
  deleteTask,
};
