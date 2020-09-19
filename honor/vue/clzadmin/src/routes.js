/* jshint esversion:6 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './components/Login.vue';
import Frame from './components/Frame.vue';
import Index from './components/Index.vue';
import Merchant from './components/Merchant.vue';
import Order from './components/Order.vue';
import User from './components/User.vue';

Vue.use(VueRouter);

var router = new VueRouter({
  routes: [
    {
      path:'/',
      component:Frame,
      children: [
        {path:'',component:Index,name:'index'},
        {path:'merchant',component:Merchant,name:'merchant'},
        {path:'order',component:Order,name:'order'},
        {path:'user',component:User,name:'user'},
      ]
    },
    {path:'/login',component:Login,name:'login'},
  ]
});

export default router;