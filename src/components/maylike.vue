<template>
	<div class="maylike">
		<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
			<li v-for="val in likeInfo">
				<img v-lazy.container="val.default_images.slice(0,-85)"/>
				<div class="info">
					<p>{{val.product_name}}</p>
					<p><span>￥{{val.vip1_price}}.00 </span><del v-if="val.market_price!=val.vip1_price"> ￥{{val.market_price}}.00</del><i @click="showfind($event)">···</i></p>
				</div>
				<div class="find">
					<p>找相似</p>
					<p>不喜欢</p>
				</div>
			</li>
		</ul>
		<div class="loading" v-if="loading&&!this.$store.getters.load">
			<img src="../assets/ajax-loader.gif" />
			<span>加载中……</span>
		</div>
		<div class="bottom" v-if="this.$store.getters.load">
			<img src="../assets/bottom.jpg"/>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import Vue from 'vue';
	import { Lazyload } from 'mint-ui';
	import { InfiniteScroll } from 'mint-ui';
	Vue.use(InfiniteScroll);
	Vue.use(Lazyload);
	export default{
		data(){
			return{
				loading:false
			}
		},
		components:{
			
		},
		computed:{
			...mapGetters([
				'likeInfo'
			])
		},
		methods:{
			showfind(e){
				var classname=e.target.parentElement.parentElement.nextElementSibling.className;
				if(classname=="find"||classname=="find hide"){
					e.target.parentElement.parentElement.nextElementSibling.className="find show"
				}else{
					e.target.parentElement.parentElement.nextElementSibling.className="find hide"
				}
			},
			loadMore(){
				this.loading=true
				setTimeout(function(){
					this.$store.state.like_more=true
					this.$store.dispatch('getLike',this.loadover)
				}.bind(this),1000)
			},
			loadover(){
				this.loading=false
			}
		},
		mounted(){
			this.$store.dispatch('getLike',function(){})
		}
	}
</script>

<style lang="scss" scoped>
	.maylike{
		ul{
			overflow: hidden;
			li{
				width: 46%;
				padding-top: 20px;
				margin: 0 2%;
				height: 2.68rem;
				float: left;
				position: relative;
				img{
					width: 100%;
					height: 1.85rem;
				}
				.info{
					font-size: .12rem;
					p:first-child{
						height: .4rem;
						overflow: hidden;
						line-height: .18rem;
						padding: 5px;
					}
					p:last-child{
						height: .23rem;
						line-height: .23rem;
						span{
							display: inline-block;
							transform: scale(.9);
							color: #cc1e31;
						}
						del,i{
							display: inline-block;
							transform: scale(.9);
							color: #999;
						}
						del{
							text-decoration: line-through;
						}
						i{
							font-weight: 700;
							float: right;
							padding-right: 5px;
							transform: scale(1.2);
						}
					}
				}
				.find{
					position: absolute;
					top: 20px;
					width: 100%;
					height: 1.85rem;
					background: rgba(0,0,0,.7);
					opacity: 0;
					p{
						width: .63rem;
						height: .63rem;
						margin: 0 auto;
						border-radius: 50%;
						text-align: center;
						line-height: .63rem;
						font-size: .12rem;
						color: white;
						&:first-child{
							background:#ce0219 ;
							margin-top:.23rem;
						}
						&:last-child{
							background:#4990e0 ;
							margin-top:.14rem;
						}
					}
				}
				.show{
					animation: opc linear .3s;
					opacity: 1;
				}
				.hide{
					animation: opc2 linear .3s;
					opacity: 0;
				}
				@keyframes opc{
					from{
						opacity: 0;
					}
					to{
						opacity: 1;
					}
				}
				@keyframes opc2{
					from{
						opacity: 1;
					}
					to{
						opacity: 0;
					}
				}
			}
		}
		.loading{
			height: .4rem;
			text-align: center;
			font-size: .12rem;
			line-height: .4rem;
			background: #eee;
			img{
				height: .15rem;
			}
		}
		.bottom{
			height: .5rem;
			text-align: center;
			background: #f0f0f0;
			img{
				height: .5rem;
			}
		}
	}
</style>