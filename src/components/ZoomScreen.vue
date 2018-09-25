<template>
  <div id="zoom-container">
    <div id="osd"></div>
    <div class="zoom-controls">
      <div class="zoom-btn" id="zoom-in">
        <img src="@/assets/ic_zoom_in_bw.png" alt="Zoom In">
      </div>
      <div class="zoom-btn" id="zoom-out">
        <img src="@/assets/ic_zoom_out_bw.png" alt="Zoom Out">
      </div>
    </div>
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
        tileSources: this.config.dzi,
        visibilityRatio: 1,
        defaultZoomLevel: 0,
        minZoomLevel: 1,
        constrainDuringPan: true,
        sequenceMode: false,
        showFullPageControl: false,
        showHomeControl: false,
        zoomInButton: 'zoom-in',
        zoomOutButton: 'zoom-out'
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
.zoom-controls {
  z-index: 3;
}
.zoom-btn {
  position: fixed !important;
  right: 15px;
  img {
    cursor: pointer;
    height: 45px;
    box-shadow: 4px 4px 6px #222222;
  }
}
#zoom-in {
  bottom: 75px;
}
#zoom-out {
  bottom: 15px;
}
</style>
