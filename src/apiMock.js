import axios from "axios";

export default {
  criarUsuario: (usuario, callback) => {
    axios.post("http://localhost:3000/usuarios/", usuario).then((response) => {
      callback(response.data);
    });
  },
  criarProjeto: (projeto, callback) => {
    axios.post("http://localhost:3000/projetos/", projeto).then((response) => {
      callback(response.data);
    });
  },
  criarTarefa: (tarefa, callback) => {
    axios.post("http://localhost:3000/tarefas/", tarefa).then((response) => {
      callback(response.data);
    });
  },

  pegarTarefas: (callback) => {
    axios.get("http://localhost:3000/tarefas/").then((response) => {
      callback(response.data);
    });
  },

  pegarProjetos: (callback) => {
    axios.get("http://localhost:3000/tarefas/").then((response) => {
      if (!response.data.length) {
        callback({
          Estudos: 0,
          Saúde: 0,
          Diversão: 0,
          Financeiro: 0,
          Outros: 0,
        });
        return;
      }
      let porcentagem = response.data.reduce(
        (anterior, atual) => ({
          ...anterior,
          [atual.projeto]: anterior[atual.projeto]
            ? anterior[atual.projeto] + 1
            : 1,
        }),
        {}
      );

      porcentagem = Object.entries(porcentagem).reduce(
        (anterior, atual) => ({
          ...anterior,
          [atual[0]]: (atual[1] * 100) / response.data.length,
        }),
        {}
      );

      callback(porcentagem);
    });
  },

  pegarTarefa: (tarefaId, callback) => {
    axios.get(`http://localhost:3000/tarefas/${tarefaId}`).then((response) => {
      callback(response.data);
    });
  },

  salvarTarefaEditada: (tarefa, callback) => {
    axios
      .patch(`http://localhost:3000/tarefas/${tarefa.id}`, tarefa)
      .then((response) => {
        callback(response.data);
      });
  },

  excluirTarefa: (tarefasId, callback) => {
    axios
      .delete(`http://localhost:3000/tarefas/${tarefasId}`)
      .then((response) => {
        callback(response.data);
      });
  },
};
