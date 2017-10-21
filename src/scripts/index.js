import Vue from 'vue';
import VueRouter from 'vue-router';
import 'mint-ui/lib/style.css'
import '../styles/index.scss';
import '../media/iconfont/iconfont.ttf';
import '../media/iconfont/iconfont.woff';
import routes from './routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	linkActiveClass:"active"
})

var vm = new Vue({
	el:'.index',
	router
})
