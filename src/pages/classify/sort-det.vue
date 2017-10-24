<!--通过mock数据获得数据-->
<template lang="html">
	<div>
		<div v-for="i in mockList.data.boy">
			<dl v-for="sub in i">	
				<dt>--热门推荐--</dt>
				<dd v-for="a in sub">
					<p>{{a.category_name}}</p>
				</dd>
			</dl>
		</div>
	</div>
</template>

<script>
	import mockList from '../../mock/classify/mock4List.json'
	//console.log(mockList);
	export default{
		data(){
			return {
				mockList
			}
		},
		methods:{
			
		}
	}
</script>

<!--
{
	"data":{
		boy:[{sub:[{}]},{sub:[]}]
	}       
}

i:{sub:[{}]}
sub:[{}]
a:{}
-->