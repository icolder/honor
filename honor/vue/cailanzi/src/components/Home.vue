<style scoped lang='scss'>
  .header-group {
    background: #1C1B20;
    padding: 20px 14px 10px;
    .address-group {
      color: #fff;
      font-size: 16px;
    }
    .search-group{
      padding-top: 5px;
    }
  }
  .main-group {
    padding: 5px 10px;
    .van-dropdown-menu::after{
      border-top: none;
    }
    .merchant-list {
      .merchant-item {
        padding: 10px;
        display: flex;
        .logo {
          width: 85px;
          height: 64px;
        }
        .merchant-info {
          margin-left: 10px;
          .merchant-name {
            font-size: 14px;
            color: #1f1b1b;
            font-weight: 700;
          }
          .rate-group{
            padding-top: 5px;
          }
          .tag-group {
            vertical-align: bottom;
            span{
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
</style>

<style scoped>
  .main-group >>> .van-dropdown-menu__title {
    font-size: 14px;
    color: #767676;
  }
  .van-dropdown-menu__item {
    font-size: 14px;
    color: #767676;
  }
 
</style>

<template>
  <div class="home-container">
    <div class="header-group">
      <div class="address-group">
        <span class="iconfont icon-icon-test"></span>
        <span class="address">万达广场</span>
        <span class="iconfont icon-rightarrow"></span>
      </div>
      <div class="search-group">
        <van-search placeholder="请输入搜索关键词" />
      </div>
    </div>
    <div class="main-group">
      <h2>推荐商家</h2>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <div class="van-dropdown-menu__item">品质联盟</div>
        <div class="van-dropdown-menu__item">筛选</div>
      </van-dropdown-menu>
      <div class="merchant-list">
        <router-link to="/merchant/01">
          <div class="merchant-item">
            <img src="http://img.files.swws.258.com/swws/2016/0331/17/56fce9251c874.jpg" class="logo">
            <div class="merchant-info">
              <div class="merchant-name">菜园子1店</div>
              <div class="rate-group"><van-rate size="14px" v-model="rate"></van-rate></div>
              <div class="tag-group">
                <van-tag round type="primary">美团</van-tag>
                <van-tag round type="primary">饿了么</van-tag>
              </div>
            </div>
          </div>
        </router-link>
        <div class="merchant-item">
          <img src="http://img.files.swws.258.com/swws/2016/0331/17/56fce9251c874.jpg" class="logo">
          <div class="merchant-info">
            <div class="merchant-name">菜园子2店</div>
            <div class="rate-group"><van-rate size="14px" v-model="rate"></van-rate></div>
            <div class="tag-group">
              <van-tag round type="primary">美团</van-tag>
              <van-tag round type="primary">饿了么</van-tag>
            </div>
          </div>
        </div>
        <div class="merchant-item">
          <img src="http://img.files.swws.258.com/swws/2016/0331/17/56fce9251c874.jpg" class="logo">
          <div class="merchant-info">
            <div class="merchant-name">菜园子3店</div>
            <div class="rate-group"><van-rate size="14px" v-model="rate"></van-rate></div>
            <div class="tag-group">
              <van-tag round type="primary">美团</van-tag>
              <van-tag round type="primary">饿了么</van-tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Search } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { Rate, Tag } from 'vant';

export default {
  name: "cyz-home",
  data() {
    return {
      value1: 0,
      value2: 'a',
      rate: 4,
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
    }
  },
  components: {
    [Search.name]: Search,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [Rate.name]: Rate,
    [Tag.name]: Tag,
  }
}
</script>