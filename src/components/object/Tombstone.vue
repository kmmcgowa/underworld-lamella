<template>
  <div id="tombstone">
    <p class="underworld-credit sans-serif" v-html="tombstone.full"></p>
    <!--<h2 class="object-name bold">{{ tombstone.name }}</h2>-->
    <!--<h4 class="object-date" v-html="tombstone.dateLocation"></h4>-->
    <!--<h4 class="object-material">{{ tombstone.material }}</h4>-->
  </div>
</template>

<script>
  export default {

    name: 'Tombstone',

    props: {
      tombstone: Object
    },

    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .underworld-credit {
    font-size: 14.6px;
    line-height: 20px;
  }
  /*.object-name {*/
    /*font-size: 40.3px;*/
    /*line-height: 43.9px;*/
    /*padding-bottom: 1rem;*/
  /*}*/
  /*.object-date {*/
    /*padding-bottom: 1.5rem;*/
  /*}*/
  /*.object-date, .object-location, .object-material {*/
    /*font-size: 32.9px;*/
    /*line-height: 29.3px;*/
  /*}*/
</style>
