<template>
  <div id="translate">
    <div id="main-translation" class="content" v-html="config.translation"></div>
    <p v-if="brackets" class="brackets sans-serif">Bracketed sections indicate reconstruction of the text.</p>
    <p class="credit sans-serif">Translation by Roy D. Kotansky</p>
    <TranslateAudio v-if="config.audio" :mp3="config.audio"/>
  </div>
</template>

<script>
  import TranslateAudio from './translate/TranslateAudio'

  export default {

    name: 'TranslateScreen',

    components: {
      TranslateAudio
    },

    props: {
      config: Object
    },

    computed: {
      brackets () {
        return this.$route.params.obj_id === '1'
      }
    },

    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
#translate {
  margin-left: 1em;
  font-size: 1.2em;
  @media #{$tablet-up} {
    font-size: .83em;
  }
}
#main-translation {
  padding: 10% 0 1em;
  &.content {
    color: $color-white;
  }
}
.credit, .brackets {
  font-size: .7em;
}
</style>

<style lang="scss">
.translate-namespace {
  .grid {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-row-gap: .7em;
  }
  .words {
    margin-left: 1em;
  }
}
.speaker p {
  text-align: right;
}
.words {
  font-style: italic;
}
</style>
