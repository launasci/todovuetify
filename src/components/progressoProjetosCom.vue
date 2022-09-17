<template>
  <div>
    <v-col cols="6" class="mt-10 d-flex w-100">
      <v-progress-circular
        class="ml-10"
        :value="porcentagem['Estudos']"
        color="blue-grey"
      >
        Estudos {{ porcentagem["Estudos"] || "0" }} %</v-progress-circular
      >

      <v-progress-circular
        class="ml-10"
        :value="porcentagem['Financeiro']"
        color="deep-orange lighten-2"
      >
        Financeiro {{ porcentagem["Financeiro"] || "0" }} %</v-progress-circular
      >

      <v-progress-circular
        class="ml-10"
        :value="porcentagem['Saúde']"
        color="brown"
        >Saúde {{ porcentagem["Saúde"] || "0" }} %</v-progress-circular
      >

      <v-progress-circular
        class="ml-10"
        :value="porcentagem['Diversão']"
        color="lime"
        >Diversão {{ porcentagem["Diversão"] || "0" }} %</v-progress-circular
      >

      <v-progress-circular
        class="ml-10"
        :value="porcentagem['Outros']"
        color="indigo darken-2"
        >Outros {{ porcentagem["Outros"] || "0" }} %</v-progress-circular
      >
    </v-col>
  </div>
</template>

<script>
export default {
  props: ["porcentagem"],
  created() {},
};
</script>
