<template>
  <div id="app">
    <router-view/>
    <GettyFooter/>
  </div>
</template>

<script>
  import GettyFooter from './components/footer/GettyFooter'

  export default {

    name: 'App',

    components: {
      GettyFooter
    },

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
  @media #{$tablet-up} {
    height: 100%;
  }
}

</style>
