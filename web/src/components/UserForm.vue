<template>
  <div class="card">
    <div class="card-content">
      <div class="columns is-paddingless is-vcentered is-multiline">
        <div class="column is-6">
          <b-field label="Username">
            <b-input type="text" v-model="username"></b-input>
          </b-field>
        </div>

        <div class="column is-6">
          <b-field label="Level">
            <b-input type="number" v-model="userlevel"></b-input>
          </b-field>
        </div>

        <div class="column">
          <b-button type="is-success is-fullwidth">Create</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    username: "",
    userlevel: 0
  })
};
</script>
