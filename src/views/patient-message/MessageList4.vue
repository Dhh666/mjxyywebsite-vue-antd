<template>
  <a-layout-content>
    <Breadcrumb :page-name="pageName" />
    <div class="main">
      <p style="font-size: 25px; margin-bottom: 0">{{ pageName }}</p>
      <div v-for="(item,index) in comments" :key="index">
        <a-steps v-model="current" direction="vertical">
      <a-step icon="question" title="问题：" :sub-title="item.question" />
      <a-step status="finish" title="回答：" :sub-title="item.answer" :description="item.date" />
    </a-steps>
    <a-divider />
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
          question: '我不明白你们医院为什么在家属担保,后果自负的情况下,还不准用药',
          answer: '您好！谢谢你的留言，你所反映的情况不是太具体所以我们不是太了解。医生在临床上给患者用药都是要遵循一定的规定的。'
        },
        {
          date: '2020.9.27',
          question: '牙齿矫正费用大概多少?',
          answer: '您好！你说的情况不是十分的清楚，列如是一颗、两颗还是全口。建议您到我院口腔科就诊，医生需要要了解您的实际情况。'
        },
        {
          date: '2020.9.28',
          question:
            '部分医生让人非常生气。希望可以处理一下，端正一下态度。患者本来就难受了，还来医院受气！',
          answer:
            '感谢您提出的宝贵意见，我们将不断加强对职工的教育，改善服务态度。同时希望您能在提意见时说得更具体些，以方便我们调查、处理。'
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
  margin: 0 20% 5%;
}
.ant-steps-item-subtitle {
    display: inline;
    margin-left: 8px;
    color: rgba(0, 0, 0)!important;
    font-weight: normal;
    font-size: 24px;
}
</style>
