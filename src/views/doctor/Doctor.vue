<template>
  <a-layout-content>
    <Breadcrumb :page-name="pageName" />
    <div class="main">
      <p style="font-size:25px;margin-bottom:0;">{{pageName}}</p>
      <a-row v-for="(item,index) in list" :key="index">
        <p class="generic_name">{{item.depName}}</p>
        <div class="big_chunk1">
          <div class="big_chunk2" v-for="(cell,i) in item.departments" :key="i">
            <div>
              <a-card style="width:350px;">
                  <p class="dep" @click="onClick(cell)">{{cell.dep}}</p>
                  <a-divider />
                  <div v-for="(doct,i) in cell.doctor" :key="i" style="float:left;">
                      <div class="doct" @click="ToDoctPage(doct)">{{doct}}</div>
                  </div>
              </a-card>
            </div>
          </div>
        </div>
        <a-divider />
      </a-row>
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
      if (value.length > 90) {
        return value.slice(0, 90) + '...'
      }
      return value
    }
  },
  data () {
    return {
      pageName: '医生介绍',
      list: [
        {
          depName: '外科系统',
          departments: [
            { dep: '外科科室1', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '外科科室2', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '外科科室3', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '外科科室4', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '外科科室5', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '外科科室6', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '外科科室7', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '外科科室8', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '外科科室9', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] }
          ]
        },
        {
          depName: '内科系统',
          departments: [
            { dep: '内科科室1', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '内科科室2', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '内科科室3', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '内科科室4', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '内科科室5', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '内科科室6', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '内科科室7', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '内科科室8', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '内科科室9', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] }
          ]
        },
        {
          depName: '医技科室',
          departments: [
            { dep: '医技科室1', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '医技科室2', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '医技科室3', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '医技科室4', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '医技科室5', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '医技科室6', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '医技科室7', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '医技科室8', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '医技科室9', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] }
          ]
        },
        {
          depName: '门诊科室',
          departments: [
            { dep: '门诊科室1', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '门诊科室2', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '门诊科室3', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '门诊科室4', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '门诊科室5', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '门诊科室6', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '门诊科室7', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '门诊科室8', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] },
            { dep: '门诊科室9', doctor: ['医生1', '医生2', '医生3', '医生4', '医生5', '医生6', '医生7', '医生8'] }
          ]
        }
      ]
    }
  },
  created () {},
  mounted () {},
  methods: {
    onClick (cell) {
      console.log(cell)
      this.$router.push({ path: 'GenealDepPage' })
      window.scrollTo(0, 0)
    },
    ToDoctPage (doct) {
      console.log(doct)
      this.$router.push({ path: 'GeneralDocPage' })
      window.scrollTo(0, 0)
    }
  },
  beforeDestroy () {}
}
</script>

<style scoped>
.main {
  margin: 1% 20%;
}
.big_chunk1 {
  display: flex;
  flex-wrap: wrap;
  height:auto;
  width:100%;
  margin-bottom:50px
}
.big_chunk2 {
  display: flex;
  flex-wrap: wrap;
  margin: 30px 30px 0 0;
}
.generic_name {
  text-align: left;
  font-size: 20px;
  line-height: 20px;
}
.dep{
font-size:16px;cursor: pointer;
}
.dep:hover{
  color: #377eb6;
}
.doct{
width:50px;margin:0 0 30px 20px;cursor: pointer;
}
.doct:hover{
  color: #377eb6;
}
</style>
