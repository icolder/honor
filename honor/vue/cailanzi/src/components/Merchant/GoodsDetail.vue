<style lang="scss" scoped>
  .gd-container{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.3);
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    .middle-box {
      width: 315px;
      height: 420px;
      .goods-detail {
        width: 100%;
        height: 368px;
        background-color: #fff;
        border-radius: 10px;
        overflow: hidden;
        padding: 10px;
        position: relative;
        .picture {
          width: 100%;
          height: 236px;
        }
        .month-sale {
          font-size: 16px;
          margin-top: 10px;
        }
        .intro {
          font-size: 16px;
          margin-top: 10px;
        }
        .price {
          position: absolute;
          margin-top: 10px;
          font-size: 18px;
          color: #fb4e44;
          bottom: 15px;
          right: 20px;
        }
      }
      .close-btn {
        width: 10px;
        height: 40px;
        font-size: 40px;
        margin: 10px auto;
      }
    }
  }
</style>

<template>
  <div class="gd-container" v-show="show">
    <div class="middle-box">
      <div class="goods-detail">
        <img :src="goods.picture" alt="" class="picture">
        <div class="month-sale">月售：10份</div>
        <div class="intro">{{goods.intro}}</div>
        <div class="price">价格: ￥{{goods.price}}</div>
      </div>
      <div class="iconfont icon-close close-btn" @click="closeClick"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "goods-detail",
  props: {
    goods: {
      type: Object,
      default: function(){
        return {}
      }
    }
  },
  data() {
    return {
      show: false
    }
  },
  components: {},
  watch: {
    goods(){
      this.show = true
    }
  },
  methods: {
    closeClick(){
      this.show = false
    }
  }
}
</script>