<template lang="html">
	<div class="leftpage">
		<div class="nav">
			<ul>
				<li :class="{active:isMen}" @click="men">MEN</li>
				<li :class="{active:!isMen}" @click="women">WOMEN</li>
			</ul>
		</div>
		<ul class="nav2">
			<li><span>限定发售   LIMITED</span><i>›</i></li>
			<li><span>潮流优选   BLK</span><i>›</i></li>
			<li><span>激价   SALE</span><i>›</i></li>
			<li><span>潮童   KIDS</span><i>›</i></li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:{
			showpage:{
				required:true
			}
		},
		data(){
			return {
				isMen:true,
				show:true
			}
		},
		components:{
			
		},
		methods:{
			men(){
				this.isMen=true;
				this.showpage(false);
			},
			women(){
				this.isMen=false;
				this.showpage(false);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.leftpage{
		width: 100%;
		height: 100%;
		background: white;
		.nav{
			height: .4rem;
			background: #414141;
			ul{
				height: 100%;
				display: flex;
				li{
					flex: 1;
					margin: 2px 10px;
					color: white;
					line-height: .4rem;
					text-align: center;
					font-size: .12rem;
					&.active{
						border-bottom: solid 3px white;
					}
				}
			}
		}
		.nav2{
			li{
				height: .55rem;
				padding: .15rem;
				color: #414141;
				font-size: .12rem;
				line-height: .25rem;
				border-bottom:solid #eee 1px;
				font-weight: 600;
				white-space: pre;
				i{
					float: right;
					font-size: .22rem;
					color: lightgrey;
				}
			}
		}
	}
</style>