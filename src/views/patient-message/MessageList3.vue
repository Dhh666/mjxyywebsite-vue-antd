<template>
  <a-layout-content>
    <Breadcrumb :page-name="pageName" />
    <div class="main">
      <p style="font-size: 25px; margin-bottom: 0">{{ pageName }}</p>
      <div>
        <a-steps v-model="current" direction="vertical" v-for="(item,index) in comments" :key="index">
          <a-step
            :title="item.date"
            :description="'问题'+item.question+item.answer"
          />
          <a-divider />
        </a-steps>
      </div>
    </div>
  </a-layout-content>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  components: {
    Breadcrumb
  },
  filters: {},
  data () {
    return {
      pageName: '留言列表',
      current: 0,
      comments: [
        {
          date: '2020.9.26',
          question: '食欲不振',
          answer: '吃健胃消食片'
        },
        {
          date: '2020.9.27',
          question: '困',
          answer: '睡觉'
        },
        {
          date: '2020.9.28',
          question: '部分医生让人非常生气。希望可以处理一下，端正一下态度。患者本来就难受了，还来医院受气！',
          answer: '感谢您提出的宝贵意见，我们将不断加强对职工的教育，改善服务态度。同时希望您能在提意见时说得更具体些，以方便我们调查、处理。'
        }
      ]
    }
  },
  beforeMount () {},
  created () {},
  mounted () {},
  methods: {
    onChange (current) {
      console.log('onChange:', current)
      this.current = current
    }
  },
  beforeDestroy () {}
}
</script>

<style scoped>
.main {
  margin: 0 19% 5%;
}
</style>
