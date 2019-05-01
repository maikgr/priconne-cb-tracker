<template>
  <Home />
</template>

<script>
import Home from './views/Home'
import api from "@/services/api";

export default {
  name: 'App',
  components: {
    Home
  },
  created() {
    api
      .get()
      .then(result => {
        this.$store.dispatch('setChars', result.data)
      })
      .catch(e => {
        console.error(e);
      });
  }
}
</script>

<style>
html, body {
  height: 100%;
}
</style>

