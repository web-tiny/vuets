<template>
  <div :style="{ backgroundImage: `url(${require('@/assets/loginbg.jpg')})` }" class="login">
    <el-form :model="form" :rules="rules" ref="form" class="form">
      <el-form-item prop="phone">
        <el-input v-model="form.phone" class="phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop="verificatCode" class="verificatCode">
        <el-input v-model="form.verificatCode" class="verificatCodeInput" placeholder="请输入验证码"></el-input>
        <VerificatCode class="verificatCodeBtn" :phone="form.phone"></VerificatCode>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')" class="submitBtn">登 陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Model, Watch, Emit, Inject, Provide, Vue } from 'vue-property-decorator'
import BaseInput from '@/components/common/BaseInput.vue'
import VerificatCode from '@/components/common/VerificatCode.vue'
import { apiLogin } from '../api/login'
import { Action } from 'vuex-class'

@Component({
  components: {
    BaseInput,
    VerificatCode
  }
})

export default class Login extends Vue {
  form = {
    phone: '',
    verificatCode: ''
  }
  rules = {
    phone: [
      { required: true, message: '请输入手机号', trigger: 'change' }
    ],
    verificatCode: [
      { required: true, message: '请输入验证码', trigger: 'change' }
    ]
  }
  @Action('succeseLogin') succeseLogin

  submitForm (form: string) {
    (this.$refs[form] as any).validate((valid: boolean) => {
      if (valid) {
        this.apiLoginData()
      } else {
        console.log('error submit!!')
        return false
      }
    })
  }
  apiLoginData () {
    apiLogin(this.form).then(res => {
      console.log('login:', res)
      this.succeseLogin({ phone: this.form.phone })
      this.$router.push('/home')
    }).catch(err => {
      console.error(err)
    })
  }
}
</script>

<style scoped lang="scss">
.login {
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  font-family: 'PingFang-SC-Bold';
  background-position: center center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .form {
    width: 405px;
    height: 365px;
    background:rgba(255,255,255,1);
    border-radius: 12px;
    padding: 35px;
    .submitBtn {
      width: 100%;
    }
    .verificatCodeInput {
      width: 60%;
    }
    .verificatCodeBtn {
      float: right;
    }
  }
}
</style>
