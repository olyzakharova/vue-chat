import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    messages: [
      {
        author: 'Support manager Sofia',
        text: "Hello, how can i help you?"
      }
    ]
  },
  getters: {
    user: state => state.user,
    messages: state => state.messages,
  },
  mutations: {
    SET_USER(state, payload){
      Vue.set(state, 'user', {
        name: payload
      });
    },
    ADD_MESSAGE(state, payload) {
      state.messages.push(payload);
    }
  },
  actions: {
    setUser({commit},payload){
      commit('SET_USER', payload);
    },
    addMessage({commit, getters},payload) {
      //API Call
      const author = getters.user.name;
      commit('ADD_MESSAGE', {
        text: payload,
        author
      })
    }
  },
  modules: {
  }
})
