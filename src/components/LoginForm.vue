<template>
    <div>
        <h2> Who are you? </h2>
        <div class="form-field">
            <input
                name="name"
                v-model="name"
                @keydown="onKeyDown"
                placeholder="Enter your name"
             />
        </div>
        <div class="btn" @click="submit" >Submit</div>
    </div>
</template>

<script>

import {mapActions} from 'vuex';

export default {
  name: "LoginForm",
  data() {
      return {
          name: ''
      }
  },
  methods: {
      ...mapActions(['setUser']),
      onKeyDown(e) {
          if (e.keyCode === 13) {
              this.submit();
          }
      },
      submit() {
        this.setUser(this.name);
        this.name = '';
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
        input {
            width: 100%;
            box-sizing: border-box;
            border: 1px solid #e8e5cf;
            outline: none;
            padding: 10px;
            font-size: 14px;
            box-shadow: inset 1px 1px 5px rgba(0,0,0,.1);
        }

        .btn {
            padding: 10px 25px;
            display:  inline-block;
            color: white;
            background: #0061ff;
            cursor: pointer;
            margin-top: 10px;
            border-radius: 5px;
            -moz-border-radius: 5px;
            -webkit-border-radius: 5px;
        }
</style>
