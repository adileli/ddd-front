<template>
  <v-app id="app">
    <router-view></router-view>
  </v-app>
</template>
<script>
  export default {
    created() {
      this.$store.dispatch('auth/loadUser');
    },
  }
</script>
