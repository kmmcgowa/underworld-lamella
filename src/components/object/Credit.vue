<template>
  <div>
    <h5 class="copyright">{{ loaner }}</h5>
    <h5 class="accession-number sans-serif">{{ number }}</h5>
  </div>
</template>

<script>
export default {

  name: 'Credit',

  props: {
    loaner: String,
    number: String
  }
}
</script>

<style lang="css" scoped>
</style>
