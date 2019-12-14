<template>
  <a-layout style="min-height: 100vh">
    <!-- NAVIGATION -->
    <a-layout-sider collapsible v-model="collapsed" theme="light">
      <div class="logo">
        <router-link to="/">
          merhaba
        </router-link>
      </div>
      <a-menu
        theme="light"
        :defaultSelectedKeys="['dashboard']"
        :defaultOpenKeys="defaultOpenKeys"
        :selectedKeys="selectedKeys"
        mode="inline"
        :inlineCollapsed="collapsed"
        @click="onMenuClick"
      >
        <a-menu-item key="dashboard">
          <a-icon type="bar-chart" />
          <span>Dashboard</span>
        </a-menu-item>
        <a-menu-item key="members">
          <a-icon type="user" />
          <span>Members</span>
        </a-menu-item>
        <a-menu-item key="vaccinate">
          <a-icon type="calendar" />
          <span>Vaccinate Calendar</span>
        </a-menu-item>
        <a-sub-menu key="notifications">
          <span slot="title">
            <a-icon type="sound" />
            <span>Notification</span>
          </span>
          <a-menu-item key="notifications">List</a-menu-item>
          <a-menu-item key="notifications-custom">Custom</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="blog">
          <span slot="title">
            <a-icon type="book" />
            <span>Blog</span>
          </span>
          <a-menu-item key="blog">Post List</a-menu-item>
          <a-menu-item key="blog-new">New Post</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="system">
          <span slot="title">
            <a-icon type="book" />
            <span>System</span>
          </span>
          <a-menu-item key="categories">Categories</a-menu-item>
          <a-menu-item key="questions">Questions</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="screen">
          <span slot="title">
            <a-icon type="book" />
            <span>App Screen</span>
          </span>
          <a-menu-item key="screen-list">Screen List</a-menu-item>
          <a-menu-item key="screen-text">Screen Text</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>

    <!-- BODY -->
    <a-layout>
      <a-layout-content style="margin: 32px">
        <router-view />
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: 'master',
  data() {
    return {
      collapsed: false
    }
  },
  computed: {
    selectedKeys() {
      return [this.$route.name]
    },
    defaultOpenKeys() {
      // TODO: return active page's parent keys
      return []
    }
  },
  methods: {
    onMenuClick(e) {
      console.log(e)
      let path
      switch (e.key) {
        case 'members':
          path = '/members'
          break
        case 'vaccinate':
          path = '/vaccinate'
          break
        case 'notifications':
          path = '/notifications'
          break
        case 'notifications-custom':
          path = '/notifications-custom'
          break
        case 'blog':
          path = '/blog'
          break
        case 'blog-new':
          path = '/blog-new'
          break
        case 'categories':
          path = '/categories'
          break
        case 'questions':
          path = '/questions'
          break
        case 'screen-list':
          path = '/screen-list'
          break
        case 'screen-text':
          path = '/screen-text'
          break
        default:
          path = '/dashboard'
      }
      this.$router.push(path)
    }
  }
}
</script>

<style lang="less" scoped>
.logo {
  height: 80px;
  background-color: #333;
}
</style>
