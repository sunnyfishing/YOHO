<template>
  <div>
    haha
    {{name}}
    <div v-for="(val ,index)  in lists">
      {{val}}
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        name:'zzz',
        lists:['zzz1','zzz2','zzz3']
      }
    },
    mounted(){
      console.log(this.$route)
    }

  }
</script>
