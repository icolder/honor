<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar v-model="active" v-if="showTabbar">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="/order">订单</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'

export default {
  name: 'app',
  data() {
    return {
      active: 0
    }
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  computed: {
    showTabbar(){
      const name = this.$route.name
      if (name=='home' || name=='order' || name=='mine') {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    window.console.log(this.$store.state.count)
  },
}
</script>

<style>
 body,h1,h2,dl {
   margin: 0;
   padding: 0;
 }
 .van-field__control {
   width: 100%;
   height: 30px;
   padding-left: 5px;
 }
</style>
