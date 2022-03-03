<template>
  <a-layout-header :class="['admin-header']">
    <!-- <div :class="['admin-header-wide', layout, pageWidth]"> -->
    <div :class="['admin-header-wide']">
      <div :class="['admin-header-left']">
        <img :src="boeplatLogo" alt="logo" class="admin-header-left-logo" @click="goUrlOut" />
        <div class="admin-header-left-menu" v-if="menuShow" @click="drawerOpen" @mouseenter="advEnter" @mouseleave="advOut">
          <div ref="refMenu" id="refMenu"></div>
        </div>
        <div class="admin-header-right-menu">
          <ul>
            <li v-for="menu of headerMenu" :key="menu.key" @click="menuClick(menu)">{{menu.name}}</li>
          </ul>
        </div>
      </div>
      <!-- <div v-if="layout !== 'side' && !isMobile" class="admin-header-menu" :style="`width: ${menuWidth};`"> -->
      <!-- <div> -->
        <!-- <i-menu class="head-menu" :theme="headerTheme" mode="horizontal" :options="menuData" @select="onSelect" /> -->
        <!-- <i-menu class="head-menu" :options="menuData" @select="onSelect" /> -->
      <!-- </div> -->
      <div :class="['admin-header-right']">
        <!-- <p class="font-btn" @click="goHelpCenter">帮助中心</p> -->
        <!-- <header-avatar class="header-item" @switchRolesShowFn="switchRolesShowFn" /> -->
        <header-avatar class="header-item" :nodeEnv='nodeEnv' :loginInfos='loginInfos' :userInfo='userInfo' :promote='promote' :order='order' :account='account' :parter='parter' :coupon='coupon' :help='help'/>
      </div>
    </div>
    <menu-drawer ref="menuDrawer"/>

    <switchRoles :switchRolesShow="switchRolesShow" @switchRolesShowFn="switchRolesShowFn" />
  </a-layout-header>
</template>

<script>
import HeaderAvatar from "./components/HeaderAvatar/HeaderAvatar";
import MenuDrawer from "./components/MenuDrawer/MenuDrawer.vue";
import switchRoles from "./components/switchRoles/switchRoles.vue";
// import { mapState, mapMutations } from "vuex";
// import headLogo from "./images/logo.svg";
import BOE from "./assets/env/index";

export default {
  name: "boeplat-header",
  components: { HeaderAvatar, MenuDrawer, switchRoles },
  // props: ["collapsed", "menuData","menuShow"],
  props: {
    nodeEnv: {
      required:true,
    },
    menuShow: {
      required: false,
      type: Boolean,
      default: false
    },
    boeplatLogo: {
      default: require("./assets/header/logo.svg")
      // default: headLogo
    },
    logoPath: {
      type: String,
      // default: process.env.VUE_APP_ZCLOUD_URL
      default: ''
    },
    menuList: {
      type: Array,
      default: ()=>{
        return ['boeplat','console','workorder','document','message']
        // return [
        //   {
        //     key:'boeplat',
        //     name: 'BOE工业互联网平台',
        //     path: "",
        //     url:'',
        //   },
        //   {
        //     key:'console',
        //     name: '控制台',
        //     path: "",
        //     url:'www.baidu.com',
        //   },
        //   'message'
        // ]
      }
    },
    loginInfos: {
      // type: Array,
      default: ()=>{
        return ['account','order','parter','coupon','help']
        // return [
        //   {
        //     key:'account',
        //     name: '账户',
        //     path: "/account/accountInfo",
        //     url:'',
        //     amount: '99999999'
        //   },
        //   {
        //     key:'order',
        //     name: '订单',
        //     path: "",
        //     url:'www.baidu.com',
        //     amount: 3
        //   },
        //   'coupon'
        // ]
      }
    },
    promote: {
      default: true
    },
    userInfo:{
      required: true,
      type: Object
    },
    account: {
      type: Number,
      default: null
    },
    order: {
      type: Number,
      default: null
    },
    parter: {
      type: Number,
      default: null
    },
    coupon: {
      type: Number,
      default: null
    },
    help: {
      type: Number,
      default: null
    }
  },
  provide(){
    return{
      nodeEnv:this.nodeEnv
    }
  }, 
  data() {
    return {
      // headLogo,
      // langList: [
      //   { key: "CN", name: "简体中文", alias: "简体" },
      //   { key: "HK", name: "繁體中文", alias: "繁體" },
      //   { key: "US", name: "English", alias: "English" },
      // ]
      // searchActive: false,
      // isFullscreen: false,
      // 切换角色弹窗
      boeEnv: {},
      switchRolesShow: false,
      timer: null,
      timerout: null,
      timeStep: 20,
      // menuObj:{
      //   boeplat:{
      //     name:'BOE工业互联网平台',
      //     url: process.env.VUE_APP_API_BASE_URL
      //   },
      //   console:{
      //     name:'控制台',
      //     url:process.env.VUE_APP_LOGIN_URL + 'client_id=' + process.env.VUE_APP_CLIENTID + '&response_type=' + process.env.VUE_APP_RESPONSE_TYPE + '&redirect_uri=' + process.env.VUE_APP_REDIRECT_URI
      //   },
      //   workorder:{
      //     name:'工单',
      //     // url:'http://dev.boeplat.com.cn/html/ziconsole/preview/#/work/workOrder',
      //     url:process.env.VUE_APP_LOGIN_URL + 'route_url=work/workOrder' + '&client_id=' + process.env.VUE_APP_CLIENTID + '&response_type=' + process.env.VUE_APP_RESPONSE_TYPE + '&redirect_uri=' + process.env.VUE_APP_REDIRECT_URI
      //   },
      //   document:{
      //     name:'文档',
      //     url:process.env.VUE_APP_ZCLOUD_URL + '#/documentCenter'
      //     // url:'http://dev.boeplat.com.cn/#/documentCenter'
      //   },
      //   message:{
      //     name:'消息',
      //     url:'www.baidu.com'
      //   },
      // },
    };
  },
  computed: {
    // ...mapState("setting", [
    //   "theme",
    //   "isMobile",
    //   "layout",
    //   "systemName",
    //   "lang",
    //   "pageWidth",
    // ]),
    // headerTheme() {
    //   if (
    //     this.layout == "side" &&
    //     this.theme.mode == "dark" &&
    //     !this.isMobile
    //   ) {
    //     return "light";
    //   }
    //   return this.theme.mode;
    // },
    // langAlias() {
    //   let lang = this.langList.find((item) => item.key == this.lang);
    //   return lang.alias;
    // },
    // menuWidth() {
    //   const { layout, searchActive } = this;
    //   const headWidth = layout === "head" ? "100% - 188px" : "100%";
    //   const extraWidth = searchActive ? "600px" : "400px";
    //   return `calc(${headWidth} - ${extraWidth})`;
    // },
    // headerLogo() {
    //   console.log("nnnnnn",this.boeplatLogo);
    //   return this.boeplatLogo?this.boeplatLogo:this.headLogo
    // },
    headerMenu() {
      console.log("jjjjj----",this.menuList);
      let menu = [];
      for (let index = 0; index < this.menuList.length; index++) {
        const element = this.menuList[index];
        if(element.constructor === String) {
          if(this.menuObj[element]) {
            let menuDetail = {};
            menuDetail.key = element;
            menuDetail = {...menuDetail,...this.menuObj[element]};
            menu.push(menuDetail)
          }
        } else if (element.constructor === Object) {
          menu.push(element)
        }
      }
      console.log("vvvvvv",menu);
      return menu
    },
    boeplatLogoPath() {
      return this.logoPath?this.logoPath:this.boeEnv.VUE_APP_ZCLOUD_URL
    },
    menuObj() {
      let menu = {
        boeplat:{
          name:'BOE工业互联网平台',
          url: this.boeEnv.VUE_APP_API_BASE_URL
        },
        console:{
          name:'控制台',
          url:this.boeEnv.VUE_APP_LOGIN_URL + 'client_id=' + this.boeEnv.VUE_APP_CLIENTID + '&response_type=' + this.boeEnv.VUE_APP_RESPONSE_TYPE + '&redirect_uri=' + this.boeEnv.VUE_APP_REDIRECT_URI
        },
        workorder:{
          name:'工单',
          url:this.boeEnv.VUE_APP_LOGIN_URL + 'route_url=work/workOrder' + '&client_id=' + this.boeEnv.VUE_APP_CLIENTID + '&response_type=' + this.boeEnv.VUE_APP_RESPONSE_TYPE + '&redirect_uri=' + this.boeEnv.VUE_APP_REDIRECT_URI
        },
        document:{
          name:'文档',
          url:this.boeEnv.VUE_APP_ZCLOUD_URL + '#/documentCenter'
        },
        message:{
          name:'消息',
          url:'www.baidu.com'
        },
      }
      return menu
    },
  },
  watch: {
    nodeEnv:{
      handler(newV) {
        console.log("newV========",newV);
        if(newV == "development") {
          this.boeEnv = BOE.development;
          console.log('boeEnv========',this.boeEnv);
        } else if(newV == "online") {
          this.boeEnv = BOE.online;
        } else if(newV == "test") {
          this.boeEnv = BOE.test;
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    // 鼠标移入事件
    advEnter() {
      let offsetP = 0;
      clearInterval(this.timerout);
      this.timer = setInterval(() => {
        if (offsetP >= -450) {
          document.getElementById('refMenu').style.backgroundPositionY = offsetP + 'px';
          offsetP -= 18
        } else {
          clearInterval(this.timer);
        }
      }, this.timeStep);
    },
    // 鼠标移出事件
    advOut() {
      clearInterval(this.timer)
      let pos = -450;
      this.timerout = setInterval(() => {
        if (pos <= 0) {
          document.getElementById('refMenu').style.backgroundPositionY = pos + 'px';
          pos += 18
        } else {
          clearInterval(this.timerout);
        }
      }, this.timeStep);
    },
    // 标题 跳转外部链接
    goUrlOut() {
      // window.open(process.env.VUE_APP_ZCLOUD_URL);
      let path = ""
      if(this.boeplatLogoPath.trim().slice(0,4)!='http') {
        path = 'http://' + this.boeplatLogoPath.trim();
      } else {
        path = this.boeplatLogoPath;
      }
      window.open(path);
    },
    // goUrlOut() {
    //   // window.open(process.env.VUE_APP_ZCLOUD_URL);
    //   let path = ""
    //   if(this.logoPath.trim().slice(0,4)!='http') {
    //     path = 'http://' + this.logoPath.trim();
    //   } else {
    //     path = this.logoPath;
    //   }
    //   window.open(path);
    // },
    // 切换角色弹窗
    switchRolesShowFn() {
      this.switchRolesShow = !this.switchRolesShow;
    },
    // 跳转帮助中心
    // goHelpCenter() {
    //   window.location.href = process.env.VUE_APP_ZCLOUD_URL + "/help";
    // },
    // 跳转首页
    // goHome() {
    //   this.$router.push({ path: "/preview" });
    // },
    drawerOpen() {
      this.$refs.menuDrawer.drawerOpen();
    },
    // toggleCollapse() {
    //   this.$emit("toggleCollapse");
    // },
    // onSelect(obj) {
    //   this.$emit("menuSelect", obj);
    // },
    menuClick(menu) {
      // console.log('path=============',menu);
      if(menu.path) {
        this.$router.push(menu.path);
      } else if(menu.url) {
        let path = ""
        if(menu.url.trim().slice(0,4)!='http') {
          path = 'http://' + menu.url.trim();
        } else {
          path = menu.url;
        }
        window.open(path);
      }
    }
  },
  beforeDestroy() {
    this.timerout && clearInterval(this.timerout)
    this.timer && clearInterval(this.timer)
  }
};
</script>

<style lang="less" scoped>
@import "index";
</style>
