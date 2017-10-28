<template lang="html">
	<div class="list">
		<div class="nav1">
			<b>dd</b>
			<ul>
				<li><a href="#">品类</a></li>
				<li><a href="#">品牌</a></li>
				<li><a href="#">关注</a></li>
			</ul>
		</div>
		<div class="nav2">
			<ul>
				<li class="active"><a href="#">Men</a></li>
				<li><a href="#">Women</a></li>
				<li><a href="#">Kids</a></li>
			</ul>
		</div>
		<div class="detail">
			<!--左侧sort-list栏-->
			<div class="sortList">
				<sortlist></sortlist>
			</div>
			<!--右侧sort-detail栏-->
			<div class="sortdet">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import sortlist from "./classify/sort-list.vue" ;
	export default {
	  data() {
	    return {
	      msg: 'aa'
	    }
	  },
	  methods: {

	  },
	  components: {
	    sortlist,
	  }
	}
</script>
