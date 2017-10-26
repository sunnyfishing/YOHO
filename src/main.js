Vue.config.productionTip = false

import Vue from 'vue';
import 'mint-ui/lib/style.css'
import '@/styles/index.scss';
import store from './store'

import router from '@/router';

var vm = new Vue({
	el:'#app',
	router,
	store
})
