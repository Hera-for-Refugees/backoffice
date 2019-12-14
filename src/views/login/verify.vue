<template>
  <a-layout class="login">
    <a-row type="flex" align="middle" class="login-body">
      <a-col :span="24">
        <a-form formLayout="vertical" :form="form" @submit="handleSubmit">
          <a-form-item>
            <a-input
              placeholder="Verify Number"
              v-decorator="[
                'token',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Please input verify code'
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
      waiter: 'wait-verify',
      form: this.$form.createForm(this)
    }
  },

  beforeCreate() {
    this.authyId = this.$route.query.authyId
    if (!this.authyId) {
      this.$router.push('/auth-login')
    }
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields(async (err, values) => {
        console.log(err, values)
        if (err) return

        try {
          this.$wait.start(this.waiter)
          const { data } = await Service.post('/users/login/two-factor', {
            authyId: this.authyId,
            ...values
          })
          this.$actions.setUser(data)
          this.$router.push('/')
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
