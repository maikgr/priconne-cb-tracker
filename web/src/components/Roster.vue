<template>
  <div class="tile is-vertical is-parent">
    <div class="tile is-child box">
      <p class="title">Owned</p>
      <div class="columns is-multiline is-mobile">
        <div
          class="column is-narrow chara"
          v-for="(character, index) in owned"
          :key="index"
        >
          <span class="icon" 
          @click="moveToNotOwned(index)">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
          <div class="card" @click="select(index)">
            <div class="card-content is-paddingless">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-64x64" v-tooltip.auto="character.char.alias">
                    <img :src="character.char.image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="has-text-weight-semibold is-size-7"> 127 / R12 / 5⭐️</p>
                  <p class="has-text-weight-normal is-size-7"> Gear Maxed </p>
                  <p class="has-text-weight-normal is-size-7"> Unique 130 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tile is-child box">
      <p class="title">Not Owned</p>
      <div class="columns is-multiline is-mobile">
        <div
          class="column is-narrow chara"
          v-for="(character, index) in notOwned"
          :key="index"
        >
          <span class="icon" 
          @click="moveToOwned(index)">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
          <figure class="image is-64x64 is-unavailable"  v-tooltip.auto="character.char.alias">
            <img :src="character.char.image">
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    notOwned: []
  }),
  computed: {
    owned: function() {
      return this.$store.state.chars
    }
  },
  methods: {
    moveToOwned: function(index) {
      const char = this.notOwned[index];
      this.notOwned.splice(index, 1);
      this.owned.push(char);
    },
    moveToNotOwned: function(index) {
      const char = this.owned[index];
      this.owned.splice(index, 1);
      this.notOwned.push(char);
    },
    select: function(index) {
      const char = this.owned[index];
      this.$store.dispatch('selectChar', char);
    }
  }
};
</script>

<style scoped>
@import url('../styles/vtooltip.css');

.box {
  background-color: rgba(248, 255, 255, 0.75)
}

.image.is-unavailable::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
}

.chara {
  position: relative;
}

.chara > .icon {
  position: absolute;
  top: 3px;
  left: 3px;
  z-index: 2;
  color: hsl(348, 100%, 61%);
  cursor: pointer;
}

.chara > .card {
  cursor: pointer;
}
</style>
