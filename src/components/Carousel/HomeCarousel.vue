<template>
  <a-carousel autoplay>
    <div v-for="(item,index) in imgList" :key="index">
      <img :src="item.imgUrl" style="height:620px;width:100%" />
    </div>
  </a-carousel>
</template>
<script>
export default {
  data () {
    return {
      imgList: [
        {
          imgUrl: '../../static/img/大图.jpg'
        },
        {
          imgUrl: '../../static/img/timg1.jpg'
        }
      ]
    }
  }
}
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 620px;
  width: auto;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
