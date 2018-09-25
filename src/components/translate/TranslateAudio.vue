<template>
  <section class="audio-container flex">
    <img src="@/assets/play_btn.svg" alt="Play Audio Snippet" class="audio-btn" @click="playAudio">
    <p class="audio-cta">Hear this Orphic tablet inscription,<br>recited in ancient Greek.</p>
    <audio ref="audio" class="main-audio">
      <source :src="mp3" type="audio/mp3">
    </audio>
  </section>
</template>

<script>
  import Plyr from 'plyr'
  import 'plyr/dist/plyr.css'

  export default {
    name: 'TranslateAudio',

    props: {
      mp3: String
    },

    data () {
      return {
        player: {}
      }
    },

    mounted () {
      const el = this.$refs.audio
      this.player = new Plyr(el, {
        controls: []
      })
    },

    beforeDestroy () {
      this.player.destroy()
    },

    methods: {
      playAudio () {
        if (!this.player.playing) {
          this.player.play()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .audio-container {
    margin-top: 3em;
    padding: .5em 1em;
    align-items: center;
    border-top: 2px solid $color-grey;
    border-bottom: 2px solid $color-grey;
    .audio-btn {
      height: 90px !important;
      width: 90px !important;
    }
    .audio-cta {
      max-height: 100px;
      color: $color-orange;
      padding-left: 1em;
    }
  }
</style>

<style lang="scss">
  .plyr {
    min-width: 0px !important;
  }
</style>
