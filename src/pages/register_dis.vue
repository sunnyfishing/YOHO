<template>
	<div id="register_dis">
		<div class="register_dis_head">
			<p>选择国家<i @click="register_dis_exit"><</i></p>
		</div>
		<div class="register_dis_all">
			<ul @click="get_dis_name($event)">
				<li v-for="val,index in register_dis_all_arr" :key="index">{{val}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Bus from '../components/Bus.js';
	export default {
		data(){
			return {
				register_dis_all_arr:this.$route.query.register_dis_all_arr
			}
		},
		methods:{
			register_dis_exit(){
				this.$router.push({name:'register'})
			},
			get_dis_name(e){
				var target_dis_name=e.target.innerHTML;
				this.$router.push({name:'register',query:{'target_dis_name':target_dis_name}});
			}
		},
		mounted(){
			Bus.$on('get_register_dis_name',function(data){
			})
			
		}
	}
</script>

<style>
	/*#register_dis{
		width: 100%;
		height: 100%;
		background: red;
	}*/
</style>