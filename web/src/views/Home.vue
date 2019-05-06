<template>
  <section id="main" class="section is-paddingless">
    <Roster/>
  </section>
</template>

<script>
import Roster from "@/components/Roster";
import UserForm from "@/components/UserForm";
import api from "@/services/api"

export default {
  components: {
    Roster
  },
  data: {
    imageMap: null,
    artworkMap: null,
    initialOwned: null,
    initialNotOwned: null
  },
  created() {
    api.getChar()
      .then(result => {
        
      })
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
</style>
