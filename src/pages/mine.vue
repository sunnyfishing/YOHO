<template lang="html">
	<div class="mine_up" @scroll="mine_body_scroll($event)"  ref="mine_up">
		<div id="mine">
			<!--<i class="yo-ico">&#xe61c;</i>-->
			<div class="mine-tit-up">
				<mt-popup v-model='popvisible' position='top' class="loginLoad">
					登录成功!
				</mt-popup>
				<div class="mine-tit" :style="opa_val">
					<i class="yo-ico" @click="settting">&#xe660;</i>
					<span>我的</span>
					<i class="yo-ico">&#xe638;</i>
				</div>
			</div>
			<div class="mine-tit-bot">

				<!--<div class="mine_login_suc">
				登录成功！
			</div>-->
				<div class="mine-body">
					<div class="mine-head">
						<div class="mine-login" v-if="!login">
							<button @click="loginBtn">登录 / 注册</button>
						</div>
						<div class="mine-loginned" v-if="login">
							<dl>
								<dt>
									<i></i>
								</dt>
								<dd>
									<li>{{getPhone}}</li>
									<li>
										<span>{{getUsename}}</span>
										<i class="yo-ico">&#xe64b;</i>
										<span>潮流口令</span>
										<span>地址管理<i class="yo-ico">&#xe503;</i></span>
									</li>
								</dd>
							</dl>
						</div>
						<div class="mine-items">
							<ul>
								<li><span>0</span>收藏的商品</li>
								<i></i>
								<li><span>0</span>收藏的品牌</li>
								<i></i>
								<li><span>0</span>浏览的记录</li>
							</ul>
						</div>
					</div>
					<div class="mine-cannel">
						<p>默认购物频道</p>
						<div class="mine-can-item">
							<span>男士MEN</span>
							<i class='yo-ico'>&#xe503;</i>
						</div>
					</div>
					<div class="mine-order">
						<div class="mine-order-tit">
							<p>我的订单</p>
							<div class="mine-order-all">
								<span>查看全部订单</span>
								<i class="yo-ico">&#xe503;</i>
							</div>
						</div>
						<div class="mine-order-items">
							<ul>
								<li>
									<i class="yo-ico">&#xe502;</i>
									<span>待付款</span>
								</li>
								<li>
									<i class="yo-ico">&#xe662;</i>
									<span>待发货</span>
								</li>
								<li>
									<i class="yo-ico">&#xe6b4;</i>
									<span>待收货</span>
								</li>
								<li>
									<i class="yo-ico shaidan">&#xe618;</i>
									<span>待晒单</span>
								</li>
								<li>
									<i class="yo-ico">&#xe603;</i>
									<span>退/换货</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="mine-order">
						<div class="mine-order-tit">
							<p>我的资产</p>
						</div>
						<div class="mine-order-items">
							<ul>
								<li>
									<i class="yo-ico youhui">&#xe667;</i>
									<span>优惠券</span>
								</li>
								<li>
									<i class="yo-ico">&#xe60d;</i>
									<span>有货币</span>
								</li>
								<li>
									<i class="yo-ico">&#xe616;</i>
									<span>限购码</span>
								</li>
								<li>
									<i class="yo-ico">&#xe60b;</i>
									<span>有货分期</span>
								</li>
								<li>
									<i class="yo-ico">&#xf0057;</i>
									<span>礼品卡</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="mine-buy">
						<div class="mine-buy-shopping">
							<i class="yo-ico">&#xe60f;</i>
							<span>我的逛</span>
							<i class="yo-ico">&#xe503;</i>
						</div>
						<div class="mine-buy-shopping">
							<i class="yo-ico">&#xe618;</i>
							<span>我的晒单</span>
							<i class="yo-ico">&#xe503;</i>
						</div>
					</div>
					<div class="mine-buy">
						<div class="mine-buy-shopping mine-teshu">
							<i class="yo-ico yase">&#xe678;</i>
							<span>邀请好友,50元现金券无限赚</span>
							<i class="yo-ico yase">&#xe503;</i>
						</div>
						<div class="mine-buy-shopping ">
							<i class="yo-ico">&#xe693;</i>
							<span>分享购</span>
							<i class="yo-ico">&#xe503;</i>
						</div>
					</div>
					<div class="mine-buy mine-server">
						<div class="mine-buy-shopping">
							<i class="yo-ico">&#xe638;</i>
							<span>服务与反馈</span>
							<i class="yo-ico">&#xe503;</i>
						</div>
					</div>
				</div>
			</div>
		</div>
		<likeList></likeList>
	</div>

</template>

<script>
	
	import likeList from '../components/maylike.vue';
	import mineCom from './common/mine-common';
	import {Popup} from 'mint-ui';
	import Vue from 'vue';
	
	Vue.component(Popup.name,Popup);
	
	export default {
		data() {
			return {
				opa_val: '',
				login:false,
				popvisible:false
			}
		},
		computed:{
			getPhone(){
				return this.getLoginUser().phone;
			},
			getUsename(){
				return this.getLoginUser().userID;
			}
		},
		components: {
			likeList
		},
		methods: {
			settting(){
				mineCom.go_to(this,'setting');
			},
			getLoginUser(){
				let users=mineCom.get_userinfo();
				let exist_login=users.find((item) => item.stage);
				if(!!exist_login){
					this.login=true;
					return exist_login;
				}else{
					this.login=false;
					return '';
				}
			},
			loginndedLoad(){
				if(this.getLoginUser().stage){
					this.popvisible=true;
					let timer_load=setTimeout(()=>{
						clearTimeout(timer_load);
						this.popvisible=false;
					},1000)
				}
			},
			loginBtn() {
				this.$router.push({
					name: 'login'
				})
			},
			mine_body_scroll(e) {
				var ele = this.$refs.mine_up;
				this.opa_val = `background:rgba(17,20,19,${0.8*ele.scrollTop/600})`;
			}
		},
		mounted(){
			this.loginndedLoad();
			this.getLoginUser();
		}
	}
</script>

<style lang="scss" scoped>

</style>