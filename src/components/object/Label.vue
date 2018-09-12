<template>
  <div id="label">
    <Tombstone :tombstone="this.text.tombstone"></Tombstone>
    <Chat :text="this.text.chat"></Chat>
    <Credit :loaner="this.text.credit" number="this.credit.number"></Credit>
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
    text: Object
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
  #label {
    margin: 0 1em;
  }
  #tombstone, #chat {
    padding-bottom: 50px;
  }
</style>
