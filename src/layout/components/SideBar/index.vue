<template>
  <div class="right-sidebar">
    <ul style="width: 100px">
      <li
        style="list-style:none"
        v-for="(item, index) in itemList"
        :key="index"
        :value="item.value"
        :label="item.label"
        @mouseenter="enters(index)"
        @mouseleave="leaver(index)"
      >
        <div class="right-sidebar-items" v-show="switchNice[index].arry">
          <div v-if="item.imgUrl">
            <a-popover  placement="left">
              <template slot="content">
                <img style="height: 150px;width: 150px" :src="item.imgUrl" alt="">
              </template>
              <p class="right-sidbar-p">
                {{item.name}}
              </p>
            </a-popover>
          </div>
          <div v-else>
            <p class="right-sidbar-p">{{item.name}}</p>
          </div>
        </div>
        <div class="right-sidebar-items-after" v-show="switchNice[index].arrys">
          <a-icon :type="item.icon" style="font-size:40px;padding:10px" />
        </div>
      </li>
      <li style="list-style:none">
        <a-back-top />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      itemList: [
        { index: 1, name: '门诊出诊', icon: 'calendar' },
        { index: 2, name: '专家介绍', icon: 'file-search' },
        { index: 3, name: '特色科室', icon: 'fork' },
        { index: 4, name: '公众号', icon: 'wechat', imgUrl: 'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/911a7002e11608fb581fffcde05d5257.jpg' },
        { index: 5, name: '大象就医', icon: 'medicine-box', imgUrl: 'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg' },
        { index: 6, name: '分享页面', icon: 'share-alt' }
      ],
      switchNice: [
        { arry: false, arrys: true },
        { arry: false, arrys: true },
        { arry: false, arrys: true },
        { arry: false, arrys: true },
        { arry: false, arrys: true },
        { arry: false, arrys: true },
        { arry: false, arrys: true }
      ]
    }
  },
  methods: {
    enters (index) {
      this.switchNice[index].arrys = false // 图片隐藏
      this.switchNice[index].arry = true // 文字显示
      for (let m = 0; m < this.switchNice.length; m++) {
        // 循环switchNice数组
        if (m === index) {
          this.switchNice[m].arry = true // 当数组和index相同时，文字显示
        } else {
          // 不同时，图片显示，文字隐藏
          this.switchNice[m].arry = false
          this.switchNice[m].arrys = true
        }
      }
    },
    leaver (index) {
      this.switchNice[index].arry = false // 文字隐藏
      this.switchNice[index].arrys = true // 图片显示
    }
  }
}
</script>

<style scoped>
.right-sidebar {
  position: fixed;
  right: 40px;
  top: 30%;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  z-index: 1001;
}
.right-sidebar-items {
  width: 60px;
  height: 60px;
  margin-bottom: 20%;
  background-color: #00355f;
  color: #fff;
  padding: 12% 6% 0 6%;
  border-radius: 2px;
  cursor: pointer;
}
.right-sidebar-items-after {
  width: 60px;
  height: 60px;
  margin-bottom: 20%;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 0 35px 5px rgba(41, 41, 41, 0.14);
  cursor: pointer;
}
.right-sidebar-p {
  white-space: pre-wrap;
  cursor: pointer;
}
</style>
