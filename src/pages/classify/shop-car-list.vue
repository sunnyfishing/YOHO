<template lang="html">

    <div class="shop_car_main_notnull">
      <div class="shop_car_loadding" v-show="!(show_hide.loaded)">
        <mt-spinner type="triple-bounce" :size="60" color="#444444"></mt-spinner>
      </div>
      <div class="shop_loaded" v-show="show_hide.loaded">
        <div class="shop-tit">
           <p>购物满￥299.0已免运费(不含顺丰速递)</p><i class="yo-ico">&#xe503;</i>
        </div>
        <div class="shop_car_cal" v-show="!(show_hide.shop_null)" >
          <div v-show="show_hide.edit" class='edit_o'>
            <ul>
              <li @click='select_all_event'>
                <i class='yo-ico select_btn' v-show="selectall">&#xe610;</i>
                <i v-show="!selectall" class='not_select'></i>
                <p>全选</p>
              </li>
              <li>
                <p>总计：￥<span>{{all_price}}</span>(<span>4</span>件)</p>
                <p>不含运费</p>
              </li>
              <li>
                <div class="ok_btn">
                  结算
                </div>
              </li>
            </ul>
          </div>
          <div v-show="!(show_hide.edit)"  class='notedit_o'>
            <ul>
              <li @click='select_all_event'>
                <i class='yo-ico select_btn' v-show="selectall">&#xe610;</i>
                <i v-show="!selectall" class='not_select'></i>
                <p>全选</p>
              </li>
              <li>
                <div class="collect">
                  移入收藏夹
                </div>
                <div class="delete" @click='delete_item'>
                  删除
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="shopcar_det">
          <div class="shopcar_tit">
            <p><i class="yo-ico dazhe">&#xe623;</i>已满足下单8折</p>
            <i class='yo-ico'>&#xe503;</i>
          </div>
           <ul v-for=" value, i in select" v-if="deleted[i]">
            <li @click="select_sin_event(i)">
              <i class='yo-ico select_btn' v-show="select[i].select">&#xe610;</i>
              <i v-show="!select[i].select" class='not_select'></i>
            </li>
            <li>
              <img src="" alt="">
            </li>
            <li>
              <p class='shop_dec' v-show="(show_hide.edit)">{{select[i].dec}}</p>
              <p class='shop_style' v-show="(show_hide.edit)">{{select[i].dec}}</p>
              <div class="shop_info" v-show="!(show_hide.edit)">
                <ul class="shop_info_top">
                  <li @click="dec_cou(i)">-</li>
                  <li>{{count[i]}}</li>
                  <li @click="add_cou(i)">+</li>
                </ul>
                <div class="shop_info_bottom">
                  <p>{{select[i].dec}}</p>
                  <i class='yo-ico'>&#xe501;</i>
                </div>
              </div>
              <p class='shop_price'>￥{{price[i]}}</p>
            </li>
            <li>
              <span>×<i>{{count[i]}}</i></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>

import { Spinner } from 'mint-ui';
import Vue from 'vue';
import { CellSwipe } from 'mint-ui';

Vue.component(CellSwipe.name, CellSwipe);
Vue.component(Spinner.name, Spinner);

export default {
  props:[
    'show_hide'
  ],
  data(){
    return {
      select:[],
      shop_goods:null,
      deleted:[],
      price:[],
      count:[],
      right:[
        {
          content: 'Delete',
          style: { background: 'red', color: '#fff' },
          // handler: this.shijian
        }
      ]
    }
  },
  computed:{
    selectall(){
      let result= this.select.every((item)=>{
        return item.select
      })
      return result
    },
    all_price(){
      let total_price=0;
      this.select.forEach((item,index) => {
        total_price+=this.price[index]*this.count[index]*this.select[index].select
      })
      return total_price
    }
  },
  methods:{
    dec_cou(i){
      this.count.splice(i,1,--this.count[i]<0?0:this.count[i])
    },
    add_cou(i){
     this.count.splice(i,1,++this.count[i])
    },
    select_sin_event(i){
      this.select[i].select=this.select[i].select==1?0:1
    },
    select_all_event(){
       if(this.selectall){
        this.select.forEach((item,index) => {
        item.select=0
      })
      }else{
        this.select.forEach((item,index) => {
           item.select=1
        })
      }
    },
    delete_item(){
      this.select.forEach((item,index) => {
        this.deleted.splice(index,1,!this.select[index].select)
        console.log(this.deleted[index]);
      })
    },
    shijian(){
      console.log('往后说');
    }
  },
  mounted(){
    var timer=setTimeout(function(){
      this.show_hide.loaded=true;
      this.select=[{
        count:1,
        select:1,
        price:499,
        dec:'slkdfjksjkfdl'
      },
      {
        count:2,
        select:0,
         price:499,
        dec:'sdfaefafea'
      },
      {
        count:3,
        select:1,
         price:499,
        dec:'dvbdfbdf'
      }
    ]
    this.select.forEach((item,index) => {
      this.deleted.push(true)
      this.price.push(this.select[index].price)
      this.count.push(this.select[index].count)
    })
    }.bind(this),1000)
  }
}
</script>

<style lang="css" scoped>
.notedit_o>ul{
  bottom:.5rem!important;
}
</style>
