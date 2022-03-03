<template>
  <div class="boe-avatar">
    <header-avatar class="header-item" :nodeEnv='nodeEnv' :loginInfos='loginInfos' :userInfo='userInfo' :promote='promote' :order='order' :account='account' :parter='parter' :coupon='coupon' :help='help'/>
  </div>
</template>

<script>
import HeaderAvatar from "./components/HeaderAvatar/HeaderAvatar";
import BOE from "./assets/env/index";
export default {
  name:"boe-avatar",
  components: { HeaderAvatar },
  props: {
    nodeEnv: {
      required:true,
    },
    loginInfos: {
      default: ()=>{
        return ['account','order','parter','coupon','help']
      }
    },
    promote: { //推广功能
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
}
</script>

<style>

</style>