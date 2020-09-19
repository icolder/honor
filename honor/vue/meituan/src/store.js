/* jshint esversion:6 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cart: [],
    editingAddress: {}
  },
  mutations: {
    setCart(state, goodsList){
      state.cart = goodsList;
    },
    clearCart(state){
      state.cart = [];
    },
    setEditingAddress(state, address){
      state.editingAddress = address;
    },
    clearEditingAddress(state){
      state.editingAddress = {};
    }
  }
});

export default store;