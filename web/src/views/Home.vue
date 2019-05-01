<template>
  <div id="home">
    <Nav :hasSave="hasSave"/>
    <section id="main" class="section">
      <div class="tile is-parent is-paddingless">
        <div class="tile">
          <Roster/>
        </div>
        <div v-if="$store.state.selected" class="tile is-parent is-vertical is-3">
          <div class="tile is-child">
            <RosterDetails/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Roster from "@/components/Roster";
import RosterDetails from "@/components/RosterDetails";
import Nav from "@/components/Nav"

export default {
  components: {
    Nav,
    Roster,
    RosterDetails
  },
  data:() => ({
    hasSave: false
  })
};
</script>

<style>
#home {
  height: 100%;
}

#main {
  height: 91.5%;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/backgrounds/bg-3.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding: 0em 0.7em;
}

.navbar-brand .navbar-item img {
  max-height: 64px;
  width: auto;
  height: auto;
}
</style>
