import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);
const store = new Vuex.Store({
	state:{
		like_pages:1,
		like_info:[],
		like_more:true,
		user_info:[],
		login_loading:0,
		loadtotle:false,
		users_info:['sdf'],
		users_info:[],
		register_stage:0,
		login_stage:0,
		login_first:0,
		loginning_stage:0
	},
	getters:{
		likeInfo:state=>state.like_info,
		load:state=>state.loadtotle
	},
	mutations:{
		setLike(state,info){
			state.like_info=state.like_info.concat(info);
			state.like_more=false,
			state.like_pages++;
		},
		loadtotle(state){
			state.loadtotle=true
		},
		set_register_stage(state,stage){
			state.register_stage=stage;
		},
		set_login_stage(state,stage){
			state.login_stage=stage;
		},
		set_login_first(state,stage){
			state.login_first=stage;
		},
		set_loginning_stage(state,stage){
			state.loginning_stage=stage;
		}
	},
	actions:{
		getLike({commit},cb){
			if(this.state.like_more){
				axios.get('/first/?app_version=6.1.0&client_secret=4a85d00d37962172fd3a8567ce121bb1&client_type=android&content_code=201504091403001&fromPage=aFP_Home&gender=1%2C3&limit=50&method=app.search.newLast7day&os_version=android5.0.2%3Avivo_X5Pro_D&page='+this.state.like_pages+'&physical_channel=1&rec_pos=100001&screen_size=1080x1920&session_key=532dea836f3f6c586e46069188a02ac5&udid=868299023997975851825611e25178e&uid=52932938&v=7&yh_channel=1').
				then((data)=>{
					if(data.data.data.product_list!=undefined){
						commit('setLike',data.data.data.product_list);
						cb()
					}else{
						commit('loadtotle')
					}
				})
			}
		}
	}
})
export default store

