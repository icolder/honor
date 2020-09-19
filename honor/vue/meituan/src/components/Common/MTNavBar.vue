<style scoped>
  .mt-nav-bar .van-nav-bar {
      background: #878787;
    }
  .mt-nav-bar .van-hairline--bottom::after {
    border:none
  }
  .van-nav-bar .van-icon {
    color: #fff;
  }
  .van-nav-bar__text {
    color: #fff;
  }
</style>

<template>
  <div class="mt-nav-bar">
    <van-nav-bar  :title="title" left-text="返回" right-text="按钮" left-arrow @click-left="$router.back()"></van-nav-bar>
  </div>
</template>

<script type="text/ecmascript-6">
import { NavBar} from 'vant';
export default {
  name: "mt-nav-bar",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {}
  },
  components: {
    [NavBar.name]: NavBar,
  }
}
</script>