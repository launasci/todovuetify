// PARTE DE ROTAS

- Instalar PageHome (FEITO)
- Fazer a PageHome direcionar a loginPage (FEITO)
- Caso o usuario não tenha cadastro, ser direcionado a pagina de cadastro (FEITO)
- Salvar usuários cadastros (FEITO)
- Instalar pagina de tarefas e resumo (FEITO)
- Caso o usuario tenha cadastro direcionar a pagina de tarefas e resumo
  ---------------> tentar entender: quando coloco o caminho para a pagina de tarefas e resumo não consigo salvar o cadastro na APi
- Instalar pagina de cadastrar, alterar e deletar, tarefas e grupos

// validações

- validar email e senha

// script da pagina de LOGIN

<script>
export default {
  data: () => {
    email: "";
    senha: "";
    emailRules: [
      (v) => !!v || "Informe seu e-mail",
      (v) => /.+@.+\..+/.test(v) || "Digite um e-mail valido",
    ];
  },

  methods: {},
};
</script>

// ---------------
