<template>
  <div id="app">
    <Nav />
    <Home />
  </div>
</template>

<script>
import Home from './views/Home'
import Nav from './components/Nav'
import api from "@/services/api";

export default {
  name: 'App',
  components: {
    Home,
    Nav
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
#app {
  height: 100%;
}
</style>

