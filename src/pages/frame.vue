<template lang="html">
	<div class="main">
		<div class="section">
			<router-view></router-view>
		</div>
		<footer>
			<ul>
				<router-link tag='li' to="/main">
					<i class="yo-ico">&#xe6a4;</i>
					<span>首页</span>
				</router-link>
				<router-link tag='li' to="/sort-det">
					<i class="yo-ico">&#xe6ca;</i>
					<span>分类</span>
				</router-link>
				<router-link tag='li' to="/stroll">
					<i class="yo-ico">&#xe629;</i>
					<span>逛</span>
				</router-link>
				<router-link tag='li' to="/shopcat" >
					<i class="yo-ico">&#xe68c;</i>
					<span>购物车</span>
				</router-link>
				<router-link tag='li' to="/mine">
					<i class="yo-ico">&#xe62a;</i>
					<span>我的</span>
				</router-link>
			</ul>
		</footer>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		}
	}
</script>

