<template>
  <div cols="3" class="d-flex flex-row mt-16">
    <v-col>
      <v-title class="ml-5 text-h6 font-weight-regular">Estudos</v-title>
      <v-progress-circular
        class="ml-n2 mt-6 mb-16"
        :value="porcentagem['Estudos']"
        color="blue-grey"
        :width="width"
        :size="size"
      >
        {{ Math.round(porcentagem["Estudos"]) || "0" }}%
      </v-progress-circular>
    </v-col>
    <v-col>
      <v-title class="ml-5 text-h6 font-weight-regular">Financeiro</v-title>
      <v-progress-circular
        class="ml-n2 mt-6 mb-16"
        :value="porcentagem['Financeiro']"
        color="deep-orange lighten-2"
        :width="width"
        :size="size"
      >
        {{ Math.round(porcentagem["Financeiro"]) || "0" }}%
      </v-progress-circular>
    </v-col>

    <v-col>
      <v-title class="ml-5 text-h6 font-weight-regular">Saúde</v-title>
      <v-progress-circular
        class="ml-n2 mt-6 mb-16"
        :value="porcentagem['Saúde']"
        color="brown"
        :width="width"
        :size="size"
      >
        {{ Math.round(porcentagem["Saúde"]) || "0" }}%
      </v-progress-circular>
    </v-col>

    <v-col>
      <v-title class="ml-5 text-h6 font-weight-regular">Diversão</v-title>
      <v-progress-circular
        class="ml-n2 mt-6 mb-16"
        :value="porcentagem['Diversão']"
        color="lime"
        :width="width"
        :size="size"
      >
        {{ Math.round(porcentagem["Diversão"]) || "0" }}%
      </v-progress-circular>
    </v-col>

    <v-col>
      <v-title class="ml-5 text-h6 font-weight-regular">Outros</v-title>
      <v-progress-circular
        class="ml-n2 mt-6 mb-16"
        :value="porcentagem['Outros']"
        color="indigo darken-2"
        :width="width"
        :size="size"
      >
        {{ Math.round(porcentagem["Outros"]) || "0" }}%
      </v-progress-circular>
    </v-col>
  </div>
</template>

<script>
export default {
  props: ["porcentagem"],

  data: () => {
    return {
      size: 130,
      width: 6,
    };
  },

  created() {},
};
</script>

<style scoped></style>
