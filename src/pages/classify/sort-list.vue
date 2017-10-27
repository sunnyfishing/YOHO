<!--通过现有接口获得数据    待做-->
<template lang="html">
	<div>
		<ul>
			<!--路由传参的方法-->
			<!--<router-link tag="li" :to="/sort-det" v-for="i in listArr" @clicktodet="clickToDet">
				{{i.category_name}}
			</router-link>-->
			<li v-for="i in listArr" @click="clickToDet(i.category_name)" {{i.category_name}}</li>
			<!--这里可以用通过路由传参的方式进行两个组件之间的信息交流。
				在li循环里面，通过点击事件触发传参函数，给函数传一个标识页码的标识，然后函数将标识传递给另一个组件，该组件通过传过来的标识对url地址进行字符串的拼接
			-->
		</ul>
	</div>
</template>

<script>
	import axios from 'axios'
	
	export default{
		data(){
			return{
				listArr:[],
				isActive : false,
			}
		},
		methods:{			//点击路由传参
			clickToDet(name){
				this.$router.push({path:'/sort-det',query:{id:123}})
				this.isActive = true 
			}
		},
		mounted(){
		axios.get('/api/?app_version=6.1.0&client_secret=0f062603bf5ff527e68cf961013a445b&client_type=android&fromPage=aFP_Lanuch&gender=&method=app.sort.get&os_version=android5.0.2%3Avivo_X5Pro_D&physical_channel=1&screen_size=1080x1920&session_key=532dea836f3f6c586e46069188a02ac5&udid=868299023997975851825611e25178e&uid=52932938&v=7&yh_channel=1')
			.then(function(response){
				this.listArr = response.data.data.boy;
				/*console.log(this.listArr);
				for(var i=0; i<this.listArr.length; i++){
					console.log(this.listArr[i].category_id)
				}*/
			}.bind(this))
		}
	}
	
</script>
