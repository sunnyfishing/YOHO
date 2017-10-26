<template>
	<div>
		<img :src="img.list[big].data.list[0].src.slice(0,-39)"/>
		<ul>
			<li v-for="val in img.list[small].data.list">
				<img :src="val.src.slice(0,-39)" />
			</li>
		</ul>
	</div>
</template>

<script>
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