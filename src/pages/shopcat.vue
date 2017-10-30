<template>
	<div class="shop_car">
		<div class="shop_car_header">
			<mt-header  title="购物车" fixed class="shop_car_header_tit"></mt-header>
			<div class="shop_car_kuaidi">
				
			</div>			
		</div>
		<div class="shop_car_main_null" v-show="shop_null">
			<div class="shop_car_null">
				<img src="../assets/mine-img/gouwu.png"/>
				<button @click="goShopping">随便逛逛</button>
			</div>
		</div>
		<div class="chop_car_main_notnull" v-show="!shop_null">
			<div class="shopcar_det">
				<ul>
				<li>
					<mt-checklist class='list-btn'
					  title="复选框列表"
					  v-model="value"
					  :options="['']">
					</mt-checklist>
				</li>
				<li>
					sdf
				</li>
				<li>
					sdf
				</li>
				<li>
					sfd
				</li>
			</ul>
			</div>
		</div>
		<div class="maylike_tit">
			为您优选
		</div>
		<maylike></maylike>
	</div>
</template>

<script>
	
	import maylike from '../components/maylike.vue';
	import {Header} from 'mint-ui';
	import Vue from 'vue';
	import shopCom from './common/shop_car-common.js';
	import { Checklist } from 'mint-ui';

	Vue.component(Checklist.name, Checklist);
	Vue.component(Header.name,Header);
	
	export default {
		data(){
			return {
				shop_null:true,
				value:true
			}
		},
		components:{
			maylike
		},
		methods:{
			goShopping(){
				shopCom.go_to(this,'sort-det');
			}
		}
	}
</script>

<style>
</style>