<template>
  <a-layout-content>
    <Breadcrumb :page-name="pageName" />
    <div class="main">
      <p style="font-size:25px;margin-bottom:0;">{{pageName}}</p>
      <a-row v-for="(item,index) in list" :key="index">
        <p class="generic_name">{{item.depName}}</p>
        <div style="height:200px;width:100%">
          <div v-for="(cell,i) in item.departments" :key="i">
            <div>
              <a-button style="width:160px;height:45px" @click="onClick(cell)">{{cell}}</a-button>
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
      pageName: '科室导航',
      list: [
        {
          depName: '外科系统',
          departments: [
            '外科科室1',
            '外科科室2',
            '外科科室3',
            '外科科室4',
            '外科科室5',
            '外科科室6',
            '外科科室7',
            '外科科室8',
            '外科科室9'
          ]
        },
        {
          depName: '内科系统',
          departments: [
            '内科科室1',
            '内科科室2',
            '内科科室3',
            '内科科室4',
            '内科科室5',
            '内科科室6',
            '内科科室7',
            '内科科室8',
            '内科科室9'
          ]
        },
        {
          depName: '医技科室',
          departments: [
            '医技科室1',
            '医技科室2',
            '医技科室3',
            '医技科室4',
            '医技科室5',
            '医技科室6',
            '医技科室7',
            '医技科室8',
            '医技科室9'
          ]
        },
        {
          depName: '门诊科室',
          departments: [
            '门诊科室1',
            '门诊科室2',
            '门诊科室3',
            '门诊科室4',
            '门诊科室5',
            '门诊科室6',
            '门诊科室7',
            '门诊科室8',
            '门诊科室9'
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
    }
  },
  beforeDestroy () {}
}
</script>

<style scoped>
.main {
  margin: 1% 20%;
}
.main div {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 10px 0 0;
}
.generic_name {
  text-align: left;
  font-size: 20px;
  line-height: 20px;
}
</style>
