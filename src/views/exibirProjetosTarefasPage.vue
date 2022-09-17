<template>
  <div>
    <progressoProjetosCom :porcentagem="porcentagem" />
    <listaTarefasCom
      :tarefas="tarefas"
      @selecionarTarefaEdicao="selecionarTarefaEdicao"
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
    selecionarTarefaEdicao(tarefaId) {
      this.$router.push(`/editarProjetosTarefas/${tarefaId}`);
    },
  },
  created() {
    apiMock.pegarTarefas((data) => {
      this.tarefas = data;
    });

    apiMock.pegarProjetos((data) => {
      this.porcentagem = data;
    });
  },
};
</script>
