<template lang="html">
	<div class="det">
		<div class="goods">
			<span class="goodsTit">--&nbsp;&nbsp;全部上衣&nbsp;&nbsp;--</span>
			<div class="goodsDet">
				<ul>
					<li v-for="i in detGoodsList"><img :src="i.default_images" /><span>{{i.category_name}}</span></li>	
					<li><span>MORE</span></li>
				</ul>
			</div>
		</div>
		<!--<p>{{this.$route.query.id}}</p>-->
		<p @click="param">点击</p>
		<div class="logo">
			<div class="logoTit">
				<span>--&nbsp;&nbsp;热门品牌&nbsp;&nbsp;--</span>
			</div>
			<div class="logoDet">
				<ul>
					<li><img/><span>logo</span></li>
				</ul>
			</div>
		</div>
	</div>
</template>	

<script type="text/javascript">	
import axios from 'axios'

export default{
	data(){
		return {
			detGoodsList:[],
			//detLogoList:[],	logo数据，未找到接口
		}
	},
	methods:{
		param(){
			console.log(this.$route.query.id);
		}
	},
	mounted(){
		axios.get('/api/?app_version=6.1.0&channel_id=1&client_secret=2b726a2df4b68873d5dc05bcbc93655d&client_type=android&contentCode=daaa8b1a5103a30419ebd79c06e6feac&fromPage=aFP_Lanuch&gender=1%2C3&method=app.sort.fromBigData&msort=5&os_version=android5.0.2%3Avivo_X5Pro_D&physical_channel=1&screen_size=1080x1920&session_key=532dea836f3f6c586e46069188a02ac5&udid=868299023997975851825611e25178e&uid=52932938&v=7&yh_channel=1')
		.then(function(response){
			this.detGoodsList = response.data.data.sortInfo;
			//完成字符串的剪切。因为获得的图片地址有问题
			for(var i=0; i<this.detGoodsList.length; i++){
				this.detGoodsList[i].default_images = this.detGoodsList[i].default_images.split('?')[0];
			}
			
		}.bind(this))
	}
}
</script>