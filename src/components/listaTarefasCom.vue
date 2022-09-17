<template>
  <div>
    <v-col class="d-flex" cols="6" offset-md="6">
      <v-expansion-panels class="mb-6">
        <v-expansion-panel v-for="tarefa in tarefas" :key="tarefa.id">
          <v-expansion-panel-header expand-icon="mdi-menu-down">
            {{ tarefa.titulo }}
            <v-expansion-panel-content
              >{{ String(tarefa.status) }}
            </v-expansion-panel-content>
          </v-expansion-panel-header>
          <v-expansion-panel-content
            >{{ String(tarefa.projeto) }}
          </v-expansion-panel-content>
          <v-expansion-panel-content
            >{{ tarefa.descricao }}
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <v-btn
              class="mt-4 mr-4"
              @click="selecionarTarefaEdicao(tarefa.id)"
              dark
              small
              color="pink"
            >
              editar
            </v-btn>
            <v-btn
              class="mt-4 mr-4"
              @click="excluirTarefa(tarefa.id)"
              dark
              small
              color="pink"
            >
              excluir
            </v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </div>
</template>

<script>
export default {
  props: {
    tarefas: Array,
  },
  data: () => {
    return {};
  },

  methods: {
    selecionarTarefaEdicao(tarefaId) {
      this.$emit("selecionarTarefaEdicao", tarefaId);
    },

    excluirTarefa(tarefaId) {
      this.$emit("excluirTarefa", tarefaId);
    },
  },
};
</script>
