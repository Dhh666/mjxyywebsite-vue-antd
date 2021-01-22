<template>
  <a-col :span="16" class="content-department">
    <a-card style="height: 470px">
      <h1 style="font-size: 25px; line-height: 30px">科室介绍</h1>
      <a-divider />
      <a-row>
        <a-col :span="4" class="system">
          <p style="text-align: left; line-height: 65px">
            <a-button class="sys_button" style="background-color: #73a0bc"
              >外科系统</a-button
            >
          </p>
          <p style="text-align: left; line-height: 65px">
            <a-button class="sys_button" style="background-color: #71aab0"
              >内科系统</a-button
            >
          </p>
          <p style="text-align: left; line-height: 65px">
            <a-button class="sys_button" style="background-color: #8db4a6"
              >医技科室</a-button
            >
          </p>
          <p style="text-align: left; line-height: 65px">
            <a-button class="sys_button" style="background-color: #85aa8e"
              >门诊科室</a-button
            >
          </p>
        </a-col>
        <a-col :span="19" :offset="1">
          <div class="dep_main">
            <div v-for="item in list" :key="item.id">
              <div class="dep_div">
                <a-button style="width: 120px; height: 35px">{{
                  item
                }}</a-button>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </a-card>
  </a-col>
</template>

<script>
export default {
  data () {
    return {
      list: [
        '外科科室1',
        '外科科室2',
        '外科科室3',
        '外科科室4',
        '外科科室5',
        '外科科室6',
        '外科科室7',
        '外科科室8',
        '外科科室9',
        '外科科室10'
      ]
    }
  }
}
</script>

<style scoped>
.content-department {
  height: auto;
  text-align: left;
  margin-top: 50px;
  height: 30%;
  width: 66.6%;
}
.system {
  margin: 0%;
}
.sys_button {
  color: #fff;
  font-size: 16px;
  height: 40px;
  width: 120px;
}
.dep_main {
  display: -webkit-inline-box;
  flex-wrap: wrap;
  margin: 1%;
  height: 30%;
  width: 100%;
}
.dep_div {
  margin: 10px;
}
</style>
