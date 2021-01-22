<template>
  <a-layout-header>
    <div></div>
    <a-row>
      <a-col :span="6" :offset="4">
        <div @click="ToHomePage" style="cursor: pointer;">
          <img src="@/assets/医院名称.jpg" class="yymc_img" />
        </div>
      </a-col>
      <a-col>
      <a-col :xs="2" :sm="4" :md="4" :lg="4" :xl="4" :offset="6"
        style="padding: 3% 0 0 0">
          <QueryBox />
      </a-col>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="18" :offset="4"
        style="text-align: justify;
              align-self: center;
              white-space: nowrap;
              text-overflow: clip;
              margin-top: 2%;"
      >
        <HeadDropdown />
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script>
import HeadDropdown from '@/components/Dropdown/HeadDropdown'
import QueryBox from '@/components/QueryInput/QueryBox'

export default {
  name: 'Header',
  components: {
    HeadDropdown,
    QueryBox
  },
  methods: {
    ToHomePage () {
      this.$router.push({ path: 'Content' })
    }
  }
}
</script>

<style scoped>
/* 医院名称图片设置 */
.yymc_img {
  width: 100%;
  height: auto;
  margin: 5% 0 0 0%;
}
</style>
