<template>
  <a-layout-footer>
    <a-row style="margin:0 8% 0 8%">
      <a-col :span="13">
        <a-col :span="4">
          <img src="@/assets/院徽反白.gif" class="image2"/>
        </a-col>
        <a-col :span="12">
          COPYRIGHT © 1994 – 2020 Mojiang PEOPLE’S HOSPITAL.
          <br/>
          ALL RIGHTS RESERVED.
        </a-col>
      </a-col>
      <a-col :span="11">
        <a-col :span="4">
          友情链接
          <br/>
          <div v-for="(item,index) in urlList" :key="index" style="font-size:12px;line-height: 22px">
            <span class="blog_roll" @click="go(item.url)">{{item.title}}</span>
          </div>
        </a-col>
        <a-col :span="15">
          <a-icon type="environment"/>
          <span style="font-size:12px">{{address}}</span>
          <br/>
          <a-icon type="phone"/>
          <span style="font-size:12px">{{phoneNumber}}</span>
        </a-col>
      </a-col>
    </a-row>
  </a-layout-footer>
</template>

<script>
export default {
  data () {
    return {
      urlList: [
        {
          title: '墨江县中医院',
          url: 'http://www.baidu.com'
        },
        {
          title: '普洱市中医院',
          url: 'http://www.bilibili.com'
        }
      ],
      address: '普洱市墨江哈尼族自治县联珠镇天溪社区回归大道14号',
      phoneNumber: '0879-4239212 ,0879-4232742'
    }
  },
  methods: {
    go (e) {
      window.location.href = e
    }
  }
}
</script>

<style scoped>
  .image2 {
    min-width: 100px;
    width: 70%;
    height: auto;
  }
  .blog_roll{
    color: #fff;
  }
  .blog_roll:hover{
    color: #8cc8ff;
    cursor: pointer;
  }
</style>
