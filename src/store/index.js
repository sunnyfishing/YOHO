
import vue from 'vue';
import Vuex from 'vuex';

vue.use(Vuex);

const store=new Vuex.Store({
	state:{
		user_info:[],
		login_loading:0
	},
	actions:{
		
	},
	mutations:{
		
	}
})

export default store;
