Vue.config.productionTip = false

import Vue from 'vue';
import 'mint-ui/lib/style.css'
import '@/styles/index.scss';
import store from './store'

import router from '@/router';

//测试路由引入
import route from './testRouter.js' 


import axios from 'axios'

//测试组件引入
import Test from './test.vue'

// var vm = new Vue({
// 	el:'#app',
// 	router,
// 	store
// })
new Vue({
	el: '#app',
	router:route,
	data: {
		show: true
	},
	components:{
		test:Test
	},
	methods:{
		fasongqingqiu:function(){
			console.log(axios)
			axios('/test/test').then((res)=>{
				console.log(res)
			}).catch((err)=>{
				console.log('err')
			})
		}
	}
})