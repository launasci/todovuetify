<template>
  <div>
    <tarefasCom
      :titulo="titulo"
      :descricao="descricao"
      :botao="botao"
      :tituloCard="tituloCard"
      :projeto="projeto"
      :status="status"
      @salvarTarefa="salvarTarefa"
      @salvarTarefaEditada="salvarTarefaEditada"
      @tituloChange="tituloChange"
      @statusChange="statusChange"
      @descricaoChange="descricaoChange"
      @projetoChange="projetoChange"
    />
  </div>
</template>

<script>
import apiMock from "@/apiMock.js";
import tarefasCom from "@/components/tarefasCom.vue";

export default {
  components: {
    tarefasCom,
  },
  data: () => {
    return {
      projetos: [],
      tarefas: [],
      tituloCard: "Cadastre uma nova tarefa",
      id: 0,
      status: "",
      projeto: "",
      titulo: "",
      descricao: "",
      botao: "Adicionar",
    };
  },

  methods: {
    salvarTarefa(novaTarefa) {
      apiMock.criarTarefa(novaTarefa, () => {
        this.listaTarefas();
      });
    },

    listaTarefas() {
      apiMock.pegarTarefas((data) => {
        this.tarefas = data;
      });
    },

    editarTarefa(tarefaId) {
      this.botao = "Alterar";
      this.tituloCard = "Altere sua tarefa";
      apiMock.pegarTarefa(tarefaId, (tarefa) => {
        this.setEditarTarefa(tarefa);
      });
    },

    setEditarTarefa(tarefa) {
      this.id = tarefa.id;
      this.titulo = tarefa.titulo;
      this.projeto = tarefa.projeto;
      this.descricao = tarefa.descricao;
      this.status = tarefa.status;
    },

    tituloChange(e) {
      this.titulo = e;
    },
    statusChange(e) {
      this.status = e;
    },
    projetoChange(e) {
      this.projeto = e;
    },
    descricaoChange(e) {
      this.descricao = e;
    },

    salvarTarefaEditada(tarefa) {
      console.log(tarefa);
      apiMock.salvarTarefaEditada(tarefa, () => {
        this.listaTarefas();
      });
    },
  },

  created() {
    this.listaTarefas();
    if (this.$route?.params?.id) {
      this.editarTarefa(this.$route.params.id);
    }
  },
};
</script>
