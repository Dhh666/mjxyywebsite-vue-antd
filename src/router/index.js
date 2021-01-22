import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/Content',
      children: [
        {
          path: 'Content',
          name: '首页',
          component: () => import('@/layout/components/Content'),
          meta: { title: '首页', breadNumber: 1, toPath: '/components/Content' }
        },
        {
          path: 'HospitalIntroduce',
          name: '医院概况',
          component: () => import('@/views/hospital-summarize/HospitalIntroduce'),
          meta: { title: '医院概况', breadNumber: 1, toPath: '/Content/HospitalIntroduce' }
        },
        {
          path: 'News',
          name: '医院动态',
          component: () => import('@/views/hos-news/News'),
          meta: { title: '医院新闻', breadNumber: 1, toPath: '/Content/News' }
        },
        {
          path: 'CultureLife',
          name: '医院动态',
          component: () => import('@/views/hos-news/CultureLife'),
          meta: { title: '文化生活', breadNumber: 1, toPath: '/Content/CultureLife' }
        },
        {
          path: 'GeneralNewsPage',
          name: '通用新闻页',
          component: () => import('@/components/GeneralPage/GeneralNewsPage'),
          meta: { title: '通用新闻页', breadNumber: 2, toPath: '/Content/CultureLife/GeneralNewsPage' }
        },
        {
          path: 'Department',
          name: '科室导航',
          component: () => import('@/views/department/Department'),
          meta: { title: '科室导航', breadNumber: 1, toPath: '/Content/Department' }
        },
        {
          path: 'GenealDepPage',
          name: '科室导航',
          component: () => import('@/components/GeneralPage/GenealDepPage'),
          meta: { title: '科室通用页', breadNumber: 1, toPath: '/Content/Department/GenealDepPage' }
        },
        {
          path: 'Doctor',
          name: '医生介绍',
          component: () => import('@/views/doctor/Doctor'),
          meta: { title: '医生介绍', breadNumber: 1, toPath: '/Content/Doctor' }
        },
        {
          path: 'GeneralDocPage',
          name: '医生介绍',
          component: () => import('@/components/GeneralPage/GeneralDocPage'),
          meta: { title: '医生通用页', breadNumber: 1, toPath: '/Content/Doctor/GeneralDocPage' }
        },
        {
          path: 'PartyCulture',
          name: '党的建设',
          component: () => import('@/views/comparty-build/PartyCulture'),
          meta: { title: '党建文化', breadNumber: 1, toPath: '/Content/PartyCulture' }
        },
        {
          path: 'BranchLife',
          name: '党的建设',
          component: () => import('@/views/comparty-build/BranchLife'),
          meta: { title: '支部生活', breadNumber: 1, toPath: '/Content/BranchLife' }
        },
        {
          path: 'CivilizedCity',
          name: '党的建设',
          component: () => import('@/views/comparty-build/CivilizedCity'),
          meta: { title: '文明城市', breadNumber: 1, toPath: '/Content/CivilizedCity' }
        },
        {
          path: 'TwoStudiesOneAction',
          name: '党的建设',
          component: () => import('@/views/comparty-build/TwoStudiesOneAction'),
          meta: { title: '两学一做', breadNumber: 1, toPath: '/Content/TwoStudiesOneAction' }
        },
        {
          path: 'VolunteerService',
          name: '党的建设',
          component: () => import('@/views/comparty-build/VolunteerService'),
          meta: { title: '志愿服务', breadNumber: 1, toPath: '/Content/VolunteerService' }
        },
        {
          path: 'HonestAdministion',
          name: '党的建设',
          component: () => import('@/views/comparty-build/HonestAdministion'),
          meta: { title: '党风廉政', breadNumber: 1, toPath: '/Content/HonestAdministion' }
        },
        {
          path: 'Public',
          name: '院务公开',
          component: () => import('@/views/hos-public/HealthService'),
          meta: { title: '院务公开', breadNumber: 1, toPath: '/Content/HealthService' }
        },
        {
          path: 'HealthService',
          name: '院务公开',
          component: () => import('@/views/hos-public/HealthService'),
          meta: { title: '医疗服务', breadNumber: 1, toPath: '/Content/HealthService' }
        },
        {
          path: 'TenderNotice',
          name: '院务公开',
          component: () => import('@/views/hos-public/TenderNotice'),
          meta: { title: '项目公示', breadNumber: 1, toPath: '/Content/TenderNotice' }
        },
        {
          path: 'ProjectPublic',
          name: '院务公开',
          component: () => import('@/views/hos-public/ProjectPublic'),
          meta: { title: '招标公告', breadNumber: 1, toPath: '/Content/ProjectPublic' }
        },
        {
          path: 'PoliticDocument',
          name: '政策文件',
          component: () => import('@/views/politic-document/PoliticDocument'),
          meta: { title: '政策文件', breadNumber: 1, toPath: '/Content/PoliticDocument' }
        },
        {
          path: 'PolitiCunscramble',
          name: '政策文件',
          component: () => import('@/views/politic-document/PolitiCunscramble'),
          meta: { title: '政策解读', breadNumber: 1, toPath: '/Content/PolitiCunscramble' }
        },
        {
          path: 'TalentRecruitment',
          name: '人才招聘',
          component: () => import('@/views/talent-recruitment/TalentRecruitment'),
          meta: { title: '人才招聘', breadNumber: 1, toPath: '/Content/TalentRecruitment' }
        },
        {
          path: 'OutpatientGuide',
          name: '医疗服务',
          component: () => import('@/views/medical-service/OutpatientGuide.vue'),
          meta: { title: '门诊指南', breadNumber: 1, toPath: '/Content/OutpatientGuide' }
        },
        {
          path: 'HealthEducation',
          name: '医疗服务',
          component: () => import('@/views/medical-service/HealthEducation.vue'),
          meta: { title: '健康教育', breadNumber: 1, toPath: '/Content/HealthEducation' }
        },
        {
          path: 'SymptomList',
          name: '医疗服务',
          component: () => import('@/views/medical-service/SymptomList.vue'),
          meta: { title: '症状列表', breadNumber: 1, toPath: '/Content/SymptomList' }
        },
        {
          path: 'Rates',
          name: '医疗服务',
          component: () => import('@/views/medical-service/Rates.vue'),
          meta: { title: '收费标准', breadNumber: 1, toPath: '/Content/Rates' }
        },
        {
          path: 'MedicalService',
          name: '医疗服务',
          component: () => import('@/views/medical-service/MedicalService.vue'),
          meta: { title: '医疗服务', breadNumber: 1, toPath: '/Content/MedicalService' }
        },
        {
          path: 'WriteMessage',
          name: '患者留言',
          component: () => import('@/views/patient-message/WriteMessage.vue'),
          meta: { title: '签写留言', breadNumber: 1, toPath: '/Content/WriteMessage' }
        },
        {
          path: 'MessageList',
          name: '患者留言',
          component: () => import('@/views/patient-message/MessageList.vue'),
          meta: { title: '留言列表', breadNumber: 1, toPath: '/Content/MessageList' }
        }
      ]
    }
  ]
})
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
