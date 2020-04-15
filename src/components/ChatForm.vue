<template>
    <div>
        <div class="form-field">
            <textarea
                name="message"
                v-model="message"
                @keydown="onKeyDown"
                placeholder="Enter your message"
             ></textarea>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "ChatForm",
  data() {
      return {
          message: ''
      }
  },
  methods: {
      ...mapActions(['addMessage']),
      onKeyDown(e) {
          if(e.ctrlKey && e.keyCode === 13) {
             ///add message
             this.addMessage(this.message);
             this.message = '';
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
        textarea {
            width: 100%;
            box-sizing: border-box;
            border: 1px solid #e8e5cf;
            outline: none;
            padding: 10px;
            font-size: 14px;
            box-shadow: inset 1px 1px 5px rgba(0,0,0,.1);
            margin-top: 20px;
        }
</style>
