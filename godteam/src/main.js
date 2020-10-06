import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

import VueAxios from 'vue-axios'
import echarts from 'echarts'
import SlideVerify from 'vue-monoplasty-slide-verify'

import axios from 'axios'
axios.defaults.withCredentials=true;
Vue.use(SlideVerify)

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios,axios)
Vue.prototype.$echarts = echarts
axios.defaults.withCredentials=true;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
