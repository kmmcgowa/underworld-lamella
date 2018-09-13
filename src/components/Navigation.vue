<template>
  <nav id="main-navigation" class="flex">
    <div class="back" @click="goBack">
      Back
    </div>
    <div class="restart" @click="restart">
      Restart
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",

  methods: {
    goBack () {
      this.$router.go(-1)
    },

    restart () {
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  flex-basis: 100%;
  justify-content: space-between;
  > div {
    cursor: pointer;
  }
}
</style>