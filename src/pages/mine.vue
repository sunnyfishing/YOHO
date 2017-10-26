<template lang="html">
	<div id="mine">
		<!--<i class="yo-ico">&#xe61c;</i>-->
		<div class="mine-tit-up">
			<div class="mine-tit" :style="opa_val">
				<i class="iconfont"> &#xe60d;</i>
				<span>我的</span>
				<i class="yo-ico">&#xe61c;</i>
			</div>
		</div>
		<div class="mine-tit-bot" @scroll="mine_body_scroll($event)" ref="mine_tit_bot">
			<!--<div class="mine_login_suc">
				登录成功！
			</div>-->
			<div class="mine-body">
				<div class="mine-head">
					<div class="mine-login">
						<button @click="loginBtn">登录/注册</button>
					</div>
					<div class="mine-items">
						<ul>
							<li>收藏的商品</li>
							<i></i>
							<li>收藏的品牌</li>
							<i></i>
							<li>浏览的记录</li>
						</ul>
					</div>
				</div>
				<div class="mine-cannel">
					<p>默认购物频道</p>
					<div class="mine-can-item">
						<span>男士MEN</span>
						<i class='yo-ico'>&#xe60d;</i>
					</div>
				</div>
				<div class="mine-order">
					<div class="mine-order-tit">
						<p>我的订单</p>
						<div class="mine-order-all">
							<span>查看全部订单</span>
							<i class="yo-ico">&#xe60d;</i>
						</div>
					</div>
					<div class="mine-order-items">
						<ul>
							<li>
								<i class="yo-ico">&#xe60d;</i>
								<span>待付款</span>
							</li>
							<li>
								<i class="yo-ico"></i>
								<span>待发货</span>
							</li>
							<li>
								<i class="yo-ico"></i>
								<span>待收货</span>
							</li>
							<li>
								<i class="yo-ico"></i>
								<span>待晒单</span>
							</li>
							<li>
								<i class="yo-ico"></i>
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
								<i class="yo-ico"></i>
								<span>优惠券</span>
							</li>
							<li>
								<i class="yo-ico"></i>
								<span>有货币</span>
							</li>
							<li>
								<i class="yo-ico"></i>
								<span>限购码</span>
							</li>
							<li>
								<i class="yo-ico"></i>
								<span>有货分期</span>
							</li>
							<li>
								<i class="yo-ico"></i>
								<span>礼品卡</span>
							</li>
						</ul>
					</div>
				</div>
				<div class="mine-buy">
					<div class="mine-buy-shopping">
						<i class="yo-ico">1sfsd</i>
						<span>我的逛</span>
						<i class="yo-ico">1</i>
					</div>
					<div class="mine-buy-shopping">
						<i class="yo-ico">a</i>
						<span>我的晒单</span>
						<i class="yo-ico">e</i>
					</div>
				</div>
				<div class="mine-buy">
					<div class="mine-buy-shopping">
						<i class="yo-ico">1sfsd</i>
						<span>邀请好友,50元现金券无限赚</span>
						<i class="yo-ico">1</i>
					</div>
					<div class="mine-buy-shopping">
						<i class="yo-ico">a</i>
						<span>分享购</span>
						<i class="yo-ico">e</i>
					</div>
				</div>
				<div class="mine-buy mine-server">
					<div class="mine-buy-shopping">
						<i class="yo-ico">a</i>
						<span>服务与反馈</span>
						<i class="yo-ico">e</i>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				opa_val:''
			}
		},
		components: {

		},
		methods: {
			loginBtn() {
				this.$router.push({
					name: 'login'
				})
			},
			mine_body_scroll(e) {
				var ele=this.$refs.mine_tit_bot;
				this.opa_val=`background:rgba(17,20,19,${0.8*ele.scrollTop/140})`;
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>