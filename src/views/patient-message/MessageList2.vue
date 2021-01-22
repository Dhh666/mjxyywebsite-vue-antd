<template>
  <a-layout-content>
    <Breadcrumb :page-name="pageName" />
    <div class="main">
      <p style="font-size: 25px; margin-bottom: 0">{{ pageName }}</p>
      <div>
        <a-list>
          <RecycleScroller
            v-infinite-scroll="handleInfiniteOnLoad"
            style="height: 800px"
            :items="data"
            :item-size="100"
            key-field="email"
            :infinite-scroll-disabled="busy"
            :infinite-scroll-distance="10"
          >
            <a-list-item slot-scope="{ item }">
              <a-list-item-meta :description="item.email">
                <a slot="title" :href="item.href">{{ item.name.last }}</a>
                <a-avatar
                  slot="avatar"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              </a-list-item-meta>
              <div>Content {{ item.index }}</div>
            </a-list-item>
          </RecycleScroller>
          <a-spin v-if="loading" class="demo-loading" />
        </a-list>
      </div>
    </div>
  </a-layout-content>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import reqwest from 'reqwest'
import infiniteScroll from 'vue-infinite-scroll'
import { RecycleScroller } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
const fakeDataUrl =
  'https://randomuser.me/api/?results=10&inc=name,gender,email,nat&noinfo'
export default {
  directives: { infiniteScroll },
  components: {
    Breadcrumb,
    RecycleScroller
  },
  filters: {},
  data () {
    return {
      pageName: '留言列表',
      data: [],
      loading: false,
      busy: false
    }
  },
  beforeMount () {
    this.fetchData((res) => {
      this.data = res.results.map((item, index) => ({ ...item, index }))
    })
  },
  created () {},
  mounted () {},
  methods: {
    fetchData (callback) {
      reqwest({
        url: fakeDataUrl,
        type: 'json',
        method: 'get',
        contentType: 'application/json',
        success: (res) => {
          callback(res)
        }
      })
    },
    handleInfiniteOnLoad () {
      const data = this.data
      this.loading = true
      if (data.length > 100) {
        this.$message.warning('Infinite List loaded all')
        this.busy = true
        this.loading = false
        return
      }
      this.fetchData((res) => {
        this.data = data
          .concat(res.results)
          .map((item, index) => ({ ...item, index }))
        this.loading = false
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
.demo-loading {
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
}
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
</style>
