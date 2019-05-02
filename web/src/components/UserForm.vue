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
import api from '@/services/api'
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

      api.addUser(this.username, this.userlevel, this.$store.state.owned, this.$store.state.notOwned)
        .then((result) => {
          console.log(result.data)
        })
        .catch((e) => console.error(e))
      this.isInvalid = false
    }
  }
};
</script>
