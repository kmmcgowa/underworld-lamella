import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    objects: [],
    currentObject: null,
    lastObjCoordinates: null
  },
  getters: {
    currentObject (state) {
      if (!state.currentObject) { return null }
      return state.objects[state.currentObject - 1]
    },

    configReady (state) {
      return state.objects.length !== 0
    },

    allObjects (state) {
      return state.objects
    },

    animationCoords (state) {
      return state.lastObjCoordinates
    }
  },
  mutations: {
    setObjects (state, objects) {
      state.objects = objects.objects
      console.log('State Set!')
    },

    setCurrentObject (state, index) {
      state.currentObject = index
    },

    setCoordinates (state, coords) {
      state.lastObjCoordinates = coords
    }
  },
  actions: {
    async loadObjects ({ commit }) {
      console.log('load')
      await Vue.axios.get('./config.json')
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
