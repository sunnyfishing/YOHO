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
import Details from '@/pages/details.vue';
import Setting from '@/pages/setting.vue';
import sortDet from '@/pages/classify/sort-det.vue';
import List from '@/pages/list.vue';
import GoodsList from '@/pages/list/goodsList.vue';

Vue.use(Router)

export default new Router({
	linkActiveClass:"active",
	routes: [{
		path: '/',
		component: Frame,
		redirect: '/mine',
		children: [{
				path: '/main',
				component: Main,
			},
			{
				path: '/classify',
				component: Classify,
				redirect:{
					path:'/sort-det',
					query:{
						id:'上衣'
					}
				},
				children:[{
					path: '/sort-det',
					component: sortDet,					
				}]
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
		},
		{
			path:'/list',
			component:List,
			redirect: '/list/goodsList',
			children:[{
				path:'/list/goodsList',
				component:GoodsList
			}]
		},
		{
			path:'/details',
			component:Details,
			name:'details'
		},
		{
			path:'/setting',
			component:Setting,
			name:'setting'
		}
	]
})
