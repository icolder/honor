<style lang="scss" scoped>
  
</style>

<template>
  <div class="so-container">
    <mt-nav-bar title="确认订单"></mt-nav-bar>
    <van-cell-group>
      <van-cell title="请选择收货地址" is-link to="/address" icon="location-o">
        <template slot="title" v-if="address">
          <div class="user-info">
            <span>{{address.realname}}</span>
            <span>{{address.telephone}}</span>
          </div>
          <div class="address-info">
            {{address.province}}{{address.city}}{{address.county}}{{address.detail}}
          </div>
        </template>
      </van-cell>
      
    </van-cell-group>
    <ul>
      <li v-for="goods in goodsList" :key="goods.id+goods.name">{{goods.name}}</li>
    </ul>
    <van-submit-bar
      :price="totalPrice*100"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>

<script type="text/ecmascript-6">
import MTNavBar from "../Common/MTNavBar";
import { Cell, CellGroup } from 'vant';
import { SubmitBar } from 'vant';
export default {
  name: "SubmitOrder",
  data() {
    return {
      goodsList: [],
      address: {
        realname: "张飒",
        telephone: "18899112233",
        province: "山东省",
        city: "济南市",
        county: "历下区",
        detail: "天泺路77号"
      }
    }
  },
  computed: {
    totalPrice(){
      let total = 0
      for(let goods of this.goodsList){
        total += goods.price * goods.count
      }
      return total
    }
  },
  mounted(){
    this.goodsList = this.$store.state.cart
  },
  components: {
    [MTNavBar.name]: MTNavBar,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [SubmitBar.name]: SubmitBar
  },
  methods: {
    onSubmit(){
      window.console.log("提交订单")
    }
  }
}
</script>