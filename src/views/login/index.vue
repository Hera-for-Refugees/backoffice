<template>
  <a-layout class="login">
    <a-row type="flex" align="middle" class="login-body">
      <a-col :span="24">
        <a-form formLayout="vertical" :form="form" @submit="handleSubmit">
          <a-form-item>
            <a-input
              placeholder="Phone Number"
              v-decorator="[
                'phoneNumber',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your phone number'
                    }
                  ]
                }
              ]"
            >
              <a-icon slot="prefix" type="mobile" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
              :disabled="$wait.is(waiter)"
              :loading="$wait.is(waiter)"
            >
              Login
            </a-button>
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </a-layout>
</template>

<script>
import Service from '@/utils/service'
export default {
  name: 'login',

  data() {
    return {
      waiter: 'wait-login',
      form: this.$form.createForm(this)
    }
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields(async (err, values) => {
        console.log(err)
        if (err) return

        try {
          this.$wait.start(this.waiter)
          const { data } = await Service.post('/users/login', values)
          console.log(data)
          await this.$router.push({
            path: '/auth-verify',
            query: { authyId: data.authyId, phoneNumber: values.phoneNumber }
          })
        } catch (err) {
          console.log(err)
          this.$message.error(err.response.data.message)
        } finally {
          this.$wait.end(this.waiter)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  padding: 40px;

  &-body {
    min-height: 100vh;
    max-width: 400px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
