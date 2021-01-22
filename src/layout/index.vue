<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <SideBar />
      <Header />
      <a-layout>
        <router-view />
      </a-layout>
      <Footer />
    </a-layout>
  </div>
</template>

<script>
import { Header, Footer, SideBar } from './components'

export default {
  components: {
    Header,
    SideBar,
    Footer
  }
}
</script>

<style scoped>
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header {
  background-color: #fff;
  color: #000000;
  height: 250px;
  border: 1px solid #dddddd;
}
#components-layout-demo-basic .ant-layout-footer {
  color: lavenderblush;
  background-color: #00355f;
  height: 20%;
  border: 1px solid #dddddd;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #ffffff;
  color: #000;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  color: #000;
  min-height: 120px;
  line-height: 120px;
  background-color: #fff;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
</style>
