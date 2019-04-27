<template>
  <div class="goods-list">
    <NavHeader></NavHeader>
    <NavBread>
      <span>Goods</span>
    </NavBread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price">Price
            <svg class="icon icon-arrow-short">
              <use xlink:href="#icon-arrow-short"></use>
            </svg>
          </a>
          <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter">
            <dl class="filter-price">
              <dt>价格:</dt>
              <dd>
                <a href="javascript:void(0)" :class="{'cur': priceCheck=== 'all'}" @click="priceCheck= 'all'">全部</a>
              </dd>
              <dd v-for="(price,index) of priceList" :key="index">
                <a href="javascript:void(0)" :class="{'cur':priceCheck===index}" @click="priceCheck = index">{{price.minPrice}}
                  - {{price.maxPrice}}</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(good,index) of goods" :key="index">
                  <div class="pic">
                    <a href="#"><img v-lazy="'static/' + (index + 1) + '.jpg'" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">{{good.productName}}</div>
                    <div class="price">￥{{good.prodcutPrice}}.00</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NavFooter></NavFooter>
  </div>
</template>
<script>
import '@/assets/css/base.css'
import '@/assets/css/product.css'
import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFooter'
import NavBread from '../components/NavBread'
import axios from 'axios'

export default {
  data () {
    return {
      priceList: [
        {
          minPrice: 0.00,
          maxPrice: 100.00
        },
        {
          minPrice: 100,
          maxPrice: 500
        },
        {
          minPrice: 500,
          maxPrice: 1000
        },
        {
          minPrice: 1000,
          maxPrice: 2000
        }
      ],
      priceCheck: 'all',
      goods: {}
    }
  },
  components: {
    NavHeader,
    NavFooter,
    NavBread
  },
  mounted () {
    axios.get('/static/mock/goods.json')
      .then((res) => {
        this.goods = res.data.result
      })
  }
}
</script>
<style lang="stylus" scoped>
  .filter
    .filter-price
      .priceCheck
        padding-left: 20px
        border-left: 2px solid #ee7a23
</style>
