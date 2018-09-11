<template>
  <h1>Object Screen</h1>
</template>

<script>
export default {

  name: 'ObjectScreen',

  data () {
    return {
      config: {}
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
          console.error(err)
        })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
