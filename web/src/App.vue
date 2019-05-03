<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from './components/Nav';

export default {
  name: 'App',
  components: {
    Nav
  },
  created() {
    this.$store.dispatch('initialize');
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

