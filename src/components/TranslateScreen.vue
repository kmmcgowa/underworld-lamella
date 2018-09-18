<template>
  <div id="translate">
    <h1>Translate Screen</h1>
  </div>
</template>

<script>
export default {

  name: 'TranslateScreen',

  props: {
    translation: {
      type: String,
      required: true
    },
    audio: {
      type: String,
      required: false
    }
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
