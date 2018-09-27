<template>
  <div id="object-nav" class="flex sans-serif">
    <router-link :to="`/object/${this.$route.params.obj_id}/zoom`" class="nav-link">
      <div class="option flex">
        <img src="@/assets/zoom.svg" alt="Zoom" class="smaller">
        <h6>Zoom</h6>
      </div>
    </router-link>
    <router-link :to="`/object/${this.$route.params.obj_id}/translation`" class="nav-link">
      <div class="option flex">
        <img src="@/assets/translate.svg" alt="Translate">
        <h6>Translate</h6>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'ObjectNavigation'
  }
</script>

<style lang="scss" scoped>
#object-nav {
  justify-content: center;
  .option {
    flex-wrap: wrap;
    justify-content: center;
    max-width: 3em;
    margin: .5em;

    img {
      width: 75px;
      height: 75px;
      margin-bottom: .1em;
      &.smaller {
        padding: 5px;
      }
    }
  }
}

.nav-link {
  text-decoration: none;
  color: $color-grey;
  &:visited {
    color: $color-grey;
  }
  &.router-link-active img {
    opacity: .5;
  }
}
</style>
