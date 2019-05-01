<template>
  <nav class="navbar has-background-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item is-paddingless" href="/">
          <img
            src="https://d2jcw5q7j4vmo4.cloudfront.net/vStP_cUyCZtoGjETS_8QduhkIWC0ur9IbhFc02XOkP9zIWjuVkLLhEzChdjt039rwj4=w300"
            alt="Princess Connect! Re:Dive Character Roster"
          >
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <span class="is-size-4 has-text-white">Character Sheet</span>
          </div>
        </div>
        <div v-if="hasSave" class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-success">
                <strong>Save Sheet</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  props:['hasSave']
}
</script>

