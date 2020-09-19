<style lang="scss" scoped>
  .gd-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    .middle-box {
      width: 315px;
      height: 440px;
      .goods-detail {
        width: 100%;
        height: 368px;
        border-radius: 10px;
        background-color: #fff;
        overflow: hidden;
        position: relative;
        .picture {
          width: 100%;
          height: 236px;
        }
        .month-sale {
          font-size: 12px;
          margin-top: 10px;
          padding: 0 10px;
        }
        .intro {
          font-size: 14px;
          margin-top: 10px;
          padding: 0 10px;
        }
        .price {
          font-size: 18px;
          margin-top: 10px;
          padding: 0 10px;
          position: absolute;
          right: 10px;
          color: #fb4e44;
        }
      }
      .close-btn {
        width: 100%;
        height: 72px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: -10px;
        .icon-close {
          font-size: 36px;
          color: #ccc;
        }
      }
    }
  }
</style>

<template>
  <div class="gd-container" v-show="show">
    <div class="middle-box">
      <div class="goods-detail">
        <img :src="goods.picture" class="picture">
        <div class="month-sale">月售10份</div>
        <div class="intro">{{goods.intro}}</div>
        <div class="price">￥{{goods.price}}</div>
      </div>
      <div class="close-btn">
        <i class="iconfont icon-close" @click="closeClick"></i>
      </div>
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
  watch: {
    goods() {
      this.show = true
    }
  },
  methods: {
    closeClick(){
      this.show = false
    }
  },
  components: {}
}
</script>