<template>
  <a-col :span="7" :offset="1" class="content-activity">
    <h1 style="font-size: 25px; line-height: 59px">招标公告</h1>
    <div v-for="(item,index) in list" :key="index">
      <a-card style="margin-top: 10px">{{item | ellipsis}}</a-card>
    </div>
  </a-col>
</template>

<script>
export default {
  filters: {
    ellipsis (value) {
      if (!value) return ''
      if (value.length > 39) {
        return value.slice(0, 39) + '...'
      }
      return value
    }
  },
  data () {
    return {
      list: [
        '招标公告招标公告招标公告招标公告招标公告招标公告招标公告招标公告招标公告招标公告招标公告招标公告招标公告1',
        '招标公告招标公告招标公告招标公告招标公告2',
        '招标公告招标公告招标公告招标公告招标公告3',
        '招标公告招标公告招标公告招标公告招标公告4'
      ]
    }
  }
}
</script>

<style scoped>
.content-notice-activity {
  height: 400px;
  margin-top: 100px;
}
</style>
