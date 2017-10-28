

const mineCom={
	get_userinfo(){
		return JSON.parse(window.localStorage.getItem('users_info'));
	},
	set_userinfo(data_json){
		window.localStorage.setItem('users_info',JSON.stringify(data_json));
	},
	go_to(self,routerName){
		self.$router.push({name:routerName});
	}
}

export default mineCom;
