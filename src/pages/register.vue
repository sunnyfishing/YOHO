<template>
	<div id="register">
		<div class="register_head">
			<p>注册Yoho！Family<i @click="register_exit">×</i></p>
		</div>
		<div class="register_dex">
			<div class="alert" v-show="showAlert">
				{{alert_dec.tx1}}
			</div>
			<div class="reg_suc" v-show="showSuc">
				验证成功
			</div>
			<div class="register_dis"  @click="register_dis_name">
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
				<input type="password" name="" id="" value="" ref="reg_user"/>
			</label>
			<div :class="register_next_class" @click="register_next">
				<span>下一步</span>
			</div>
			<p>Yoho！Family账号可登录Yoho！Buy有货、Yoho！Now、mars及SHOW</p>
		</div>
		<mt-popup v-model='popupVisible' position="right" class="reg_num">
			<mt-header title="输入验证码" class='reg_num_tit'>
				<mt-button class='reg_num_exit' slot='left'><</mt-button>
			</mt-header>
			<p>验证码已发送至 <span>+86 {{reg_phone}}</span></p>
			<input type="text" v-model='reg_code'/>
			<button  @click="reg_num_btn">下一步</button>
			<mt-popup v-model='popup_num' position="right" class="reg_psd">
				法律看到司法考试见附件萨拉放假了设计费
			</mt-popup>
		</mt-popup>
	</div>
</template>
<script>
	import Bus from '../components/Bus.js';
	import axios from 'axios';
	import vue from 'vue';
	import {Toast,Indicator,Popup,Header,Button}	from 'mint-ui';
	
	vue.component(Popup.name,Popup);
	vue.component(Header.name,Header);
	vue.component(Button.name,Button);
	
	export default {
		data(){
			return {
				register_dis_all_arr:['澳大利亚','韩国','加拿大','马来西亚','美国','日本','新加坡','英国','中国','中国澳门','中国台湾','中国香港'],
				dis_name:'中国',
				showAlert:false,
				showSuc:false,
				alert_dec:{tx1:'请输入正确的信息！',tx2:'该用户名已被注册！'},
				register_next_class:{
					next_active:false,
					register_next:true
				},
				popupVisible:false,
				popup_num:false,
				reg_code:'',
			}
		},
		computed:{
			reg_phone(){
				console.log(this.$refs)
				console.log(this.$refs.reg_user)
				return this.$refs.reg_num?this.$refs.reg_num.value:'';
			}
		},
		methods:{
			register_exit(){
				this.$router.push({name:'mine',query:this.register_dis_all_arr});
			},
			register_dis_name(){
				this.$router.push({name:'register_dis',query:{'register_dis_all_arr':this.register_dis_all_arr}});
			},
			phone(e){
				if(e.keyCode<48||e.keyCode>57){
					e.target.value=e.target.value.slice(0,-1);
				}
			},
			phone_blur(e){
				if(e.target.value.length===11){
					this.register_next_class.next_active=true;
				}else{
					this.register_next_class.next_active=false;
				}
			},
			register_next(){
				if(this.register_next_class.next_active){
					Indicator.open({
							text:'注册中...',
							spinnerType: 'fading-circle'
						})
					let timer_tip=setTimeout(()=>{
						Indicator.close();
						clearTimeout(timer_tip);
						this.popupVisible=true;
					},1500)
					if(this.$refs.reg_num.value.length!==11){
						this.showAlert=true;
						var time_alert=setTimeout(function(){
							this.showAlert=false;
						}.bind(this),1000);
					}
					let user_info={
						userID:this.$refs.reg_user.value,
						phone:this.$refs.reg_num.value,
						password:'',
						register_dis:this.dis_name,
						stage:0
					}
					var users_info=this.$store.state.users_info;
					users_info.push(user_info);
				}
			},
			reg_num_btn(){
				console.log('content')
				this.popup_num=true;
			}
		},
		mounted(){
			this.dis_name=this.$route.query.target_dis_name||'中国';
		}
	}
</script>
