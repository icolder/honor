<style lang="scss" scoped>
  .merchant-container {
    
    .header-group {
      background: #2E2F3B;
      padding: 5px;
      display: flex;
      margin-top: -46px;
      padding-top: 46px;
      .logo {
        width: 85px;
        height: 64px;
      }
      .merchant-info {
        flex: 1;
        margin-left: 10px;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        overflow: hidden;
        .notice {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }
    .tab-group {
      .menu-group {
        display: flex;
        .category-group {
          width: 80px;
          height: 100%;
          text-align: center;
          // background: gray;
          overflow: hidden;
          .category-list {
            li {
              height: 50px;
              line-height: 50px;
              &.active {
                background-color: pink;
              }
            }
          }
        }
        .goods-group {
          flex: 1;
          height: 100%;
          overflow: hidden;
          // background: pink;
          .category-name {
            font-size: 14px;
            height: 32px;
            font-weight: 700;
            line-height: 32px;
          }
          .goods-item {
            display: flex;
            padding-bottom: 10px;
            height: 75px;
            .thumbnail {
              width: 75px;
              height: 75px;
            }
            .goods-info {
              flex: 1;
              margin-left: 10px;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              .goods-name {
                font-size: 14px;
                font-weight: 700;
              }
              .goods-info-bottom {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .price {
                  color: #fb4e44;
                  font-size: 14px;
                  font-weight: 700;
                }
              }
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div class="merchant-container">
    <clz-nav-bar></clz-nav-bar>
    <div class="header-group">
      <img src="http://img.files.swws.258.com/swws/2016/0331/17/56fce9251c874.jpg" class="logo">
      <div class="merchant-info">
        <div class="delivery-info">
          <span>20分钟</span> | <span> 1 km</span>
        </div>
        <div class="notice">
          公告：这是我的一个公告信息！这是我的一个公告信息！这是我的一个公告信息！
        </div>
      </div>
    </div>
    <van-tabs class="tab-group" v-model="active">
      <van-tab title="点菜">
        <div class="menu-group" :style="menuHeightStyle">
          <div class="category-group" ref="category">
            <ul class="category-list">
              <li v-for="(category,index) in categories" :key="category.name" @click="categoryClick(index)" :class="index == currentIndex?'active':''">{{category.name}}</li>
            </ul>
          </div>
          <div class="goods-group" ref="goods">
            <div class="goods-list">
              <dl v-for="(category,category_index) in categories" :key="category.name" class="goods-dl">
                <dt class="category-name">{{category.name}}</dt>
                <dd class="goods-item" v-for="(goods,goods_index) in category.goods_list" :key="goods.id" @click="goodsClick(category_index,goods_index)">
                  <img :src="goods.picture" alt="" class="thumbnail">
                  <div class="goods-info">
                    <div class="goods-name">{{goods.name}}</div>
                    <div class="month-sale">30</div>
                    <div class="goods-info-bottom">
                      <div class="price">￥{{goods.price}}</div>
                      <stepper v-model="goods.count"></stepper>
                    </div>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="评价">评价页面信息</van-tab>
      <van-tab title="商家">商家页面信息</van-tab>
    </van-tabs>
    <goods-detail :goods='detailGoods'></goods-detail>
    <cart :categories='categories'></cart>
  </div>
  
</template>

<script type="text/ecmascript-6">
import { NavBar } from 'vant';
import { Tab, Tabs } from 'vant';
import BScroll from 'better-scroll';
import kfc from '../../data/kfc';
import GoodsDetail from './GoodsDetail';
import Stepper from './Stepper';
import Cart from './Cart';
import CLNavBar from '../Common/CLNavBar';

export default {
  name: "Merchant",
  data() {
    return {
      active:0,
      categories: [],
      positions: [],
      currentIndex: 0,
      detailGoods: undefined,
    }
  },
  components: {
    [NavBar.name]: NavBar,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [GoodsDetail.name]: GoodsDetail,
    [Stepper.name]: Stepper,
    [Cart.name]: Cart,
    [CLNavBar.name]: CLNavBar,
  },
  computed: {
    menuHeightStyle(){
      const height = window.innerHeight - 164;
      return {
        height: height + 'px'
      }
    }
  },
  methods: {
    categoryClick(index){
      const position = this.positions[index];
      this.goodsScroll.scrollTo(0,-position,500);
      this.currentIndex = index;
    },
    goodsClick(category_index,goods_index){
      let category = this.categories[category_index];
      let goods = category.goods_list[goods_index];
      this.detailGoods = JSON.parse(JSON.stringify(goods));
    }
  },
  mounted(){
    const categories = kfc['categories']
    for(let category of categories){
      for(let goods of category.goods_list){
        goods.count = 0
      }
    }
    this.categories = categories

    this.$nextTick(() => {
      var menuScroll = new BScroll(this.$refs.category, {
        scrollY: true,
        click: true
      })

      var goodsScroll =  new BScroll(this.$refs.goods, {
        scrollY: true,
        click: true,
        probeType: 2
      })

      goodsScroll.on('scroll',(pos)=>{
        const y = Math.abs(pos.y);
        const positions = this.positions;
        for (let index = positions.length-1; index >= 0; index--) {
          const position = positions[index];
          if (position <= y) {
            this.currentIndex = index;
            break
          }
        }
      })

      this.menuScroll = menuScroll;
      this.goodsScroll = goodsScroll;

      const positions = [0];
      let offset = 0;
      const dlList = document.getElementsByClassName("goods-dl");
      for(let dl of dlList) {
        const height = dl.clientHeight;
        offset += height;
        positions.push(offset);
      }
      this.positions = positions;
    })
  }
}
</script>