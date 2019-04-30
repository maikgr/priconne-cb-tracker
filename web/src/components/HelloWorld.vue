<template>
  <v-app>
    <v-container grid-list-xs>
      <v-layout row wrap align-start>
        <v-flex v-for="character in chars" :key="character.char.name" xs1 shrink>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-img :src="character.char.image" height="64px" contain v-on="on"/>
            </template>
            <span> {{ character.char.alias }} </span>
          </v-tooltip>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import api from '@/services/api'
export default {
  data: () => ({
    chars: []
  }),
  created() {
    api.get()
      .then((result) => {
        this.chars = result.data
      })
      .catch((e) => {
        console.error(e)
      });
  }
};
</script>

<style>

</style>
