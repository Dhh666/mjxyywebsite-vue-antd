<template>
  <a-layout-content>
    <Breadcrumb :page-name="pageName" />
    <div class="page_main">
      <a-row style="margin-bottom:60px">
        <a-col :span="12" style="line-height:40px;text-align:left;">
          <p style="font-size:25px;margin-bottom:0;line-height:100px;">{{pageName}}</p>
          <span
            style="font-size:15px;"
          >公司法士大夫是的安抚胜多负少东方第三方森岛帆高人个人讲课费喝咖啡文化疯狂会计法发好公司法士大夫是的安抚胜多负少东方第三方森岛帆高人个人讲课费喝咖啡文化疯狂会计法发好公司法士大夫是的安抚胜多负少东方第三方森岛帆高人个人</span>
        </a-col>
        <a-col :span="10" :offset="1">
          <img src="https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg" style="width:530px;height:320px;margin-top:45px">
        </a-col>
      </a-row>
      <a-divider />
      <a-row style="margin:60px 0">
        <a-col :span="7">
            <a-card title="科室主任">
                <a-row style="margin-bottom:30px;text-align:left">
                    <a-col :span="12">
                        <p style="font-size:20px;  font-weight: bolder;">{{depLeader}}</p>
                        <p>职称：主任医师</p>
                        <p>科室：{{pageName}}</p>
                        <p></p>
                    </a-col>
                    <a-col :span="12">
                        <img src="https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg" style="width:150px;height:auto">
                    </a-col>
                </a-row>
                <a-row>
                  <p style="line-height:30px">好久发货的刷卡恢复单身发的顺丰航空是的刷卡恢复单身发的顺丰航空是的刷卡恢复单身发的顺丰航空是的刷卡恢复单身发的顺丰航空是的刷卡恢复单身发的顺丰航空是否还看电视剧发快递是反倒是撒范德萨发都是范德萨按规定谁敢打各大公司的个</p>
                </a-row>
            </a-card>
        </a-col>
        <a-col :span="15" :offset="2">
            <p style="font-size:18px;line-height:40px;">门诊出诊</p>
          <a-table :columns="columns" :data-source="data" :pagination="false">
            <a slot="name" slot-scope="text">{{ text }}</a>
          </a-table>
        </a-col>
      </a-row>
      <a-divider />
      <a-row>
        <p style="font-size:18px;line-height:40px;">名医荟萃</p>
        <ContentSwiper />
      </a-row>
    </div>
  </a-layout-content>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import ContentSwiper from '@/components/Swiper/ContentSwiper'
const columns = [
  {
    title: '午别',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '周一',
    dataIndex: 'monday',
    key: 'monday'
  },
  {
    title: '周二',
    dataIndex: 'tuesday',
    key: 'tuesday'
  },
  {
    title: '周三',
    dataIndex: 'wednesday',
    key: 'wednesday'
  },
  {
    title: '周四',
    dataIndex: 'thursday',
    key: 'thursday'
  },
  {
    title: '周五',
    dataIndex: 'friday',
    key: 'friday'
  },
  {
    title: '周六',
    dataIndex: 'saturday',
    key: 'saturday'
  },
  {
    title: '周日',
    dataIndex: 'sunday',
    key: 'sunday'
  }
]

const data = [
  {
    key: '1',
    name: '上午',
    monday: '陈云册 主任医师',
    tuesday: '陈云册 主任医师',
    wednesday: '陈云册 主任医师',
    thursday: '陈云册 主任医师',
    friday: '陈云册 主任医师',
    saturday: '陈云册 主任医师',
    sunday: '陈云册 主任医师'
  },
  {
    key: '2',
    name: '下午',
    monday: '陈云册 主任医师',
    tuesday: '陈云册 主任医师',
    wednesday: '陈云册 主任医师',
    thursday: '陈云册 主任医师',
    friday: '陈云册 主任医师',
    saturday: '陈云册 主任医师',
    sunday: '陈云册 主任医师'
  }
]
export default {
  data () {
    return {
      pageName: '五官科',
      depLeader: '你猜',
      data,
      columns
    }
  },
  components: {
    Breadcrumb,
    ContentSwiper
  }
}
</script>

<style scoped>
.page_main {
  width: 1160px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
</style>
