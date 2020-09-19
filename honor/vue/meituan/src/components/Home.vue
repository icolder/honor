<style lang="scss" scoped>
  .header-group {
    background: #1C1B20;
    padding: 20px 14px 10px;
    .address-group {
      color: #fff;
      font-size: 14px;
    }
    .search-group {
      margin-top: 8px;
    }
  }
  .main-group {
    padding: 10px;

    .merchant-list {
      .merchant-item {
        padding: 10px 10px 0;
        display: flex;
        .logo {
          width: 85px;
          height: 68px;
        }
        .merchant-info {
          margin-left: 5px;
          .merchant-name {
            font-size: 16px;
            font-weight: 700;
          }
          .rate-group {
            padding-top: 5px;
          }
          .tag-group {
            padding-top: 5px;
            span {
              margin-right: 2px;
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div class="home-container">
    <div class="header-group">
      <div class="address-group">
        <span class="iconfont icon-dingwei"></span>
        <span class="address">三里屯</span>
        <span class="iconfont icon-arrow"></span>
      </div>
      <div class="search-group">
        <van-search placeholder="请输入搜索关键词" v-model="value" />
      </div>
    </div>
    <div class="main-group">
      <h2>推荐商家</h2>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <span class="van-dropdown-menu__item">距离最近</span>
        <span class="van-dropdown-menu__item">品质联盟</span>
        <div class="van-dropdown-menu__item">筛选</div>
      </van-dropdown-menu>
      <div class="merchant-list">
        <router-link to="/merchant/1">
          <div class="merchant-item">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572862604376&di=ba1b5ba7a397e381c3b236e3bf3b2e5a&imgtype=0&src=http%3A%2F%2Fuploads.qj.com.cn%2Fimages%2F41905%2F201604091425036479293.jpg" alt="" class="logo">
            <div class="merchant-info">
              <div class="merchant-name">coco奶茶</div>
              <div class="rate-group">
                <van-rate size="12px" v-model="rate"></van-rate>
              </div>
              <div class="tag-group">
                <van-tag plain>美团专送</van-tag>
                <van-tag plain>家常菜</van-tag>
              </div>
            </div>
          </div>
        </router-link>
        <div class="merchant-item">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572862604376&di=ba1b5ba7a397e381c3b236e3bf3b2e5a&imgtype=0&src=http%3A%2F%2Fuploads.qj.com.cn%2Fimages%2F41905%2F201604091425036479293.jpg" alt="" class="logo">
          <div class="merchant-info">
            <div class="merchant-name">coco奶茶</div>
            <div class="rate-group">
              <van-rate size="12px" v-model="rate"></van-rate>
            </div>
            <div class="tag-group">
              <van-tag plain>美团专送</van-tag>
              <van-tag plain>家常菜</van-tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {Search, DropdownMenu, DropdownItem, Rate, Tag} from 'vant';
export default {
  name: "Home",
  data() {
    return {
      rate: 7,
      value: "",
      value1: 0,
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
    }
  },
  components: {
    [Search.name]:Search,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [Rate.name]: Rate,
    [Tag.name]: Tag,
  }
}
</script>