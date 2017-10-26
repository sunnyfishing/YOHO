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
				<input type="password" name="" id="" value="" ref="reg_psd"/>
			</label>
			<div :class="register_next_class" @click="register_next">
				<span>下一步</span>
			</div>
			<p>Yoho！Family账号可登录Yoho！Buy有货、Yoho！Now、mars及SHOW</p>
		</div>
	</div>
</template>
<script>
	import Bus from '../components/Bus.js';
	import axios from 'axios';
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
				}
			}
		},
		computed:{
			
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
				let self=this;
				if(e.target.value.length===11){
					this.register_next_class.next_active=true;
				}else{
					this.register_next_class.next_active=false;
				}
			},
			register_next(){
				if(this.register_next_class.next_active){
					if(this.$refs.reg_num.value.length!==11){
						this.showAlert=true;
						var time_alert=setTimeout(function(){
							this.showAlert=false;
						}.bind(this),1000);
					}
					let self=this;
					axios.get('http://datainfo.duapp.com/shopdata/userinfo.php',{
						params:{
							userID:self.$refs.reg_num.value,
							password:self.$refs.reg_psd.value,
							status:'register',
							register_dis:self.dis_name,
							stage:0
						}
					}).then(function(data){
						self.showSuc=true;
						setTimeout(function(){
							self.showSuc=false;
						}.bind(this),1000);
						self.$router.push({name:'mine'});
					})
				}
			}
		},
		mounted(){
			this.dis_name=this.$route.query.target_dis_name||'中国';
		}
	}
</script>
