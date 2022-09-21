<template>
  <div>
    <v-col cols="4" offset="4" class="form d-flex">
      <v-card>
        <v-card-title>
          <span class="text-h6">{{ tituloCard }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  class="text-h7"
                  type="text"
                  name="titulo"
                  :value="titulo"
                  @input="(event) => tituloChange(event)"
                  placeholder="Titulo"
                />
              </v-col>
              <v-col cols="6">
                <v-autocomplete
                  :items="['Pendente', 'Em andamento', 'Concluida']"
                  label="Status"
                  :value="status"
                  @input="(event) => statusChange(event)"
                ></v-autocomplete>
              </v-col>
              <v-col cols="6 mt-8">
                <v-autocomplete
                  :items="[
                    'Estudos',
                    'Financeiro',
                    'Saúde',
                    'Diversão',
                    'Outros',
                  ]"
                  label="Projetos"
                  :value="projeto"
                  @input="(event) => projetoChange(event)"
                ></v-autocomplete>
              </v-col>
              <v-col cols="6 mt-8">
                <v-textarea
                  rows="1"
                  class="text-h9"
                  name="descricao"
                  :value="descricao"
                  @input="(event) => descricaoChange(event)"
                  placeholder="Adicione uma descrição"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-btn @click="salvarTarefa" color="pink" dark bottom class="mt-10">
              {{ botao }}
            </v-btn>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-col>
  </div>
</template>

<script>
export default {
  props: [
    "id",
    "botao",
    "tituloCard",
    "titulo",
    "descricao",
    "projeto",
    "status",
  ],
  data: () => {
    return {};
  },

  methods: {
    salvarTarefa() {
      const novaTarefa = {
        titulo: this.titulo,
        descricao: this.descricao,
        status: this.status,
        projeto: this.projeto,
        id: this.id,
      };

      if (this.botao == "Adicionar") {
        this.$emit("salvarTarefa", novaTarefa);
      } else {
        novaTarefa.id = this.$route.params.id;
        this.$emit("salvarTarefaEditada", novaTarefa);
      }
    },

    tituloChange(e) {
      this.$emit("tituloChange", e);
    },
    descricaoChange(e) {
      this.$emit("descricaoChange", e);
    },
    statusChange(e) {
      this.$emit("statusChange", e);
    },
    projetoChange(e) {
      this.$emit("projetoChange", e);
    },
  },
};
</script>

<style scoped>
.form {
  margin-top: 8% !important;
}
</style>
