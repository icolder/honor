<template>
  <div class="hello">
    <!-- <boeplat-header :menuShow='menuShow' :boeplatLogo="logo" :logoPath='logoPath'></boeplat-header> -->
    <!-- <boeplat-header :menuShow='menuShow' :nodeEnv="nodeEnv" :userInfo='userInfo'  :order="order"></boeplat-header> -->
    <!-- <boe-avatar class="header-item" :nodeEnv='nodeEnv'  :userInfo='userInfo'/> -->
    <!-- <boeplat-header :nodeEnv='nodeEnv' :menuShow='menuShow' :loginInfos='loginInfos' :userInfo='userInfo'></boeplat-header> -->
    <boe-menu :nodeEnv='nodeEnv' :menuList='menuList'></boe-menu>
  </div>
</template>

<script>
// import BoeplatHeader from '../../packages/boeplatHeader/src/boeplat-header.vue'
// import BoeAvatar from '../../packages/boeplatHeader/src/boe-avatar.vue'
import BoeMenu from '../../packages/boeplatHeader/src/boe-menu.vue'
export default {
  components: { BoeMenu },
  // components: {BoeAvatar },
  name: 'HelloWorld',
  data() {
    return {
      menuShow: true,
      logo: require("./abc.png"),
      logoPath: 'http://www.baidu.com',
      // menuList:["workorder", "document", "message","console",],
      menuList:[
        {
          key:'boeplat',
          name: 'BOE工业互联网平台',
          path: "",
          url:'',
        },{
            key:'console',
            name: '控制台',
            path: "",
            url:'www.baidu.com',
          },
          "message",
      ],
      loginInfos: [{
            key:'account',
            name: '账户',
            path: "/account/accountInfo",
            url:'',
            amount: ''
          },
          {
            key:'order',
            name: '订单',
            path: "",
            url:'www.baidu.com',
            amount: 3
          },
          'coupon'],
      userInfo: {
        username:'张三',
        company: '中华人民共和国',
        // portrait: require("./boy2.png")
      },
      order: 123,
      promote: true,
      nodeEnv:process.env.VUE_APP_BOEPLAT_HEADER
    }
  }
}
</script>

<style scoped>

</style>
