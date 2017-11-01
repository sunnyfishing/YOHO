<template>
	<div class="listPage">
		<div class="tit">
			<div>
				<router-link tag="li" :to="'/sort-det'">
					Back
				</router-link>
				<span>{{this.$route.query.id}}</span>
			</div>
			<span>筛选</span>
		</div>
		<div class="nav">
			<span>
				<i>默认</i>
				<i></i>
			</span>
			<span>新品</span>
			<span>人气</span>
			<span>
				<i>价格</i>
				<i></i>
			</span>
		</div>
		<div class="style">
			<span @click="clickToHigh" class="active"><i>经典款型</i></span>
			<span @click="clickToHigh"><i>厚度</i></span>
			<span @click="clickToHigh"><i>领型</i></span>
			<span @click="clickToHigh"><i>袖长</i></span>
			<span @click="clickToHigh"><i>原产地</i></span>
			<span @click="clickToHigh"><i>衣长</i></span>
			<span @click="clickToHigh"><i>版型</i></span>
		</div>
		<goodsList :sendType="this.$route.query.id">
			
		</goodsList>
		<div class="carLogo">
			
		</div>
		<router-link tag='li' to="/shopcat" class="carLogo">
			<i class="yo-ico">&#xe68c;</i>
		</router-link>
	</div>
</template>

<script>
	import goodsList from './list/goodsList.vue'
	export default{
		components:{
			goodsList
		},
		methods:{
			clickToHigh(event){
				var le = event.target.parentElement.parentElement.children;
				for (var i=0; i<le.length; i++){
					le[i].className = "";
				}
				event.target.parentElement.className = "active";
			}
		}
	}
</script>
