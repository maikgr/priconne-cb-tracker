import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected: null,
    chars: []
  },
  mutations: {
    SET_SELECTED_CHAR (state, char) {
      state.selected = char;
    },
    SET_CHARS (state, chars) {
      state.chars = chars
    }
  },
  actions: {
    selectChar (context, selectedChar) {
      context.commit('SET_SELECTED_CHAR', selectedChar)
    },
    setChars (context, chars) {
      context.commit('SET_CHARS', chars)
    }
  }
})
