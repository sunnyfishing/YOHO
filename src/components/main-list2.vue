<template>
	<div>
		<img :src="img.list[big].data.list[0].src.slice(0,-39)"/>
		<ul>
			<li v-for="val in img.list[small].data.list">
				<img v-lazy.container="val.src.slice(0,-39)" />
			</li>
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Lazyload } from 'mint-ui';
	Vue.use(Lazyload);
	export default{
		props:{
			img:{
				type:Object,
				required:true
			},
			big:{
				type:String,
				required:true
			},
			small:{
				type:String,
				required:true
			}
		},
		data(){
			return {
			}
		}
	}
</script>

<style>
</style>