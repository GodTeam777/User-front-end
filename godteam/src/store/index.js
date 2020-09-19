import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{
      uid:-1,
      username:"张三"
    }
  },
  mutations: {
    updateUser(state,myuser){
      state.user.uid=myuser.uid;
      state.user.username=myuser.username;
    }
  },
  actions: {
  },
  modules: {
  }
})
