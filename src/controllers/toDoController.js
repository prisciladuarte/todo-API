const createTask = (request, response) => {
  const bodyRequest = request.body;

  const novaTarefa = {
    id: Math.random().toString(32).substr(2, 9),
    outroid: Math.random().toString(32),
    dataInclusao: new Date(),
    descricao: bodyRequest.descricao,
    concluido: false,
    nome: bodyRequest.nome,
  };
  console.log(novaTarefa);
};

module.exports = {
  createTask,
};
