import Vue from 'vue';
import Router from 'vue-router';
import Frame from '@/pages/frame.vue';
import Main from '@/pages/main.vue';
import Classify from '@/pages/classify.vue';
import Stroll from '@/pages/stroll.vue';
import Shopcat from '@/pages/shopcat.vue';
import Mine from '@/pages/mine.vue';

import sortDet from '@/pages/classify/sort-det.vue';

Vue.use(Router)

export default new Router({
	linkActiveClass:"active",
	routes: [{
		path: '/',
		component: Frame,
		redriect: '/main',
		children: [{
				path: '/main',
				component: Main,
			},
			{
				path: '/classify',
				component: Classify,
			},
			{
				path: '/sort-det',
				component: sortDet,
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
			}
		]
	}]
})
