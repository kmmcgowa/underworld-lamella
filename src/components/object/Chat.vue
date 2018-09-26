<template>
  <div id="chat">
    <p v-html="text"></p>
  </div>
</template>

<script>
  export default {

    name: 'Chat',

    props: {
      text: String
    }
  }
</script>

<style lang="scss" scoped>
p {
  font-size: 32.9px;
  line-height: 40.3px;
}
</style>
