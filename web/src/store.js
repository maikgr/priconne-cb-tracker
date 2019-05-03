import Vue from 'vue'
import Vuex from 'vuex'
import api from "@/services/api";
import { transform, sort, imageMap, artworkMap } from "@/services/dbchar-transformer";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chars: [],
    imageMap: {},
    artworkMap: {},
    owned: [],
    notOwned: [],
    selected: null
  },
  mutations: {
    INITIALIZE (state, data) {
      state.chars = data.chars
      state.imageMap = data.imageMap
      state.artworkMap = data.artworkMap
    },
    INTIALIZE_ROSTER (state, chars) {
      state.owned = chars
      state.notOwned = []
      state.selected = null
    }
  },
  actions: {
    initialize (context) {
      api.get()
        .then(result => {
          context.commit('INITIALIZE', {
            chars: sort(result.data),
            imageMap: imageMap(result.data),
            artworkMap: artworkMap(result.data)
          })
        })
        .catch(e => {
          console.error(e);
        });
    },
    initializeRoster (context) {
      api.get()
        .then(result => {
          context.commit('INTIALIZE_ROSTER', transform(sort(result.data)))
        })
        .catch(e => {
          console.error(e);
        });
    }
  }
})
