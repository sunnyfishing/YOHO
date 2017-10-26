<template>
	<div id="login">
		<div class="login-header">
			<div class="login-head">
				<div class="login-exit" @click="login_exit">
					×
				</div>
				<div class="login-register" @click="login_register">
					注册
				</div>
			</div>
		</div>
		<div class="login-pan">
			<div class="alert" v-show="showAlert">
				{{alert_dec}}
			</div>
			<div class="login_suc" v-show="showSuc">
				<i class="login_suc_img"><img src="../assets/ajax-loader.gif"/></i>
				<span>登录中...</span>
			</div>
			<form method="post">
				<label><span><i class="yo-ico">y</i></span><input type="text" name="username" class="login-user" value="" v-model="username"/><span><i class="yo-ico"></i></span></label>
				<label><span><i class="yo-ico"></i></span><input type="password" name="password" class="login-psw" value="" v-model="password"/><span><i class="yo-ico">y</i></span></label>
				<div :class="['login-btn',{login_active:login_active_bool}]" @click="login_next">登录</div>
			</form>
			<div class="login-oth">
				<ul>
					<li>海外手机</li>
					<li>快捷登录</li>
					<li>忘记密码</li>
				</ul>
			</div>
		</div>
		<div class="login-link">
			<ul>
				<li>i</li>
				<li>i</li>
				<li>i</li>
				<li>i</li>
			</ul>
		</div>
	</div>
</template>

<script>
	
	import axios from 'axios';
	
	export default {
		data(){
			return {
				username:'',
				password:'',
				alert_dec:'',
				showAlert:false,
				login_active_bool:false,
				showSuc:false
			}
		},
		updated(){
			if(this.userName!=''){
				this.login_active_bool=true;
			}else{
				this.login_active_bool=false;
			}
		},
		methods:{
			login_exit(){
				this.$router.push({name:'mine'});
			},
			login_register(){
				this.$router.push({name:'register'});
			},
			login_next(){
				let self=this;
				if(this.login_active_bool){
					axios.get('http://datainfo.duapp.com/shopdata/userinfo.php',{
						params:{
							status:'login',
							userID:self.username,
							password:self.password
						}
					}).then(function(data){
						if(data.data===0){
							self.alert_dec='用户名输入错误！';
							self.showAlert=true;
							var timer_showAlert=setTimeout(function(){
								self.showAlert=false;
								clearTimeout(timer_showAlert);
							}.bind(self),1000);
						}else if(data.data===2){
							self.alert_dec='密码输入错误！';
							self.showAlert=true;
							var timer_showAlert=setTimeout(function(){
								self.showAlert=false;
								clearTimeout(timer_showAlert);
							}.bind(self),1000);
						}else{
							self.$store.state.login_loading=1;
							self.showSuc=true;
							let timer_showSuc=setTimeout(function(){
								self.showSuc=false;
								self.$router.push({name:'mine'});
								clearTimeout(timer_showSuc);
							},2000)
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	
</style>