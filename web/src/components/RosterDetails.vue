<template>
  <div v-if="selected" id="details" class="card">
    <div class="card-image">
      <figure class="image">
        <img :src="selected.char.artwork">
      </figure>
    </div>
    <div class="card-content">
      <div class="columns is-paddingless is-vcentered is-multiline">
        <div class="column is-12">
        <p class="title is-4">{{ selected.char.alias }}</p>
        </div>

        <div class="column is-6">
          <b-field label="Level">
            <b-input type="number" placeholder="Level"></b-input>
          </b-field>
        </div>
        <div class="column is-6">
          <b-field label="Stars">
            <b-input type="number" placeholder="Stars" min="1" max="5"></b-input>
          </b-field>
        </div>
        <div class="column is-6">
          <b-field label="Rank">
            <b-input type="number" placeholder="Rank" min="1"></b-input>
          </b-field>
        </div>
        <div class="column is-6">
          <b-field label="Gear Progression">
            <b-select placeholder="Gear Progression" expanded>
              <option
                v-for="gear in gearProgress"
                :value="gear.value"
                :key="gear.status"
              >{{ gear.value }}</option>
            </b-select>
          </b-field>
        </div>
        <div class="column is-6">
          <b-field v-if="selected.unique !== ''" label="Unique Level">
            <b-select placeholder="Unique Level" expanded>
              <option v-for="unique in uniqueLevels" :value="unique" :key="unique">{{ unique }}</option>
            </b-select>
          </b-field>
        </div>
        <div class="column is-12">
          <b-button type="is-success is-fullwidth">Save</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    gearProgress: [
      { status: 1, value: "Maxed" },
      { status: 0, value: "In-Progress" },
      { status: -1, value: "None" }
    ],
    uniqueLevels: [30, 50, 70, 90, 110, 130]
  }),
  computed: {
    selected: function() {
      return this.$store.state.selected;
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
