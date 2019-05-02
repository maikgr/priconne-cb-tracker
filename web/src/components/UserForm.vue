<template>
    <div class="columns is-paddingless is-vcentered is-multiline">
      <div class="column">
        <b-field>
          <b-input type="text" v-model="username" placeholder="Username"></b-input>
        </b-field>
      </div>

      <div class="column">
        <b-field>
          <b-input type="number" v-model="userlevel" placeholder="Level"></b-input>
        </b-field>
      </div>

      <div class="column">
        <b-button type="is-success is-fullwidth">Create</b-button>
      </div>
    </div>
</template>

<script>
export default {
  data: () => ({
    username: "",
    userlevel: ''
  })
};
</script>
