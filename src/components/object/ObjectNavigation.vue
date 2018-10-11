<template>
  <div id="object-nav" class="flex sans-serif">
    <router-link :to="`/object/${this.$route.params.obj_id}/zoom`" class="nav-link">
      <div class="option flex">
        <img src="@/assets/zoom.svg" alt="Zoom" class="smaller">
        <h6>Zoom</h6>
      </div>
    </router-link>
    <router-link :to="linkToggle" class="nav-link">
      <div class="option flex" v-if="(this.$route.name !== 'translation')">
        <img src="@/assets/translate.svg" alt="Translate">
        <h6>Translate Tablet</h6>
      </div>
      <div class="option flex" v-else>
        <img src="@/assets/i_shell.svg" alt="Label Chat" class="info-btn smaller">
        <h6>About Tablet</h6>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'ObjectNavigation',

    computed: {
      linkToggle () {
        return this.$route.name === 'translation'
          ? `/object/${this.$route.params.obj_id}`
          : `/object/${this.$route.params.obj_id}/translation`
      }
    }
  }
</script>

<style lang="scss" scoped>
  #object-nav {
    justify-content: center;
    .option {
      flex-wrap: wrap;
      justify-content: center;
      width: 5.5em;
      margin: .5em;

      img {
        width: 75px !important;
        height: 75px !important;
        margin: 0 auto .1em;
        padding: 0;
        flex-basis: 100%;
        &.smaller {
          padding: 5px;
        }
      }
      h6 {
        display: block;
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
      // opacity: .5;
    }
  }
</style>
