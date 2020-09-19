/* jshint esversion:6 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import Mine from "./components/Mine";
import Order from "./components/Order";
import Merchant from "./components/Merchant/Merchant";
import SubmitOrder from "./components/Merchant/SubmitOrder";
import MTAddressList from "./components/Merchant/MTAddressList";
import MTAddressEdit from "./components/Merchant/MTAddressEdit";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/order",
    component: Order,
    name: "order",
  },
  {
    path: "/mine",
    component: Mine,
    name: "mine",
  },
  {
    path: "/merchant/:merchant_id",
    component: Merchant,
    name: "merchant",
  },
  {
    path: "/submitorder",
    component: SubmitOrder,
    name: "submit_order"
  },
  {
    path: "/address",
    component: MTAddressList,
    name: "address_list"
  },
  {
    path: "/address/add",
    component: MTAddressEdit,
    name: "address_add"
  },
  {
    path: "/address/edit",
    component: MTAddressEdit,
    name: "address_edit"
  }
];

const router = new VueRouter({
  routes
});

export default router;