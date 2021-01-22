<template>
  <a-layout-content>
    <Breadcrumb :page-name="pageName" />
    <div class="main">
      <p style="font-size:25px;margin-bottom:0">{{pageName}}</p>
      <a-row v-for="item of toList(newsList)" :key="item.id">
        <a-col :span="8" v-for="(cell,i) in item" :key="i">
          <a-card class="card" @click="toGeneralPage">
            <div class="div_newsimg">
              <img :src="cell.img" class="news_img" />
            </div>
            <p class="title">{{cell.name}}</p>
            <p class="text">{{cell.text | ellipsis}}</p>
            <br />
            <p class="time">{{cell.time}}</p>
          </a-card>
        </a-col>
      </a-row>
      <a-button @click="loadMore">查看更多</a-button>
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
      pageName: '文明城市',
      newsList: [
        {
          img:
            'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg',
          name: '今天吃饭今天吃饭今天吃饭今天吃饭今天吃饭',
          time: '2020.09.16',
          no: 1,
          text:
            '鸡腿洗净去骨切成块，加入适量盐，胡椒粉，生抽，蚝油，少许食用油搅拌均匀腌制十分钟备用。香菇洗净提前泡发好备用。土豆去皮切成块，姜切成片备用。热锅冷油，下姜片煸香。放入腌好的鸡肉翻炒一分钟。香菇撕小块放入翻炒均匀。把土豆块放入翻炒均匀。加入适量热水及泡香菇的水大火烧开转中火焖煮廿分钟，调入少许盐。待汤汁快收干时即可关火。'
        },
        {
          img:
            'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg',
          name: '明天吃饭',
          time: '2020.09.16',
          no: 2,
          text:
            '鸡腿洗净去骨切成块，加入适量盐，胡椒粉，生抽，蚝油，少许食用油搅拌均匀腌制十分钟备用。香菇洗净提前泡发好备用。土豆去皮切成块，姜切成片备用。热锅冷油，下姜片煸香。放入腌好的鸡肉翻炒一分钟。香菇撕小块放入翻炒均匀。把土豆块放入翻炒均匀。加入适量热水及泡香菇的水大火烧开转中火焖煮廿分钟，调入少许盐。待汤汁快收干时即可关火。'
        },
        {
          img:
            'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg',
          time: '2020.09.16',
          name: '每天吃饭',
          text:
            '鸡腿洗净去骨切成块，加入适量盐，胡椒粉，生抽，蚝油，少许食用油搅拌均匀腌制十分钟备用。香菇洗净提前泡发好备用。土豆去皮切成块，姜切成片备用。热锅冷油，下姜片煸香。放入腌好的鸡肉翻炒一分钟。香菇撕小块放入翻炒均匀。把土豆块放入翻炒均匀。加入适量热水及泡香菇的水大火烧开转中火焖煮廿分钟，调入少许盐。待汤汁快收干时即可关火。'
        },
        {
          img:
            'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg',
          time: '2020.09.16',
          name: '吃什么饭',
          text:
            '鸡腿洗净去骨切成块，加入适量盐，胡椒粉，生抽，蚝油，少许食用油搅拌均匀腌制十分钟备用。香菇洗净提前泡发好备用。土豆去皮切成块，姜切成片备用。热锅冷油，下姜片煸香。放入腌好的鸡肉翻炒一分钟。香菇撕小块放入翻炒均匀。把土豆块放入翻炒均匀。加入适量热水及泡香菇的水大火烧开转中火焖煮廿分钟，调入少许盐。待汤汁快收干时即可关火。'
        },
        {
          img:
            'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg',
          time: '2020.09.16',
          name: '5',
          text:
            '鸡腿洗净去骨切成块，加入适量盐，胡椒粉，生抽，蚝油，少许食用油搅拌均匀腌制十分钟备用。香菇洗净提前泡发好备用。土豆去皮切成块，姜切成片备用。热锅冷油，下姜片煸香。放入腌好的鸡肉翻炒一分钟。香菇撕小块放入翻炒均匀。把土豆块放入翻炒均匀。加入适量热水及泡香菇的水大火烧开转中火焖煮廿分钟，调入少许盐。待汤汁快收干时即可关火。'
        },
        {
          img:
            'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg',
          time: '2020.09.16',
          name: '6',
          text:
            '鸡腿洗净去骨切成块，加入适量盐，胡椒粉，生抽，蚝油，少许食用油搅拌均匀腌制十分钟备用。香菇洗净提前泡发好备用。土豆去皮切成块，姜切成片备用。热锅冷油，下姜片煸香。放入腌好的鸡肉翻炒一分钟。香菇撕小块放入翻炒均匀。把土豆块放入翻炒均匀。加入适量热水及泡香菇的水大火烧开转中火焖煮廿分钟，调入少许盐。待汤汁快收干时即可关火。'
        },
        {
          img:
            'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg',
          name: '7'
        },
        {
          img:
            'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg',
          name: '8'
        },
        {
          img:
            'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg',
          name: '9'
        }
      ]
    }
  },
  created () {},
  mounted () {},
  methods: {
    toList (list) {
      let index = 0
      let count = 3
      let arrTemp = []
      let experts = this.newsList
      for (let i = 0; i < this.newsList.length; i++) {
        index = parseInt(i / count)
        if (arrTemp.length <= index) {
          arrTemp.push([])
        }
        arrTemp[index].push(experts[i])
      }
      return arrTemp
    },
    toGeneralPage () {
      this.$router.push({ path: 'GeneralNewsPage' })
      window.scrollTo(0, 0)
    },
    loadMore () {
      this.newsList.push({
        img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600939836885&di=328661cfd63ddb5d757b8628e50940b2&imgtype=0&src=http%3A%2F%2Fimg.nga.178.com%2Fattachments%2Fmon_202008%2F10%2F-klbw3Q5-cpvaKvT1kSeo-aa.jpg.thumb.jpg',
        name: '今天吃饭今天吃饭今天吃饭今天吃饭今天吃饭',
        time: '2020.09.16',
        no: 10,
        text:
            '鸡腿洗净去骨切成块，加入适量盐，胡椒粉，生抽，蚝油，少许食用油搅拌均匀腌制十分钟备用。香菇洗净提前泡发好备用。土豆去皮切成块，姜切成片备用。热锅冷油，下姜片煸香。放入腌好的鸡肉翻炒一分钟。香菇撕小块放入翻炒均匀。把土豆块放入翻炒均匀。加入适量热水及泡香菇的水大火烧开转中火焖煮廿分钟，调入少许盐。待汤汁快收干时即可关火。'

      },
      {
        img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600939897072&di=88cb94a4d6a2bf6b74dbce62bd0694aa&imgtype=0&src=http%3A%2F%2Fimg.nga.178.com%2Fattachments%2Fmon_202009%2F20%2F-9lddQ5-h6cvK1gT1kS94-92.jpg',
        name: '今天吃饭今天吃饭今天吃饭今天吃饭今天吃饭',
        time: '2020.09.16',
        no: 11,
        text:
            '鸡腿洗净去骨切成块，加入适量盐，胡椒粉，生抽，蚝油，少许食用油搅拌均匀腌制十分钟备用。香菇洗净提前泡发好备用。土豆去皮切成块，姜切成片备用。热锅冷油，下姜片煸香。放入腌好的鸡肉翻炒一分钟。香菇撕小块放入翻炒均匀。把土豆块放入翻炒均匀。加入适量热水及泡香菇的水大火烧开转中火焖煮廿分钟，调入少许盐。待汤汁快收干时即可关火。'

      },
      {
        img:
            'https://i0.hdslb.com/bfs/article/dc305df04f94e8cdb2cebe96a1691b6e276b2e42.jpg@672w_498h.webp',
        name: '今天吃饭今天吃饭今天吃饭今天吃饭今天吃饭',
        time: '2020.09.16',
        no: 12,
        text:
            '鸡腿洗净去骨切成块，加入适量盐，胡椒粉，生抽，蚝油，少许食用油搅拌均匀腌制十分钟备用。香菇洗净提前泡发好备用。土豆去皮切成块，姜切成片备用。热锅冷油，下姜片煸香。放入腌好的鸡肉翻炒一分钟。香菇撕小块放入翻炒均匀。把土豆块放入翻炒均匀。加入适量热水及泡香菇的水大火烧开转中火焖煮廿分钟，调入少许盐。待汤汁快收干时即可关火。'

      },
      {
        img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600939897072&di=88cb94a4d6a2bf6b74dbce62bd0694aa&imgtype=0&src=http%3A%2F%2Fimg.nga.178.com%2Fattachments%2Fmon_202009%2F20%2F-9lddQ5-h6cvK1gT1kS94-92.jpg',
        name: '今天吃饭今天吃饭今天吃饭今天吃饭今天吃饭',
        time: '2020.09.16',
        no: 13,
        text:
            '鸡腿洗净去骨切成块，加入适量盐，胡椒粉，生抽，蚝油，少许食用油搅拌均匀腌制十分钟备用。香菇洗净提前泡发好备用。土豆去皮切成块，姜切成片备用。热锅冷油，下姜片煸香。放入腌好的鸡肉翻炒一分钟。香菇撕小块放入翻炒均匀。把土豆块放入翻炒均匀。加入适量热水及泡香菇的水大火烧开转中火焖煮廿分钟，调入少许盐。待汤汁快收干时即可关火。'

      },
      {
        img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600939897072&di=88cb94a4d6a2bf6b74dbce62bd0694aa&imgtype=0&src=http%3A%2F%2Fimg.nga.178.com%2Fattachments%2Fmon_202009%2F20%2F-9lddQ5-h6cvK1gT1kS94-92.jpg',
        name: '今天吃饭今天吃饭今天吃饭今天吃饭今天吃饭',
        time: '2020.09.16',
        no: 14,
        text:
            '鸡腿洗净去骨切成块，加入适量盐，胡椒粉，生抽，蚝油，少许食用油搅拌均匀腌制十分钟备用。香菇洗净提前泡发好备用。土豆去皮切成块，姜切成片备用。热锅冷油，下姜片煸香。放入腌好的鸡肉翻炒一分钟。香菇撕小块放入翻炒均匀。把土豆块放入翻炒均匀。加入适量热水及泡香菇的水大火烧开转中火焖煮廿分钟，调入少许盐。待汤汁快收干时即可关火。'

      },
      {
        img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600939897072&di=88cb94a4d6a2bf6b74dbce62bd0694aa&imgtype=0&src=http%3A%2F%2Fimg.nga.178.com%2Fattachments%2Fmon_202009%2F20%2F-9lddQ5-h6cvK1gT1kS94-92.jpg',
        name: '今天吃饭今天吃饭今天吃饭今天吃饭今天吃饭',
        time: '2020.09.16',
        no: 15,
        text:
            '鸡腿洗净去骨切成块，加入适量盐，胡椒粉，生抽，蚝油，少许食用油搅拌均匀腌制十分钟备用。香菇洗净提前泡发好备用。土豆去皮切成块，姜切成片备用。热锅冷油，下姜片煸香。放入腌好的鸡肉翻炒一分钟。香菇撕小块放入翻炒均匀。把土豆块放入翻炒均匀。加入适量热水及泡香菇的水大火烧开转中火焖煮廿分钟，调入少许盐。待汤汁快收干时即可关火。'

      },
      {
        img:
            'https://i0.hdslb.com/bfs/article/31c7cb6c8d4a7a761b908011ad46c41025eef923.jpg@524w_1008h.webp',
        name: '今天吃饭今天吃饭今天吃饭今天吃饭今天吃饭',
        time: '2020.09.16',
        no: 16,
        text:
            '鸡腿洗净去骨切成块，加入适量盐，胡椒粉，生抽，蚝油，少许食用油搅拌均匀腌制十分钟备用。香菇洗净提前泡发好备用。土豆去皮切成块，姜切成片备用。热锅冷油，下姜片煸香。放入腌好的鸡肉翻炒一分钟。香菇撕小块放入翻炒均匀。把土豆块放入翻炒均匀。加入适量热水及泡香菇的水大火烧开转中火焖煮廿分钟，调入少许盐。待汤汁快收干时即可关火。'

      },
      {
        img:
            'https://i0.hdslb.com/bfs/article/31c7cb6c8d4a7a761b908011ad46c41025eef923.jpg@524w_1008h.webp',
        name: '今天吃饭今天吃饭今天吃饭今天吃饭今天吃饭',
        time: '2020.09.16',
        no: 17,
        text:
            '鸡腿洗净去骨切成块，加入适量盐，胡椒粉，生抽，蚝油，少许食用油搅拌均匀腌制十分钟备用。香菇洗净提前泡发好备用。土豆去皮切成块，姜切成片备用。热锅冷油，下姜片煸香。放入腌好的鸡肉翻炒一分钟。香菇撕小块放入翻炒均匀。把土豆块放入翻炒均匀。加入适量热水及泡香菇的水大火烧开转中火焖煮廿分钟，调入少许盐。待汤汁快收干时即可关火。'

      },
      {
        img:
            'https://i0.hdslb.com/bfs/article/31c7cb6c8d4a7a761b908011ad46c41025eef923.jpg@524w_1008h.webp',
        name: '今天吃饭今天吃饭今天吃饭今天吃饭今天吃饭',
        time: '2020.09.16',
        no: 18,
        text:
            '鸡腿洗净去骨切成块，加入适量盐，胡椒粉，生抽，蚝油，少许食用油搅拌均匀腌制十分钟备用。香菇洗净提前泡发好备用。土豆去皮切成块，姜切成片备用。热锅冷油，下姜片煸香。放入腌好的鸡肉翻炒一分钟。香菇撕小块放入翻炒均匀。把土豆块放入翻炒均匀。加入适量热水及泡香菇的水大火烧开转中火焖煮廿分钟，调入少许盐。待汤汁快收干时即可关火。'

      })
    }
  },
  beforeDestroy () {}
}
</script>

<style scoped>
.main {
  margin: 0 19% 5%;
}
.div_newsimg {
  width: 340px;
  height: 200px;
  overflow: hidden;
  margin-bottom: 10px;
}
.news_img {
  width: 340px;
  height: 200px;
  transition: all 0.4s;
}
.news_img:hover {
  cursor: pointer;
  transform: scale(1.2);
}
.card {
  height: 450px;
}
.title {
  font-size: 20px;
  font-weight: bolder;
  text-align: left;
  height: 60px;
  overflow: hidden;
}
.title:hover {
  color: #377eb6;
  cursor: pointer;
}
.text {
  text-align: left;
  margin: 0;
  height: 80px;
}
.time {
  text-align: left;
  margin: 0;
}
</style>
