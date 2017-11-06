<template>
	<div class="shop_car">
		<div class="shop_car_header">
			<mt-header  title="购物车" fixed class="shop_car_header_tit">
        <mt-button  slot="right" class='tit_btn' v-show="show_hide.edit" @click="shop_edit_event">编辑</mt-button>
        <mt-button  slot="right" class='tit_btn' v-show="!(show_hide.edit)" @click="shop_edit_event">完成</mt-button>
			</mt-header>
		</div>

		<div class="shop_car_main_null" v-show="show_hide.shop_null&&show_hide.loaded">
			<div class="shop_car_null">
				<img src="../assets/mine-img/gouwu.png"/>
				<button @click="goShopping">随便逛逛</button>
			</div>
		</div>
    <shopVue  v-show="(!(show_hide.shop_null))" :show_hide="show_hide"></shopVue>
    <div id="shop_buy_i" v-show="(!(show_hide.shop_null))&&show_hide.loaded">
      <span><i class='yo-ico shop_buy_ico'>&#xe60d;</i>全场加价购</span>
      <span>已抢光<i class='yo-ico shop_buy_null'>&#xe503;</i></span>
    </div>
		<div class="maylike_tit" v-show="show_hide.loaded">
			为您优选
		</div>
		<maylike v-show="show_hide.loaded"></maylike>
	</div>
</template>

<script>

	import maylike from '../components/maylike.vue';
	import {Header} from 'mint-ui';
	import Vue from 'vue';
	import shopCom from './common/shop_car-common.js';
	import { Checklist,Button } from 'mint-ui';
  import shopVue from'./classify/shop-car-list.vue';

	Vue.component(Checklist.name, Checklist);
	Vue.component(Header.name,Header);
	Vue.component(Button.name,Button);

	export default {
		data(){
			return {
				value:true,
        show_hide:{
          shop_null:false,
          edit:false,
          loaded:false
        }
			}
		},
		components:{
			maylike,
      shopVue
		},
		methods:{
			goShopping(){
				shopCom.go_to(this,'sort-det');
			},
      shop_edit_event(){
        this.show_hide.edit=this.show_hide.edit?false:true
      }
		}
	}
</script>

<style>
</style>
