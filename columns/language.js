import { format } from 'date-fns'
import { Icon, Tag } from 'antd'
import React from 'react'
import Router from 'next/router'

export const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    ellipsis: true,
    sorter: true,
    width: 80,
    fixed: 'left',
    key: 'id'
  },
  {
    title: 'Application',
    dataIndex: 'ApplicationId',
    ellipsis: true,
    sorter: true,
    render: (subscriberId, record) => (
      record.Application.name
    ),
    width: 200,
    fixed: 'left',
    key: 'ApplicationId'
  },
  {
    title: 'Language',
    dataIndex: 'languageCode',
    ellipsis: true,
    sorter: true
  },
  {
    title: 'Config',
    dataIndex: 'payload',
    ellipsis: true,
    sorter: false,
    render: (payload, record) => (
      record.Application.isEnabled ? 
      <Tag color='blue'>Enabled ({Object.keys(payload).length} attributes)</Tag>
      : <Tag>Disabled</Tag> 
    )
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    render: record => format(new Date(record), 'dd MMM yyyy'),
    ellipsis: true,
    sorter: true,
    defaultSortOrder: 'descend'
  }
]
