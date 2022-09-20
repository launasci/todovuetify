<template>
  <div>
    <progressoProjetosCom :porcentagem="porcentagem" />
    <listaTarefasCom
      :tarefas="tarefas"
      @selecionarTarefaEdicao="selecionarTarefaEdicao"
      @excluirTarefa="excluirTarefa"
      @adicionarNovaTarefa="adicionarNovaTarefa"
    />
  </div>
</template>

<script>
import apiMock from "@/apiMock.js";
import listaTarefasCom from "@/components/listaTarefasCom.vue";

export default {
  components: {
    listaTarefasCom,
  },

  data: () => {
    return {
      projetos: [],
      tarefas: [],
      projeto: "",
      titulo: "",
      descricao: "",
      id: 0,
      botao: "",
      tituloCard: "",
    };
  },

  methods: {
    listaTarefas() {
      apiMock.pegarTarefas((data) => {
        this.tarefas = data;
      });
    },

    selecionarTarefaEdicao(tarefaId) {
      this.$router.push(`/editarProjetosTarefas/${tarefaId}`);
    },

    adicionarNovaTarefa(novaTarefa) {
      this.$router.push("/adicionarProjetosTarefas", novaTarefa);
    },

    excluirTarefa(tarefaId) {
      apiMock.excluirTarefa(tarefaId, () => {
        this.listaTarefas();
      });
    },
  },
  created() {
    this.listaTarefas();
  },
};
</script>
