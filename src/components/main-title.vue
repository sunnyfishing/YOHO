<template lang="html">
	<div class="name">
		<span>
			<slot></slot>
		</span>
	</div>
</template>

<script>
	export default {
		props:{
			
		},
		data(){
			return {
				
			}
		},
		components:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.name{
        border-top: solid 8px #eee;
        padding:12px 0 12px 12px;
        width: 100%;
        height: .43rem;
        span{
            display: block;
            border-left: solid 2px #414141;
            padding-left: 8px;
            color: #414141;
            font-size: .14rem;
            line-height: .14rem;
            font-weight: 600;
        }
    }
</style>