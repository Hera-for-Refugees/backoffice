import React, { useState, useEffect } from 'react'
import MasterLayout from '../components/layout-master.js'
import { message, Layout, Table, Button } from 'antd'
import fetch from '../libs/fetch'
// import Router from 'next/router'
import { columns } from '../columns/members'
import PageHeader from '../components/page-header'
// import DetailPage from '../components/detail-application'

const { Content } = Layout

function Index() {
  // const [waitSubmit, setWaitSubmit] = useState(false)
  const [wait, setWait] = useState(true)
  const [data, setData] = useState({ rows: [], total: 0 })
  const [sorter, setSorter] = useState(['id DESC'])
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 1
  })

  useEffect(() => {
    getData()
  }, [pagination])

  const getData = async () => {
    try {
      setWait(true)
      const { data } = await fetch.get('users/', {
        params: {
          page: pagination.current,
          limit: pagination.pageSize,
          order: sorter,
          attributes: [
            'acceptedLicense',
            'authyId',
            'birthDate',
            'createdAt',
            'updatedAt',
            'email',
            'firstName',
            'gender',
            'id',
            'lastName',
            'lastPeriodDate',
            'phoneNumber'
          ]
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

  // const submit = async values => {
  //   try {
  //     setWaitSubmit(true)
  //     await fetch.post('applications/', values)
  //     await Router.push('/applications')
  //     await getData()
  //   } catch (error) {
  //     if (error.response) {
  //       message.error(error.response.data.message)
  //     } else {
  //       message.error(error.message)
  //     }
  //   } finally {
  //     setWaitSubmit(false)
  //   }
  // }

  const change = (page, _, sorter) => {
    // console.log(page, filters, sorter)
    setSorter([
      { key: sorter.field, value: sorter.order === 'ascend' ? 'ASC' : 'DESC' }
    ])
    setPagination({ ...pagination, current: page.current })
  }

  return (
    <MasterLayout>
      <PageHeader
        title="Applications"
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
          scroll={{ x: 1800 }}
          columns={columns}
          size="middle"
          rowKey="id"
          dataSource={data.rows}
          pagination={{ ...pagination, total: data.total }}
          loading={wait}
          onChange={change}
        />
      </Content>

      {/*<DetailPage waitSubmit={waitSubmit} onSubmit={submit} apps={store.apps} />*/}
    </MasterLayout>
  )
}

export default Index
