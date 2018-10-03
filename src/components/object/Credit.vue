<template>
  <div>
    <!--<h5 class="copyright sans-serif">{{ loaner }}</h5>-->
    <p class="accession-number sans-serif">{{ number }}</p>
  </div>
</template>

<script>
  export default {

    name: 'Credit',

    props: {
      // loaner: String,
      number: String
    }
  }
</script>

<style lang="scss" scoped>
.copyright, .accession-number {
  font-size: 14.6px;
  line-height: 20px;
}
</style>
