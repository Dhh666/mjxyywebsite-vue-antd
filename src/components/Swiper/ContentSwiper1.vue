<template>
  <div class="commodity">
    <div class="container">
      <swiper class="swiImgs" :options="swiperOption" v-if="commodity.length!=0">
        <swiper-slide
          v-for="(item, index) in commodity"
          data-index="index"
          :key="index"
          class="item"
        >
          <img class="swiImg" :src="item" />
        </swiper-slide>
        <div class="swiper-scrollbar"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div
          class="swiper-pagination"
          v-for="(item,index) in detailimages"
          :key="index"
          slot="pagination"
        ></div>
      </swiper>
      <span class="swiText" v-if="commodity">{{imgIndex}}/{{commodity.length}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    const that = this
    return {
      commodity: [
        'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/911a7002e11608fb581fffcde05d5257.jpg',
        'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg',
        'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/911a7002e11608fb581fffcde05d5257.jpg',
        'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg'
      ],
      imgIndex: 1,
      swiperOption: {
        // 是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // 循环
        loop: true,
        // 设定初始化时slide的索引
        initialSlide: 0,
        // 自动播放
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 滑动速度
        speed: 800,
        // 滑动方向
        direction: 'horizontal',
        // 小手掌抓取滑动
        grabCursor: true,
        // 滑动之后回调函数
        on: {
          slideChangeTransitionStart: function () {
            that.imgIndex = this.realIndex + 1 // 获取轮播图片下标索引；这里有一个坑，之前网上找到的是用activeIndex，但后来网上说的是这个realIndex，原来activeIndex是swiper2.0的；而realIndex是swiper3.0的，（使用realIndex才实现了下标索引）
          }
        },
        // 分页器设置
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },

  created () {
    this.swiperOption.autoplay =
      this.commodity.length !== 1
        ? {
          // 控制只有一张图片的时候不自动轮播
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
        : false
  },

  methods: {}
}
</script>

<style>
.commodity {
  background: #f5f5f5;
  height: 300px;
}
.container {
  position: relative;
}
.swiText {
  position: absolute;
  height: 0.5rem;
  width: 0.5rem;
  bottom: 0.2rem;
  right: 0.3rem;
  font-size: 0.33rem;
  color: #fff;
  z-index: 10;
}

.swiImgs {
  width: 50%;
}
.item {
  height: 7.5rem;
}
.swiImg {
  width: 30%;
  height: 300px;
}
</style>
