<template>
  <a-layout-content>
    <Breadcrumb :page-name="pageName" />
    <div class="main">
      <p style="font-size: 25px; margin-bottom: 0">{{ pageName }}</p>
      <div class="form_main">
      <a-form
        :form="form"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
        @submit="handleSubmit"
      >
        <a-form-item label="标题">
          <a-input
            v-decorator="[
              'title',
              {
                rules: [{ required: true, message: '请输入标题!' }],
              },
            ]"
          />
        </a-form-item>
        <a-form-item label="内容">
          <a-input
            v-decorator="[
              'text',
              {
                rules: [{ required: true, message: '请输入内容!' }],
              },
            ]"
          />
        </a-form-item>
        <a-form-item label="姓名">
          <a-input
            v-decorator="[
              'name',
              {
                rules: [{ required: true, message: '请输入姓名!' }],
              },
            ]"
          />
        </a-form-item>
        <a-form-item label="联系电话">
          <a-input
            v-decorator="[
              'phone',
              {
                rules: [{ required: true, message: '请输入联系电话!' }],
              },
            ]"
          />
        </a-form-item>
        <a-form-item label="验证码">
          <a-input
            v-decorator="[
              'identify',
              {
                rules: [{ required: true, message: '请输入验证码!' }],
              },
            ]"
          />
          <div class="login-code" @click="refreshCode">
            <Sidentify :identifyCode="identifyCode"></Sidentify>
          </div>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit"> 提交 </a-button>
        </a-form-item>
      </a-form>
      </div>
    </div>
  </a-layout-content>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Sidentify from '@/components/VerificationCode/Sidentify.vue'

export default {
  components: {
    Breadcrumb,
    Sidentify
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
      pageName: '签写留言',
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      identifyCodes: '1234567890abcdefghijklmnopqrstuvwxyz',
      identifyCode: ''
    }
  },
  created () {
    this.refreshCode()
  },
  mounted () {
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (values.identify !== this.identifyCode) {
          values.identify = ''
          this.refreshCode()
          alert('请输入正确的验证码')
          return
        }
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    handleSelectChange (value) {
      console.log(value)
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
      })
    },
    randomNum (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },

    refreshCode () {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    makeCode (o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
      }
      console.log(this.identifyCode)
    }
  },
  beforeDestroy () {}
}
</script>

<style scoped>
.main {
  margin: 0 19% 5%;
}
.form_main{
    margin-left: 7%;
}
/*验证码样式*/
.login-code {
  cursor: pointer;
}
</style>
