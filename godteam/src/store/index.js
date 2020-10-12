import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{
      isLogin:0,
      uid:-1,
      username:"",//用户名
      sex:'',//性别
      phone:'',//联系电话
      idcard:'',//身份证号码
      smalldai:'',//小额贷款额度
      birthday:'',//出生日期
      touxiang:''
    },
    reguesr:{
      //reg1
      petname:'',//用户名
      uspws:'',//密码
      uname:'',//昵称
      name:'',//真实姓名
      sex:'',//性别
      birthday:'',//生日
      phone:'',//联系方式
      //reg2
      idcard:'',//身份证号
      //reg3
      bankcard:'',//y银行卡号码
      bid:'',//银行
      zfpws:'',//支付密码
      brankphone:'',//预留手机号
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
