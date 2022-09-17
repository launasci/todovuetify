<template>
  <div class="flexx">
    <h1>Fazer Cadastro</h1>
    <div>
      <v-form class="form d-flex justify-center mb-6" ref="form">
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
      </v-form>
      <v-btn color="success" class="mr-4" @click="criarUsuario">
        Criar Cadastro
      </v-btn>
      <v-btn to="/paginaLogin"> Voltar </v-btn>
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
