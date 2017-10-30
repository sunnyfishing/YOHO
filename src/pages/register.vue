<template>
	<div id="register">
		<div class="register_head">
			<p>注册Yoho！Family<i @click="register_exit">×</i></p>
		</div>
		<div class="register_dex">
			<div class="register_dis" @click="register_dis_name">
				<div class="register_dis_all">
					国家和地区
				</div>
				<div class="register_dis_con">
					<span>{{dis_name}}</span>
					<i class="yo-ico">></i>
				</div>
			</div>
			<label class="register_num">
				<span>+86</span>
				<input type="text"  @keyup="phone($event)" @blur="phone_blur($event)" ref="reg_num"/>
			</label>
			<label class="register_code">
				<span>潮流口令</span>
				<input type="text" name="" id="" value="" ref="reg_user"/>
			</label>
			<div :class="register_next_class" @click="register_next">
				<span>下一步</span>
			</div>
			<p>Yoho！Family账号可登录Yoho！Buy有货、Yoho！Now、mars及SHOW</p>
		</div>
		<mt-popup v-model='popupVisible' position="right" class="reg_num">
			<mt-header title="输入验证码" class='reg_num_tit'>
				<mt-button class='reg_num_exit' slot='left' @click="psd_exit">
					<</mt-button>
			</mt-header>
			<div class="reg_num_bot">
				<p>验证码已发送至 <span>+86 {{reg_phone}}</span></p>
				<label><input autofocus type="text" v-model='reg_code' autofocus/><span>重新获取</span></label>
				<button @click="reg_num_btn">下一步</button>
			</div>
			<mt-popup v-model='popup_num' position="right" class=" reg_num reg_psd">
				<mt-header title="输入您的密码" class='reg_num_tit'>
					<mt-button class='reg_num_exit' slot='left' @click="psd_exit">
						<</mt-button>
				</mt-header>
				<div class="reg_num_bot">
					<p>请设置您的密码：</p>
					<label><input autofocus :type="pas_showtype" v-model='reg_code' autofocus/><i class="yo-ico" @click="psd_show"><span v-show='pas_show'>&#xe986;</span><span v-show='!pas_show'>&#xe985;</span></i></label>
					<button @click="reg_pad_btn" :class="{next_psd_active}">下一步</button>
				</div>
			</mt-popup>
		</mt-popup>
	</div>
</template>
<script>
	import Bus from '../components/Bus.js';
	import axios from 'axios';
	import vue from 'vue';
	import { Toast, Indicator, Popup, Header, Button, MessageBox } from 'mint-ui';
	import mineCom from './common/mine-common';

	vue.component(Popup.name, Popup);
	vue.component(Header.name, Header);
	vue.component(Button.name, Button);

	export default {
		data() {
			return {
				register_dis_all_arr: ['澳大利亚', '韩国', '加拿大', '马来西亚', '美国', '日本', '新加坡', '英国', '中国', '中国澳门', '中国台湾', '中国香港'],
				dis_name: '中国',
				showAlert: false,
				showSuc: false,
				alert_dec: {
					tx1: '请输入正确的信息！',
					tx2: '该用户名已被注册！'
				},
				register_next_class: {
					next_active: false,
					register_next: true
				},
				next_psd_active: false,
				popupVisible: false,
				popup_num: false,
				reg_code: '',
				reg_phone: '',
				pas_show: true,
				pas_showtype: 'password',
			}
		},
		computed: {

		},
		watch: {
			reg_code() {
				if(!!this.reg_code) {
					this.next_psd_active = true;
				} else {
					this.next_psd_active = false;
				}
			}
		},
		methods: {
			psd_exit() {
				this.back();
			},
			back() {
				let user = mineCom.get_userinfo();
				user.pop();
				window.localStorage.setItem('users_info', JSON.stringify(user));
				this.$router.push({
					name: 'register'
				});
				this.popup_num = false;
				this.popupVisible = false;
			},
			reg_pad_btn() {
				let get_user = mineCom.get_userinfo();
				let user_index = get_user.length - 1;
				get_user[user_index].password = this.reg_code;
				window.localStorage.setItem('users_info', JSON.stringify(get_user));
				Indicator.open({
						text: '注册中...',
						spinnerType: 'fading-circle'
					})
					this.popupVisible = false;
					this.popup_num = false;
					let timer_tip = setTimeout(() => {
						Indicator.close();
						this.$store.commit('set_register_stage',1);
						clearTimeout(timer_tip);
						this.$router.push({
							name: 'login'
						});
					}, 1500)
			},
			psd_show() {
				this.pas_show = this.pas_show ? false : true;
				if(this.pas_show) {
					this.pas_showtype = 'password';
				} else {
					this.pas_showtype = 'text';
				}
			},
			register_exit() {
				this.$router.push({
					name: 'mine',
					query: this.register_dis_all_arr
				});
			},
			register_dis_name() {
				this.$router.push({
					name: 'register_dis',
					query: {
						'register_dis_all_arr': this.register_dis_all_arr
					}
				});
			},
			phone(e) {
				if(e.keyCode < 48 || e.keyCode > 57) {
					e.target.value = e.target.value.slice(0, -1);
				}
			},
			phone_blur(e) {
				if(e.target.value.length === 11) {
					this.register_next_class.next_active = true;
				} else {
					this.register_next_class.next_active = false;
				}
			},
			register_next() {
				if(this.register_next_class.next_active) {
					let user_arr = mineCom.get_userinfo();
					if(!!user_arr) {
						let exist_user = user_arr.find(item => item.phone == this.$refs.reg_num.value);
						if(!!exist_user) {
							MessageBox.alert('用户名已注册', '提示').then(() => {
								this.popup_num = false;
							});
							return '';
						}else{
							this.popupVisible=true;
						}
					}
					if(this.$refs.reg_num.value.length !== 11) {
						this.showAlert = true;
						var time_alert = setTimeout(function() {
							this.showAlert = false;
							clearTimeout(time_alert);
						}.bind(this), 1000);
					}
					var user_info = {
						"userID": this.$refs.reg_user.value,
						"phone": this.$refs.reg_num.value,
						"password": '',
						"register_dis": this.dis_name,
						"stage": 0
					}
					this.reg_phone = this.$refs.reg_num.value;
					this.check_users(user_info);
				}
			},
			check_users(user_info) {
				let users_info = window.localStorage.getItem('users_info');
				var arr;
				if(!users_info) {
					arr = []
				} else {
					arr = JSON.parse(users_info);
				}
				arr.push(user_info);
				window.localStorage.setItem('users_info', JSON.stringify(arr));
			},
			reg_num_btn() {
				this.popup_num = true;
			},
			get_userinfo() {
				return JSON.parse(window.localStorage.getItem('users_info'));
			}
		},
		mounted() {
			this.dis_name = this.$route.query.target_dis_name || '中国';
		}
	}
</script>