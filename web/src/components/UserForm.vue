<template>
    <div class="columns is-paddingless is-vcentered is-multiline">
      <div class="column">
        <b-field :type="isInvalid ? 'is-danger' : ''">
          <b-input type="text" v-model="username" placeholder="Username"></b-input>
        </b-field>
      </div>

      <div class="column">
        <b-field :type="isInvalid ? 'is-danger' : ''">
          <b-input type="number" v-model="userlevel" placeholder="Level"></b-input>
        </b-field>
      </div>

      <div class="column">
        <b-button type="is-success is-fullwidth" @click="saveSheet()">Save</b-button>
      </div>
    </div>
</template>

<script>
export default {
  data: () => ({
    username: '',
    userlevel: '',
    isInvalid: false
  }),
  methods: {
    saveSheet: function() {
      if (this.username === '' || this.userlevel === '') {
        this.isInvalid = true
        return
      }

      this.isInvalid = false
    }
  }
};
</script>
