<template>
  <v-app>
    <div>
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
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => {
    return {
      backgroundImg:
        "https://media.istockphoto.com/vectors/opened-personal-organizer-with-a-to-do-list-top-view-of-women-hands-vector-id1168738399?k=20&m=1168738399&s=612x612&w=0&h=adldxggj-8azZlhHE-COXj111heThIsmZI0wI7fxdH4=",
    };
  },
};
</script>

<style scoped>
.nav-bar {
  height: 25vh !important;
  background-image: url();
}
.img {
  height: 24vh;
}
</style>
