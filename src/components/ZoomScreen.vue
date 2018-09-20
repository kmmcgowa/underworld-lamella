<template>
  <div id="zoom-container">
    <div id="osd"></div>
  </div>
</template>

<script>
import OpenSeaDragon from 'openseadragon'

export default {

  name: 'ZoomScreen',

  props: {
    config: Object
  },

  mounted () {
    this.osd = OpenSeaDragon({
      id: 'osd',
      tileSources: this.config.dzi
    })
  },

  beforeDestroy () {
    // Clean up a potential OSD leak
    this.osd = null
  },

  data () {
    return {
      osd: null
    }
  }
}
</script>

<style lang="scss" scoped>
#zoom-container {
  background-color: $color-black;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
}
#osd {
  width: 100%;
  height: 100%;
}
</style>
