Vue.config.productionTip = false
import Vue from 'vue';
import 'mint-ui/lib/style.css'
import '@/styles/index.scss';

import router from '@/router';
import store from '@/store';

var vm = new Vue({
	el:'#app',
	router,
	store
})
