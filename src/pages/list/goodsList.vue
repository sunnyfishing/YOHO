<template>
	<div class="goodsList" id="container">
		<ul>
			<router-link tag="li" v-for="i in goodsArr" to="/">
				<i>
					<img v-lazy.container="i.default_images"/>
				</i>
				<span>{{i.product_name}}</span>
				<div>
					<div>
						<span>￥</span>
						<span>{{i.sales_price}}</span>
					</div>
					<i>...</i>
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
Vue.use(Lazyload);

export default{
	data(){
		return {
			goodsArr : [],
		}
	},
	mounted(){
		Indicator.open('加载中...');
		axios.get('/api/?limit=20&method=app.search.productList&page=1&query='+this.sendType)
		.then(function(response){
			this.goodsArr = response.data.data.product_list;
			//console.log(this.goodsArr.length);
			for(var i=0; i<this.goodsArr.length; i++){
				this.goodsArr[i].default_images = this.goodsArr[i].default_images.split('?')[0];
				//console.log(this.goodsArr[i].default_images);
			}
			Indicator.close();
		}.bind(this))
	},
	props:[
		'sendType',
	]
}
</script>
