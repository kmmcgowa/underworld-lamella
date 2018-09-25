<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import Tablet from './models/tablet'

  export default {

    name: 'App',

    data () {
      return {

      }
    }
  }
</script>

<style lang="scss">
@import 'styles/global';

#app {
  width: 100%;
  height: 100%;
}

</style>
