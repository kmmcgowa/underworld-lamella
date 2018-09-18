import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    objects: [],
    currentObject: null
  },
  getters: {
    currentObject: (state) => {
      if (!state.currentObject) { return null }
      return state.objects[state.currentObject - 1]
    },

    configReady: state => {
      return state.objects.length !== 0
    }
  },
  mutations: {
    setObjects (state, objects) {
      state.objects = objects.objects
      console.log('State Set!')
    },

    setCurrentObject (state, index) {
      state.currentObject = index
    }
  },
  actions: {
    async loadObjects ({ commit }) {
      console.log('load')
      await Vue.axios.get('/config.json')
        .then(res => res.data)
        .then(objects => {
          console.log('loaded')
          commit('setObjects', objects)
        })
    },

    setNewCurrentObject ({ commit }, index) {
      commit('setCurrentObject', index)
    }
  }
})
