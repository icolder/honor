<style lang="scss" scoped>
  .user-info{
    margin-left: 10px;
  }
  .address-info{
    margin-left: 10px;
  }
</style>

<template>
  <div class="">
    <clz-nav-bar leftArrowStyle='black' title="确认订单"></clz-nav-bar>
    <van-cell-group>
      <van-cell title="请选择收货地址" center icon="location-o" is-link to="/address">
        <template slot="title" v-if="address.name">
          <div class="user-info">
            <span>{{address.name}}</span>
            <span>{{address.tel}}</span>
          </div>
          <div class="address-info">
            <span>{{address.province}}{{address.city}}{{address.county}}{{address.addressDetail}}</span>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
    <van-swipe-cell>
      <van-card v-for="goods in goodsList" :key="goods.id + goods.name"
        :num="goods.count"
        :price="goods.price"
        :desc="goods.intro"
        :title="goods.name"
        :thumb="goods.picture"
      />
    </van-swipe-cell>
    <van-submit-bar
      :disabled="isAddress"
      :price="totalPrice"
      :tip="tip"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>

<script type="text/ecmascript-6">
import CLNavBar from './Common/CLNavBar';
import { Cell, CellGroup } from 'vant';
import { SwipeCell,Card,SubmitBar } from 'vant';

export default {
  name: "SubmitOrder",
  data() {
    return {
      goodsList: [],
      address:{},
    }
  },
  components: {
    [CLNavBar.name]: CLNavBar,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [SwipeCell.name]: SwipeCell,
    [Card.name]: Card,
    [SubmitBar.name]: SubmitBar
  },
  mounted(){
    this.goodsList = this.$store.state.cart
    this.address = this.$store.state.editingAddress
  },
  computed: {
    totalPrice(){
      let total = 0;
      for(let goods of this.goodsList){
        total += goods.price * goods.count
      }
      return total * 100
    },
    isAddress(){
      if(this.address.name){
        return false
      } else {
        return true
      }
    },
    tip(){
      if(this.address.name){
        return ''
      } else {
        return "请填写收货地址"
      }
    }
  },
  methods:{
    onSubmit(){
      console.log("提交订单");
    }
  }
}
</script>