<template>
  <a-layout-content>
    <HomeCarousel />
    <div style="margin:4% 20% 0%;">
      <News />
      <div class="content-notice-activity">
        <a-row style="margin-top:10%">
          <Department />
          <CallForBids />
        </a-row>
      </div>
    </div>
    <Specialist />
  </a-layout-content>
</template>

<script>
import HomeCarousel from '@/components/Carousel/HomeCarousel'
import QueryBox from '@/components/QueryInput/QueryBox'
import {
  News,
  Department,
  Specialist,
  CallForBids
} from '@/components/Content'

export default {
  name: 'Content',
  components: {
    HomeCarousel,
    QueryBox,
    News,
    Department,
    Specialist,
    CallForBids
  }
}
</script>

<style scoped>
.content-activity {
  height: 400px;
  text-align: left;
  margin-top: 50px;
}
</style>
