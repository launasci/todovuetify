<template>
  <div>
    <v-form ref="form">
      <v-text-field
        v-model="email"
        :counter="10"
        :rules="emailRules"
        label="Email"
        required
      ></v-text-field>

      <v-text-field
        v-model="senha"
        :rules="senhaRules"
        label="Senha"
        required
      ></v-text-field>
    </v-form>
    <v-btn
      elevation="12"
      color="success"
      class="mr-4 ml-2"
      to="/exibirProjetosTarefas"
      >Login</v-btn
    >
    <v-btn elevation="12" color="warning" class="mr-4" to="/paginaCadastro"
      >Cadastro</v-btn
    >
  </div>
</template>
