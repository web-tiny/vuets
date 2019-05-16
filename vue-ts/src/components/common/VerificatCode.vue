<template>
  <el-button
    type="primary"
    @click="handleSendVerificat"
    class="VerificatCode"
    :disabled="isDisabled"
    :class="[isDisabled ? 'verifecUnAactive' : 'verifecAactive']"
  >{{ verifactContent }}</el-button>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator'
import { isPhone } from '@/utils/valid'
import { apiGetCode } from '@/api/login'

@Component
export default class VerificatCode extends Vue {
  timer: any = null
  countDownN: number = 60
  isDisabled: boolean = false
  verifactContent: string = '获取验证码'

  @Prop()
  phone: number

  handleSendVerificat () {
    if (isPhone(this.phone)) {
      this.apiGetCodeData(this.phone)
    } else {
      this.$message.warning('请输入正确的手机号')
    }
  }

  apiGetCodeData (phone: number) {
    apiGetCode(phone).then(res => {
      this.countDown()
      console.log(res)
    }).catch(err => {
      console.error(err)
    })
  }

  countDown () {
    if (!this.timer) {
      this.timer = setInterval(() => {
        if (this.countDownN > 0 && this.countDownN <= 60) {
          this.countDownN--
          if (this.countDownN !== 0) {
            this.verifactContent = `重新发送(${this.countDownN})`
            this.isDisabled = true
          } else {
            clearInterval(this.timer)
            this.verifactContent = '获取验证码'
            this.countDownN = 60
            this.timer = null
            this.isDisabled = false
          }
        }
      }, 1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.verifecAactive {
  color:rgba(44,93,216,1);
}
.verifecUnAactive {
  color:rgba(155,155,155,1);
}
.VerificatCode {
  color: #fff;
  width: 30%;
}
</style>
