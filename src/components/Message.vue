<template>
    <div class="message" :class="{ mine: itsMe }">
       <div class="message__author">
           <strong> {{ author}} </strong>
       </div>
        <div class="message__text">
           {{ text}}
       </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: "Message",
  props: ['author', 'text'],
  computed: {
      ...mapGetters(['user']),
      itsMe() {
          return this.user.name === this.author;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .message {
        text-align: left;
        &__author {
            color: #75d3fc;
        }

        &__text {
            background:#75d3fc;
            color: #fff;
            margin-top: 5px;
            border-radius: 10px;
            padding: 10px;
            box-shadow: 1px 1px 5px rgba(9, 148, 214, 0.1);
        }
        &.mine .message__text{
            background: #fff;
            color: #000;
        }

    }
</style>
