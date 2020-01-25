import React from 'react'
import { useRouter } from 'next/router'
import { Menu, Layout, Icon } from 'antd'

const { Sider, Content } = Layout

const LayoutMaster = ({ children }) => {
  const router = useRouter()

  const onChangePage = item => {
    router.push(item.key)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={230} theme="light">
        <div
          style={{
            height: 80,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Kybele
        </div>

        {/* start-menu */}
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={[router.pathname]}
          onClick={onChangePage}
        >
          <Menu.ItemGroup>
            <Menu.Item key="/">
              <Icon type="pie-chart" />
              <span>Dashboard</span>
            </Menu.Item>

            <Menu.Item key="/members">
              <Icon type="user" />
              <span>Members</span>
            </Menu.Item>

            <Menu.Item key="/children">
              <Icon type="user" />
              <span>Children</span>
            </Menu.Item>

            <Menu.Item key="/vaccines">
              <Icon type="user" />
              <span>Vaccines</span>
            </Menu.Item>

            <Menu.Item key="/blogs">
              <Icon type="user" />
              <span>Blogs</span>
            </Menu.Item>

            <Menu.Item key="/languages">
              <Icon type="user" />
              <span>Languages</span>
            </Menu.Item>
          </Menu.ItemGroup>

          {/*<Menu.ItemGroup title="-">*/}
          {/*  <Menu.Item key="/users">*/}
          {/*    <Icon type="user" />*/}
          {/*    <span>Users</span>*/}
          {/*  </Menu.Item>*/}
          {/*</Menu.ItemGroup>*/}
        </Menu>
        {/* end-menu-admin */}
      </Sider>

      <Layout>
        <Content style={{ padding: 24 }}>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default LayoutMaster
