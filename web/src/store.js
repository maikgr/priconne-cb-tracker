import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chars: [],
    owned: [],
    notOwned: [],
    selected: null
  },
  mutations: {
  },
  actions: {
  }
})
