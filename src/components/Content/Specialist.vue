<template>
  <div style="margin:100px 0 100px 0">
    <a-divider />
    <div class="content-specialist">
      <h1 style="font-size:25px;line-height: 80px;">医院英才</h1>
      <ContentSwiper />
    </div>
    <a-divider />
  </div>
</template>

<script>
import ContentSwiper from '@/components/Swiper/ContentSwiper'
export default {
  data () {
    return {}
  },
  components: {
    ContentSwiper
  }
}
</script>

<style scoped>
.content-specialist {
  height: 400px;
  text-align: center;
}
</style>
