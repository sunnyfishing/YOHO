<template lang="html">
	<div :class="{maincon:true,toright:toright,toleft:toleft}" id="container" @scroll="opc($event)" v-if="show">
	<a class="totop" href="#main" v-show="totopshow">
		<i class="yo-ico">&#xe7dc;</i>
	</a>
	<div class="search search1" :style="'background: -webkit-linear-gradient(top,rgba(0,0,0,'+search_opcity1+'),rgba(0,0,0,'+search_opcity2+'),rgba(0,0,0,'+search_opcity3+'))'" v-if="search_show">
			<div class="con">
				<i class="yo-ico" @click="leftPage">&#xe61c;</i>
				<div class="input">
					<input type="search" />
					<i class="yo-ico">&#xe610;</i>
					<i class="yo-ico">&#xe649;</i>
				</div>
				<i class="yo-ico">&#xe601;</i>
			</div>
		</div>
	<mt-loadmore :top-method="loadTop" ref="loadmore" >
		<div class="search" :style="'background: -webkit-linear-gradient(top,rgba(0,0,0,'+search_opcity1+'),rgba(0,0,0,'+search_opcity2+'),rgba(0,0,0,'+search_opcity3+'))'" v-if="!search_show">
			<div class="con">
				<i class="yo-ico" @click="leftPage">&#xe61c;</i>
				<div class="input">
					<input type="search" />
					<i class="yo-ico">&#xe610;</i>
					<i class="yo-ico">&#xe649;</i>
				</div>
				<i class="yo-ico">&#xe601;</i>
			</div>
		</div>
		<div class="swipe" id="main">
			<Swipe :ban="allimg.list[0].data"></Swipe>
		</div>
		<div class="new">
			<img v-lazy.container="allimg.list[2].data.list[0].src.slice(0,-39)" />
			<img v-lazy.container="allimg.list[3].data.list[0].src.slice(0,-39)" />
			<div class="small">
				<img v-lazy.container="allimg.list[4].data.list[0].src.slice(0,-39)" class="cao1"/>
				<img v-lazy.container="allimg.list[4].data.list[1].src.slice(0,-39)" class="cao1"/>
			</div>
			<div class="small">
				<img v-lazy.container="allimg.list[5].data.list[0].src.slice(0,-39)" class="cao2"/>
				<img v-lazy.container="allimg.list[5].data.list[1].src.slice(0,-39)" class="cao2"/>
			</div>
			<div class="small">
				<img v-lazy.container="allimg.list[6].data.list[0].src.slice(0,-39)" class="cao3"/>
				<img v-lazy.container="allimg.list[6].data.list[1].src.slice(0,-39)" class="cao3"/>
			</div>
			<div class="small">
				<img v-lazy.container="allimg.list[7].data.list[0].src.slice(0,-39)" class="cao4"/>
				<img v-lazy.container="allimg.list[7].data.list[1].src.slice(0,-39)" class="cao4"/>
			</div>
			<img v-lazy.container="allimg.list[8].data.list[0].src.slice(0,-39)" />
		</div>
		<List :img="allimg" big="13" small="14"></List>
		<List :img="allimg" big="16" small="17"></List>
		<List :img="allimg" big="19" small="20"></List>
		<Tit>热门品类</Tit>
		<div class="classify">
			<ul>
				<li v-for="val in allimg.list[25].data.list">
					<img v-lazy.container="val.src.slice(0,-39)" />
				</li>
			</ul>
		</div>
		<Listtwo :img="allimg" big="33" small="34" class="list2"></Listtwo>
		<Listtwo :img="allimg" big="27" small="28" class="list2"></Listtwo>
		<Tit>编辑推荐</Tit>
		<div class="swipe2">
			<Swipe :ban="allimg.list[36].data.collocation.list"></Swipe>
		</div>
		<Listtwo :img="allimg" big="39" small="40" class="list3"></Listtwo>
		<Listtwo :img="allimg" big="42" small="43" class="list3"></Listtwo>
		<Tit>你可能喜欢</Tit>
		<Like></Like>
	</mt-loadmore>
	<mt-popup v-model="popupVisible" position="left">
		<Leftpage :showpage="showpage"></Leftpage>
	</mt-popup>
	</div>
</template>

<script>
	import Vue from 'vue';
	import Swipe from '../components/swipe.vue';
	import List from '../components/main-list.vue';
	import Listtwo from '../components/main-list2.vue';
	import Tit from '../components/main-title.vue';
	import Like from '../components/maylike.vue';
	import Leftpage from '../components/leftpage.vue';
	import axios from 'axios';
	import { Indicator } from 'mint-ui';
	import { Lazyload } from 'mint-ui';
	import { Loadmore } from 'mint-ui';
	import { Popup } from 'mint-ui';
	Vue.component(Popup.name, Popup);
	Vue.component(Loadmore.name, Loadmore);
	Vue.use(Lazyload);
	export default {
		data(){
			return {
				allimg:null,
				search_opcity1:0.5,
				search_opcity2:0.1,
				search_opcity3:0,
				show:false,
				popupVisible:false,
				toleft:false,
				toright:false,
				totopshow:false,
				search_show:false
			}
		},
		methods:{
			opc(event){
				this.search_opcity1=event.target.scrollTop/60*0.1+0.5;
				this.search_opcity2=event.target.scrollTop/60*0.1+0.1;
				this.search_opcity3=event.target.scrollTop/60*0.1;
				if(event.target.scrollTop>300){
					this.totopshow=true
				}else{
					this.totopshow=false
				}
				if(event.target.scrollTop>0){
					this.search_show=true
				}else{
					this.search_show=false
				}
			},
			loadTop(){
				setTimeout(function(){
					axios.get("/first/operations/api/v5/resource/home?app_version=6.1.0&client_secret=0da664cc12ca2439706039f9523628b8&client_type=android&content_code=9cb6138be8e60c96f48107da481816c2&fromPage=aFP_Home&gender=1%2C3&limit=100&new_device=N&os_version=android5.0.2%3Avivo_X5Pro_D&page=1&physical_channel=1&screen_size=1080x1920&session_key=532dea836f3f6c586e46069188a02ac5&udid=868299023997975851825611e25178e&uid=52932938&v=7&yh_channel=1").
					then((data)=>{
						this.allimg=data.data.data;
						this.$refs.loadmore.onTopLoaded();
					});
				}.bind(this),1000)
			},
			leftPage(){
				this.popupVisible=true,
				this.toright=true,
				this.toleft=false
			},
			showpage(data){
				this.popupVisible=data
				this.toleft=true,
				this.toright=false
			},
		},
		computed:{

		},
		components:{
			Swipe,
			List,
			Tit,
			Listtwo,
			Like,
			Leftpage
		},
		mounted(){
			Indicator.open('加载中...');
			axios.get("/first/operations/api/v5/resource/home?app_version=6.1.0&client_secret=0da664cc12ca2439706039f9523628b8&client_type=android&content_code=9cb6138be8e60c96f48107da481816c2&fromPage=aFP_Home&gender=1%2C3&limit=100&new_device=N&os_version=android5.0.2%3Avivo_X5Pro_D&page=1&physical_channel=1&screen_size=1080x1920&session_key=532dea836f3f6c586e46069188a02ac5&udid=868299023997975851825611e25178e&uid=52932938&v=7&yh_channel=1").
			then((data)=>{
				this.allimg=data.data.data;
				this.show=true
				Indicator.close();
			});
		}
	}
</script>
