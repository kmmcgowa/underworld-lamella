<template>
  <div id="object-screen" v-if="configReady">
    <Navigation/>
    <div class="artwork">
      <img :src="objectArtwork">
    </div>
    <main class="content">
      <!-- Info box holds and of the right hand content including the label, translation, and audio apparatus -->
      <!-- Zoom screen will also be placed here, but covers the screen naturally. -->
      <div id="infoBox">
        <router-view :config="currentObject"/>
      </div>
    </main>
    <ObjectNavigation/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navigation from './Navigation'
import Label from './object/Label'
import ObjectNavigation from './object/ObjectNavigation'

export default {

  name: 'ObjectScreen',

  components: {
    Navigation,
    Label,
    ObjectNavigation
  },

  computed: {
    objectArtwork: function () {
      if (this.configReady) {
        return `./assets/${this.currentObject.image}`
      }
      return './assets/bm1.png'
    },

    ...mapGetters([
      'currentObject',
      'configReady'
    ])
  },

  watch: {
    '$route': 'setPrimaryObject'
  },

  created () {
    this.setPrimaryObject()
  },

  methods: {
    setPrimaryObject () {
      let id = parseInt(this.$route.params.obj_id)

      if (isNaN(id)) {
        console.error('Object Id param is not an Integer')
        return
      }

      this.$store.dispatch('setNewCurrentObject', id)
    }
  }
}
</script>

<style lang="scss">
#object-screen {
  padding: 0 1em;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 60px 1fr 150px;
  grid-template-areas:
          "nav nav"
          "art info"
          "options info";
}
#main-navigation {
  grid-area: nav;
}
#infoBox {
  grid-area: info;
}
#object-nav {
  grid-area: options;
}
</style>

<style lang="scss" scoped>
.content {
  max-height: 814px;
}

img {
  width: 100%;
}
</style>
