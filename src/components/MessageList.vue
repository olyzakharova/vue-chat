<template>
    <div>
        <message
            v-for="(message, index) in messages"
            :key="index"
            :author="message.author"
            :text="message.text"
        />
    </div>
</template>

<script>

import { mapGetters } from 'vuex';
import Message from './Message'

export default {
  name: "MessageList",
  components: {
      Message
  },
  computed: mapGetters(['messages'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
