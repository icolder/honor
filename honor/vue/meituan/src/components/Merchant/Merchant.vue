<style lang="scss" scoped>
  .merchant-container {
    .menu-group {
      display: flex;
      .category-group {
        width: 80px;
        height: 100%;
        // background: skyblue;
        text-align: center;
        overflow: hidden;
        .category-list {
          // overflow: hidden;
          li {
            height: 50px;
            line-height: 50px;
            &.active {
              background: #878787;
            }
          }
        }
      }
      .goods-group {
        flex: 1;
        height: 100%;
        margin-left: 10px;
        // background: gray;
        overflow: hidden;
        .goods-list {
          .category-name {
            font-size: 14px;
            font-weight: 700;
            height: 32px;
            line-height: 32px;
          }
          .goods-item {
            display: flex;
            margin-left: 10px;
            padding-top: 10px;
            box-sizing: border-box;
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
              .goods-info-bottom {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .price {
                  color: #fb4e44;
                  font-size: 16px;
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
    <mt-nav-bar title="CoCo奶茶商家"></mt-nav-bar>
    <div class="header-group">
      在英语中都有哪些标点符号?_已解决问题_搜狐问答《》French quotes法文引号书名号ellipsis省略号tandemcolon双点号
    </div>
    <div class="menu-group" :style="menuHeightStyle">
      <div class="category-group" ref="category">
        <ul class="category-list">
          <li v-for="(category,index) in categories" :key="category.id" @click="categoryClick(index)" :class="index ==currentIndex?'active':''">{{category.name}}</li>
        </ul>
      </div>
      <div class="goods-group" ref="goodList">
        <div class="goods-list">
          <dl v-for="(category, category_index) in categories" :key="category.name" class="goods-dl">
            <dt class="category-name">{{category.name}}</dt>
            <dd class="goods-item" v-for="(goods, goods_index) in category.goods_list" :key="goods.id" @click="goodsClick(category_index, goods_index)">
              <img :src="goods.picture" alt="" class="thumbnail">
              <div class="goods-info">
                <div class="goods-name">{{goods.name}}</div>
                <div class="goods-sale">月售10份</div>
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
    <goods-detail :goods="detailGoods"></goods-detail>
    <cart :categories="categories"></cart>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll';
import kfc from "../../data/kfc.js";
import GoodsDetail from "./GoodsDetail";
import Stepper from "./Stepper";
import Cart from "./Cart";
import MTNavBar from "../Common/MTNavBar";

export default {
  name: "Merchant",
  data() {
    return {
      categories: [],
      positions: [],
      currentIndex: 0,
      detailGoods: undefined
    }
  },
  components: {
    [GoodsDetail.name]: GoodsDetail,
    [Stepper.name]: Stepper,
    [Cart.name]: Cart,
    [MTNavBar.name]: MTNavBar
  },
  computed: {
    menuHeightStyle() {
      const height = window.innerHeight - 116;
      return {
        height: height + "px"
      }
    }
  },
  mounted() {
    const categories = kfc['categories'];
    for( let category of categories) {
      for(let goods of category.goods_list) {
        goods.count = 0;
      }
    }
    this.categories = categories
    this.$nextTick(() => {
      var menuScroll = new BScroll(this.$refs.category, {
        scrollY: true,
        click: true,
        probeType: 2,
        mouseWheel: true
      })
      var goodsScroll = new BScroll(this.$refs.goodList, {
        scrollY: true,
        click: true,
        momentum: true,
        probeType: 2,
        mouseWheel: true
      })
      
      goodsScroll.on("scroll",(pos) =>{
        const y = Math.abs(pos.y);
        const positions = this.positions;
        for (let index = positions.length-1; index >= 0; index--) {
          const position = positions[index];
          if (y >= position) {
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
        positions.push(offset)
      }
      this.positions = positions;
    })
  },
  methods: {
    categoryClick(index){
      const position = this.positions[index];
      this.goodsScroll.scrollTo(0,-position,500);
      this.currentIndex = index;
    },
    goodsClick(category_index, goods_index){
      let category = this.categories[category_index]
      let goods = category.goods_list[goods_index]
      this.detailGoods = JSON.parse(JSON.stringify(goods))
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-group {
    height: 70px;
    line-height: 70px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    background: skyblue;
  }
</style>