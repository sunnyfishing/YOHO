<template>
	<div class="details">
		<div class="details_section" v-if="success" @scroll="op($event)">
			<div class="details_header" :style="'background:rgba(0,0,0,'+opc+')'">
				<div class="back">
					<i class="yo-ico">&#xe606;</i>
				</div>
				<p>商品详情</p>
				<div class="share">
					<i class="yo-ico">&#xe634;</i>
				</div>
			</div>
			<div class="details_swipe">
				<mt-swipe :auto='0'>
				  	<mt-swipe-item v-for='val in details.goods_list[0].images_list'>
				  		<img :src="val.image_url.slice(0,-109)" />
				  	</mt-swipe-item>
				</mt-swipe>
			</div>
			<div class="details_info">
				<p class="goods_name">{{details.product_name}}</p>
				<p class="goods_price">￥ {{details.sales_price}}</p>
				<div class="cu">
					<i>促 </i>
					<span> {{cu[0].promotionTitle}}</span>
					<b>›</b>
				</div>
				<ul>
					<li><i class="yo-ico">&#xe614; </i> 品牌保障</li>
					<li><i class="yo-ico">&#xe614; </i> 支持分期</li>
					<li><i class="yo-ico">&#xe614; </i> 支持7天退换货</li>
				</ul>
			</div>
			<div class="comment">
				<mt-navbar v-model="selected">
				  	<mt-tab-item id="1">晒单评论({{commentt.totalCount}})</mt-tab-item>
				  	<mt-tab-item id="2">购买咨询({{askk.total}})</mt-tab-item>
				</mt-navbar>
				<mt-tab-container v-model="selected">
				 	<mt-tab-container-item id="1">
				 		<div class="comment_one">
				 			<div class="user_info">
				 				<img :src="commentt.list[0].userInfo.headIco.slice(0,-38)" />
				 				<div class="user_name">
				 					<p>***{{commentt.list[0].userInfo.nickName.slice(-1)}}</p>
				 					<i  v-for="(val,index) in 5" :class="{'yo-ico':true,active:index<commentt.list[0].satisfied}">&#xe501;</i>
				 				</div>
				 			</div>
				 			<p class="content">{{commentt.list[0].content}}</p>
				 			<div class="com_img">
				 				<img :src="commentt.list[0].url.slice(0,-38)"/>
				 			</div>
				 			<div class="size">
				 				<span>{{new Date(commentt.list[0].createTime*1000).getFullYear()}}-{{new Date(commentt.list[0].createTime*1000).getMonth()+1}}-{{new Date(commentt.list[0].createTime*1000).getDate()}} </span>
				 				<span> 颜色:{{commentt.list[0].goods.factory_goods_name}} </span>
				 				<span> 尺码:{{commentt.list[0].goods.size_name}} </span>
				 			</div>
				 		</div>
				 		<div class="more">
				 			查看更多 <span> ›</span>
				 		</div>
				  	</mt-tab-container-item>
				  	<mt-tab-container-item id="2">
				  		<div class="ask_one">
				  			<ul>
				  				<li v-for="val in askk.list">
				  					<dl>
				  						<dd>
				  							<i class="yo-ico">&#xe609;</i>
				  							<div>
				  								<p>{{val.ask}}</p>
				  								<p>{{val.ask_time}}</p>
				  							</div>
				  						</dd>
				  						<dt>
				  							<i class="yo-ico">&#xe616;</i>
				  							<span>{{val.answer}}</span>
				  						</dt>
				  					</dl>
				  				</li>
				  				<li></li>
				  			</ul>
				  		</div>
				  		<div class="more">
				 			查看更多 <span> ›</span>
				 		</div>
				 	</mt-tab-container-item>
				</mt-tab-container>
			</div>
			<div class="img_text">
				<iframe src="/first/?app_version=6.1.0&method=app.product.intro&product_skn=51656964&return_type=html" width="100%" frameborder="0" @load="frameload($event)" scrolling="no"></iframe>
			</div>
			<div class="bottom">
				<img src="../assets/bottom.jpg"/>
			</div>
		</div>
		<div class="details_footer" v-if="details_footer_show">
			<ul>
				<router-link tag="li" to="/shopcat">
					<i class="yo-ico">&#xe68c;</i>
					<span>购物车</span>
				</router-link>
				<li>
					<i class="yo-ico">&#xe64c;</i>
					<span>品牌店铺</span>
				</li>
				<li>
					<i class="yo-ico">&#xe72d;</i>
					<span>收藏</span>
				</li>
				<li @click="showselect">
					<p>加入购物车</p>
				</li>
			</ul>
		</div>
		<Selectsize :showmodal="select_show" :change="changestatus"></Selectsize>
	</div>
</template>

<script>
	import axios from 'axios';
	import Vue from 'vue';
	import Selectsize from '../components/select-size.vue'
	import { Swipe, SwipeItem } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import { Navbar, TabItem } from 'mint-ui';
	import { TabContainer, TabContainerItem } from 'mint-ui';
	Vue.component(TabContainer.name, TabContainer);
	Vue.component(TabContainerItem.name, TabContainerItem);
	Vue.component(Navbar.name, Navbar);
	Vue.component(TabItem.name, TabItem);
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	export default {
		data(){
			return{
				details:null,
				success:false,
				cu:null,
				commentt:null,
				askk:null,
				selected:'1',
				text_img:null,
				opc:0,
				productId:820550,
				productskn:51656964,
				details_footer_show:false,
				select_show : false
			}
		},
		components:{
			Selectsize
		},
		methods:{
			op(event){
				this.opc=event.target.scrollTop/60*0.1;
				this.opc=this.opc>0.8?0.8:this.opc
			},
			frameload(e){
				e.target.height=e.target.contentWindow.document.body.scrollHeight
			},
			showselect(){
				this.select_show = true
			},
			changestatus(){
				this.select_show = false
			}
		},
		mounted(){
			this.productId=this.$route.query.product_id;
			this.productskn=this.$route.query.product_skn;
			Indicator.open('加载中...');
			axios.get('/first/?method=app.product.data&product_skn='+this.productskn).
			then((data)=>{
				this.details=data.data.data;
				this.success=true;
				Indicator.close();
				this.details_footer_show=true
			});
			axios.get('/first/?method=app.product.promotion&product_skn='+this.productskn).
			then((data)=>{
				this.cu=data.data.data;
			});
			axios.get('/first/?limit=1&method=show.recentShareOrderByProductId&productId='+this.productId).
			then((data)=>{
				this.commentt=data.data.data;
			});
			axios.get('/first/?limit=2&method=app.consult.lastTwo&productId='+this.productId).
			then((data)=>{
				this.askk=data.data.data;
			})
		}
	}
</script>
