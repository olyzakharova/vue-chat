<template>
    <div>
        <message-list />
        <chat-form />
    </div>
</template>

<script>

import ChatForm from './ChatForm.vue';
import MessageList from './MessageList';

export default {
  name: "Chat",
  components: {
      ChatForm,
      MessageList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
