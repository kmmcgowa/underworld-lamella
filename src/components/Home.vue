<template>
  <div class="home-container flex">
    <header class="flex">
      <h1 class="serif bold color-orange title">PASSPORTS TO THE UNDERWORLD</h1>
    </header>
    <main class="flex tablet-container">
      <div class="tablet-box tablet-bm1">
        <router-link to="/object/1">
          <img src="../assets/bm1.png" alt="">
        </router-link>
      </div>
      <div class="tablet-box tablet-bm2">
        <router-link to="/object/2">
          <img src="../assets/bm2.png" alt="">
        </router-link>
      </div>
      <div class="tablet-box tablet-bm3">
        <router-link to="/object/3">
          <img src="../assets/gm.png" alt="">
        </router-link>
      </div>
    </main>
    <HomeFooter/>
  </div>
</template>

<script>
import HomeFooter from './home/HomeFooter'

export default {

  name: 'Home',

  components: {
    HomeFooter
  },

  data () {
    return {

    }
  },

  props: {
    tablets: {
      type: Object,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  height: 100%;
  flex-wrap: wrap;
  justify-content: center;
}

.title {
  text-align: center;
  align-self: center;
  padding-top: 1em;
}

.tablet-container {
  padding: 0 2em;
  flex-wrap: no-wrap;
  width: 100%;
  height: 60%;

  & > .tablet-box {
    align-self: center;
  }

  img {
    width: 100%;
  }
}

</style>
