<style lang="scss" scoped>
  .cart-container {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    .mask-bg {
      background-color: rgba($color: #000000, $alpha: 0.6);
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
    .cart-group {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 50px;
      background-color: #fff;
      .satify-group {
        background-color: #fff1d0;
        font-size: 12px;
        text-align: center;
        padding: 4px 0;
      }
      .cart-list-group {
        .cart-title-group {
          padding: 10px;
          display: flex;
          justify-content: space-between;
          .icon-delete {
            padding-left: 16px;
          }
        }
        .goods-list {
          li {
            padding: 10px;
            height: 30px;
            display: flex;
            align-items: center;
            .goods-info {
              display: flex;
              flex: 1;
              justify-content: space-between;
              .title {
                font-size: 18px;
              }
              .price {
                color: #FB4E44;
                font-size: 14px;
              }
            }
            .stepper {
              min-width: 82px;
            }
          }
        }
      }
    }
    .settle-group {
      width: 100%;
      height: 50px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      .hot-area {
        background-color: #3b3b3b;
        flex: 1;
        display: flex;
        justify-content: left;
        .icon-cart {
          position: relative;
          font-size: 28px;
          height: 50px;
          width: 50px;
          background-color: rgb(226, 161, 19);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: -10px;
          margin-left: 10px;
          .badage {
            width: 16px;
            height: 16px;
            background-color: red;
            border-radius: 50%;
            text-align: center;
            line-height: 16px;
            font-size: 12px;
            color: #fff;
            position: absolute;
            top: 0;
            right: 0;
          }
        }
        .total-price {
          margin-left: 10px;
          line-height: 50px;
          color: #fff;
          .unit {
            font-size: 20px;
          }
        }
      }
      .settle-btn {
        background-color: #f8c74e;
        padding: 0 30px;
        font-size: 16px;
        display: flex;
        align-items: center;
      }
    }
  }
</style>

<template>
  <div class="cart-container" v-show="show">
    <div class="mask-bg" v-show="showGoods" @click="showGoods=false"></div>
    <div class="cart-group" >
      <div class="satify-group">已满足起送价</div>
      <div class="cart-list-group" v-show="showGoods">
        <div class="cart-title-group">
          <span class="title">购物车</span>
          <span class="iconfont icon-delete" @click="clearCart">清空购物车</span>
        </div>
        <ul class="goods-list">
          <li v-for="goods in goodsList" :key="goods.name">
            <div class="goods-info">
              <span class="title">{{goods.name}}</span>
              <span class="price">￥{{goods.price}}</span>
            </div>
            <stepper class="stepper" v-model="goods.count"></stepper>
          </li>
        </ul>
      </div>
    </div>
    <div class="settle-group">
      <div class="hot-area" @click="showGoods=!showGoods">
        <div class="iconfont icon-cart">
          <div class="badage">{{totalCount}}</div>
        </div>
        <div class="total-price">
          <span class="unit">￥{{totalPrice}}</span>
        </div>
      </div>
      <div class="settle-btn" @click="gotoSettle">去结算</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Stepper from "./Stepper"
export default {
  name: "cart",
  props:['categories'],
  components: {
    [Stepper.name]: Stepper
  },
  data(){
    return {
      showGoods: false,
      // goodsLists: []
    }
  },
  computed: {
    show(){
      if(this.goodsList.length > 0){
        return true
      } else {
        return false
      }
    },
    goodsList(){
      const theGoodsList = []
      for(let category of this.categories){
        for(let goods of category.goods_list){
          if(goods.count > 0){
            theGoodsList.push(goods)
          }
        }
      }
      return theGoodsList
    },
    totalPrice(){
      let total = 0;
      for(let goods of this.goodsList){
        total += parseFloat(goods.price)* goods.count
      }
      return total
    },
    totalCount(){
      let cou = 0;
      for(let goods of this.goodsList){
        cou += goods.count
      }
      return cou
    }
  },
  watch: {
    show(){
      this.showGoods = false
    }
  },
  methods: {
    clearCart(){
      for(let category of this.categories){
        for(let goods of category.goods_list){
          goods.count = 0
        }
      }
    },
    gotoSettle(){
      this.$store.commit('setCart',this.goodsList)
      this.$router.push('/submitorder')
    }
  }
}
</script>