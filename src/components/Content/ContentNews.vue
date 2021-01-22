<template>
  <div class="content-news">
    <a-row>
      <a-col :span="22">
        <ul class="content-news-ul">
          <li
            class="content-news-li1"
            style="font-size: 25px"
            @click="changePage('News')"
          >
            医院新闻
          </li>
          <li class="content-news-li2" :class="showmode2 ? 'active' : 'content-news-li2'" @click="changePage('MedicalService')">
            医疗服务
          </li>
          <li class="content-news-li3" :class="showmode3 ? 'active' : 'content-news-li3'" @click="changePage('PartyCulture')">
            党建文化
          </li>
          <li class="content-news-li4" :class="showmode4 ? 'active' : 'content-news-li4'" @click="changePage('ProjectPublic')">
            项目公示
          </li>
        </ul>
      </a-col>
      <a-col :span="2" style="text-align: center">
        <a-button
          style="height: 25px; margin-right: 30px; font-size: 10px"
          @click="toBreviary"
          >更多</a-button
        >
      </a-col>
    </a-row>
    <div>
      <a-row>
        <div v-for="(item, index) in newsList" :key="index">
          <a-col
            :span="item.span"
            :offset="item.offset"
            style="margin-bottom: 3%"
          >
            <div class="div_img">
              <img
                :src="item.img"
                class="img"
                @click="toGeneralNewsPage(pageName)"
              />
              <p class="img_p" @click="toGeneralNewsPage">{{ item.name }}</p>
            </div>
          </a-col>
        </div>
      </a-row>
      <div v-for="(item, index) in newsList" :key="index">
        <a-row class="new_main">
          <a-col :span="2" style="height: 60px; font-size: 18px; padding: 10px">
            <p class="new_date_pa">{{ item.day }}</p>
            <p class="new_date_pb">{{ item.yearMonth }}</p>
          </a-col>
          <a-col :span="22" class="new_text" @click="toGeneralNewsPage">
            <h3 class="new_text_title">
              {{ item.name }}
            </h3>
            <p class="new_text_p">
              {{ item.text }}
            </p>
          </a-col>
        </a-row>
        <a-divider />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showmode2: false,
      showmode3: false,
      showmode4: false,
      pageName: 'News',
      newsList: [
        {
          name:
            '在心内科临床带教的过程中，通过合理选择教学模式，能够有侧重的实现对学生临床能力的培养，有利于加快实习医师角色的转变，对提高其理论以及实践能力均有显著价值。而就本次研究所制定教学模式来看，在PBL教案准备的过程中',
          img:
            'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg',
          yearMonth: '2020.09',
          day: '17',
          span: 7,
          offset: 0,
          text:
            '探讨在心内科临床带教中采用问题基础教学模式的应用价值。方法：选择我院2018年1月至2019年1月心内科接收实习生计56例，随机分为常规带教模式对照组（n=28）与采用问题基础教学模式带教实验组（n=28），对比带教效果。结果：实验组理论考核评分、实际操作评分、病例诊断考核成绩均高于对照组,教学工作满意度高于对照组结论：在心内科临床带教中采用问题基础教学模式能够有效提高教学效果，有利于拉近带教老师和实习医师之间的距离，值得推广。'
        },
        {
          name: '探讨在心内科临床带教中采用问题基础教学模式的应用价值',
          img:
            'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg',
          yearMonth: '2020.09',
          day: '17',
          span: 7,
          offset: 1,
          text:
            '问题基础教学模式（PBL）最早由美国神经病学教授Barrows所提出，主要内容包括提出问题、建立加设、收集资料、论证加设、总结五项，其要求以解决临床实际问题为出发点，充分尊重实际医师的主体地位，围绕疾病的诊断、治疗等核心问题，进行讨论式的学习。目前PBL教学模式在国内已经有了较多的应用，其对提高教学效果的价值也得到了充分的验证[1]。我院为提高心内科诊疗水平，本次研究将问题基础教学模式应用到了心内科临床带教工作之中，旨在验证的问题基础教学模式在心内科临床带教中的应用价值，现报告如下。'
        },
        {
          name:
            '对照组采用常规临床带教方案，按照临床带教大纲，由带教老师进行课程内容的讲解，每日讲解时间为50min',
          img:
            'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg',
          yearMonth: '2020.09',
          day: '17',
          span: 7,
          offset: 1,
          text:
            '选择我院2018年1月至2019年1月心内科接收实习生计56例，随机分为常规带教模式对照组（n=28）与采用问题基础教学模式带教实验组（n=28）。对照组中男15例，女13例，年龄20～25岁，均数（22.41±1.03）岁，实验组中男16例，女12例，年龄20～25岁，均数（22.36±0.98）岁，两组基础资料对比，P>0.05，具有可比性。纳入研究对象上期期末考试均无挂科，自愿参加本次研究，排除不同意参与本次研究者。'
        }
      ]
    }
  },
  created () {},
  mounted () {},
  methods: {
    toGeneralNewsPage () {
      this.$router.push({
        path: 'GeneralNewsPage',
        query: { pName: this.pageName }
      })
      window.scrollTo(0, 0)
    },
    toBreviary () {
      this.$router.push({ path: this.pageName })
      window.scrollTo(0, 0)
    },
    changePage (name) {
      this.pageName = name
      if (name === 'News') {
        this.showmode2 = false
        this.showmode3 = false
        this.showmode4 = false
      } else if (name === 'MedicalService') {
        this.showmode2 = true
        this.showmode3 = false
        this.showmode4 = false
      } else if (name === 'PartyCulture') {
        this.showmode2 = false
        this.showmode3 = true
        this.showmode4 = false
      } else if (name === 'ProjectPublic') {
        this.showmode2 = false
        this.showmode3 = false
        this.showmode4 = true
      }
    }
  },
  beforeDestroy () {}
}
</script>

<style scoped>
.content-news {
  width: 100%;
  height: 600px;
}
.content-news-li1 {
  list-style: none;
  float: left;
  margin-right: 8%;
  position: relative;
  left: -40px;
}
.content-news-li2 {
  list-style: none;
  float: left;
  margin-right: 8%;
  position: relative;
  left: -40px;
}
.content-news-li3 {
  list-style: none;
  float: left;
  margin-right: 8%;
  position: relative;
  left: -40px;
}
.content-news-li4 {
  list-style: none;
  float: left;
  margin-right: 8%;
  position: relative;
  left: -40px;
}
.content-news-li1.active,
.content-news-li2.active,
.content-news-li3.active,
.content-news-li4.active
{
  color: #377eb6;
}
.content-news-li1:hover ,
.content-news-li2:hover ,
.content-news-li3:hover ,
.content-news-li4:hover {
  cursor: pointer;
  color: #377eb6;
}
.div_img {
  width: 350px;
  height: 210px;
  overflow: hidden;
}
.img {
  width: 350px;
  height: 210px;
  transition: all 0.4s;
}
.img:hover {
  cursor: pointer;
  transform: scale(1.2);
}
.img_p {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -40px;
  padding: 0 0 0 25px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}
.img_p:hover {
  cursor: pointer;
  color: #377eb6;
}
.new_main {
  line-height: 60px;
  margin: 0 0 1% 0;
}
.new_date_pa {
  font-family: Arial;
  font-size: 30px;
  line-height: 10px;
}
.new_date_pb {
  font-family: Arial;
  font-size: 16px;
  line-height: 1px;
}
.new_text {
  height: 60px;
  overflow: hidden;
}
.new_text_title {
  margin-bottom: 6px;
  font-size: 18px;
  line-height: 32px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.new_text_title:hover {
  cursor: pointer;
  color: #377eb6;
}
.new_text_p {
  font-size: 12px;
  color: #707070;
  line-height: 18px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-indent: 2em;
}
.new_text_p:hover {
  cursor: pointer;
  color: #377eb6;
}
</style>
