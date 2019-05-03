<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    Nav
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

