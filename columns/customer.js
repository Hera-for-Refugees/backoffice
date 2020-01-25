import { format } from 'date-fns'
import { Icon, Tag } from 'antd'
import React from 'react'
import Router from 'next/router'

export const columns = [
  {
    title: 'Subscriber Id',
    dataIndex: 'SubscriberID',
    ellipsis: true,
    sorter: true,
    render: (subscriberId, record) => (
      <a onClick={() => Router.push(`/transactions?id=${record.id}`)}>
        {subscriberId}
      </a>
    ),
    width: 300,
    fixed: 'left',
    key: 'SubscriberID'
  },
  {
    title: 'First Transaction',
    dataIndex: 'FirstTransaction',
    render: record => format(new Date(record), 'dd MMM yyyy'),
    ellipsis: true,
    sorter: true
  },
  {
    title: 'Last Transaction',
    dataIndex: 'LastTransaction',
    render: record => format(new Date(record), 'dd MMM yyyy'),
    ellipsis: true,
    sorter: true
  },
  {
    title: 'Subscription Duration',
    dataIndex: 'SubscriptionDuration',
    ellipsis: true
  },
  {
    title: 'Active',
    dataIndex: 'isActive',
    ellipsis: true,
    render: record =>
      record ? <Tag color="blue">Active</Tag> : <Tag color="red">Inactive</Tag>
  }
]
