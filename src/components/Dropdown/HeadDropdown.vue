<template>
  <div>
    <a-dropdown placement="bottomCenter">
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
        <span @click="ToHomePage">首页</span>
      </a>
    </a-dropdown>
    <a-dropdown placement="bottomCenter">
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
        <span @click="ToHospitalSituation">医院概况</span>
      </a>
      <a-menu slot="overlay" @click="onClick">
        <a-menu-item key="1">医院介绍</a-menu-item>
        <a-menu-item key="2" @click="goto('team')">领导队伍</a-menu-item>
        <a-menu-item key="3" @click="goto('culture')">文化理念</a-menu-item>
        <a-menu-item key="4" @click="goto('location')">地理位置</a-menu-item>
        <a-menu-item key="5" @click="goto('incorrupt')">廉政理念</a-menu-item>
      </a-menu>
    </a-dropdown>
    <a-dropdown placement="bottomCenter">
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
        <span>医院动态</span>
      </a>
      <a-menu slot="overlay" @click="onClick">
        <a-menu-item key="6">医院新闻</a-menu-item>
        <a-menu-item key="7">文化生活</a-menu-item>
      </a-menu>
    </a-dropdown>
    <a-dropdown placement="bottomCenter">
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()"
        >医疗服务</a
      >
      <a-menu slot="overlay" @click="onClick">
        <a-menu-item key="8">门诊指南</a-menu-item>
        <a-menu-item key="9">健康教育</a-menu-item>
        <a-menu-item key="10">症状列表</a-menu-item>
        <a-menu-item key="11">收费标准</a-menu-item>
        <a-menu-item key="12">医疗服务</a-menu-item>
      </a-menu>
    </a-dropdown>
    <a-dropdown placement="bottomCenter">
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
        <span @click="toDepartment">科室导航</span>
      </a>
    </a-dropdown>
    <a-dropdown placement="bottomCenter">
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
        <span @click="toDoctor">名医荟萃</span>
      </a>
    </a-dropdown>
    <a-dropdown placement="bottomCenter">
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()"
        >党的建设</a
      >
      <a-menu slot="overlay" @click="onClick">
        <a-menu-item key="13">党建文化</a-menu-item>
        <a-menu-item key="14">支部生活</a-menu-item>
        <a-menu-item key="15">文明城市</a-menu-item>
        <a-menu-item key="16">两学一做</a-menu-item>
        <a-menu-item key="17">志愿服务</a-menu-item>
        <a-menu-item key="18">党风廉政</a-menu-item>
      </a-menu>
    </a-dropdown>
    <a-dropdown placement="bottomCenter">
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()"
        >患者留言</a
      >
      <a-menu slot="overlay" @click="onClick">
        <a-menu-item key="19">签写留言</a-menu-item>
        <a-menu-item key="20">留言列表</a-menu-item>
      </a-menu>
    </a-dropdown>
    <a-dropdown placement="bottomCenter">
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()"
        >院务公开</a
      >
      <a-menu slot="overlay" @click="onClick">
        <a-menu-item key="21">医疗服务</a-menu-item>
        <a-menu-item key="22">项目公示</a-menu-item>
        <a-menu-item key="23">招标公告</a-menu-item>
      </a-menu>
    </a-dropdown>
    <a-dropdown placement="bottomCenter">
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()"
        >政策文件</a
      >
      <a-menu slot="overlay" @click="onClick">
        <a-menu-item key="24">政策文件</a-menu-item>
        <a-menu-item key="25">政策解读</a-menu-item>
      </a-menu>
    </a-dropdown>
    <a-dropdown placement="bottomCenter">
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
        <span @click="ToTalentRecruitment">人才招聘</span>
      </a>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageName: ''
    }
  },
  methods: {
    onClick ({ key }) {
      if (key === '1') {
        this.$router.push({ path: 'HospitalIntroduce' })
      } else if (key === '2') {
        this.returnTop('#team')
      } else if (key === '3') {
        this.returnTop('#culture')
      } else if (key === '4') {
        this.returnTop('#location')
      } else if (key === '5') {
        this.returnTop('#incorrupt')
      } else if (key === '6') {
        this.$router.push({ path: 'News' })
      } else if (key === '7') {
        this.$router.push({ path: 'CultureLife' })
      } else if (key === '8') {
        this.$router.push({ path: 'OutpatientGuide' })
      } else if (key === '9') {
        this.$router.push({ path: 'HealthEducation' })
      } else if (key === '10') {
        this.$router.push({ path: 'SymptomList' })
      } else if (key === '11') {
        this.$router.push({ path: 'Rates' })
      } else if (key === '12') {
        this.$router.push({ path: 'MedicalService' })
      } else if (key === '13') {
        this.$router.push({ path: 'PartyCulture' })
      } else if (key === '14') {
        this.$router.push({ path: 'BranchLife' })
      } else if (key === '15') {
        this.$router.push({ path: 'CivilizedCity' })
      } else if (key === '16') {
        this.$router.push({ path: 'TwoStudiesOneAction' })
      } else if (key === '17') {
        this.$router.push({ path: 'VolunteerService' })
      } else if (key === '18') {
        this.$router.push({ path: 'HonestAdministion' })
      } else if (key === '19') {
        this.$router.push({ path: 'WriteMessage' })
      } else if (key === '20') {
        this.$router.push({ path: 'MessageList' })
      } else if (key === '21') {
        this.$router.push({ path: 'HealthService' })
      } else if (key === '22') {
        this.$router.push({ path: 'ProjectPublic' })
      } else if (key === '23') {
        this.$router.push({ path: 'TenderNotice' })
      } else if (key === '24') {
        this.$router.push({ path: 'PoliticDocument' })
      } else if (key === '25') {
        this.$router.push({ path: 'PoliticUnscramble' })
      } else {
        console.log(key)
        console.log('跳转失败')
      }
    },
    // onClick ({ key }) {
    //   const pages = {
    //     1: this.$router.push({ path: 'HospitalIntroduce' }),
    //     2: this.returnTop('#team'),
    //     3: this.returnTop('#culture'),
    //     4: this.returnTop('#location'),
    //     5: this.returnTop('#incorrupt'),
    //     6: this.$router.push({path: 'News'}),
    //     7: this.$router.push({ path: 'CultureLife' })
    //   }
    //   console.log(pages[key])
    //   return pages[key]
    // },
    ToHospitalSituation () {
      this.$router.push({ path: 'HospitalIntroduce' })
    },
    goto (id) {
      let select = id
      localStorage.setItem('id', select)
      this.$router.push({ path: 'HospitalIntroduce' })
    },
    returnTop: function (maodian) {
      document.querySelector(maodian).scrollIntoView({
        behavior: 'smooth'
      })
    },
    ToHomePage () {
      this.$router.push({ path: 'Content' })
    },
    ToHosDynamicState () {
      this.$router.push({ path: 'News' })
    },
    toDepartment () {
      this.$router.push({ path: 'Department' })
    },
    toDoctor () {
      this.$router.push({ path: 'Doctor' })
    },
    ToTalentRecruitment () {
      this.$router.push({ path: 'TalentRecruitment' })
    }
  }
}
</script>

<style scoped>
/* 头部导航栏按钮总设置 */
.ant-dropdown-link {
  /* 左右间距拉大 */
  padding: 0 20px;
  /* 字体颜色 */
  color: black;
  /* 按钮字体大小 */
  font-size: 17px;
}

/* 头部总导航栏hover颜色 */
.ant-dropdown-link:hover {
  color: #377eb6;
}

/* 头部总导航栏hover颜色(范围大)
a:hover{
    color: #377EB6;
} */

/* 头部导航栏选中后颜色（未起效） */
.ant-dropdown-link:focus {
  color: #377eb6;
}

/* 头部总导航栏下拉菜单设置 */
.ant-dropdown-menu {
  /* 下拉菜单位置下移 */
  top: 36px;
  /* 左右边距加大 */
  padding: 10px;
  /* 菜单字体居中 */
  text-align: center;
}
/* 下拉菜单子项设置 */
.ant-dropdown-menu-item {
  font-size: 16px;
}
/* 下拉菜单子项hover */
.ant-dropdown-menu-item:hover {
  background-color: white;
  color: #377eb6;
}
</style>
