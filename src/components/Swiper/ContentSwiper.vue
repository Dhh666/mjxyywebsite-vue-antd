<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-for="item of listTemp(list)" :key="item.id" class="wrapper">
      <swiper-slide v-for="(cell,i) in item" :key="i">
          <img :src="cell.img" class="swiper-img" />
          <p style="line-height:20px;margin-top:10px">{{cell.name}}</p>
          <p style="line-height:20px">{{cell.professional}}</p>
          <p style="line-height:20px">{{cell.department}}</p>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'ContentSwiper',
  data () {
    return {
      list: [
        {
          name: '陈云册',
          professional: '主任医师',
          department: '皮肤科',
          img: 'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/911a7002e11608fb581fffcde05d5257.jpg'
        },
        {
          name: '陈云',
          professional: '副主任医师',
          department: '五官科',
          img: 'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/911a7002e11608fb581fffcde05d5257.jpg'
        },
        {
          name: '陈册',
          professional: '主任医师',
          department: '中医内科',
          img: 'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/911a7002e11608fb581fffcde05d5257.jpg'
        },
        {
          name: '陈册册',
          professional: '主任医师',
          department: '产科',
          img: 'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/911a7002e11608fb581fffcde05d5257.jpg'
        },
        {
          name: '陈云云',
          professional: '主任医师',
          department: '康复科',
          img: 'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg'
        }
      ],
      swiperOption: {
        centeredSlides: true,
        direction: 'horizontal', // 默认horizontal, 水平轮播
        autoplay: true, // 自动切换
        loop: true, // 循环
        slidesPerView: '8', // 默认1, 同时显示的slides数量,auto 代表根据轮播图的宽度排列
        spaceBetween: 20, // 轮播图之间的间距
        height: 300
      }
    }
  },
  methods: {
    listTemp: function (list) {
      let index = 0
      let count = 8
      let arrTemp = []
      let experts = this.list
      for (let i = 0; i < this.list.length; i++) {
        index = parseInt(i / count)
        if (arrTemp.length <= index) {
          arrTemp.push([])
        }
        arrTemp[index].push(experts[i])
      }
      console.log(arrTemp)
      return arrTemp
    }
  }
}
</script>

<style scoped>
.wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 300px;
}
.swiper-img {
  width: 150px;
  height: 180px;
}
</style>
