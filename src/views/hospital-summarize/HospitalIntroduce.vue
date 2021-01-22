<template>
  <a-layout-content>
    <Breadcrumb />
    <div id="card" class="card_first">
      <div class="img imgAnimationLeft" id="hospital-intro-card">
        <img src="@/assets/医院门口1.jpg" />
      </div>
      <div class="imgAnimationRight card-right">
        <div>
          <h1 style="font-size:25px;line-height:60px;text-align: left;">医院简介</h1>
        </div>
        <p style="font-size:16px;line-height:2.5;text-align: left;">
          墨江县人民医院成立于1950年8月,现有在职工206人，
          专业技术人员180人,医院等级：二级甲等医院类型：
          综合医院墨江县人民医院位于云南省墨江县新建路54号，医院的联系电话是0879-4232742
        </p>
      </div>
    </div>
    <div class="breadcrumb-class">
      <h1 id="team" style="font-size:25px;text-align:center">领导队伍</h1>
      <img src="@/assets/领导队伍.jpg" style="width:100%;height:700px" />
    </div>
    <div class="breadcrumb-class">
      <h1 id="culture" style="font-size:25px;text-align:center">文化理念</h1>
      <img src="@/assets/领导队伍.jpg" style="width:100%;height:700px" />
    </div>
    <div class="breadcrumb-class">
      <h1 id="location" style="font-size:25px;text-align:center">地理位置</h1>
      <img src="@/assets/领导队伍.jpg" style="width:100%;height:700px" />
    </div>
    <div class="breadcrumb-class">
      <h1 id="incorrupt" style="font-size:25px;text-align:center">廉政理念</h1>
      <img src="@/assets/领导队伍.jpg" style="width:100%;height:700px" />
    </div>
  </a-layout-content>
</template>

<script>
// import Curmbs from '@/components/Curmbs'
// import NvaMenuRight from '@/components/NvaMenuRight'
import Breadcrumb from '@/components/Breadcrumb'

export default {
  components: {
    // Curmbs,
    // NvaMenuRight
    Breadcrumb
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  created () {
    this.$nextTick(() => {
      this.getlocal()
    })
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  methods: {
    getlocal () {
      let select = localStorage.getItem('id')
      let elm = document.getElementById(select)
      if (select) {
        elm.scrollIntoView(true)
      }
    }
  },
  beforeDestroy () {
    localStorage.setItem('id', '')
  }
}
</script>

<style scoped>
.h12 {
  line-height: 2;
  margin-bottom: 30px;
  text-align: center;
  font-size: 24px;
  color: #000000;
}
.card-right {
  position: absolute;
  right: 0;
  top: 250px;
  padding: 60px 55px 55px 55px;
  width: 600px;
  height: 350px;
  background-color: #fff;
  box-shadow: 0px 0px 35px 0px rgba(1, 1, 1, 0.14);
}
@media (min-width: 768px) {
  .card_first {
    width: 450px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 156px;
  }
}
@media (min-width: 992px) {
  .card_first {
    width: 670px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 156px;
  }
}
@media (min-width: 1200px) {
  .card_first {
    width: 870px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 156px;
  }
}
@media (min-width: 1600px) {
  .card_first {
    width: 1270px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 720px;
  }
  .img {
    padding-bottom: 46px;
    width: 750px;
    height: 494px;
    position: absolute;
    z-index: 0;
  }
  /*动画名字， 动画运行的时间，alternate平滑过渡， infinite是反复执行*/
  .imgAnimationLeft {
    animation-name: imgAnimationLeft;
    animation: imgAnimationLeft 2s alternate;
    -webkit-animation: imgAnimationLeft 2s alternate;
    -moz-animation: imgAnimationLeft 2s alternate infinite;
  }
  .imgAnimationRight {
    animation-name: imgAnimationRight;
    animation: imgAnimationRight 2s alternate;
    -webkit-animation: imgAnimationRight 2s alternate;
    -moz-animation: imgAnimationRight 2s alternate infinite;
  }
  @-webkit-keyframes imgAnimationLeft {
    0% {
      opacity: 0;
      left: -2000px;
    }
    100% {
      opacity: 1;
      left: 7.5%;
      margin-left: -95px;
    }
  }
  @-webkit-keyframes imgAnimationRight {
    0% {
      opacity: 0;
      left: 2000px;
    }
    100% {
      opacity: 1;
      left: 45.5%;
      margin-left: 95px;
    }
  }
}
.breadcrumb-class {
  color: #7d8493;
  text-align: justify;
  -ms-flex-item-align: center;
  align-self: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: clip;
}
@media (min-width: 768px) {
  .breadcrumb-class {
    width: 450px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
}
@media (min-width: 992px) {
  .breadcrumb-class {
    width: 670px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
}
@media (min-width: 1200px) {
  .breadcrumb-class {
    width: 870px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
}
@media (min-width: 1600px) {
  .breadcrumb-class {
    width: 1270px;
    margin: 0 auto;
    margin-bottom: 5%;
    position: relative;
    z-index: 1;
  }
}
</style>
