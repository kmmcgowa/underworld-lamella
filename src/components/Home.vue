<template>
  <div class="home-container flex">
    <header class="flex">
      <h1 class="title-font color-orange title">PASSPORTS TO A BETTER AFTERLIFE</h1>
    </header>
    <main class="flex tablet-container">
      <div v-for="obj in objects"
           :key="obj.id"
           :class="['tablet-box', 'tablet-' + obj.id]">
        <router-link :to="`/object/${obj.id}`">
          <img :src="`./assets/${obj.image}`" :alt="obj.label.tombstone.name">
        </router-link>
      </div>
    </main>
    <HomeFooter/>
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
        objects: 'allObjects'
      })
    },

    data () {
      return {

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
  padding-top: .75em;
  letter-spacing: 2px;
  font-size: 2.5em;
}

.tablet-container {
  padding: 0 2em;
  flex-wrap: nowrap;
  width: 100%;
  height: 60%;

  & > .tablet-box {
    align-self: center;
  }

  img {
    width: 100%;
  }
}
.tablet-1 img {
  padding: 0 1.5em;
}
.tablet-2 img {
 transform: scale(1.1);
}
.tablet-3 img{
  padding: 0 1.5em;
}
</style>
