/* jshint esversion: 6 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Order from "./components/Order.vue";
import Mine from "./components/Mine.vue";
import Home from "./components/Home.vue";
import Merchant from './components/Merchant/Merchant.vue';
import SubmitOrder from './components/SubmitOrder.vue';
import CLAddressList from './components/CLAddressList.vue';
import CLAddressEdit from './components/CLAddressEdit.vue';


Vue.use(VueRouter);

var routes = [
  {'path':'/', component: Home, name:'home'},
  {'path':'/mine', component: Mine, name:'mine'},
  {'path':'/order', component: Order, name:'order'},
  {'path':'/merchant/:merchant_id', component: Merchant, name:'merchant'},
  {path:'/submitorder',component:SubmitOrder,name:'submitorder'},
  {path:'/address',component:CLAddressList,name:'address_list'},
  {path:'/address/add',component:CLAddressEdit,name:'address_add'},
  {path:'/address/edit',component:CLAddressEdit,name:'address_edit'},
];

var router = new VueRouter({
  routes
});

export default router;