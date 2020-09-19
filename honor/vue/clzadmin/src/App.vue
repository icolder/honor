<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Login from './components/Login.vue';
// import Frame from './components/Frame.vue';

export default {
  name: 'App',
  components: {
    // [Login.name]:Login,
    // [Frame.name]:Frame,
  }
}
</script>

<style lang='scss'>
@import url('./styles/init.css');
// #app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
// }
</style>
