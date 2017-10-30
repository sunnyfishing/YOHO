<template>
	<div id="setting">
		<mt-header class="setting_header">
			<router-link to="/mine" slot="left">
				<i class='yo-ico'>&#xe611;</i>
				<span>设置</span>
			</router-link>
		</mt-header>
		<ul>
			<li>
				<mt-cell title='消息推送' value="已开启">
					<i class='yo-ico' slot='icon'>&#xe638;</i>
				</mt-cell>
				<mt-cell title='2G/3G网络显示原图'>
					<i class='yo-ico' slot='icon'>&#xe6ba;</i>
					<span slot=''>
						<mt-switch name='s' ></mt-switch>
					</span>
				</mt-cell>
				<mt-cell title='清除缓存' value='0.12M'>
					<i class='yo-ico' slot='icon'>&#xe742;</i>
				</mt-cell>
			</li>
			<li>
				<div class="about" @click="aboutEvent">
					<mt-cell title='关于我们'>
						<i class='yo-ico' slot='icon'>&#xe62f;</i>
						<i slot='' class='yo-ico'>&#xe503;</i>
					</mt-cell>
				</div>
				<div class="share" @click="shareEvent">
					<mt-cell title='推荐有货给好友'>
						<i class='yo-ico' slot='icon'>&#xe693;</i>
						<i slot='' class='yo-ico'>&#xe503;</i>
					</mt-cell>
				</div>
			</li>
			<li>
				<p>更多应用</p>
				<div class="more_img">
					<img src="../assets/mine-img/and.png"/>
				</div>
			</li>
			<li class='user_exit_li' v-if="exitLoginBtn">
				<button class='user_exit' @click="user_exit_event">退出登录</button>
			</li>
		</ul>
		<mt-popup v-model="about_show" class='about_page' position="right">
			<mt-header class="about_page_header">
				<router-link to="/setting" slot="left">
			    <div class="about_exit_event" @click="about_page_exit">
			    	<mt-button icon="back">返回</mt-button>
			    </div>
			  </router-link>
			</mt-header>
			<div class="about_page_body">
				<ul>
					<li><img src="../assets/mine-img/about.png"/></li>
					<li class="about-botton">版本更新</li>
					<li class="about-botton">关于YOHO!BUY有货</li>
					<li class="about-botton">关于新力传媒</li>
					<li class="about-botton">给我评价</li>
					<li class="about-botton">关注有货</li>
					<li>
						<img src="../assets/bottom.jpg"/>
					</li>
				</ul>
			</div>
		</mt-popup>
		<mt-popup v-model="share_show" class="share_page" position="right">
			<mt-header class="share_page_header">
				<router-link to="/setting" slot="left">
			    <div class="about_exit_event" @click="share_page_exit">
			    	<mt-button icon="back">推荐给有货好友</mt-button>
			    </div>
			  </router-link>
			</mt-header>
			<div class="share_show_page">
			  	<div class="share_show_top">
			  		<ul>
			  			<li>
			  				<i class='yo-ico'></i>
			  				<span>微信好友</span>
			  			</li>
			  			<li>
			  				<i class='yo-ico'></i>
			  				<span>朋友圈</span>
			  			</li>
			  			<li>
			  				<i class='yo-ico'></i>
			  				<span>QQ</span>
			  			</li>
			  			<li>
			  				<i class='yo-ico'></i>
			  				<span>新浪微博</span>
			  			</li>
			  			<li>
			  				<i class='yo-ico'></i>
			  				<span>QQ空间</span>
			  			</li>
			  			<li>
			  				<i class='yo-ico'></i>
			  				<span>复制链接</span>
			  			</li>
			  		</ul>
			  	</div>
			  	<div class="share_show_bottom">
			  		
			  	</div>
			  </div>
		</mt-popup>
	</div>
</template>

<script>
	
	import {Header,Cell,Switch,Popup,Button} from 'mint-ui';
	import Vue  from 'vue';
	import mineCom from './common/mine-common.js';
	
	Vue.component(Header.name,Header);
	Vue.component(Cell.name,Cell);
	Vue.component(Switch.name,Switch);
	Vue.component(Popup.name,Popup);
	Vue.component(Button.name,Button);
	
	export default {
		data(){
			return{
				about_show:false,
				share_show:false,
				exitLoginBtn:false
			}
		},
		methods:{
			user_exit_event(){
				let user=mineCom.get_userinfo();
				let user_exist=user.find((item)=>{return item.stage==1;});
				user_exist.stage=0;
				mineCom.set_userinfo(user);
				this.exitLoginBtn=false;
				this.$store.commit('set_login_stage',0);
				this.$router.push({name:'mine'});
				this.$store.commit('set_loginning_stage',1);
			},
			aboutEvent(){
				this.about_show=true;
			},
			shareEvent(){
				this.share_show=true;
			},
			about_page_exit(){
				this.about_show=false;
			},
			share_page_exit(){
				this.share_show=false;
			}
		},
		mounted(){
			console.log(this.$store.state.login_stage)
			if(this.$store.state.login_stage){
				this.exitLoginBtn=true;
			}else{
				this.exitLoginBtn=false;
			}
		}
	}
	
</script>

<style>
</style>