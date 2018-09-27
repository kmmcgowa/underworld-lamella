<template>
  <nav id="main-navigation" class="flex" :class="{'zoom-active': zoomActive}">
    <div class="back sans-serif" @click="back">
      <img src="@/assets/back_arrow.png" alt="Back">
      Back
    </div>
    <div class="restart sans-serif" @click="restart">
      <img src="@/assets/restart.png" alt="restart">
      Restart
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navigation',

    computed: {
      zoomActive () {
        return this.$route.name === 'zoom'
      }
    },

    methods: {
      back () {
        /**
         * If the app is on the label screen go back to the home screen, if not go back to label
         */
        if (this.$route.name === 'label') {
          this.restart()
        } else {
          const id = this.$route.params.obj_id
          this.$router.push({
            name: 'label',
            params: { obj_id: id }
          })
        }
      },

      restart () {
        this.$router.push({ name: 'home' })
      }
    }
  }
</script>

<style lang="scss" scoped>
  #main-navigation {
    z-index: 1000;
    flex-basis: 100%;
    justify-content: space-between;
    align-items: center;
    color: $color-white;
    > div {
      cursor: pointer;
      font-size: 17px;
      padding: .1em .5em;
      line-height: 2em;

      img {
        height: 1.5em;
        margin-right: .1em;
        transform: translateY(25%);
      }
    }

    &.zoom-active > div {
      background-color: rgba($color-black, .75);
      border-radius: 5px;
      border: 2px solid $color-black;
      &.back {
        transform: translateX(-2px);
      }
      &.restart {
        transform: translateX(2px);
      }
    }
  }
</style>
