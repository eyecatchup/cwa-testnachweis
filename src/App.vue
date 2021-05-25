<template>
  <v-app>
    <v-app-bar
      app
      color="toolbar"
      dark
      class="elevation-1"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://www.coronawarn.app/assets/img/icons/favicon-192x192.png"
          transition="scale-transition"
          width="40"
        />
        <v-toolbar-title class="app-bar-title">
          <span class="top">CORONA</span>
          <span class="bottom">WARN-APP</span>
        </v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon color="contrasttext">mdi-share-variant</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color="contrasttext">mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped lang="scss">
.app-bar-title {
  color: rgba(0, 0, 0, 0.87);

  span {
    display: block;
    letter-spacing: 1px;
  }
  .top {
    font-size: 20px;
    line-height: 20px;
  }
  .bottom {
    font-size: 12px;
    line-height: 12px;
  }
}
</style>
