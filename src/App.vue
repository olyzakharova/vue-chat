<template>
  <div id="app">
    <h1>Chat application</h1>
    <div class="chat-container">
      <chat v-if="user" />
      <login-form v-else />
    </div>
  </div>
</template>

<script>
import { mapGetters} from 'vuex'
import Chat from './components/Chat.vue'
import LoginForm from './components/LoginForm.vue'

export default {
  name: 'App',
  components: {
    Chat,
    LoginForm
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.chat-container {
  max-width: 800px;
  padding: 20px;
  margin: 0 auto;
  border: 1px solid #fff;
  background: #f5f6f8;
  -webkit-box-shadow: 2px 2px 8px #e3eaf4;
  box-shadow: 2px 2px 8px #e3eaf4;
}
</style>
