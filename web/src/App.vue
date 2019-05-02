<template>
  <div id="app">
    <Nav />
    <Home />
  </div>
</template>

<script>
import Home from './views/Home'
import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    Home,
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

