<template>
  <section id="main" class="section is-paddingless">
    <div class="tabs">
      <ul>
        <li class="is-active"><a>Characters</a></li>
        <li><a>Teams</a></li>
      </ul>
    </div>
      <div class="tile is-parent is-paddingless">
        <div class="tile">
          <Roster/>
        </div>
        <div v-if="$store.state.selected !== null" class="tile is-parent is-vertical is-3">
          <div class="tile is-child">
            <RosterDetails/>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import api from '@/services/api'
export default {
  created() {
    this.$store.state.owned = []
    this.$store.state.notOwned = []
    this.$store.state.selected = null

    api.getUser(this.$route.params.id)
      .then((result) => {
        this.$store.state.owned = result.data.roster.owned
        this.$store.state.notOwned = result.data.roster.notOwned
      })
      .catch((e) => {
        console.error(e)
        this.$router.push({ name: 'home' })
      })
  }
}
</script>
