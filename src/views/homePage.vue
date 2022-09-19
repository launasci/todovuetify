<template>
  <div>
    <div class="d-flex mt-10">
      <v-col cols="5" offset-md="1">
        <v-img
          height="735"
          src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-lista-de-verificacao-de-objetivos-pessoais_114360-9881.jpg?w=826&t=st=1663537831~exp=1663538431~hmac=d549e5eaf94ad7c997f7572d3e26b368e064ddd0c32b6d9f5ff49c7de76c67a0"
        ></v-img>
      </v-col>
      <v-col cols="3" offset-md="1" class="d-flex align-center flex-wrap">
        <v-row>
          <v-title class="text-h3 text-no-wrap mb-6 text-center"
            >Gerenciador de Tarefas</v-title
          >
          <v-card shaped class="d-flex flex-column">
            <v-card-title class="mb-6 px-4">
              Começe a usar uma aplicação para gerênciar suas tarefas, organizar
              sua rotina e otimar seu tempo!
            </v-card-title>
            <v-btn
              class="mr-4 ml-4 mb-10 red lighten-3"
              elevation="6"
              to="/paginaLogin"
              >Faça login</v-btn
            >
            <v-btn
              class="ml-4 mr-4 mb-10 red lighten-3"
              elevation="6"
              to="/paginaCadastro"
              >Se cadastre
            </v-btn>
          </v-card>
        </v-row>
      </v-col>
    </div>
  </div>
</template>
