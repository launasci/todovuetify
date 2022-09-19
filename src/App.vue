<template>
  <v-app>
    <div class="d-flex flex-column" height="100">
      <v-toolbar class="nav-bar" light prominent>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-export</v-icon>
        </v-btn>
      </v-toolbar>
    </div>
    <v-main>
      <router-view />
    </v-main>
    <v-footer padless>
      <v-col class="text-center red lighten-3" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => {
    return {};
  },
};
</script>

<style scoped></style>
