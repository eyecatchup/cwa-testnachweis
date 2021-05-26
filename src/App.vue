<template>
  <v-app>
    <div class="muster" style="position:fixed;color: rgba(0, 0, 0, .2);z-index: 10;font-size: 5em;font-weight: 800;letter-spacing: .2em;transform: rotate(-45deg) translate(-50%, -50%);top: 33%;left: 50%;">Muster</div>
    <v-app-bar
      app
      color="toolbar"
      dark
      class="elevation-1"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Corona Warn App Logo"
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

      <v-btn x-small icon>
        <v-icon color="contrasttext">mdi-share-variant</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color="contrasttext">mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <CWA/>
    </v-main>

    <v-bottom-navigation v-model="value" class="justify-space-between">
      <v-btn value="recent">
        <span style="color:#007FAD;padding-left:16px;padding-right:16px;">Startseite</span>
  
        <v-icon color="#007FAD">mdi-home</v-icon>
      </v-btn>
  
      <v-btn value="favorites">
        <span style="color:#999999;padding-left:16px;padding-right:16px;">Check-In</span>
  
        <v-icon color="#999999">mdi-qrcode</v-icon>
      </v-btn>
  
      <v-btn value="nearby">
        <span style="color:#999999;padding-left:16px;padding-right:16px;">Tagebuch</span>
  
        <v-icon color="#999999">mdi-book</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import CWA from './components/CWA';

export default {
  name: 'App',

  components: {
    CWA,
  },

  data: () => ({
    value: 'recent'
  }),
};
</script>

<style scoped lang="scss">
.v-bottom-navigation {
  position: fixed;
}
.app-bar-title {
  color: rgba(0, 0, 0, 0.87);

  span {
    display: block;   
  }
  .top {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 1px;
  }
  .bottom {
    font-size: 10px;
    line-height: 12px;
  }
}
</style>
