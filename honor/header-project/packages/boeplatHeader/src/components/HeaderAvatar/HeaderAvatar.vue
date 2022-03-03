<template>
  <a-dropdown :overlayStyle="{'z-index':'99999'}">
    <div class="header-avatar" style="cursor: pointer">
      <a-avatar class="avatar" shape="circle" :src="avatarUrl" />
    </div>
    <a-menu :class="['avatar-menu']" slot="overlay">
      <!-- 头像 -->
      <a-menu-item>
        <div class="menu-header-avatar" style="cursor: pointer">
          <a-avatar :size="40" class="avatar" shape="circle" :src="avatarUrl" />
          <div class="user-info">
            <div class="user-name">{{userInfo.username}}</div>
            <div class="user-company"><span class="company-name">{{userInfo.company}}</span><span class="cut" @click="changeCompany">切换</span></div>
          </div>
          <div class="pic" v-if="promote" @click="goPromote"></div>
        </div>
      </a-menu-item>
      <a-menu-item class="avatar-menu-header-item" v-for="info of loginInfo" :key="info.key" @click="loginInfoClick(info)">
        <div :class="['avatar-menu-header-icon-box','avatar-'+info.key]"></div>
        <span class="avatar-menu-header-ico-text">{{info.name}}</span>
        <div class="amount">{{info.amount?info.amount:''}}</div>
      </a-menu-item>

      <!-- 退出登录 -->
      <a-menu-item class="avatar-menu-logout">
        <div class="avatar-menu-logout-btn" @click="logout">
          <img :src="logOutIcon">
          退出登录</div
        >
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
// import { mapGetters } from "vuex";
// import { logout } from "@/services/api";
// import { logout } from '@/services/user'
// import headFile from "../../assets/updateHead/headFile.js";
import dImg from "../../assets/header/portrait.svg";
import logOutIcon from "../../assets/header/logout_icon.svg";
import BOE from "../../assets/env/index";
import { changeCompany } from "../../services/api"
export default {
  name: "HeaderAvatar",
  props: {
    loginInfos: {
      // type: Array,
      default: ()=>{
        return []
      }
    },
    nodeEnv: {
      required:true,
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
  data() {
    return {
      dImg,
      logOutIcon,
      boeEnv: {},
      // 待支付订单
      notPayNum: 0,
      // 待续费产品
      notRenewNum: 10,
      // 是否已认证
      isAttestation: false,
      // headFile,
      // loginObj: {
      //   account: {
      //     name: '账户',
      //     path: "/account/accountInfo",
      //     url:'',
      //   },
      //   order: {
      //     name: '订单',
      //     path: "/cost/order",
      //     url:'',
      //   },
      //   parter: {
      //     name: '企链',
      //     path: "/cooperation/cooperationPartner",
      //     url:'',
      //   },
      //   coupon: {
      //     name: '优惠券',
      //     path: "/cost/coupon",
      //     url:'',
      //   },
      //   help: {
      //     name: '帮助',
      //     path: "",
      //     url:process.env.VUE_APP_ZCLOUD_URL + '#/documentCenter'
      //   },
      // }
    };
  },

  computed: {
    avatarUrl() {
      return this.userInfo.portrait?this.userInfo.portrait:this.dImg;
    },
    loginInfo() {
      let info = [];
      for (let index = 0; index < this.loginInfos.length; index++) {
        const element = this.loginInfos[index];
        // console.log("kkkk==",(element.constructor === String));
        // console.log("jjjjt==",(element.constructor === Object));

        if(element.constructor === String) {
          if(this.loginObj[element]) {
            let detail = {};
            // console.log('mmmmm',this.loginObj[element]);
            detail.key = element;
            detail = {...detail,...this.loginObj[element]};
            info.push(detail)
          }
        } else if (element.constructor === Object) {
          // console.log("aaa==",element);
          info.push(element)
        }
      }
      // console.log("vggggggg",info);
      return info
    },
    loginObj() {
      let info = {
        account: {
          name: '账户',
          path: "/account/accountInfo",
          url:'',
        },
        order: {
          name: '订单',
          path: "/cost/order",
          url:'',
        },
        parter: {
          name: '企链',
          path: "/cooperation/cooperationPartner",
          url:'',
        },
        coupon: {
          name: '优惠券',
          path: "/cost/coupon",
          url:'',
        },
        help: {
          name: '帮助',
          path: "",
          url:this.boeEnv.VUE_APP_ZCLOUD_URL + '#/documentCenter'
        },
      }
      return info
    },

  },
  watch: {
    account: {
      handler(newVal) {
        if(newVal) {
          this.loginInfo.forEach((item)=>{
            if(item.key == 'account') {
              item.amount = newVal
            }
          })
        }
      },
      immediate: true,
      deep: true
    },
    order: {
      handler(newVal) {
        if(newVal) {
          this.loginInfo.forEach((item)=>{
            if(item.key == 'order') {
              item.amount = newVal
            }
          })
        }
      },
      immediate: true,
      deep: true
    },
    parter: {
      handler(newVal) {
        if(newVal) {
          this.loginInfo.forEach((item)=>{
            if(item.key == 'parter') {
              item.amount = newVal
            }
          })
        }
      },
      immediate: true,
      deep: true
    },
    coupon: {
      handler(newVal) {
        if(newVal) {
          this.loginInfo.forEach((item)=>{
            if(item.key == 'coupon') {
              item.amount = newVal
            }
          })
        }
      },
      immediate: true,
      deep: true
    },
    help: {
      handler(newVal) {
        if(newVal) {
          this.loginInfo.forEach((item)=>{
            if(item.key == 'help') {
              item.amount = newVal
            }
          })
        }
      },
      immediate: true,
      deep: true
    },
    nodeEnv:{
      handler(newV) {
        if(newV == "development") {
          this.boeEnv = BOE.development;
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
    goPromote() {
      let path = this.boeEnv.VUE_APP_ZCLOUD_URL + '#/promote'
      window.open(path);
    },
    //切换
    changeCompany(){
      changeCompany().then(res=>{
        if(res.code == 20000 ){
          window.location.href =
            this.boeEnv.VUE_APP_LOGIN_URL +
            "client_id=" +
            this.boeEnv.VUE_APP_CLIENTID +
            "&response_type=" +
            this.boeEnv.VUE_APP_RESPONSE_TYPE +
            "&redirect_uri=" +
            this.boeEnv.VUE_APP_REDIRECT_URI;
        }
      }).catch(err=>{
        console.log(err);
      })
    },
    // 退出
    logout() {
      this.logoutFn();
    },
    logoutFn() {
      this.$confirm({
        title: "确认退出登录？",
        onOk: () => {
          localStorage.clear();
          if (this.boeEnv.NODE_ENV === "production") {
            window.location.href =
              this.boeEnv.VUE_APP_LOGIN_URL +
              "client_id=" +
              this.boeEnv.VUE_APP_CLIENTID +
              "&response_type=" +
              this.boeEnv.VUE_APP_RESPONSE_TYPE +
              "&redirect_uri=" +
              this.boeEnv.VUE_APP_REDIRECT_URI + 
              "&isLogout=true";
          } else {
            this.$router.push("/login");
          }
        },
        onCancel() {},
      });
    },
    loginInfoClick(info) {
      // console.log(info);
      if(info.path) {
        this.$router.push(info.path);
      } else if(info.url) {
        let path = ""
        if(info.url.trim().slice(0,4)!='http') {
          path = 'http://' + info.url.trim();
        } else {
          path = info.url;
        }
        window.open(path);
      }
    },
    // // 跳转帮助中心
    // goHelpCenter() {
    //   window.location.href = process.env.VUE_APP_ZCLOUD_URL + "/help";
    // },
    // // 跳转我的信息-账号信息
    // goMyInfo() {
    //   this.$router.push({ path: "/account/accountInfo" });
    // },
    // // 跳转优惠券
    // goCoupon() {
    //   console.log("跳转优惠券");
    // },
    // // 跳转合作伙伴
    // goPartner() {
    //   console.log("跳转合作伙伴");
    // },
    // // 线上推广
    // goPopularize() {
    //   console.log("跳转线上推广");
    // },
  },
};
</script>

<style lang="less" scoped>
.header-avatar {
  display: inline-flex;
  .avatar,
  .name {
    align-self: center;
  }
  .avatar {
    margin: 0 16px 0 41px;
    width: 40px;
    height: 40px;
  }
  .name {
    font-weight: 500;
  }
}
::v-deep .ant-dropdown-menu-item:hover,
::v-deep .ant-dropdown-menu-submenu-title:hover {
  background-color: #fff !important;
}
.avatar-menu {
  width: 340px;
  padding: 0 15px 0 !important;
  box-sizing: border-box;
  ::v-deep .ant-dropdown-menu-item {
    padding: 0px 12px;
  }
  // menu头像
  .menu-header-avatar {
    overflow: hidden;
    padding: 24px 0 10px;
    .avatar {
      float: left;
    }
    .user-info{
      height: 100%;
      float: left;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .user-name {
        font-size: 16px;
        color: #333;
      }
      .user-company {
        font-size: 12px;
        color: #999;
        display: flex;
        align-items: center;
        .company-name {
          display: inline-block;
          max-width: 160px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          margin-right: 10px;
        }
        .cut {
          color: #0067cc;
          cursor: pointer;
        }
      }
    }
    .pic {
      width: 50px;
      height: 50px;
      background-image: url("../../assets/header/gift_icon.gif");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      float: right;
    }
  }
  ::v-deep .avatar-menu-header-item {
    font-size: 16px;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    // border-bottom: 1px solid #F5F5F5;
    position: relative;
    &:hover {
      background: #FAFAFA !important;
      .avatar-menu-header-ico-text {
        color: #0067cc;
      }
    }
    // .avatar-menu-header-icon-box {
    //   border-radius: 5px;
    //   background-color: #e6f4ff;
    //   border-color: #e6f4ff;
    //   display: flex;
    //   align-self: center;
    //   justify-content: center;
    //   width: 20px;
    //   height: 20px;
    //   &:hover {
    //     background-color: #0bb2fb;
    //     border-color: #0bb2fb;
    //     .avatar-menu-header-ico {
    //       color: #fff !important;
    //     }
    //   }
    //   i {
    //     display: flex;
    //     align-self: center;
    //     justify-content: center;
    //   }
    // }
    .avatar-menu-header-icon-box {
      width: 20px;
      height: 20px;
      background-size: 100% 100%;
    }
    .avatar-account {
      background: url('../../assets/header/account_icon.svg') no-repeat;
    }
    .avatar-help {
      background: url('../../assets/header/help_icon.svg') no-repeat;
    }
    .avatar-coupon {
      background: url('../../assets/header/coupon_icon.svg') no-repeat;
    }
    .avatar-parter {
      background: url('../../assets/header/partner_icon.svg') no-repeat;
    }
    .avatar-order {
      background: url('../../assets/header/order_icon.svg') no-repeat;
    }
    .avatar-menu-header-ico-text {
      margin-left: 10px;
      font-size: 12px;
      color: #333;
      width: 100%;
      // height: 14px;
      font-weight: 400;
    }
    .amount {
      position: absolute;
      top: 50%;
      right: 20px;
      font-size: 14px;
      color: #F9AC50;
      font-weight: 400;
      transform: translateY(-50%);
    }
  }
  &:first-child li:nth-child(2)  {
    border-top: 1px solid #F0F4FA;
  }
  // 退出按钮
  .avatar-menu-logout {
    padding: 0 !important;
    // padding-top: 18px !important;
    border-top: 1px solid #F0F4FA;
    .avatar-menu-logout-btn {
      background: #fff;
      // border-radius: 2px;
      width: 100%;
      height: 50px;
      line-height: 50px;
      font-size: 14px;
      color: #666666;
      font-weight: 400;
      text-align: center;
      img {
        width: 14px;
        margin: -2px 2px 0 0;
      }
    }
  }
  .ant-dropdown-menu-item-divider {
    margin: 0 !important;
  }
}
</style>