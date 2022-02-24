import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
// import moment from 'moment'

// import './fiter'

Vue.config.productionTip = false

Vue.use(VueRouter)
// Vue.use(moment)

new Vue({
  el:'#app',
  render: h => h(App),
  store,
  router,
}).$mount('#app')