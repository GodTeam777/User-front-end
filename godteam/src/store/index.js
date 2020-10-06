import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{
      isLogin:0,
      uid:-1,
      username:"张三"
    }
  },
  mutations: {
    updateisLogin(state,myuser){
      state.user.isLogin=myuser
    },
    updateUserName(state,myuser){
      state.user.username=myuser
    },
    updateUserUid(state,myuser){
      state.user.uid=myuser
    }
  },
  actions: {
  },
  modules: {
  }
})
