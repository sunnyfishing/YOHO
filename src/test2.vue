<template>
  <div>
    test2
    {{name}}
    实验的对象数据{{data.age}}
    实验数组数据{{lists[0]}}
    <transition name='fade'>    
       <router-view></router-view>
    </transition>
    <router-link tag = 'li' :to="{name:'test',query:{name:'123'}}">test1</router-link>
    <router-link tag = 'li' to='/'>test2</router-link>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        name:'zzz2',
        data:{
          age:12
        },
        lists:['list1','list2']
      }
    },
    mounted(){
      this.data.age=14
      // this.$set(this.data,'age',14)
      // this.lists[0]='list3'
      // this.$set(this.lists,0,'list8')
    }
  }
</script>
