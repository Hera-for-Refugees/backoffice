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
      <Sider width={230}>
        <div
          style={{
            height: 80,
            paddingTop: 5,
            paddingLeft: 24,
            paddingRight: 24,
            backgroundColor: '#1a90ff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          hey
        </div>

        {/* start-menu */}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[router.pathname]}
          onClick={onChangePage}
        >
          <Menu.ItemGroup title="Jedi Council">
            <Menu.Item key="/">
              <Icon type="pie-chart" />
              <span>Dashboard</span>
            </Menu.Item>

            <Menu.Item key="/applications">
              <Icon type="appstore" />
              <span>Applications</span>
            </Menu.Item>
          </Menu.ItemGroup>

          <Menu.ItemGroup title="Dark Side">
            <Menu.Item key="/users">
              <Icon type="user" />
              <span>Users</span>
            </Menu.Item>
          </Menu.ItemGroup>
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
