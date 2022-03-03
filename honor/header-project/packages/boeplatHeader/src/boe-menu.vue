<template>
  <div class="admin-header-right-menu">
    <ul>
      <li v-for="menu of headerMenu" :key="menu.key" @click="menuClick(menu)">{{menu.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'boe-menu',
  props: {
    nodeEnv: {
      required:true,
    },
    menuList: {
      type: Array,
      default: ()=>{
        return ['boeplat','console','workorder','document','message']
      }
    },
  },
  data() {
    return {
      boeEnv:{}
    }
  },
  computed:{
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
  methods: {
    menuClick(menu) {
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
  }

}
</script>

<style lang="less" scoped>
.admin-header-right-menu {
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  ul {
    padding: 0;
    li {
      list-style: none;
      float: left;
      margin-left: 20px;
      font-size: 14px;
      font-weight: 400;
      color: #333;
      cursor: pointer;
    }
  }
}
</style>