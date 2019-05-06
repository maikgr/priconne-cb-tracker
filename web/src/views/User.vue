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
          <div class="tile is-child is-12">
            <div id="save" class="card">
              <div class="card-content">
                <b-button type="is-success is-fullwidth">Save</b-button>
              </div>
            </div>
          </div>
          <div class="tile is-child">
            <RosterDetails/>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import Roster from "@/components/Roster";
import RosterDetails from "@/components/RosterDetails";
export default {
  components: {
    Roster,
    RosterDetails
  },
  created() {
    this.$store.dispatch('userRoster', this.$route.params.id)
  }
}
</script>

<style scoped>
#save {
  background-color: rgba(248, 255, 255, 0.75)
}
</style>

