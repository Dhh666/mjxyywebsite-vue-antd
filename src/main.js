// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import axios from 'axios'
import qs from 'qs'
import Vuex from 'vuex'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// If you use Swiper 6.0.0 or higher
import 'swiper/swiper-bundle.css'
import VueVirtualScroller from 'vue-virtual-scroller'

Vue.use(VueVirtualScroller)
Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)
Vue.use(Antd)
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.prototype.$qs = qs
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)

})
