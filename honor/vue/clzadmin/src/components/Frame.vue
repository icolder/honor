<style lang="scss" scoped>
  .frame {
    .frame-container{
      height: 100vh;
      .header {
        height: 50px !important;
        background-color: pink;
        display: flex;
        .band {
          width: 200px;
          height: 50px;
          background-color: #008d4c;
          font-size: 16px;
          color: #fff;
          margin-left: -20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .aside {
        background-color: gray;
        .main {
          background-color: aquamarine
        }
        .footer {
          background-color: yellowgreen
        }
      }
    }
  }
</style>
<style scoped>
.aside >>> .el-menu {
  border-right: none;
}
</style>

<template>
  <div class="frame">
    <el-container class="frame-container">
      <el-header class="header">
        <a href="#" class="band"><strong>菜篮子</strong>商户平台</a>
      </el-header>
      <el-container class="aside">
        <el-aside width="200px">
          <el-col :span="12">
            <el-menu
              default-active="/"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              :router='true'>
              <el-menu-item index="/">
                <template slot="title">
                  <i class="el-icon-s-home"></i>
                  <span>首页</span>
                </template>
              </el-menu-item>
              <el-menu-item index="/merchant">
                <i class="el-icon-menu"></i>
                <span slot="title">商家</span>
              </el-menu-item>
              <el-menu-item index="/order">
                <i class="el-icon-document"></i>
                <span slot="title">订单</span>
              </el-menu-item>
              <el-menu-item index="/user">
                <i class="el-icon-setting"></i>
                <span slot="title">用户</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-aside>
        <el-container>
          <el-main class="main">
            <router-view></router-view>
          </el-main>
          <el-footer class="footer">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script type="text/ecmascript-6">
import { Container,Header,Aside,Main,Footer,Row, Col, MenuItem,Menu,Submenu } from 'element-ui';

export default {
  name: "Frame",
  data() {
    return {
      
    }
  },
  components: {
    [Container.name]: Container,
    [Header.name]: Header,
    [Aside.name]: Aside,
    [Main.name]: Main,
    [Footer.name]: Footer,
    [Row.name]: Row,
    [Col.name]: Col,
    [MenuItem.name]: MenuItem,
    [Menu.name]: Menu,
    [Submenu.name]: Submenu,
  }
}
</script>