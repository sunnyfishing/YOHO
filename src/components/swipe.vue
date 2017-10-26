<template lang="html">
	<mt-swipe :auto="4000">
	  	<mt-swipe-item v-for='val in ban'>
	  		<img :src="val.src.slice(0,-39)" />
	  	</mt-swipe-item>
	</mt-swipe>
</template>

<script>
	import Vue from 'vue';
	import { Swipe, SwipeItem } from 'mint-ui';
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	export default {
		props:{
			ban:{
				type:Array,
				required:true
			}
		},
		data(){
			return {
				
			}
		},
		components:{
			
		},
		mounted(){
		}
	}
</script>

<style lang="scss" scoped>
	
</style>