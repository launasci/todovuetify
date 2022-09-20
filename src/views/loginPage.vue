<template>
  <div>
    <div class="d-flex">
      <v-col cols="5" offset-md="1">
        <v-img
          height="735"
          src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-lista-de-verificacao-de-objetivos-pessoais_114360-9881.jpg?w=826&t=st=1663537831~exp=1663538431~hmac=d549e5eaf94ad7c997f7572d3e26b368e064ddd0c32b6d9f5ff49c7de76c67a0"
        ></v-img>
      </v-col>
      <v-col cols="5" offset-md="1" class="d-flex align-center flex-wrap">
        <v-row>
          <v-form ref="form">
            <v-title class="text-h3 text-no-wrap mb-10 text-center"
              >Faça seu login</v-title
            >
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
            <v-btn
              elevation="6"
              class="red lighten-3 mr-4"
              to="/exibirProjetosTarefas"
              >Login</v-btn
            >
            <v-btn elevation="6" to="/"> Voltar </v-btn>
          </v-form>
        </v-row>
      </v-col>
    </div>
  </div>
</template>

<style></style>
