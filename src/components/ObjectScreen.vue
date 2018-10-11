<template>
  <div id="object-screen" v-if="configReady">
    <Navigation/>
    <div class="artwork">
      <img class="primary-img" ref="image"
        :src="objectArtwork"
        v-hammer:tap="triggerZoom"
        v-hammer:pinch="triggerZoom">
    </div>
    <main class="content" :class="{visible: animationOver}">
      <!-- Info box holds and of the right hand content including the label, translation, and audio apparatus -->
      <!-- Zoom screen will also be placed here, but covers the screen naturally. -->
      <div id="infoBox">
        <router-view :config="currentObject"/>
      </div>
    </main>
    <ObjectNavigation :class="{visible: animationOver}"/>
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

    data () {
      return {
        animationOver: false
      }
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
        'configReady',
        'animationCoords'
      ])
    },

    watch: {
      '$route': 'setPrimaryObject'
    },

    created () {
      this.setPrimaryObject()
    },

    mounted () {
      if (!this.animationCoords && !this.$refs.image) {
        this.animationOver = true
        return
      }
      const image = this.$refs.image
      const lastBounds = image.getBoundingClientRect()

      const deltaX = this.animationCoords.left - lastBounds.left
      const deltaY = this.animationCoords.top - lastBounds.top
      const scale = this.animationCoords.width / lastBounds.width

      let ani = image.animate([{
        transformOrigin: 'top left',
        transform: `
          translate(${deltaX}px, ${deltaY}px)
          scale(${scale})
        `
      }, {
        transformOrigin: 'top left',
        transform: 'none'
      }], {
        duration: 500,
        easing: 'ease-in-out',
        fill: 'both'
      })

      ani.onfinish = () => {
        this.animationOver = true
      }
    },

    methods: {
      setPrimaryObject () {
        let id = parseInt(this.$route.params.obj_id)

        if (isNaN(id)) {
          console.error('Object Id param is not an Integer')
          return
        }

        this.$store.dispatch('setNewCurrentObject', id)
      },

      triggerZoom () {
        this.$router.push({ name: 'zoom', params: { obj_id: this.$route.params.obj_id } })
      }
    },

    beforeRouteLeave (to, _from, next) {
      if (to.name !== 'home') {
        next()
        return
      }
      const image = document.querySelector('.primary-img')
      const bounds = image.getBoundingClientRect()
      this.$store.commit('setCoordinates', bounds)
      next()
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

  .content, #object-nav {
    opacity: 0;
    transition: opacity .3s ease;
    &.visible {
      opacity: 1;
    }
  }

  .primary-img {
    width: 100%;
    margin-top: 3em;
    z-index: 3;
    opacity: 1 !important;
    padding: 0 1em;
    cursor: pointer;
  }
</style>
