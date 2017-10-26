<template lang="html">
	<div class="main" @scroll="opc($event)" v-if="show">
		<div class="search" :style="'background: -webkit-linear-gradient(top,rgba(0,0,0,'+search_opcity1+'),rgba(0,0,0,'+search_opcity2+'),rgba(0,0,0,'+search_opcity3+'))'">
			<div class="con">
				<i class="yo-ico">&#xe61c;</i>
				<div class="input">
					<input type="search" />
					<i class="yo-ico">&#xe610;</i>
					<i class="yo-ico">&#xe649;</i>
				</div>
				<i class="yo-ico">&#xe601;</i>
			</div>
		</div>
		<div class="swipe">
			<Swipe :ban="allimg.list[0].data"></Swipe>
		</div>
		<div class="new">
			<img :src="allimg.list[2].data.banner_image[0].src.slice(0,-39)" />
			<img :src="allimg.list[3].data.list[0].src.slice(0,-39)" />
			<div class="small">
				<img :src="allimg.list[5].data.list[0].src.slice(0,-39)" />
				<img :src="allimg.list[5].data.list[1].src.slice(0,-39)" />
			</div>
		</div>
		<List :img="allimg" big="7" small="8"></List>
		<List :img="allimg" big="10" small="11"></List>
		<List :img="allimg" big="13" small="14"></List>
		<Tit>热门品类</Tit>
		<div class="classify">
			<ul>
				<li v-for="val in allimg.list[19].data.list">
					<img :src="val.src.slice(0,-39)" />
				</li>
			</ul>
		</div>
		<Listtwo :img="allimg" big="21" small="22" class="list2"></Listtwo>
		<Listtwo :img="allimg" big="27" small="28" class="list2"></Listtwo>
		<Tit>编辑推荐</Tit>
		<div class="swipe2">
			<Swipe :ban="allimg.list[30].data.collocation.list"></Swipe>
		</div>
		<Listtwo :img="allimg" big="33" small="34" class="list3"></Listtwo>
		<Listtwo :img="allimg" big="36" small="37" class="list3"></Listtwo>
		<Like></Like>
	</div>
</template>

<script>
	import Swipe from '../components/swipe.vue';
	import List from '../components/main-list.vue';
	import Listtwo from '../components/main-list2.vue';
	import Tit from '../components/main-title.vue';
	import Like from '../components/maylike.vue';
	import axios from 'axios'
	export default {
		data(){
			return {
				allimg:null,
				search_opcity1:0.5,
				search_opcity2:0.1,
				search_opcity3:0,
				show:false
			}
		},
		methods:{
			opc(event){
				this.search_opcity1=event.target.scrollTop/60*0.1+0.5;
				this.search_opcity2=event.target.scrollTop/60*0.1+0.1;
				this.search_opcity3=event.target.scrollTop/60*0.1;
			}
		},
		computed:{
			
		},
		components:{
			Swipe,
			List,
			Tit,
			Listtwo,
			Like
		},
		mounted(){
			axios.get("/first/operations/api/v5/resource/home?app_version=6.1.0&client_secret=0da664cc12ca2439706039f9523628b8&client_type=android&content_code=9cb6138be8e60c96f48107da481816c2&fromPage=aFP_Home&gender=1%2C3&limit=100&new_device=N&os_version=android5.0.2%3Avivo_X5Pro_D&page=1&physical_channel=1&screen_size=1080x1920&session_key=532dea836f3f6c586e46069188a02ac5&udid=868299023997975851825611e25178e&uid=52932938&v=7&yh_channel=1").
			then((data)=>{
				this.allimg=data.data.data;
				this.show=true
			});
		}
	}
</script>

<style lang="scss" scoped>
	
</style>