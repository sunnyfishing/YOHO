<template>
	<div class="goodsList" id="container">
		<ul>
			<router-link tag="li" v-for="i in goodsArr"  :to="{path:'/details',query:{product_id:i.product_id,product_skn:i.product_skn}}">
				<i>
					<img v-lazy.container="i.default_images"/>
				</i>
				<span>{{i.product_name}}</span>
				<div>
					<div>
						<span>￥</span>
						<span>{{i.sales_price}}</span>
					</div>
					<i class="ii">···</i>
				</div>
			</router-link>

		</ul>
	</div>
</template>

<script>
import axios from 'axios';
import { Lazyload } from 'mint-ui';
import Vue from 'vue';
import { Indicator } from 'mint-ui';
import store from '../../store/index.js'
import { mapState } from 'vuex'
Vue.use(Lazyload);

export default{
	data(){
		return {
			goodsArr : [],
		}
	},
	mounted(){
		this.list()
		var ws = new WebSocket('ws://localhost:5000/ws')
		ws.onmessage = function(e){
			console.log("数据库"+e.data);
			this.list()
		}.bind(this)
		window.onbeforeunload = function(){
			ws.onclose = function(){
				console.log('_close');
			}
		}
	},
	props:[
		'sendType',
	],
	methods:{
		list(){
			Indicator.open('加载中...');
			// axios.get('/api/?limit=20&method=app.search.productList&page=1&query='+this.sendType)
			axios.get('/node/api/goods_list/getlist?pageSize=20&page=1&term={"small_sort_name":"'+this.sendType+'"}')
			.then(function(response){
				console.log(response);
				// this.goodsArr = response.data.data.product_list;
				// for(var i=0; i<this.goodsArr.length; i++){
				// 	this.goodsArr[i].default_images = this.goodsArr[i].default_images.split('?')[0];
				// }
				this.goodsArr = response.data.data.data.result;
				for(var i=0; i<this.goodsArr.length; i++){
					this.goodsArr[i].default_images = "http://localhost:5000/admin/images/"+this.goodsArr[i].default_images;
				}
				Indicator.close();
			}.bind(this))
		},
		sendProduct_id(product_id,product_skn){
			console.log(1);
			store.commit('sendProduct_id', product_id,product_skn)
		}
	}
}
</script>
