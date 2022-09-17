<template>
  <div>
    <v-col cols="6" class="mt-10">
      <v-card>
        <v-card-title>
          <span class="text-h6">Cadastre uma nova categoria de projeto</span>
        </v-card-title>
        <v-card-text>
          <v-container class="d-flex">
            <v-row>
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
                  multiple
                  :value="projeto"
                  v-model="projeto"
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-btn
              @click="salvarProjeto"
              color="pink"
              fab
              dark
              cent
              absolute
              bottom
              right
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-container>
        </v-card-text>
      </v-card>
    </v-col>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      projeto: "",
    };
  },

  methods: {
    salvarProjeto() {
      const novoProjeto = {
        projeto: this.projeto,
      };
      this.$emit("salvarProjeto", novoProjeto);
      this.projeto = "";
    },
  },
};
</script>
