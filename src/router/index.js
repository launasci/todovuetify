import Vue from "vue";
import VueRouter from "vue-router";
import homePage from "@/views/homePage.vue";
import loginPage from "@/views/loginPage.vue";
import cadastroPage from "@/views/cadastroPage.vue";
import exibirProjetosTarefasPage from "@/views/exibirProjetosTarefasPage.vue";
import editarProjetosTarefasPage from "@/views/editarProjetosTarefasPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "homePage",
    component: homePage,
  },

  {
    path: "/paginaCadastro",
    name: "cadastroPage",
    component: cadastroPage,
  },

  {
    path: "/paginaLogin",
    name: "loginPage",
    component: loginPage,
  },

  {
    path: "/exibirProjetosTarefas",
    name: "exibirProjetosTarefasPage",
    component: exibirProjetosTarefasPage,
  },

  {
    path: "/adicionarProjetosTarefas",
    name: "editarProjetosTarefasPage",
    component: editarProjetosTarefasPage,
  },

  {
    path: "/editarProjetosTarefas/:id",
    name: "editarProjetosTarefasPage",
    component: editarProjetosTarefasPage,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
