<template>
  <div id="object-screen">
    <Navigation/>
    <div class="artwork">
      <img :src="objectArtwork">
    </div>
    <!-- Info box holds and of the right hand content including the label, translation, and audio apparatus -->
    <!-- Zoom screen will also be placed here, but covers the screen naturally. -->
    <div id="infoBox">
      <Label v-if="(config && showLabel)" :text="this.config.label"></Label>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation'
import Label from './object/Label'

export default {

  name: 'ObjectScreen',

  components: {
    Navigation,
    Label
  },

  data () {
    return {
      config: null,
      showLabel: true
    }
  },

  computed: {
    objectArtwork: function () {
      if (this.config) {
        return `/assets/${this.config.image}`
      }
      return '/assets/bm1.png'
    }
  },

  watch: {
    '$route': 'fetchData'
  },

  created () {
    this.fetchData()
  },

  methods: {
    fetchData () {
      let urlId = ''

      switch (this.$route.params.obj_id) {
        case '1':
          urlId = 'bm1'
          break
        case '2':
          urlId = 'bm2'
          break
        case '3':
        default:
          urlId = 'gm'
      }

      let configUrl = './config.' + urlId + '.json'

      this.$http.get(configUrl)
        .then(res => {
          this.config = res.data
          console.log(this.config)
        })
        .catch(err => {
          // TODO: fail better somehow
          console.error(err)
        })
    }
  }
}
</script>

<style lang="scss">
#object-screen {
  margin: 0 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 60px auto 150px;
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
</style>

<style lang="scss" scoped>

img {
  width: 100%;
}
</style>
