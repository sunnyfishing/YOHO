<<<<<<< HEAD
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
=======
Vue.config.productionTip = false
import Vue from 'vue';
import 'mint-ui/lib/style.css'
import '@/styles/index.scss';

import router from '@/router';

var vm = new Vue({
	el:'#app',
	router
})

>>>>>>> master
