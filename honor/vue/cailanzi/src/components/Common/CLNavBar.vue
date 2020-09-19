<style lang="scss" scoped>
  .van-nav-bar {
    background: none;
    .van-icon {
      color: #fff;
    }
  }
  .van-nav-bar::after {
    border: none;
  }
</style>

<template>
  <div class="clz-nav-bar">
    <van-nav-bar @click-left="$router.back()" :title="title">
      <van-icon name="arrow-left" slot="left" :color="leftArrowColor"/>
    </van-nav-bar>
  </div>
</template>

<script type="text/ecmascript-6">
import { NavBar } from 'vant';
import { Icon } from 'vant';

export default {
  name: "clz-nav-bar",
  props: {
    leftArrowStyle: {
      type: String,
      default:'white'
    },
    title: {
      type:String,
      default: ''
    },
  },
  data() {
    return {}
  },
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
  },
  computed: {
    leftArrowColor(){
      return this.leftArrowStyle == 'white'?'#fff':'#000'
    }
  }
}
</script>