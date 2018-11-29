<template>
  <div class="home-container" :class="{ web: webVersion }">
    <header class="home-header">
      <h1 class="sans-serif color-white title"
          :class="{ visible: animationOver, show: (previousObjCheck === null) }">Passports to a Better Afterlife</h1>
      <div class="home-content" :class="{ visible: animationOver, show: (previousObjCheck === null) }">
        <p>Named after the mythical poet Orpheus, Orphic tablets are inscriptions written on thin sheets of gold that were buried with the dead. The ancient Greeks believed that one means to a good afterlife was through initiation into a mystery cult. An Orphic tablet vouched for an initiate’s privileged status upon death, and its inscription was meant to be recited for entry into the underworld. Its text might reference landmarks along the journey, such as a spring, a cypress tree, or the Lake of Memory.</p>
      </div>
    </header>
    <main class="flex tablet-container">
      <div v-for="obj in objects"
           :key="obj.id"
           :class="['tablet-box', 'tablet-' + obj.id]">
        <router-link :to="`/object/${obj.id}`">
          <img :src="`./assets/${obj.image}`"
               :alt="obj.label.tombstone.name"
               :class="[(obj.id === previousObjCheck || previousObjCheck === null) ? 'show' : '', animationOver ? 'visible' : 'fade']">
        </router-link>
      </div>
    </main>
    <HomeFooter class="home-footer" :class="{ visible: animationOver, show: (previousObjCheck === null) }" v-if="!webVersion"/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import HomeFooter from './home/HomeFooter'

  export default {

    name: 'Home',

    components: {
      HomeFooter
    },

    computed: {
      webVersion () {
        return (process.env.VUE_APP_WEB_VERSION === 'true')
      },
      ...mapGetters({
        objects: 'allObjects',
        animationCoords: 'animationCoords',
        previousObj: 'currentObject'
      }),

      previousObjCheck () {
        return this.previousObj ? this.previousObj.id : null
      }
    },

    mounted () {
      if (!this.animationCoords) {
        this.animationOver = true
        return
      }
      const id = this.previousObj.id - 1
      const image = document.querySelectorAll('main img')[id]
      const lastBounds = image.getBoundingClientRect()

      const deltaX = this.animationCoords.left - lastBounds.left
      const deltaY = this.animationCoords.top - lastBounds.top
      const scale = this.animationCoords.width / lastBounds.width

      let adjustedScale
      switch (id) {
      case 0:
      case 2:
        adjustedScale = (this.webVersion ? 0.7 : 0.9)
        break
      case 1:
        adjustedScale = (this.webVersion ? 0.9 : 0.85)
        break
      default:
        adjustedScale = (this.webVersion ? 0.7 : 1)
      }

      let ani = image.animate([{
        transformOrigin: 'top left',
        transform: `
          translate(${deltaX}px, ${deltaY}px)
          scale(${scale})
        `
      }, {
        transformOrigin: 'center center',
        transform: `scale(${adjustedScale})`
      }], {
        duration: 500,
        easing: 'ease-in-out',
        fill: 'both'
      })

      ani.onfinish = () => {
        this.animationOver = true
      }
    },

    beforeRouteLeave (to, _, next) {
      const id = to.params.obj_id
      const image = document.querySelectorAll('main img')[id - 1]
      const bounds = image.getBoundingClientRect()
      this.$store.commit('setCoordinates', bounds)
      next()
    },

    data () {
      return {
        animationOver: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home-container {
    min-height: 100vh;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
  }

  .home-header {
    justify-content: center;
    margin-right: 1em;
  }

  .tablet-container {
    padding: 0 2em;
    flex-wrap: nowrap;
    width: 100%;

    & > .tablet-box {
      align-self: center;
      padding: 0 .15em;
    }

    img {
      width: 100%;
      z-index: 3;
    }
  }
  .tablet-1 img {
    /*padding: 0 1.5em;*/
    transform: scale(.9);
  }
  .tablet-2 img {
   transform: scale(.85);
  }
  .tablet-3 img{
    /*padding: 0 1.5em;*/
    transform: scale(.9);
  }

  .title, .home-content, .home-footer-container {
    opacity: 0;
    transition: opacity .3s ease;
    &.visible {
      opacity: 1;
    }
    &.show {
      opacity: 1 !important;
    }
  }

  .tablet-container img {
    transition: opacity .3s ease;
    &.fade {
      opacity: 0;
    }
    &.visible {
      opacity: 1;
    }
    &.show {
      opacity: 1 !important;
    }
  }
</style>

<style lang="scss" scoped>
  .web {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
    grid-row-gap: 2em;
    grid-template-areas:
            'info'
            'tablets';

    @media #{$tablet-up} {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
      grid-template-areas: 'tablets info';
      align-items: center;
    }

    .home-header {
      grid-area: info;
      margin: 1em 1em 0;
    }

    .tablet-container {
      grid-area: tablets;
      flex-direction: column;

      img {
        width: 100%;
        max-width: 500px;
        z-index: 3;
      }
    }

    .tablet-1 img {
      /*padding: 0 1.5em;*/
      transform: scale(.7);
    }
    .tablet-2 img {
      transform: scale(.9);
    }
    .tablet-3 img{
      /*padding: 0 1.5em;*/
      transform: scale(.7);
    }
  }
</style>
