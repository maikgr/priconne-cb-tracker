<template>
  <div class="tile is-vertical is-parent">
    <div class="tile is-child box">
      <p class="title">Owned</p>
      <div class="columns is-multiline is-mobile">
        <div
          class="column chara"
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
                  <figure class="image is-64x64" v-tooltip.auto="character.name">
                    <img :src="character.image.avatar">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="has-text-weight-semibold is-size-7"> {{ character.level }} / R{{ character.rank }} / {{ character.stars }}⭐️</p>
                  <p class="has-text-weight-normal is-size-7"> Gears {{ character.gears }} </p>
                  <p v-if="character.unique !== null" class="has-text-weight-normal is-size-7"> Unique {{ character.unique }} </p>
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
          <figure class="image is-64x64 is-unavailable"  v-tooltip.auto="character.name">
            <img :src="character.image.avatar">
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    owned: function() {
      return this.$store.state.owned
    },
    notOwned: function() {
      return this.$store.state.notOwned
    }
  },
  methods: {
    moveToOwned: function(index) {
      const char = this.notOwned[index];
      this.$store.state.notOwned.splice(index, 1);
      this.$store.state.owned.push(char);
    },
    moveToNotOwned: function(index) {
      const char = this.owned[index];
      this.$store.state.owned.splice(index, 1);
      this.$store.state.notOwned.push(char);
    },
    select: function(index) {
      this.$store.state.selected = this.owned[index]
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

.chara .media-content {
  padding-top: 0.25rem;
  min-width: 120px;
  max-height: 64px;
}
</style>
