<template>
  <div id="label">
    <div class="grad-mask">
      <Chat :text="config.label.chat"></Chat>
      <Tombstone :tombstone="config.label.tombstone"></Tombstone>
      <Credit :number="config.label.number"></Credit>
    </div>
  </div>
</template>

<script>
  import Tombstone from './Tombstone'
  import Chat from './Chat'
  import Credit from './Credit'

  export default {

    name: 'Label',

    components: {
      Tombstone,
      Chat,
      Credit
    },

    props: {
      config: Object
    },

    data () {
      return {

      }
    }
  }
</script>

<style lang="scss">
  #label {
    color: $color-white;
    margin: 0 1em;
    padding-right: .5em;
    height: 814px;
    /*mask-image: linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 2%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%);*/
    overflow: hidden;
    .grad-mask {
      // padding: 10% 0 45%;
      padding: 10% 0 0;
    }
  }
  #tombstone {
    padding-bottom: 0.5em;
  }
  #chat {
    padding-bottom: 1.6em;
  }
</style>
