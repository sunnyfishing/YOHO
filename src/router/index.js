import Vue from 'vue';
import Router from 'vue-router';
import Frame from '@/pages/frame.vue';
import Main from '@/pages/main.vue';
import Classify from '@/pages/classify.vue';
import Stroll from '@/pages/stroll.vue';
import Shopcat from '@/pages/shopcat.vue';
import Mine from '@/pages/mine.vue';
import Login from'@/pages/login.vue';
import Register from '@/pages/register.vue';
import Register_dis from '@/pages/register_dis.vue';

Vue.use(Router)

export default new Router({
	linkActiveClass:"active",
	routes: [{
		path: '/',
		component: Frame,
		redirect: '/main',
		children: [{
				path: '/main',
				component: Main,
			},
			{
				path: '/classify',
				component: Classify,
			},
			{
				path: '/stroll',
				component: Stroll,
			},
			{
				path: '/shopcat',
				component: Shopcat,
			},
			{
				path: '/mine',
				component: Mine,
				name:'mine'
			},
		]
	},
	{
		path:'/login',
		component:Login,
		name:'login'
	},
	{
		path:'/register',
		component:Register,
		name:'register'
	},
	{
		path:'/register_dis',
		component:Register_dis,
		name:'register_dis'
	}
	]
})