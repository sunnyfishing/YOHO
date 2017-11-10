<template>
  <div @click="hide">
    <mt-popup v-model="select" position="bottom">
    ...
    </mt-popup>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { Popup } from 'mint-ui';
  Vue.component(Popup.name, Popup);
  export default{
    data(){
      return{
        select : false
      }
    },
    props:{
      showmodal:{
        type : Boolean,
        required : true
      },
      change:{
        required : true
      }
    },
    mounted(){
    },
    watch:{
      showmodal(){
        this.select = this.showmodal
      }
    },
    methods:{
      hide(e){
        if(e.target.className == 'v-modal'){
          this.change()
        }
      }
    }
  }
</script>
