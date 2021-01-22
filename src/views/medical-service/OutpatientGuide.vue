<template>
  <a-layout-content>
    <Breadcrumb :page-name="pageName" />
    <div class="page_main">
      <div class="news_main">
        <div class="news_title">{{title}}</div>
        <a-divider />
        <div class="news_tip">
          <span class="tips">时间：{{date}}</span>
          <span class="tips">点击数：{{hits}}</span>
          <span class="tips">发布来源：{{publish}}</span>
          <span>作者：{{writer}}</span>
        </div>
        <div class="news_text" v-html="msg">
        </div>
        <a-divider />
      </div>
      <div class="side">
        <div class="side_title">医院新闻</div>
        <ul v-for="(item, index) in list" :key="index" class="list">
          <li class="middle">
            <p target="_blank">{{item | ellipsis}}</p>
          </li>
        </ul>
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
  filters: {
    ellipsis (value) {
      if (!value) return ''
      if (value.length > 41) {
        return value.slice(0, 41) + '...'
      }
      return value
    }
  },
  data () {
    return {
      pageName: '门诊指南',
      title: '这是标题',
      date: '2020/09/11',
      hits: 11,
      publish: '墨江县人民医院',
      writer: '信息科',
      msg: '<p><span style="font-size:18px;line-height:2;" >&nbsp; &nbsp; &nbsp; &nbsp;这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗。</span></p><p style="text-align:center;"><img src="https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg" /></p><p><span style="font-size:18px;line-height:2;">▲这很合理这很合理这很合理这很合理这很合理这很合理这很合理这很合理，这很合理这很合理这很合理。</span></p><p><spanstyle="font-size:18px;line-height:2;">&nbsp; &nbsp; &nbsp; &nbsp;这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗。</span></p><p style="text-align:center;"><img src="https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg" /></p><p><span style="font-size:18px;line-height:2;">▲这很合理这很合理这很合理这很合理这很合理这很合理这很合理这很合理，这很合理这很合理这很合理。</span></p><p><span style="font-size:18px;line-height:2;">&nbsp; &nbsp; &nbsp; &nbsp;这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗这合理吗。</span></p><p style="text-align:center;"><img src="https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg" /></p><p><span style="font-size:18px;line-height:2;">▲这很合理这很合理这很合理这很合理这很合理这很合理这很合理这很合理，这很合理这很合理这很合理。</span></p>',
      list: [
        '百姓所说的感冒是指“普通感冒”，又称“伤风”、急性鼻炎或上呼吸道感染。',
        '感冒是一种常见的急性上呼吸道病毒性感染性疾病',
        '多由鼻病毒、副流感病毒、呼吸道合胞病毒、埃可病毒、柯萨奇病毒、冠状病毒、腺病毒等引起。',
        '床表现为鼻塞、喷嚏、流涕、发热、咳嗽、头痛等，多呈自限性。',
        '大多散发，冬、春季节多发，季节交替时多发。',
        '本病起病较急，潜伏期1～3天，主要表现为鼻部症状，如喷嚏、鼻塞、流清水样鼻涕，也可表现为咳嗽、咽干、咽痒、咽痛或灼热感，甚至鼻后滴漏感',
        '2～3天后鼻涕变稠，常伴咽痛、流泪、味觉减退、呼吸不畅、声嘶等。一般无发热及全身症状，或仅有低热、不适、轻度畏寒、头痛。',
        '病毒性感染时白细胞计数多为正常或偏低，淋巴细胞比例升高病原学检查',
        '病毒核酸检测：呼吸道标本（鼻咽部、气管抽取物、痰）中的病毒核酸检测',
        '病毒抗原检测：可采用胶体金和免疫荧光法'
      ]
    }
  },
  created () {},
  mounted () {},
  methods: {},
  beforeDestroy () {}
}
</script>

<style scoped>
/* 新闻和边导航栏 */
.page_main {
  width: 1230px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
/* 左边新闻部分 */
.news_main {
  font-size: 16px;
  line-height: 26px;
  float: left;
  width: 704px;
  padding: 67px 42px 0;
}
/* 新闻标题 */
.news_title {
  margin-bottom: 25px;
  padding-bottom: 34px;
  font-size: 30px;
  line-height: 44px;
}
/* 新闻标题下方作者点击数等 */
.news_tip {
  margin-bottom: 51px;
  font-size: 16px;
  line-height: 26px;
  text-align: left;
}
.tips {
  margin-right: 5%;
}
/* 新闻文本 */
.news_text {
  line-height: 1.4;
  text-align: left;
}
/* 边导航栏 */
.page_main .side {
  float: right;
  width: 368px;
  margin-right: 15px;
}
.side_title {
  height: 190px;
  /* background: url(../image/xf/jpg8.jpg) center no-repeat; */
  background-color: #3b88c5;
  font-size: 24px;
  line-height: 190px;
  text-align: center;
  color: #fff;
}

.page_main .side .list {
  border-left: 1px solid #ededed;
  border-right: 1px solid #ededed;
  list-style: none outside none;
  padding: 0;
  margin: 0;
}
.page_main .side .list li {
    margin: 10px;
  height: 80px;
  text-align: center;
}
.page_main .side .list p {
  display: inline-block;
  vertical-align: middle;
  width: 336px;
  font-size: 16px;
  line-height: 40px;
  text-align: left;
  letter-spacing: 0;
  text-decoration: none;
  color: #333;
  border-bottom: 1px solid #ededed;
}
.page_main .side .list p:hover {
  cursor: pointer;
  color: #377eb6;
}
.middle {
  font-size: 0;
  letter-spacing: -1.5em;
}
</style>
