<template>
  <div id="label">
    <div class="grad-mask">
      <Tombstone :tombstone="this.text.tombstone"></Tombstone>
      <Chat :text="this.text.chat"></Chat>
      <Credit :loaner="this.text.credit" :number="this.text.number"></Credit>
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
    color: $color-white;
    margin: 0 1em;
    max-height: 90%;
    mask-image: linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 2%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 80%);
    overflow: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
    .grad-mask {
      padding: 10% 0 45%;
    }
  }
  #tombstone, #chat {
    padding-bottom: 50px;
  }
</style>
