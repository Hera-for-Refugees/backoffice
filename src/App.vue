<template>
  <div
    class="root"
    :class="
      template === 'auth' ? 'root--template-auth' : 'root--template-master'
    "
  >
    <component :is="template" v-if="template" />
  </div>
</template>

<script>
import auth from '@/templates/auth'
import master from '@/templates/master'

export default {
  name: 'app',

  components: {
    auth,
    master
  },

  computed: {
    template() {
      if (!this.$route.name) return null
      if (this.$route.meta.hasOwnProperty('auth')) {
        return 'auth'
      } else {
        return 'master'
      }
    }
  }
}
</script>
