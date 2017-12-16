import Vue  from 'vue';

import Router from 'vue-router';
import Test1 from './test.vue'
import Test2 from './test2.vue'

Vue.use(Router);

var route = new Router({
  routes:[
    {
      path:'/',
      name:'test2',
      component:Test2,
      children:[
        {
          path:'/test1',
          name:'test',
          component:Test1,
        },
      ]
    }
  ]
})
export default route
