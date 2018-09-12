<template>
  <div id="object-screen" class="flex">
    <div class="artwork">
      <img :src="objectArtwork">
    </div>
    <Label v-if="config" :text="this.config.label"></Label>
  </div>
</template>

<script>
import Label from './object/Label'

export default {

  name: 'ObjectScreen',

  components: {
    Label
  },

  data () {
    return {
      config: null
    }
  },

  computed: {
    objectArtwork: function () {
      if (this.config) {
        return `/assets/${this.config.image}`
      }
      return '/assets/bm1.png'
    }
  },

  watch: {
    '$route': 'fetchData'
  },

  created () {
    this.fetchData()
  },

  methods: {
    fetchData () {
      let urlId = ''

      switch (this.$route.params.obj_id) {
        case '1':
          urlId = 'bm1'
          break
        case '2':
          urlId = 'bm2'
          break
        case '3':
        default:
          urlId = 'gm'
      }

      let configUrl = './config.' + urlId + '.json'

      this.$http.get(configUrl)
        .then(res => {
          this.config = res.data
          console.log(this.config)
        })
        .catch(err => {
          // TODO: fail better somehow
          console.error(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
#object-screen {
  margin: 0 1em;
  > div {
    flex-basis: 50%;
  }
}
img {
  width: 100%;
}
</style>
