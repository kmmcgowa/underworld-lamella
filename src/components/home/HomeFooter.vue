<template>
  <div class="home-footer-container flex color-orange">
    <div class="cta flex action">
      <img class="icon" src="../../assets/touch_explore.png">
      <p class="description color-white">Touch an Object to Learn More</p>
    </div>
    <!--<div class="audio flex action">-->
      <!--<img class="icon" src="../../assets/play_btn.svg">-->
      <!--<p class="description">Hear an Orphic tablet inscription, recited in ancient Greek.</p>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {

    name: 'HomeFooter',

    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
.home-footer-container {
  width: 100%;
  & > div {
    width: 100%;
    flex-grow: 1;
  }
}

.cta {
  justify-content: center;

  /*&:after {
    content: ' ';
    width: 2px;
    background-color: $color-grey;
    height: 120px;
    transform: translate(1em, -16px);
  }*/
}

.cta, .audio {
  padding: 0 1em;
}

img {
  width: 90px;
  height: 90px;
}

.audio img {
  transform: scale(.95);
}

.description {
  display: inline-block;
  font-size: 1em;
  padding-left: .75em;
  max-width: 25em;
  height: auto;
  max-height: 90px;
  vertical-align: middle;
  line-height: 90px;
}

</style>
