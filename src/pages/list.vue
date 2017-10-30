<template>
	<div class="listPage">
		<div class="tit">
			<div>
				<router-link tag="i" :to="path:'/sort-det'">
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
			<span><i>经典款型</i></span>
			<span><i>厚度</i></span>
			<span><i>领型</i></span>
			<span><i>袖长</i></span>
			<span><i>原产地</i></span>
			<span><i>衣长</i></span>
			<span><i>版型</i></span>
		</div>
		<goodsList :sendType="this.$route.query.id">
			
		</goodsList>
		<div class="carLogo">
			
		</div>
	</div>
</template>

<script>
	import goodsList from './list/goodsList.vue'
	export default{
		components:{
			goodsList
		}
	}
</script>
