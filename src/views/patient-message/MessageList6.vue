<template>
  <a-layout-content>
    <Breadcrumb :page-name="pageName" />
    <div class="main">
      <p style="font-size: 25px; margin-bottom: 0">{{ pageName }}</p>
      <div class="comments">
            <RecycleScroller
            v-infinite-scroll="handleInfiniteOnLoad"
            style="height: 1000px"
            :items="comments"
            :item-size="180"
            key-field="no"
            :infinite-scroll-disabled="busy"
            :infinite-scroll-distance="10"
          >
          <div slot-scope="{ item }">
          <a-steps v-model="current" direction="vertical">
            <a-step title="问题：" :sub-title="item.question">
              <a-icon slot="icon" type="question-circle" />
            </a-step>
            <a-step
              status="finish"
              title="回答："
              :sub-title="item.answer"
              :description="item.date"
            >
              <a-icon slot="icon" type="check-circle" />
            </a-step>
          </a-steps>
          <a-divider />
          </div>
            </RecycleScroller>
        </div>
    </div>
  </a-layout-content>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import infiniteScroll from 'vue-infinite-scroll'
import { RecycleScroller } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
export default {
  directives: { infiniteScroll },
  components: {
    Breadcrumb,
    RecycleScroller
  },
  filters: {},
  data () {
    return {
      pageName: '留言列表',
      current: 0,
      comments: [
        {
          no: 1,
          date: '2020.9.26',
          question:
            '我不明白你们医院为什么在家属担保,后果自负的情况下,还不准用药',
          answer:
            '您好！谢谢你的留言，你所反映的情况不是太具体所以我们不是太了解。医生在临床上给患者用药都是要遵循一定的规定的。'
        },
        {
          no: 2,
          date: '2020.9.27',
          question: '牙齿矫正费用大概多少?',
          answer:
            '您好！你说的情况不是十分的清楚，列如是一颗、两颗还是全口。建议您到我院口腔科就诊，医生需要要了解您的实际情况。'
        },
        {
          no: 3,
          date: '2020.9.28',
          question:
            '部分医生让人非常生气。希望可以处理一下，端正一下态度。患者本来就难受了，还来医院受气！',
          answer:
            '感谢您提出的宝贵意见，我们将不断加强对职工的教育，改善服务态度。同时希望您能在提意见时说得更具体些，以方便我们调查、处理。感谢您提出的宝贵意见，我们将不断加强对职工的教育，改善服务态度。同时希望您能在提意见时说得更具体些，以方便我们调查、处理。'
        },
        {
          no: 4,
          date: '2020.9.28',
          question:
            '部分医生让人非常生气。希望可以处理一下，端正一下态度。患者本来就难受了，还来医院受气！',
          answer:
            '感谢您提出的宝贵意见，我们将不断加强对职工的教育，改善服务态度。同时希望您能在提意见时说得更具体些，以方便我们调查、处理。感谢您提出的宝贵意见，我们将不断加强对职工的教育，改善服务态度。同时希望您能在提意见时说得更具体些，以方便我们调查、处理。'
        },
        {
          no: 5,
          date: '2020.9.28',
          question:
            '部分医生让人非常生气。希望可以处理一下，端正一下态度。患者本来就难受了，还来医院受气！',
          answer:
            '感谢您提出的宝贵意见，我们将不断加强对职工的教育，改善服务态度。同时希望您能在提意见时说得更具体些，以方便我们调查、处理。感谢您提出的宝贵意见，我们将不断加强对职工的教育，改善服务态度。同时希望您能在提意见时说得更具体些，以方便我们调查、处理。'
        },
        {
          no: 6,
          date: '2020.9.28',
          question:
            '部分医生让人非常生气。希望可以处理一下，端正一下态度。患者本来就难受了，还来医院受气！',
          answer:
            '感谢您提出的宝贵意见，我们将不断加强对职工的教育，改善服务态度。同时希望您能在提意见时说得更具体些，以方便我们调查、处理。感谢您提出的宝贵意见，我们将不断加强对职工的教育，改善服务态度。同时希望您能在提意见时说得更具体些，以方便我们调查、处理。'
        },
        {
          no: 7,
          date: '2020.9.28',
          question:
            '部分医生让人非常生气。希望可以处理一下，端正一下态度。患者本来就难受了，还来医院受气！',
          answer:
            '感谢您提出的宝贵意见，我们将不断加强对职工的教育，改善服务态度。同时希望您能在提意见时说得更具体些，以方便我们调查、处理。感谢您提出的宝贵意见，我们将不断加强对职工的教育，改善服务态度。同时希望您能在提意见时说得更具体些，以方便我们调查、处理。'
        },
        {
          no: 8,
          date: '2020.9.28',
          question:
            '部分医生让人非常生气。希望可以处理一下，端正一下态度。患者本来就难受了，还来医院受气！',
          answer:
            '感谢您提出的宝贵意见，我们将不断加强对职工的教育，改善服务态度。同时希望您能在提意见时说得更具体些，以方便我们调查、处理。感谢您提出的宝贵意见，我们将不断加强对职工的教育，改善服务态度。同时希望您能在提意见时说得更具体些，以方便我们调查、处理。'
        },
        {
          no: 9,
          date: '2020.9.28',
          question:
            '部分医生让人非常生气。希望可以处理一下，端正一下态度。患者本来就难受了，还来医院受气！',
          answer:
            '感谢您提出的宝贵意见，我们将不断加强对职工的教育，改善服务态度。同时希望您能在提意见时说得更具体些，以方便我们调查、处理。感谢您提出的宝贵意见，我们将不断加强对职工的教育，改善服务态度。同时希望您能在提意见时说得更具体些，以方便我们调查、处理。'
        }
      ],
      loading: false,
      busy: false
    }
  },
  beforeMount () {
    this.fetchData((res) => {
      this.data = res.results.map((item, index) => ({ ...item, index }))
    })
  },
  created () {},
  mounted () {},
  methods: {
    onChange (current) {
      console.log('onChange:', current)
      this.current = current
    },
    fetchData (callback) {
    },
    handleInfiniteOnLoad () {
      const data = this.comments
      this.loading = true
      if (data.length > 100) {
        this.$message.warning('Infinite List loaded all')
        this.busy = true
        this.loading = false
      }
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
  color: rgba(0, 0, 0) !important;
  font-weight: normal;
  font-size: 24px;
}
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
</style>
