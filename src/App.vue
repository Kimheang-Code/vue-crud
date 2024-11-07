<template>
  <v-layout ref="app" class="rounded rounded-md">
    <v-app-bar :elevation="2" color="brown-darken-4" name="app-bar">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-btn class="mx-auto" variant="text">
        Header
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'left' : undefined">
      <v-list>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="" style="margin-top: 60px; padding: 5px; width: 100%;">
        <router-view></router-view>
    </v-main>

    <v-footer name="footer" color="brown-darken-4" app>
      <v-btn class="mx-auto" variant="text">
        Footer
      </v-btn>
    </v-footer>
  </v-layout>
</template>
<script>
export default {
  data: () => ({
    drawer: true,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>
