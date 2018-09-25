<template>
  <nav id="main-navigation" class="flex">
    <div class="back sans-serif" @click="back">
      Back
    </div>
    <div class="restart sans-serif" @click="restart">
      Restart
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navigation',

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
nav {
  z-index: 1000;
  flex-basis: 100%;
  justify-content: space-between;
  > div {
    cursor: pointer;
    font-size: 17px;
  }
}
</style>
