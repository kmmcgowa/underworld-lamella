<template>
  <div>
    <template v-for="artObj in tombstone.objects">
      <h2 class="object-name">{{ artObj.name }}</h2>
      <h4 class="object-date" v-html="artObj.date"></h4>
    </template>
    <h4 class="object-location">{{ tombstone.location }}</h4>
    <h4 class="object-material">{{ tombstone.material }}</h4>
  </div>
</template>

<script>
export default {

  name: 'Tombstone',

  props: {
    tombstone: Object
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
