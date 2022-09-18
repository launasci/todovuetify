<template>
  <div>
    <progressoProjetosCom :porcentagem="porcentagem" />
    <listaTarefasCom
      :tarefas="tarefas"
      @selecionarTarefaEdicao="selecionarTarefaEdicao"
      @excluirTarefa="excluirTarefa"
    />
  </div>
</template>

<script>
import apiMock from "@/apiMock.js";
import listaTarefasCom from "@/components/listaTarefasCom.vue";
import progressoProjetosCom from "@/components/progressoProjetosCom.vue";
export default {
  components: {
    listaTarefasCom,
    progressoProjetosCom,
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
      porcentagem: {
        Estudos: 0,
        Saúde: 0,
        Diversão: 0,
        Financeiro: 0,
        Outros: 0,
      },
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

    excluirTarefa(tarefaId) {
      apiMock.excluirTarefa(tarefaId, () => {
        this.listaTarefas();
      });
    },
  },
  created() {
    this.listaTarefas();

    apiMock.pegarProjetos((data) => {
      this.porcentagem = data;
    });
  },
};
</script>
