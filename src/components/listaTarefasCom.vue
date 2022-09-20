<template>
  <v-container class="d-flex flex-row mt-8 full">
    <div class="d-flex flex-column width">
      <v-col cols="11">
        <v-text-field
          color="red lighten-3"
          loading
          v-model="pesquisa"
          placeholder="Encontre uma tarefa"
        ></v-text-field
        ><porcentagemProjetosTarefasCom :porcentagem="porcentagem" />
        <v-card>
          <v-card-text> Adicione uma nova tarefa! </v-card-text>
          <v-btn
            class="mt-4 mr-4"
            @click="adicionarNovaTarefa"
            dark
            small
            color="pink"
          >
            adicionar
          </v-btn>
        </v-card>
      </v-col>
    </div>

    <div class="d-flex flex-column width mt-13">
      <v-col cols="12">
        <v-row class="linha">
          <v-card
            width="350"
            max-width="450"
            class="mr-4 mb-4"
            v-for="tarefa in tarefasFiltradas"
            :key="tarefa.id"
          >
            <v-card-title
              >{{ tarefa.titulo }}
              <v-spacer> </v-spacer>
              <span class="projeto rounded-l-xl font-weight-light text-body-2"
                >{{ String(tarefa.projeto) }}
              </span>
            </v-card-title>
            <v-card-text class="mt-n3 rounded-l-xl status yellow darken-2">
              <span>{{ String(tarefa.status) }} </span>
            </v-card-text>

            <v-card-text class="font-weight-medium text-md-body-1">
              {{ tarefa.descricao }}
            </v-card-text>
            <v-btn
              class="mx-3 my-4"
              @click="selecionarTarefaEdicao(tarefa.id)"
              dark
              small
              color="pink"
            >
              editar
            </v-btn>
            <v-btn
              class="mx-3 my-4"
              @click="excluirTarefa(tarefa.id)"
              dark
              small
              color="pink"
            >
              excluir
            </v-btn>
          </v-card>
        </v-row>
      </v-col>
    </div>
  </v-container>
</template>

<script>
import apiMock from "@/apiMock.js";
import porcentagemProjetosTarefasCom from "@/components/porcentagemProjetosTarefasCom.vue";
export default {
  components: {
    porcentagemProjetosTarefasCom,
  },
  props: {
    tarefas: Array,
  },
  data: () => {
    return {
      pesquisa: "",
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
      this.$emit("selecionarTarefaEdicao", tarefaId);
    },

    excluirTarefa(tarefaId) {
      this.$emit("excluirTarefa", tarefaId);
    },

    adicionarNovaTarefa(novaTarefa) {
      this.$emit("adicionarNovaTarefa", novaTarefa);
    },
  },

  computed: {
    tarefasFiltradas() {
      return this.tarefas.filter((e) => {
        return e.titulo.toLowerCase().includes(this.pesquisa.toLowerCase());
      });
    },
  },

  created() {
    apiMock.pegarProjetos((data) => {
      this.porcentagem = data;
    });
  },
};
</script>

<style scoped>
.full {
  width: 100vw;
}
.width {
  width: 50vw;
}
.projeto {
  width: 25% !important;
  text-align: center !important;
  background-color: #ef9a9a;
}
.status {
  width: 37% !important;
  height: 10% !important;
  margin-left: 59% !important;
}
</style>
