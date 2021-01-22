<template>
  <a-layout-content>
    <Breadcrumb/>
    <div class="page_main">
      <a-row style="margin-bottom:60px">
        <a-col :span="16" style="line-height:30px;text-align:left;">
          <p style="font-size:25px;margin-bottom:0;line-height:100px;">{{docName}}</p>
          <p style="font-size:16px;">{{title}}</p>
          <span style="font-size:16px;">{{docIntro}}</span>
        </a-col>
        <a-col :span="6" :offset="1">
          <img src="https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg" style="width:260px;height:320px;margin-top:45px">
        </a-col>
      </a-row>
      <a-divider />
      <a-row style="line-height:30px;text-align:left;margin-bottom:60px">
        <p style="font-size:25px;margin-bottom:0;line-height:100px;text-align:left;">医生擅长</p>
        <span style="font-size:16px;">{{adept}}</span>
      </a-row>
    </div>
  </a-layout-content>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import ContentSwiper from '@/components/Swiper/ContentSwiper'

export default {
  data () {
    return {
      docName: '陈云册',
      title: '主任医师',
      docIntro: '此开卷第一回也。作者自云：曾历过一番梦幻之后，故将真事隐去，而借\n' +
        '通灵说此《石头记》一书也，故曰“甄士隐”云云。但书中所记何事何人?自己又\n' +
        '云：“今风尘碌碌，一事无成，忽念及当日所有之女子：一一细考较去，觉其行止\n' +
        '见识皆出我之上。我堂堂须眉诚不若彼裙钗，我实愧则有馀，悔又无益，大无可如\n' +
        '何之日也。当此日，欲将已往所赖天恩祖德，锦衣纨之时，饫甘餍肥之日，背父\n' +
        '兄教育之恩，负师友规训之德，以致今日一技无成、半生潦倒之罪，编述一集，以\n' +
        '告天下；知我之负罪固多，然闺阁中历历有人，万不可因我之不肖，自护己短，一\n' +
        '并使其泯灭也。所以蓬牖茅椽，绳床瓦灶，并不足妨我襟怀；况那晨风夕月，阶柳\n' +
        '庭花，更觉得润人笔墨。我虽不学无文，又何妨用假语村言敷演出来?亦可使闺阁\n' +
        '昭传。复可破一时之闷，醒同人之目，不亦宜乎？”故曰“贾雨村”云云。更于篇\n' +
        '中间用“梦”“幻”等字，却是此书本旨，兼寓提醒阅者之意。',
      adept: '看官你道此书从何而起?说来虽近荒唐，细玩颇有趣味。却说那女娲氏炼石补\n' +
        '天之时，于大荒山无稽崖炼成高十二丈、见方二十四丈大的顽石三万六千五百零一\n' +
        '块。那娲皇只用了三万六千五百块，单单剩下一块未用，弃在青埂峰下。谁知此石\n' +
        '自经锻炼之后，灵性已通，自去自来，可大可小。'
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
