<template>
  <div class="home-container">
    <header class="flex home-header">
      <h1 class="sans-serif color-white title"
          :class="{ visible: animationOver, show: (previousObjCheck === null) }">Passports to a Better Afterlife</h1>
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
    <HomeFooter class="home-footer" :class="{ visible: animationOver, show: (previousObjCheck === null) }"/>
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
        adjustedScale = 0.9
        break
      case 1:
        adjustedScale = 0.85
        break
      default:
        adjustedScale = 1
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

  /**
   * TODO: refactor to grid
   */

  .home-container {
    height: 100%;
    display: grid;
    //grid-template-rows: repeat(3, 1fr);
    align-items: center;

    grid-template-rows: 150px auto 150px;
  }

  .home-header {
    justify-content: center;
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

  .title, .home-footer-container {
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
