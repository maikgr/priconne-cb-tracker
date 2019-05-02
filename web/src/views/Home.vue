<template>
  <section id="main" class="section is-paddingless">
    <nav class="navbar has-background-light">
      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
          <UserForm />
          </div>
        </div>
      </div>
    </nav>
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
import Roster from "@/components/Roster";
import RosterDetails from "@/components/RosterDetails";
import UserForm from "@/components/UserForm";
import api from "@/services/api"
import { transform } from "@/services/dbchar-transformer"
export default {
  components: {
    Roster,
    RosterDetails,
    UserForm
  },
  created() {
    api.get()
      .then(result => {
        this.$store.state.owned = transform(result);
      })
      .catch(e => {
        console.error(e);
      });
  }
};
</script>

<style>

#main {
  min-height: 91.5%;
  height: auto;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)),
    fixed url("../assets/backgrounds/bg-3.jpg") center center no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.navbar-brand .navbar-item img {
  max-height: 64px;
  width: auto;
  height: auto;
}
</style>
