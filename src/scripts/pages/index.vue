<template lang="html">
	<div class="main">
		<div class="section"></div>
		<footer></footer>
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

<style lang="scss">
	@charset "UTF-8";
	@import "../../styles/index.scss";
	@import "../../styles/modules/common.scss";
	.main{
		width: 100%;
		height: 100%;
		@include flexbox();
		@include flex-direction(column);
		.section{
			@include flex();
			width:100%;
		}
		footer{
			width:100%;
			height: .5rem;
			@include border(1px 0 0 0);
		}
	}
</style>