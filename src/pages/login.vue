<template>
	<div id="login">
		<mt-popup v-model='popvisible' position='top' class="registerLoad">
			登录成功!
		</mt-popup>
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
			<!--<div class="alert" v-show="showAlert">
				{{alert_dec}}
			</div>-->
			<div class="login_suc" v-show="showSuc">
				<i class="login_suc_img"><img src="../assets/ajax-loader.gif"/></i>
				<span>登录中...</span>
			</div>
			<form method="post">
				<label><span><i class="yo-ico">&#xe61e;</i></span><input autofocus type="text" name="username" class="login-user" value="" v-model="username"/><span><i class="yo-ico"></i></span></label>
				<label><span><i class="yo-ico"></i></span><input autofocus :type="password_type" name="password" class="login-psw" value="" v-model="password"/><span><i class="yo-ico" @click="psd_show"><span v-show='pas_show'>&#xe986;</span><span v-show='!pas_show'>&#xe985;</span></i></span></label>
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
				<li class='yo-ico'>&#xe602;</li>
				<li class='yo-ico'>&#xe659;</li>
				<li class='yo-ico'>&#xe637;</li>
				<li class='yo-ico'>&#xe601;</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import { Indicator, MessageBox } from 'mint-ui';
	import mineCom from './common/mine-common';

	export default {
		data() {
			return {
				username: '',
				password: '',
				alert_dec: '',
				showAlert: false,
				login_active_bool: false,
				showSuc: false,
				pas_show: true,
				password_type: 'text',
				popvisible:false
			}
		},
		updated() {
			if(this.userName != '') {
				this.login_active_bool = true;
			} else {
				this.login_active_bool = false;
			}
		},
		methods: {
			registerLoad(){
				console.log(this.$store.state.register_stage)
				if(this.$store.state.register_stage){
					this.popvisible=true;
					let timer_load=setTimeout(()=>{
						this.$store.commit('set_register_stage',0);
						clearTimeout(timer_load);
						this.popvisible=false;
					},1000)
				}
			},
			psd_show() {
				this.pas_show = this.pas_show ? false : true;
				if(this.pas_show) {
					this.password_type = 'password'
				} else {
					this.password_type = 'text'
				}
			},
			login_exit() {
				this.$router.push({
					name: 'mine'
				});
			},
			login_register() {
				this.$router.push({
					name: 'register'
				});
			},
			login_next() {
				let users_info=mineCom.get_userinfo();
				let index=this.check_username(users_info);
				this.check_password(users_info,index);
				this.$store.commit('set_login_stage',1);
				this.$store.commit('set_login_first',1);
			},
			check_username(data) {
				if(!!data){
					let exist_user = data.find(item => item.phone === this.username);
					if(!!exist_user) {
						return data.indexOf(exist_user);
					} else {
						MessageBox.alert('该用户名不存在！', '提示').then(() => {
							return '';
						})
					}
				}else{
					MessageBox.alert('该用户名不存在！', '提示').then(() => {
						return '';
					})
				}
				
			},
			check_password(data,index) {
				if(index==''||typeof index == 'undefined'){ return '';}
				if(data[index].password === this.password) {
					data[index].stage = 1;
					mineCom.set_userinfo(data);
					Indicator.open({
						text: '登录中...',
						spinnerType: 'fading-circle'
					});
					let timer_use = setTimeout(() => {
						clearTimeout(timer_use);
						Indicator.close();
						this.$router.push({
							name: 'mine'
						});
					}, 1500)
				} else{
					MessageBox.alert('密码输入错误！', '提示').then(() => {
							return '';
						})
					}
				}
			},
			mounted(){
				this.registerLoad();
			}
		}
</script>

<style lang="scss">

</style>