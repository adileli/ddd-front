<template>
  <v-app id="app">
    <router-view></router-view>
    <snackbar></snackbar>
    <loading-bar></loading-bar>
  </v-app>
</template>
<script>
  import Snackbar from "./components/snackbar";
  import LoadingBar from "./components/loading-bar";
  export default {
    components: {LoadingBar, Snackbar},
    created() {
      this.$store.dispatch('auth/loadUser');
    },
    data() {
      return {
        dialog: true
      }
    }
  }
</script>
