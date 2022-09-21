<template>
  <div>
    <div class="d-flex mt-10">
      <v-col cols="5" offset-md="1">
        <v-img
          height="735"
          src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-lista-de-verificacao-de-objetivos-pessoais_114360-9881.jpg?w=826&t=st=1663537831~exp=1663538431~hmac=d549e5eaf94ad7c997f7572d3e26b368e064ddd0c32b6d9f5ff49c7de76c67a0"
        ></v-img>
      </v-col>
      <v-col cols="5" offset-md="1" class="d-flex align-center flex-wrap">
        <v-row>
          <v-form c ref="form">
            <v-title class="text-h3 text-no-wrap mb-4 text-center"
              >Faça seu cadastro</v-title
            >
            <v-text-field
              v-model="nome"
              :rules="nomeRules"
              label="Nome"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="senha"
              :rules="senhaRules"
              label="Senha"
              required
            ></v-text-field>
            <v-btn
              elevation="6"
              class="red lighten-3 mr-4"
              @click="criarUsuario"
            >
              Criar Cadastro
            </v-btn>
            <v-btn elevation="6" to="/"> Voltar </v-btn>
          </v-form>
        </v-row></v-col
      >
    </div>
  </div>
</template>

<script>
import apiMock from "@/apiMock.js";
export default {
  data: () => {
    return {
      listaDeUsuarios: [],
      nome: "",
      email: "",
      senha: "",
      nomeRules: [(v) => !!v || "Informe seu nome"],
      emailRules: [
        (v) => !!v || "Informe seu e-mail",
        (v) => /.+@.+\..+/.test(v) || "O email precisa ser válido.",
      ],
      senhaRules: [
        (v) => !!v || "Informe sua senha",
        (v) => /....../.test(v) || "Sua senha precisa de mais de 6 caracteres.",
      ],
    };
  },

  methods: {
    criarUsuario() {
      const novoUsuario = {
        nome: this.nome,
        email: this.email,
        senha: this.senha,
      };
      apiMock.criarUsuario(novoUsuario, () => {
        this.$router.push("/exibirProjetosTarefas");
      });
    },
  },
};
</script>

<style>
.flexx {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-top: 10%;
}
.form {
  flex-direction: column;
}
</style>
