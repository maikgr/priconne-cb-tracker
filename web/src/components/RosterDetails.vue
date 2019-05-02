<template>
  <div v-if="selected" id="details" class="card">
    <div class="card-image">
      <figure class="image">
        <img :src="selected.image.artwork">
      </figure>
    </div>
    <div class="card-content">
      <div class="columns is-paddingless is-vcentered is-multiline">
        <div class="column is-12">
        <p class="title is-4">{{ selected.name }}</p>
        </div>

        <div class="column is-6">
          <b-field label="Level">
            <b-input v-model="selected.level" type="number" placeholder="Level"></b-input>
          </b-field>
        </div>
        <div class="column is-6">
          <b-field label="Rank">
            <b-input v-model="selected.rank" type="number" placeholder="Rank" min="1"></b-input>
          </b-field>
        </div>
        <div class="column is-6">
          <b-field label="Stars">
            <b-input v-model="selected.stars" type="number" placeholder="Stars" min="1" max="5"></b-input>
          </b-field>
        </div>
        <div class="column is-6">
          <b-field label="Gears">
            <b-select v-model="selected.gears" placeholder="Progress" expanded>
              <option
                v-for="gear in gearProgress"
                :value="gear"
                :key="gear"
              >{{ gear }}</option>
            </b-select>
          </b-field>
        </div>
        <div class="column is-6">
          <b-field v-if="selected.unique !== null" label="Unique">
            <b-select v-model="selected.unique" placeholder="Level" expanded>
              <option v-for="ue in uniqueLevels" :value="unique" :key="ue">{{ ue }}</option>
            </b-select>
          </b-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    gearProgress: [ "Maxed", "In Progress", "None" ],
    uniqueLevels: [0, 30, 50, 70, 90, 110, 130]
  }),
  computed: {
    selected: function() {
      return this.$store.state.selected
    }
  }
};
</script>

<style scoped>
figure.image > img {
  max-height: 256px;
  width: auto;
  height: auto;
}
</style>
