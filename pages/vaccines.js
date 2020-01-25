import React, { useState, useEffect } from 'react'
import MasterLayout from '../components/layout-master.js'
import { message, Layout, Table, Button } from 'antd'
import fetch from '../libs/fetch'
import { columns } from '../columns/vaccines'
import PageHeader from '../components/page-header'

const { Content } = Layout

function Index() {
  const [wait, setWait] = useState(true)
  const [data, setData] = useState({ rows: [], total: 0 })
  const [sorter, setSorter] = useState(['id DESC'])
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10
  })

  useEffect(() => {
    getData()
  }, [pagination])

  const getData = async () => {
    try {
      setWait(true)
      const { data } = await fetch.get('vaccines/', {
        params: {
          page: pagination.current,
          limit: pagination.pageSize,
          order: sorter
        }
      })
      setData({ rows: data.rows, total: data.count })
    } catch (error) {
      if (error.response) {
        message.error(error.response.data.message)
      } else {
        message.error(error.message)
      }
    } finally {
      setWait(false)
    }
  }

  const change = (page, filter, sorter) => {
    // console.log(page, filters, sorter)
    setPagination({ ...pagination, current: page.current })
    if (sorter.field) {
      setSorter([
        `${sorter.field} ${sorter.order === 'ascend' ? 'ASC' : 'DESC'}`
      ])
    }
  }

  return (
    <MasterLayout>
      <PageHeader
        title="Vaccines"
        totalData={data.total}
        extra={[
          <Button
            key="reload"
            type="ghost"
            icon="reload"
            loading={wait}
            onClick={getData}
          >
            Reload Data
          </Button>,
          <Button
            key="add"
            type="primary"
            icon="plus"
            onClick={() => {
              // Router.push('/applications?id=new')
            }}
          >
            Add
          </Button>
        ]}
      />

      <Content style={{ padding: 8, backgroundColor: '#fff' }}>
        <Table
          scroll={{ x: 1400 }}
          columns={columns}
          size="middle"
          rowKey="id"
          dataSource={data.rows}
          pagination={{ ...pagination, total: data.total }}
          loading={wait}
          onChange={change}
        />
      </Content>
    </MasterLayout>
  )
}

export default Index
